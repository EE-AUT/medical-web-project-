from django.db import models
from django.contrib import admin


# Create your models here.
from Account.models import User


class Image(models.Model):
    pic = models.ImageField(upload_to='media/', null=False)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    upload_at = models.DateTimeField(auto_now_add=True)



class ImageAdmin(admin.ModelAdmin):
    list_display = ('owner',)