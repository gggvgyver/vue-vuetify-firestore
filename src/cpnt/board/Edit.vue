<template>
  <div>
    편집
  </div>
</template>

<script>

import firebase from '../../../Firebase'

export default {
  name: 'EditBoard',
  data () {
    return {
      key: this.$route.params.id,
      board: {}
    }
  },
  created () {
    const ref = firebase.firestore().collection('boards').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.board = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const updateRef = firebase.firestore().collection('boards').doc(this.$route.params.id);
      updateRef.set(this.board).then((docRef) => {
        this.key = ''
        this.board.title = ''
        this.board.description = ''
        this.board.author = ''
        router.push({ name: 'ShowBoard', params: { id: this.$route.params.id }})
      })
      .catch((error) => {
        alert("Error adding document: ", error);
      });
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>
