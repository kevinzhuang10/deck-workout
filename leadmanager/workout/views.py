from django.shortcuts import render
from rest_framework.views import APIView
from workout.models import Deck, Card
from workout.serializers import DeckSerializer, CardSerializer
from rest_framework.response import Response
from rest_framework import status, permissions
from random import randrange

class DeckList(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    def post(self, request, format=None):
        serializer = DeckSerializer(data=request.data)
        if serializer.is_valid():
            deck = serializer.save()
            createCardsForDeck(deck)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, format=None):
        decks = Deck.objects.all()
        serializer = DeckSerializer(decks, many=True)
        return Response(serializer.data)

class RandomCard(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request, format=None):
        deckId = self.request.query_params.get('deck', None)
        cards = Card.objects.filter(deck=deckId,active=True)
        numberOfCardsLeft = len(cards)
        if numberOfCardsLeft == 0:
            return Response(status=status.HTTP_200_OK)
        randomIndex = randrange(numberOfCardsLeft)
        serializer = CardSerializer(cards[randomIndex])
        return Response(serializer.data, status=status.HTTP_200_OK)

class CardDetail(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def patch(self, request, pk):
        card = Card.objects.get(pk=pk)
        serializer = CardSerializer(card, data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)    
        return Response(status=status.HTTP_400_BAD_REQUEST)


def createCardsForDeck(deck):
    # for suit in Card.Suit:
    for rank in Card.Rank:
        Card.objects.create(deck=deck,suit=Card.Suit.CLUBS,rank=rank,active=True)
    return