from rest_framework import serializers

from user_management.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'password', 'email', 'phone_number', 'first_name', 'last_name', 'register_type', 'is_doctor')
        write_only_fields = ('password',)
        read_only_fields = ('id',)

    def create(self, validated_data, is_doctor=False):
        password = validated_data.pop('password')
        validated_data['is_doctor'] = is_doctor
        user = User.objects.create(**validated_data)

        user.set_password(password)
        user.save()

        return user