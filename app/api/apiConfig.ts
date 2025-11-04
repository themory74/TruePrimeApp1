/**
 * API Configuration for True Prime Digital App
 * 
 * This file will contain all API endpoints and configuration
 * for future backend integration.
 */

// Base API URL - Update this when backend is ready
export const API_BASE_URL = __DEV__
  ? 'http://localhost:3000/api' // Development
  : 'https://api.trueprimedigital.com/api'; // Production

// API Endpoints
export const API_ENDPOINTS = {
  // Consultation endpoints
  CONSULTATION: {
    SUBMIT: '/consultation/submit',
    LIST: '/consultation/list',
  },
  
  // Services endpoints
  SERVICES: {
    LIST: '/services',
    DETAIL: '/services/:id',
  },
  
  // Contact endpoints
  CONTACT: {
    SUBMIT: '/contact/submit',
  },
  
  // Settings endpoints
  SETTINGS: {
    GET: '/settings',
    UPDATE: '/settings/update',
  },
};

// API Request Configuration
export const API_CONFIG = {
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

// Helper function to build full URL
export const buildApiUrl = (endpoint: string, params?: Record<string, string>): string => {
  let url = `${API_BASE_URL}${endpoint}`;
  
  if (params) {
    Object.keys(params).forEach(key => {
      url = url.replace(`:${key}`, params[key]);
    });
  }
  
  return url;
};

