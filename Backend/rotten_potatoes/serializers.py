from rest_framework import serializers
from . models import *

class ShowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Show
        fields = ['title', 'notable_actors', 'network', 'genre', 'summary', 'rating', 'photo_url']