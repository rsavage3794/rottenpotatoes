from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from django.conf.urls import include
from .models import Show
# from django.conf.urls.static import static

router = DefaultRouter()
# router.register(r'shows', RottenPotatoView)  

urlpatterns = [
    path('shows/', views.RottenPotatoView.as_view(), name='show_list'),
    path('shows/<int:pk>/', views.RottenPotatoDetail.as_view(), name='show_detail'),
]