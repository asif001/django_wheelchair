from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('update_data/', views.update_data),
    path('trigger/', views.trigger),
]
