from django.urls import path
from . import views
urlpatterns = [
    path('',views.home),
    path('register',views.register),
    path('csrf_cookie',views.get_CSRF_token),
    path('login/',views.Login),
    path('authenticated',views.IsAuthenticated),
    path('logout',views.Logut)
]