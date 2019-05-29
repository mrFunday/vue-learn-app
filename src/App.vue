<template>
    <v-app>
        <Header/>
        <v-content>
            <v-container fluid>
                <router-view name="a1"></router-view>
                <router-view name="b1"></router-view>
            </v-container>
        </v-content>
    </v-app> 
</template>

<script>
import Header from './components/header/Header'

export default {
    name: 'App',
    components: {
      Header
    },
  data () {
    return {
        //
        }
    }
}
</script>
