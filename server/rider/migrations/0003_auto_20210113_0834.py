# Generated by Django 3.1.4 on 2021-01-13 08:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rider', '0002_auto_20210113_0832'),
    ]

    operations = [
        migrations.AlterField(
            model_name='delivery',
            name='status',
            field=models.CharField(choices=[('in_shop', 'In Shop'), ('enroute_destination', 'Enroute destination'), ('delivered', 'Delivered')], default='in_shop', max_length=32),
        ),
    ]
