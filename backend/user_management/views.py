from django import forms
from django.contrib.auth import get_user_model, login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import Group
from django.forms import ModelForm, Form
from django.http import HttpResponse
from django.shortcuts import render, redirect

from user_management.models import User, Doctor, Patient


class SignUpForm(UserCreationForm):
    def __init__(self, *args, **kwargs):
        self.is_doctor = kwargs.pop('is_doctor', True)
        super().__init__(*args, **kwargs)

    first_name = forms.CharField(max_length=30, required=False, help_text='Optional.')
    last_name = forms.CharField(max_length=30, required=False, help_text='Optional.')
    email = forms.EmailField(max_length=254, help_text='Required. Inform a valid email address.')
    phone_number = forms.CharField(max_length=254, help_text='Required. Inform a valid email address.')

    def save(self, commit=True):
        instance = super(SignUpForm, self).save(commit=True)
        instance.is_doctor = self.is_doctor
        if self.is_doctor:
            instance.is_staff = False
            instance.groups.add(Group.objects.get(name='doctor'))
        else:
            instance.is_staff = True
            instance.groups.add(Group.objects.get(name='patient'))
        if commit:
            instance.save()
        return instance

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'password1', 'password2', 'phone_number')


class DoctorForm(Form):
    code = forms.CharField(max_length=256)

    def __init__(self, *args, **kwargs):
        is_doctor = kwargs.pop('is_doctor', None)
        super(DoctorForm, self).__init__(*args, **kwargs)
        self.user_form = SignUpForm(is_doctor=is_doctor, *args, **kwargs)

    def clean(self):
        if not self.user_form.is_valid():
            print(self.user_form.errors)
            raise forms.ValidationError("user is not valid")

    def save(self, commit=True):
        user = self.user_form.save()
        return Doctor.objects.create(code=self.cleaned_data.get('code'), user=user)


class PatientForm(Form):

    def __init__(self, *args, **kwargs):
        is_doctor = kwargs.pop('is_doctor', None)
        super(PatientForm, self).__init__(*args, **kwargs)
        self.user_form = SignUpForm(is_doctor=is_doctor, *args, **kwargs)

    def clean(self):
        if not self.user_form.is_valid():
            print(self.user_form.errors)
            raise forms.ValidationError("user is not valid")

    def save(self, commit=True):
        user = self.user_form.save()
        return Patient.objects.create(user=user)


def doctor_signup(request):
    if request.method == 'POST':
        form = DoctorForm(request.POST, is_doctor=True)
        if form.is_valid():
            form.save()
            email = request.POST.get('email')
            raw_password = request.POST.get('password1')
            user = authenticate(email=email, password=raw_password)
            login(request, user)
            return redirect('/')
    else:
        form = DoctorForm()
    return render(request, 'signup.html', {'form': form})


def patient_signup(request):
    if request.method == 'POST':
        form = PatientForm(request.POST, is_doctor=False)
        if form.is_valid():
            form.save()
            email = request.POST.get('email')
            raw_password = request.POST.get('password1')
            user = authenticate(email=email, password=raw_password)
            login(request, user)
            return redirect('/')
    else:
        form = PatientForm()
    return render(request, 'signup.html', {'form': form})
