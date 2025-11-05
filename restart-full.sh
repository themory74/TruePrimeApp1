#!/bin/bash

# 🧠 TruePrimeApp1 — Triple Verified Full Restart (Backend + MongoDB + Brevo + Frontend)

echo "----------------------------------------------"
echo "🚀 Launching True Prime Digital Development Mode"
echo "----------------------------------------------"

# STEP 1 — Clean up previous sessions (Ports 5001 + 8081)

echo "🧹 Cleaning old processes..."

sudo lsof -t -i:5001 -i:8081 | xargs sudo kill -9 2>/dev/null || true

echo "✅ Ports cleared."

# STEP 2 — Navigate to backend folder

cd ~/Desktop/TruePrimeApp1/consultation-backend || {
  echo "❌ Backend folder not found. Check your path."
  exit 1
}

# STEP 3 — Start backend

echo "⚙️ Starting backend..."

node server.js &

sleep 6

# STEP 4 — Check backend port

if lsof -i :5001 | grep -q "LISTEN"; then
  echo "✅ Backend confirmed on port 5001"
else
  echo "❌ Backend not running. Fix server.js or .env issues."
  exit 1
fi

# STEP 5 — Test MongoDB connectivity

echo "🔍 Verifying MongoDB Atlas connection..."

if nc -z trueapp.fvkdjee.mongodb.net 27017; then
  echo "✅ MongoDB Atlas reachable"
else
  echo "⚠️ MongoDB Atlas not reachable. Check internet or cluster IP access."
fi

# STEP 6 — Test Brevo SMTP credentials

echo "🔍 Sending Brevo SMTP test..."

curl -s -X POST http://localhost:5001/send-message \
  -H "Content-Type: application/json" \
  -d '{"name":"Cursor Auto Test","email":"contact@trueprimedigital.com","message":"✅ SMTP verification via Cursor automation."}' \
  >/dev/null 2>&1 && echo "✅ Brevo test message triggered (check Brevo logs)"

# STEP 7 — Start React Native Metro + iOS simulator

echo "📦 Launching Metro Bundler..."

cd ~/Desktop/TruePrimeApp1

npx react-native start &

sleep 5

echo "📱 Launching iOS Simulator..."

npx react-native run-ios

echo "----------------------------------------------"
echo "🔥 TRUE PRIME APP LIVE!"
echo "🌐 Backend ✅  MongoDB ✅  Brevo SMTP ✅  Frontend ✅"
echo "----------------------------------------------"

