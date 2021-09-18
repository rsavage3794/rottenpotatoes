from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
# from django.db.models import constraints

# Create your models here.
class Show(models.Model):
    title = models.CharField(max_length=100)
    notable_actors = models.TextField()
    network = models.CharField(max_length=100)
    genre = models.CharField(max_length=100)
    summary = models.TextField()
    rating = models.DecimalField(default=0, validators=[MinValueValidator(1), MaxValueValidator(10)], decimal_places=1, max_digits=3)
    photo_url = models.ImageField(default='')
    def __str__(self):
        return self.title