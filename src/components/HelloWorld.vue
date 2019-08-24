<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>
        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a href="https://community.vuetifyjs.com" target="_blank">{{email}}</a>
        </p>
         <v-btn @click="sair" block>
            Sair
          </v-btn>
      </v-flex>

      
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    
  }),
  mounted(){
    var token = this.$store.getters.user
    this.$store.dispatch('email',{token:token})
  },
  computed:{
    email(){
      return this.$store.getters.email
    }
  },
  methods:{
    sair(){
      this.$store.dispatch('signUserOut')
      this.$router.push('/')
    }
  }

};
</script>
