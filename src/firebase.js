import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyA_PY3k3scnRyOZBvfHuZsQ_R9dH3IZkSk',
  authDomain: 'slack-clone-1b4e2.firebaseapp.com',
  projectId: 'slack-clone-1b4e2',
  storageBucket: 'slack-clone-1b4e2.appspot.com',
  messagingSenderId: '415389592231',
  appId: '1:415389592231:web:d7f1fc0d91872fef80c982',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
