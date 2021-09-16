from rest_framework import generics
from . serializers import ShowSerializer
from . models import Show
# Create your views here.
  
class RottenPotatoView(generics.ListCreateAPIView):  
    queryset = Show.objects.all()
    serializer_class = ShowSerializer 

class RottenPotatoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Show.objects.all()
    serializer_class = ShowSerializer