from Image.models import Image
from rest_framework import serializers


class ImageSerializer(serializers.ModelSerializer):

    # email = serializers.SerializerMethodField("get_email_from_owner")

    class Meta:
        model = Image
        fields = ['pic', 'upload_at']

    # def get_email_from_owner(self, image):
    #     email = image.owner.email
    #     return email