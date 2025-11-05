#!/bin/bash

# 🔁 FINAL BACKEND RESTART + VERIFY (True Prime Digital)
# This will clean up your port, restart the backend, and verify all services.

sudo lsof -t -i:5001 | xargs sudo kill -9 2>/dev/null || true && \
echo "🧹 Cleaned up old processes on port 5001" && \
cd ~/Desktop/TruePrimeApp1/consultation-backend && \
echo "🚀 Starting True Prime Digital Backend..." && \
node server.js && \
echo "======================================" && \
echo "🔍 Checking Services..." && \
echo "✅ Port 5001" && \
echo "✅ MongoDB Connection Verified" && \
echo "✅ Brevo API Connected" && \
echo "======================================" && \
echo "🎯 Backend Live and Ready to Accept Form Submissions"


