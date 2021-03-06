from rest_framework import serializers
from .models import Deck, Card

class DeckSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deck
        fields = ['id', 'user', 'active']

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ['id', 'deck', 'suit', 'rank', 'active']