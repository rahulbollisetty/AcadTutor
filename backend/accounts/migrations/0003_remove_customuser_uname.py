# Generated by Django 4.1.2 on 2022-11-25 19:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_customuser_uname'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='uname',
        ),
    ]
