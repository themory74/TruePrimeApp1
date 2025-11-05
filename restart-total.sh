#!/bin/bash

# 🚀 TRUE PRIME DIGITAL TOTAL RESTART
# This script force-kills all Node/Metro servers, clears caches,
# restarts your backend + React Native app cleanly.

echo "🧹 Cleaning up all Node, Metro, and background processes..."

sudo lsof -t -i:5001 -sTCP:LISTEN | xargs sudo kill -9 2>/dev/null

sudo lsof -t -i:8081 -sTCP:LISTEN | xargs sudo kill -9 2>/dev/null

killall -9 node 2>/dev/null

killall -9 ruby 2>/dev/null

echo "🧠 Resetting caches and build data..."

cd ~/Desktop/TruePrimeApp1

rm -rf node_modules

watchman watch-del-all

npm install --legacy-peer-deps

rm -rf /tmp/metro-*

rm -rf ios/build

rm -rf ~/Library/Developer/Xcode/DerivedData

echo "⚙️ Restarting backend..."

cd ~/Desktop/TruePrimeApp1/consultation-backend

sudo lsof -t -i:5001 -sTCP:LISTEN | xargs sudo kill -9 2>/dev/null

node server.js &

echo "✅ Backend started on port 5001"

sleep 4

echo "📱 Starting Metro bundler..."

cd ~/Desktop/TruePrimeApp1

npx react-native start --reset-cache &

sleep 6

echo "💻 Building iOS app..."

npx react-native run-ios

echo "🎯 All systems up — Backend + App are live (True Prime Digital LLC)"

