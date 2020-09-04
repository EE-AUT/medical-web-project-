from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

APP_REGISTER = 'app_register'
WEB_REGISTER = 'web_register'

REGISTER_CHOICES = (
    (APP_REGISTER, 'app register'),
    (WEB_REGISTER, 'web register')
)


class UserManager(BaseUserManager):
    def create_user(self, email, phone_number, first_name=None, last_name=None, password=None, is_admin=False,
                    is_staff=False,
                    is_active=True):
        if not email:
            raise ValueError("User must have an email")
        if not password:
            raise ValueError("User must have a password")
        if not phone_number:
            raise ValueError("User must have a phone_number")
        user = self.model(
            email=self.normalize_email(email)
        )
        user.first_name = first_name if first_name else ''
        user.last_name = last_name if last_name else ''
        user.phone_number = phone_number
        user.set_password(password)  # change password to hash
        user.admin = is_admin
        user.staff = is_staff
        user.active = is_active
        user.save(using=self._db)
        return user

    def create_superuser(self, email, phone_number, first_name=None, last_name=None, password=None, **extra_fields):
        if not email:
            raise ValueError("User must have an email")
        if not password:
            raise ValueError("User must have a password")
        if not phone_number:
            raise ValueError("User must have a phone_number")

        user = self.model(
            email=self.normalize_email(email)
        )
        user.first_name = first_name if first_name else ''
        user.last_name = last_name if last_name else ''
        user.phone_number = phone_number
        user.set_password(password)
        user.is_superuser = True
        user.is_staff = True
        user.is_active = True
        user.save(using=self._db)
        return user


# Create your models here.
class User(AbstractUser):
    objects = UserManager()

    username = None
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=11, unique=True)
    register_type = models.CharField(max_length=16, choices=REGISTER_CHOICES, default=WEB_REGISTER)
    is_doctor = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['phone_number', ]


class Doctor(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    code = models.CharField(max_length=256, unique=True)

    def __str__(self):
        return f'{self.user.email}'


class Patient(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.user.email}'