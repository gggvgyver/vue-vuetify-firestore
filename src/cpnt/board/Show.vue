<template>
  <div>
    보기 {{ board.author }}
  </div>
</template>

<script>

import firebase from '../../../Firebase'

export default {
  name: 'ShowBoard',
  data () {
    return {
      key: '',
      board: {}
    }
  },
  created () {
    const ref = firebase.firestore().collection('boards').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.key = doc.id;
        this.board = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    editboard (id) {
      router.push({
        name: 'EditBoard',
        params: { id: id }
      })
    },
    deleteboard (id) {
      firebase.firestore().collection('boards').doc(id).delete().then(() => {
        router.push({
          name: 'BoardList'
        })
      }).catch((error) => {
        alert("Error removing document: ", error);
      });
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
  .edit-btn {
    margin-right: 20px;
    width: 70px;
  }
</style>
