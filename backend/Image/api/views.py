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




from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token

    

class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        if not user.is_doctor: 
            print("is doctor False")
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
            })
        if user.is_doctor and user.activate_doctor: 
            print("is doctor True and activated")
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
            })
        print("is doctor True and not activate")
        return Response({
            'token': None,
        })
        

