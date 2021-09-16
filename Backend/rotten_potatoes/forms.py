from django import forms
from .models import Show

class ShowForm(forms.ModelForm):

    class Meta:
        model = Show
        fields = ('title', 'notable_actors', 'network', 'genre', 'summary', 'rating', 'photo_url')