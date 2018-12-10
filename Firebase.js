import * as firebase from 'firebase/app'
import 'firebase/firestore'
const settings = {timestampsInSnapshots: true}

const config = {
  apiKey: "AIzaSyDodX88UBK-2W_3Y7xuKIgclnQk-ApzFkg",
  authDomain: "vue-firestore-vuetify.firebaseapp.com",
  databaseURL: "https://vue-firestore-vuetify.firebaseio.com",
  projectId: "vue-firestore-vuetify",
  storageBucket: "vue-firestore-vuetify.appspot.com",
  messagingSenderId: "608836738577"
}

firebase.initializeApp(config)

firebase.firestore().settings(settings)

export default firebase