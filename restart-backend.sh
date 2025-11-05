#!/bin/bash

# 🔧 TruePrimeApp1 Full Backend Restart Script
# Cleans up stuck Node processes, frees port 5001, restarts server instantly

echo "🧹 Cleaning up old Node processes..."

sudo lsof -t -i:5001 | xargs sudo kill -9 2>/dev/null

killall -9 node 2>/dev/null

echo "✅ Port 5001 cleared. Restarting backend..."

cd ~/Desktop/TruePrimeApp1/consultation-backend || {
  echo "❌ Backend folder not found. Check your path."
  exit 1
}

# Optional: ensure dependencies are good

npm install --legacy-peer-deps

# Relaunch the backend

node server.js

echo "🚀 Backend restarted successfully on port 5001 (True Prime Digital)"
