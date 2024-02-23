import * as admin from "firebase-admin";

// Initialize Firebase Admin SDK
admin.initializeApp();

// Get a reference to the Firestore service
const db = admin.firestore();

export default db;
