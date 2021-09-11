from django.db import models
# from django.db.models import constraints

# Create your models here.
class Show(models.Model):
    title = models.CharField(max_length=100)
    notable_actors = models.TextField()
    network = models.CharField(max_length=100)
    genre = models.CharField(max_length=100)
    summary = models.TextField()
    rating = models.PositiveIntegerField(null=True)
    photo_url = models.TextField()
    def __str__(self):
        return self.title

# class Meta:
#     constraints = [
#         models.CheckConstraint(
#             name="%(app_label)s_%(class)s_rating_range",
#             check=models.Q(page_count__range=(0, 10)),
#         ),
#     ]