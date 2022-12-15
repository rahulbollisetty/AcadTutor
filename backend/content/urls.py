from django.urls import path
from django.urls import path
from . import views

urlpatterns = [
    path('addsubj',views.createSubj,name='createsubj'),
    path('addunit',views.addUnit,name='addunit'),
    path('addsubtopic',views.addSubTopic,name='addsubtopic'),
    path('<str:unit_id>/get_unit',views.getUnit,name='getuint'),
    path('<str:branch>/get_branch',views.getBranch,name='getbranch'),
    path('<str:subj_id>/get_subj',views.getSubj,name='getsubj'),


]