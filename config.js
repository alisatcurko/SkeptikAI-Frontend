// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2ZjJzIIhxOC7dNU1KAkQdoModi3sY3Kc",
  authDomain: "skeptikai.firebaseapp.com",
  projectId: "skeptikai",
  storageBucket: "skeptikai.firebasestorage.app",
  messagingSenderId: "599393940170",
  appId: "1:599393940170:web:7da1a610108d7fd342fa33"
};

// Stripe Configuration
const STRIPE_PUBLISHABLE_KEY = 'Ypk_live_51Sb1nYFWXwjnVnyuqXYgKr8Kh1ZtshlDGgKuQoFu6pgU4G1HXuZdcqYbkLSJVkHkXYLxP4LbvRi7Kp2QjZjMUQsv00yw4dRQbi'; // Replace with your pk_test_... key

// Subscription Plans
const PLANS = {
  FREE: {
    name: 'Free',
    price: 0,
    dailyLimit: 10,
    features: [
      '10 analyses per day',
      'Text input only',
      'Basic scam detection',
      'Community support'
    ]
  },
  PRO: {
    name: 'Pro',
    price: 14.99,
    priceId: 'YOUR_STRIPE_PRICE_ID_HERE', // You'll create this in Stripe
    dailyLimit: -1, // -1 = unlimited
    features: [
      'Unlimited analyses',
      'Screenshot upload (OCR)',
      'Priority processing',
      'Priority support',
      'Early access to new features',
      'Audio analysis (coming 2026)'
    ]
  }
};

export { firebaseConfig, STRIPE_PUBLISHABLE_KEY, PLANS };
