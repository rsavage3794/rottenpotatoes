from django.urls import path
from . import views
from django.conf.urls.static import static

urlpatterns = [
    # path('artists/', views.ArtistList.as_view(), name='artist_list'),
    # path('artists/<int:pk>', views.ArtistDetail.as_view(), name='artist_detail'),

    # path('songs/', views.SongList.as_view(), name='song_list'),
    # path('songs/<int:pk>', views.SongDetail.as_view(), name='song_detail'),

    # path('albums/', views.AlbumList.as_view(), name='album_list'),
    # path('albums/<int:pk>', views.AlbumDetail.as_view(), name='album_detail'),
    
    # path('', views.artist_list, name='artist_list'),
    # path('songs/', views.song_list, name='song_list'),
    # path('artists/new', views.artist_create, name='artist_create'),
    # path('artists/<int:pk>', views.artist_detail, name='artist_detail'),
    # path('artists/<int:pk>/edit', views.artist_edit, name='artist_edit'),
    # path('artists/<int:pk>/delete', views.artist_delete, name='artist_delete'),
    # path('songs/<int:pk>', views.song_detail, name='song_detail'),
    # path('kitchensink/', views.artist_and_songs_list, name='kitchensink')
]