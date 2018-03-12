import firebase from 'firebase'

export const fireInit = () => {
  console.log('conf => ', process.env)
  const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  }
  return firebase.initializeApp(config)
}

export const connectDB = (name) => {
  const app = fireInit()
  const db = app.database()
  return db.ref(name)
}
