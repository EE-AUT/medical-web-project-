from Account.models import User
from rest_framework import serializers




class RegistrationSerialier(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['email', 'phone_number', 'password', 'full_name', 'register_type', 'is_doctor', 'doctor_id']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def save(self):
        _user = User(
            email= self.validated_data['email'],
            phone_number = self.validated_data['phone_number'],
            full_name= self.validated_data['full_name'],
            register_type= self.validated_data['register_type'],
            is_doctor = self.validated_data['is_doctor'],
            doctor_id = self.validated_data['doctor_id']
        )
        password = self.validated_data['password']

        _user.set_password(password)
        _user.save()
        return _user


                
