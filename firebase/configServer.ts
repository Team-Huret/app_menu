import { getAuth } from "firebase-admin/auth";
import admin from "firebase-admin";

const firebaseAdminConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const adminApp = admin.initializeApp({
  credential: admin.credential.cert(firebaseAdminConfig),
});
const adminAuth = getAuth(adminApp);

export { adminAuth };
