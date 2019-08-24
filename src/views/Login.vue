<template>
    <v-container text-xs-center >
        <v-layout row v-if="error">
            <v-flex xs12 sm6 offset-sm3>
                <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
            </v-flex>
        </v-layout>
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
                        <div class="title font-weight-regular text-center">Login</div>
                        <v-container>
                            <form @submit.prevent="onEntrar">
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field 
                                            name="email" 
                                            label="E-mail"
                                            id="email"
                                            v-model="email"
                                            type="email"
                                            required></v-text-field>
                                            
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field 
                                            name="senha" 
                                            label="Senha"
                                            id="senha"
                                            v-model="senha"
                                            type="password"
                                            required></v-text-field>
                                    </v-flex>
                                </v-layout>

                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <div class="text-center">
                                            <v-btn class="white--text" type="submit" :disabled="loading || !(email !== '' && senha !== '')" :loading="loading"  color="green accent-3" block>
                                                Entrar
                                            </v-btn>
                                        </div>
                                    </v-flex>
                                    <br/>
                                    <br/>
                                    <v-flex xs12>
                                        <div>
                                            <v-btn tile outlined color="green accent-3" to="/signup" block>
                                                Você não tem uma conta? Cadastre-se aqui
                                            </v-btn>
                                        </div>
                                    </v-flex>
                                </v-layout>
                            </form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            email:'',
            senha:'',
            buttons: {
                login: {
                    path: '/'
                }
            },
        }
    },
    computed:{
        compararSenhas(){
            return this.senha !== this.confirmaSenha ? 'Senhas não são iguais': ''
        },
        user(){
            return this.$store.getters.user
        },
        error(){
            return this.$store.getters.error
        },
        loading(){
            return this.$store.getters.loading
        },
    },
    watch:{
        user(value){
            if(value !== null && value !== undefined){
                this.$router.push('/home')
            }
        }
    },
    methods:{
        onEntrar(){
            this.loading = true
            this.$store.dispatch('signUserIn',{email:this.email,senha:this.senha}) 
        },
        onDismissed(){
            this.$store.dispatch('clearError')
        }
    }
}
</script>

<style>
    .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>

