<template>
  <div>
    리스트 {{ boards }}
  </div>
</template>

<script>

import firebase from '../../../Firebase'

export default {
  name: 'BoardList',
  data () {
    return {
      fields: {
        title: { label: 'Title', sortable: true, 'class': 'text-left' },
        actions: { label: 'Action', 'class': 'text-center' }
      },
      boards: [],
      errors: [],
      ref: firebase.firestore().collection('dessert'),
    }
  },
  created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.boards = [];
      querySnapshot.forEach((doc) => {
        this.boards.push({
          key: doc.id,
          name: doc.data().name,
          calories: doc.data().calories,
          fat: doc.data().fat,
          carbs: doc.data().carbs,
          protein: doc.data().protein
        });
      });
    });
  },
  methods: {
    details (board) {
      router.push({ name: 'ShowBoard', params: { id: board.key }})
    }
  }
}
</script>

<style>
  .table {
    width: 96%;
    margin: 0 auto;
  }
</style>
