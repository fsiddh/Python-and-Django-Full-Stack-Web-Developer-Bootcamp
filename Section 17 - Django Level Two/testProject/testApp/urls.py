from django.urls import path
from testApp import views

urlpatterns = [
    path('', views.index),
    path('user/', views.users),
]