<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import HomePage from './components/HomePage.vue'
import ZeroProcess from './components/ZeroProcess.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    ZeroProcess
  },
  data () {
    return {
      //
    }
  }
}
</script>
