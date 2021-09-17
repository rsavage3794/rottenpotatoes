from django.urls import path
from . import views
from rest_framework import routers
from django.conf.urls import include
# from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'shows',views.RottenPotatoView)  

urlpatterns = [
    path('shows/', views.RottenPotatoView.as_view(), name='show_list'),
    path('shows/<int:pk>', views.RottenPotatoDetail.as_view(), name='show_detail'),
    # path('shows/add', views.show_create., name='show_create'),
    # path('shows/<int:pk>/edit', views.show_edit, name='show_edit'),
    # path('shows/<int:pk>/delete', views.show_delete, name='show_delete'),

    # path('', views.dash, name='dash'),
    # path('api/', include(router.urls))
]