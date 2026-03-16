import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactMessage
from django.shortcuts import render

@csrf_exempt
def contact_api(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)

            name = data.get("name", "").strip()
            email = data.get("email", "").strip()
            message = data.get("message", "").strip()

            if not name or not email or not message:
                return JsonResponse({"error": "All fields are required."}, status=400)

            # Save in database
            ContactMessage.objects.create(
                name=name,
                email=email,
                message=message
            )

            # Send email notification
            full_message = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"

            send_mail(
                subject="New Portfolio Contact Message",
                message=full_message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.EMAIL_HOST_USER],
                fail_silently=False,
            )

            return JsonResponse({"message": "Message sent successfully!"}, status=201)

        except Exception as e:
            print("CONTACT API ERROR:", str(e))
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request method"}, status=405)
def frontend(request):
    return render(request, "index.html")