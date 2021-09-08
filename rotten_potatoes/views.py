from django.shortcuts import render
from rest_framework.views import RottenPotatoSerializer
from . models import Show
from rest_framework import viewsets
from . serializers import *
# Create your views here.
  
class RottenPotatoSerializer(viewsets.ModelViewSet):  
    serializer_class = RottenPotatoSerializer 
    queryset = Show.objects.all()  