import firebase from 'firebase'
import firebaseConfig from './config/prod'
firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();

export {
    auth
}