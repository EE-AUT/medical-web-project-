from django.db import models
from django.contrib.auth.models import AbstractUser

from .managers import CustomUserManager


from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


APP_REGISTER = 'app_register'
WEB_REGISTER = 'web_register'

REGISTER_CHOICES = (
    (APP_REGISTER, 'app register'),
    (WEB_REGISTER, 'web register')
)


# create you model here
class User(AbstractUser):
    objects = CustomUserManager()

    username = None # user name not requiered
    last_login = None
    first_name = None
    last_name = None

    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=11)
    full_name = models.CharField(max_length=50)
    register_type = models.CharField(max_length=16, choices=REGISTER_CHOICES, default=WEB_REGISTER)
    is_doctor = models.BooleanField(default=False)
    doctor_id = models.CharField(max_length=50, blank=True)
    register_at = models.DateField(auto_now_add=True)
    activate_doctor = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


    def __str__(self):
        return f'{self.email}'


@receiver(post_save, sender= settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance= None, created= False, **kwargs):
    if created and not instance.is_doctor:
        Token.objects.create(user=instance)
    elif not created and instance.activate_doctor and instance.is_doctor:
        Token.objects.create(user=instance)
