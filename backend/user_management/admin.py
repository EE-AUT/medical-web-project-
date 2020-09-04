from django import forms
from django.contrib import admin

# Register your models here.
from django.contrib.admin import ModelAdmin
from django.forms import ModelForm

from user_management.models import User, Patient, Doctor


class DoctorForm(ModelForm):
    is_verified = forms.BooleanField(
        label='is verified',
        help_text='Do you approve of him/her?',
        required=False
    )

    def __init__(self, *args, **kwargs):
        super(DoctorForm, self).__init__(*args, **kwargs)
        self.fields['is_verified'].initial = self.instance.user.is_staff

    def save(self, commit=True):
        if 'is_verified' in self.changed_data:
            self.instance.user.is_staff = self.cleaned_data['is_verified']
            self.instance.user.save()
        return super(DoctorForm, self).save(commit=commit)

    class Meta:
        model = Doctor
        fields = '__all__'


class VerifiedFilter(admin.SimpleListFilter):
    title = 'is_verified'
    parameter_name = 'is_verified'

    def lookups(self, request, model_admin):
        return (
            (True, ('Yes')),
            (False, ('No')),
        )

    def queryset(self, request, queryset):
        if self.value():
            return queryset.filter(user__is_staff=self.value())


@admin.register(Doctor)
class DoctorAdmin(ModelAdmin):
    form = DoctorForm
    list_display = ['user', 'is_verified']
    list_filter = [(VerifiedFilter), ]

    def is_verified(self, obj):
        return obj.user.is_staff

    is_verified.boolean = True


@admin.register(Patient)
class PatientAdmin(ModelAdmin):
    pass


@admin.register(User)
class PatientAdmin(ModelAdmin):
    pass
