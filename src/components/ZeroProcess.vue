<template>
  <v-container>
     <v-flex xs12 sm4 text-xs-center>
        <p>{{ mycounter }}</p>
        <p>
          <v-btn @click="increment">+</v-btn>
        </p>
      </v-flex>
  </v-container>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex'

  export default {
    name:"ZeroProcess",
    methods:{
      ...mapMutations([
      'increment'
    ]),
    },
    computed:{
      ...mapGetters([
        'mycounter'
      ])
    }

  }
</script>

<style>

</style>