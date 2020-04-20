from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from workout import views

urlpatterns = [
    path('api/workouts/deck', views.DeckList.as_view()),
    path('api/workouts/card/random', views.RandomCard.as_view()),
    path('api/workouts/card/<int:pk>', views.CardDetail.as_view())
]
