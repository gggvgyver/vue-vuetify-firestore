import * as firebase from 'firebase/app'
import 'firebase/firestore'
const settings = {timestampsInSnapshots: true}

const config = {
  apiKey: "AIzaSyAtguk17kYKX6LshMWtjQ2OBRFd4s97BkM",
  authDomain: "vue-axios-vuetify.firebaseapp.com",
  databaseURL: "https://vue-axios-vuetify.firebaseio.com",
  projectId: "vue-axios-vuetify",
  storageBucket: "vue-axios-vuetify.appspot.com",
  messagingSenderId: "260069567535"
}

firebase.initializeApp(config)

firebase.firestore().settings(settings)

export default firebase