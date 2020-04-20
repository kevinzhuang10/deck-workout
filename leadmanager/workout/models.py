from django.db import models
from django.contrib.auth.models import User

class Deck(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    active = models.BooleanField()


class Card(models.Model):
    class Suit(models.TextChoices):
        SPADES = 'spades'
        HEARTS = 'hearts'
        DIAMONDS = 'diamonds'
        CLUBS = 'clubs'

    class Rank(models.IntegerChoices):
        ACE = 1, 'ace'
        TWO = 2, '2'
        THREE = 3, '3'
        FOUR = 4, '4'
        FIVE = 5, '5'
        SIX = 6, '6'
        SEVEN = 7, '7'
        EIGHT = 8, '8'
        NINE = 9, '9'
        TEN = 10, '10'
        JACK = 11, 'jack'
        QUEEN = 12, 'queen'
        KING = 13, 'king'

    deck = models.ForeignKey(Deck, on_delete=models.CASCADE)
    suit = models.CharField(max_length=100, choices=Suit.choices)
    rank = models.IntegerField(choices=Rank.choices)
    active = models.BooleanField()