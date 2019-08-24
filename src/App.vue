<template>
  <v-app>
    <div v-if="user">
    <v-app-bar
      color="green accent-3"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>TechNurse</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn icon @click="sair">
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>

     
    </v-app-bar>
  </div>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
  methods: {
        sair(){
          this.$store.dispatch('signUserOut')
          this.$router.push('/')
        }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
};
</script>
