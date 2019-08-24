<template>
  
  <v-container text-xs-center >
      
        <v-layout >
            <v-flex xs12 sm6 offset-sm3 >
                <v-card>
                    <v-card-text>
                        <v-flex xs12>
                            <v-img
                            :src="require('../assets/logo.jpg')"
                            class="my-3"
                            contain
                            height="200"
                            ></v-img>
                        </v-flex>
                        
                        <v-container text-center>
                            <v-flex mb-4>
                              <h1 class="Light 60sp font-weight mb-3">
                                Seja Bem vindo à TechNurse
                              </h1>
                              <h1 class="Regular 24sp ">
                                {{email}}
                              </h1>
                            </v-flex>
                            
                        </v-container>
                    </v-card-text>
                </v-card>
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
