"""Views for User APP"""


from rest_framework.generics import CreateAPIView, UpdateAPIView, RetrieveAPIView
from .serializers import (
	SuperUserCreateSerializer,
	CustomRegisterSerializer,
	UserDetailsSerializer,
	UpdateBankDetailSerializer,
	VerifyUserSerializer,
	SellerStatisticsSerializer
)
from dj_rest_auth.registration.views import RegisterView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model


User = get_user_model()


class CreateSuperUserView(CreateAPIView):
	"""Creates Admin User"""
	serializer_class = SuperUserCreateSerializer


class CustomRegisterView(RegisterView):
	"""Custom Registration View"""
	serializer_class = CustomRegisterSerializer


class UserDetailsView(APIView):
	"""This is the view for getting user Details"""

	serializer_class = UserDetailsSerializer

	def get(self, request):
		"""
		param request: Request Object
		"""
		serializer = self.serializer_class(request.user)
		return Response(serializer.data, status=status.HTTP_200_OK)


class CollectUserDetailsView(UpdateAPIView):
	"""View for collecting User details"""

	serializer_class = UpdateBankDetailSerializer
	permission_classes = (IsAuthenticated, )

	def get_object(self):
		"""Get Queryset"""
		return self.request.user

	def get_queryset(self):
		"""Get Queryset"""
		return User.objects.filter(id=self.request.user.id)


class VerifyUserAPIView(UpdateAPIView):
	"""View for verifying users"""

	serializer_class = VerifyUserSerializer

	def get_object(self):
		"""Get Queryset"""
		return self.request.user

	def get_queryset(self):
		"""Get Queryset"""
		return User.objects.filter(id=self.request.user.id)

	def post(self, request, *args, **kwargs):
		"""Post Method"""
		return self.patch(request, *args, **kwargs)


class SellerStatisticsAPIView(RetrieveAPIView):
	"""API VIew for Seller Statistics"""

	serializer_class = SellerStatisticsSerializer

	def get_object(self):
		"""Get Queryset"""
		return self.request.user

	def get_queryset(self):
		"""Get Queryset"""
		return User.objects.filter(id=self.request.user.id)
