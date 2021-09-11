from django.shortcuts import render
# from rest_framework.views import RottenPotatoSerializer
from . models import Show
from rest_framework import viewsets
from . serializers import *
# Create your views here.
  
class RottenPotatoView(viewsets.ModelViewSet):  
    serializer_class = ShowSerializer 
    queryset = Show.objects.all()