#!/bin/bash

# 💣 TRUE PRIME DIGITAL ONE-TAP RESTART (Backend + App + Simulator)
# This script force-kills all stuck processes, restarts backend, Metro,
# and opens the iPhone simulator with a clean rebuild.

echo "🧹 Cleaning all running ports and processes..."

sudo lsof -t -i:5001 -sTCP:LISTEN | xargs sudo kill -9 2>/dev/null

sudo lsof -t -i:8081 -sTCP:LISTEN | xargs sudo kill -9 2>/dev/null

killall -9 node Simulator 2>/dev/null

echo "🧠 Clearing Metro cache and temp files..."

cd ~/Desktop/TruePrimeApp1

rm -rf /tmp/metro-*

rm -rf ios/build

rm -rf ~/Library/Developer/Xcode/DerivedData

watchman watch-del-all

echo "⚙️ Restarting backend..."

cd ~/Desktop/TruePrimeApp1/consultation-backend

node server.js &

echo "✅ Backend running on port 5001"

sleep 3

echo "📦 Restarting Metro bundler..."

cd ~/Desktop/TruePrimeApp1

npx react-native start --reset-cache &

sleep 5

echo "📱 Launching iPhone simulator..."

open -a Simulator

sleep 3

echo "🧩 Building and deploying iOS app..."

npx react-native run-ios

echo "🎯 Done! Backend + Metro + Simulator are all live."
echo "🚀 Test it now — open the Consultation screen and submit your form."


