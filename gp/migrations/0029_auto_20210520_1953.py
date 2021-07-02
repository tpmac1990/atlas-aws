# Generated by Django 3.1.7 on 2021-05-20 09:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gp', '0028_auto_20210520_1940'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='occurrenceaddition',
            name='id',
        ),
        migrations.RemoveField(
            model_name='occurrenceremoval',
            name='id',
        ),
        migrations.RemoveField(
            model_name='tenementaddition',
            name='id',
        ),
        migrations.RemoveField(
            model_name='tenementremoval',
            name='id',
        ),
        migrations.AddField(
            model_name='occurrenceaddition',
            name='_id',
            field=models.IntegerField(default=1, primary_key=True, serialize=False),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='occurrenceremoval',
            name='_id',
            field=models.IntegerField(default=1, primary_key=True, serialize=False),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='tenementaddition',
            name='_id',
            field=models.IntegerField(default=1, primary_key=True, serialize=False),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='tenementremoval',
            name='_id',
            field=models.IntegerField(default=1, primary_key=True, serialize=False),
            preserve_default=False,
        ),
    ]
