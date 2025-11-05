#!/usr/bin/env node

// 🔍 TRUE PRIME DIGITAL ENV DIAGNOSTIC CHECK
// This checks that every critical environment variable is properly loaded.

import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env from the consultation-backend directory
dotenv.config({ path: join(__dirname, '.env') });

const requiredVars = [
  'PORT',
  'MONGO_URI',
  'BREVO_API_KEY',
  'SENDER_EMAIL',
  'RECEIVER_EMAIL'
];

console.log('=======================================');
console.log('🔍 TRUE PRIME DIGITAL ENVIRONMENT CHECK');
console.log('=======================================');

let allGood = true;

for (const key of requiredVars) {
  const value = process.env[key];
  if (value && value.trim() !== '') {
    console.log(`✅ ${key} loaded`);
  } else {
    console.log(`❌ ${key} is MISSING or EMPTY`);
    allGood = false;
  }
}

console.log('=======================================');
if (allGood) {
  console.log('🎯 All environment variables are loaded correctly.');
  console.log('You are ready to run: node server.js 🚀');
} else {
  console.log('⚠️ Some variables are missing — check your .env file before continuing.');
}
console.log('=======================================');

