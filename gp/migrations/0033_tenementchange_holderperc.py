# Generated by Django 3.1.7 on 2021-05-28 08:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gp', '0032_auto_20210528_1602'),
    ]

    operations = [
        migrations.AddField(
            model_name='tenementchange',
            name='holderperc',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True),
        ),
    ]
