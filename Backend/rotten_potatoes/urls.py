from django.urls import path
from . import views
from rest_framework import routers
# from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'shows',views.RottenPotatoViewSet)  

urlpatterns = [
    path('shows/', views.ShowsList.as_view(), name='show_list'),
    path('shows/<int:pk>', views.ShowDetail.as_view(), name='show_detail'),
    path('shows/add', views.show_create, name='show_create'),
    path('shows/<int:pk>', views.show_detail, name='show_detail'),
    path('shows/<int:pk>/edit', views.show_edit, name='show_edit'),
    path('shows/<int:pk>/delete', views.show_delete, name='show_delete'),

    path('', views.dash, name='dash'),
    path('api/', include(router.urls))
]




# router = routers.DefaultRouter()
# router.register(r'users',views.UserViewSet)
# router.register(r'instances',views.InstanceList)                                                                            

# urlpatterns = [ 
#     path('', views.dash, name='dash'),
#     path('api/', include(router.urls)),
# ]




                                                                       

# urlpatterns = [ 
#     path('', views.dash, name='dash'),
#     path('api/', include(router.urls)),
#     path('api/shows/', views.ShowList.as_view(), name="shows"),
]