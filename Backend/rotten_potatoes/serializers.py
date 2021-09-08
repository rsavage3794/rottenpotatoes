from rest_framework import serializers
from . models import *

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ['title', 'notable_actors', 'network', 'genre', 'summary', 'rating', 'photo_url']