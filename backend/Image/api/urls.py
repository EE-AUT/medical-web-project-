from django.urls import path

from Image.api.views import api_create_Image_view

app_name = "Image"

urlpatterns = [
    path("create/", api_create_Image_view, name= "Create"),
]
