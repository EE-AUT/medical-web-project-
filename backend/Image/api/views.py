from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from Account.models import User
from Image.models import Image
from Image.api.serializers import ImageSerializer


@api_view(['POST', ])
@permission_classes((IsAuthenticated, ))
def api_create_Image_view(request):
    
    account = request.user
    post_Imaged = Image(owner= account)

    if request.method == "POST":
        serializer = ImageSerializer(post_Imaged, data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status= status.HTTP_201_CREATED)
        print("error ")
        return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)

