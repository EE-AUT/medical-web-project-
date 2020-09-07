from django.urls import path

from Account.api.views import registraion_view

from rest_framework.authtoken.views import obtain_auth_token

app_name = "Account"

urlpatterns = [
    path('register/', registraion_view, name= "register"),
    path('login/', obtain_auth_token, name= "login"),
]
