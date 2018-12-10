<template>
  <div>
    추가
    <v-btn @click="$router.push({ name: 'list'})">링크-리스트-파라미터이용</v-btn>
  </div>
</template>

<script>

import firebase from '../../../Firebase'

export default {
  name: 'AddBoard',
  data () {
    return {
      ref: firebase.firestore().collection('boards'),
      board: {}
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()

      this.ref.add(this.board).then((docRef) => {
        this.board.title = ''
        this.board.description = ''
        this.board.author = ''
        router.push({
          name: 'BoardList'
        })
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
