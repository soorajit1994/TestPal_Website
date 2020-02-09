from django.urls import path
from django.conf.urls import url
from . import views

urlpatterns = [
    path('', views.base, name='base'),
     path('index/', views.index, name='index'),
    url(r'^RunStep/$', views.Run_Step, name='Run_Step'),
]
