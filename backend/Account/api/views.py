from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes


from Account.api.serializers import RegistrationSerialier
from rest_framework.authtoken.models import Token



@api_view(['POST', ])
def registraion_view(request):

    if request.method == "POST":
        serializer = RegistrationSerialier(data= request.data)
        data = {}
        if serializer.is_valid():
            _user = serializer.save()
            data['response'] = "successfully registered a new user"
            data['email'] = _user.email
            data['name'] = _user.full_name
            # token = Token.objects.get(user= _user).key
            # data['token'] = token
        else:
            data = serializer.errors
        return Response(data)