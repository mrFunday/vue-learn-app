<template>
    <v-app>
        <Header/>
        <v-content>
            <v-container fluid>
                <v-layout>
                    <v-flex >
                        <router-view name="a1"></router-view>
                    </v-flex>
                    <v-flex>
                        <router-view name="b1"></router-view>
                    </v-flex>
                </v-layout>
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
