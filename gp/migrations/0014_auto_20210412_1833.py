# Generated by Django 3.1.7 on 2021-04-12 08:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gp', '0013_auto_20210412_1739'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='holder',
            name='modified',
        ),
        migrations.RemoveField(
            model_name='holder',
            name='user_input',
        ),
        migrations.RemoveField(
            model_name='holder',
            name='valid',
        ),
        migrations.RemoveField(
            model_name='listed',
            name='modified',
        ),
        migrations.RemoveField(
            model_name='listed',
            name='user_input',
        ),
        migrations.RemoveField(
            model_name='listed',
            name='valid',
        ),
        migrations.RemoveField(
            model_name='occname',
            name='modified',
        ),
        migrations.RemoveField(
            model_name='occname',
            name='user_input',
        ),
        migrations.RemoveField(
            model_name='occname',
            name='valid',
        ),
        migrations.RemoveField(
            model_name='occoriginalid',
            name='modified',
        ),
        migrations.RemoveField(
            model_name='occoriginalid',
            name='user_input',
        ),
        migrations.RemoveField(
            model_name='occoriginalid',
            name='valid',
        ),
        migrations.RemoveField(
            model_name='parent',
            name='modified',
        ),
        migrations.RemoveField(
            model_name='parent',
            name='user_input',
        ),
        migrations.RemoveField(
            model_name='parent',
            name='valid',
        ),
        migrations.RemoveField(
            model_name='tenement',
            name='modified',
        ),
        migrations.RemoveField(
            model_name='tenement',
            name='user_input',
        ),
        migrations.RemoveField(
            model_name='tenement',
            name='valid',
        ),
        migrations.RemoveField(
            model_name='tenholder',
            name='modified',
        ),
        migrations.RemoveField(
            model_name='tenholder',
            name='user_input',
        ),
        migrations.RemoveField(
            model_name='tenholder',
            name='valid',
        ),
        migrations.RemoveField(
            model_name='tenoriginalid',
            name='modified',
        ),
        migrations.RemoveField(
            model_name='tenoriginalid',
            name='user_input',
        ),
        migrations.RemoveField(
            model_name='tenoriginalid',
            name='valid',
        ),
    ]
