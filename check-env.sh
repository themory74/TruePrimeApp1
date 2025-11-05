#!/bin/bash

# 🔍 TRUE PRIME DIGITAL ENV DIAGNOSTIC CHECK
# This checks that every critical environment variable is properly loaded.

cd ~/Desktop/TruePrimeApp1/consultation-backend || {
  echo "❌ Backend folder not found. Check your path."
  exit 1
}

node check-env.js


