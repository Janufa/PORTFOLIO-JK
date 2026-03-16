from django.contrib import admin
from django.http import HttpResponse
from django.urls import path, include
from backend.contact.views import frontend

def home(request):
    return HttpResponse("Django backend is running successfully!")

urlpatterns = [
    path("", frontend),
    path("admin/", admin.site.urls),
    path("api/", include("backend.contact.urls")),
]