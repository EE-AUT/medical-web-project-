from django import forms
from django.contrib import admin

# Register your models here.
from django.contrib.admin import ModelAdmin
from django.forms import ModelForm

from image_management.models import Image
from user_management.models import User


class ImageForm(ModelForm):
    def save(self, commit=True):
        owner = self.current_user
        self.instance.owner = owner
        return super(ImageForm, self).save(commit=commit)

    class Meta:
        model = Image
        exclude = ['owner']


@admin.register(Image)
class ImageAdmin(ModelAdmin):
    list_display = ('owner', 'pic')
    form = ImageForm

    def get_form(self, request, obj=None, change=False, **kwargs):
        form = super(ImageAdmin, self).get_form(request, obj, change, **kwargs)
        form.current_user = request.user
        return form

    def get_queryset(self, request):
        query_set = Image.objects.all()
        if request.user.is_superuser:
            return query_set
        return query_set.filter(owner=request.user)
