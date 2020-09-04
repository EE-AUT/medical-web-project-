from django.urls import path

from user_management.views import doctor_signup, patient_signup

urlpatterns = [
    path('d_signup/', doctor_signup, name='d_signup'),
    path('p_signup/', patient_signup, name='p_signup'),
]