# Generated by Django 3.2.7 on 2021-09-14 23:45

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rotten_potatoes', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='show',
            name='rating',
            field=models.DecimalField(decimal_places=1, default=0, max_digits=3, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(10)]),
        ),
    ]
