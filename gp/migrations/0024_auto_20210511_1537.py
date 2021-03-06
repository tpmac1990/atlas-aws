# Generated by Django 3.1.7 on 2021-05-11 05:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('gp', '0023_auto_20210511_1529'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='holder',
            name='parents',
        ),
        migrations.AddField(
            model_name='holder',
            name='children',
            field=models.ManyToManyField(blank=True, related_name='_holder_children_+', through='gp.Parent', to='gp.Holder'),
        ),
        migrations.AddField(
            model_name='parent',
            name='child',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='child_parent', to='gp.holder'),
        ),
        migrations.AlterUniqueTogether(
            name='parent',
            unique_together={('name', 'child')},
        ),
        migrations.RemoveField(
            model_name='parent',
            name='parent',
        ),
    ]
