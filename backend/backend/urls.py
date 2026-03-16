from django.contrib import admin
from django.http import HttpResponse
from django.urls import path, include
from backend.contact.views import frontend



urlpatterns = [
    path("", frontend),
    path("admin/", admin.site.urls),
    path("api/", include("backend.contact.urls")),
]