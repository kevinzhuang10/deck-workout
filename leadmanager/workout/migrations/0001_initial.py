# Generated by Django 3.0.5 on 2020-04-19 23:14

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Deck',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Card',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('suit', models.CharField(choices=[('spades', 'Spades'), ('hearts', 'Hearts'), ('diamonds', 'Diamonds'), ('clubs', 'Clubs')], max_length=100)),
                ('rank', models.IntegerField(choices=[(1, 'ace'), (2, '2'), (3, '3'), (4, '4'), (5, '5'), (6, '6'), (7, '7'), (8, '8'), (9, '9'), (10, '10'), (11, 'jack'), (12, 'queen'), (13, 'king')])),
                ('active', models.BooleanField()),
                ('deck', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='workout.Deck')),
            ],
        ),
    ]
