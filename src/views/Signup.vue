<template>
    <v-container text-xs-center >
        <v-layout row v-if="error">
            <v-flex xs12 sm6 offset-sm3>
                <app-alert @dismissed="onDismissed" :text="error"></app-alert>
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
                        <div class="title font-weight-regular text-center">Crie sua conta</div>
                        <v-container>
                            <form @submit.prevent="onCadastrar">
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field 
                                            name="nome" 
                                            label="Nome Completo"
                                            id="nome"
                                            v-model="nome"
                                            type="text"
                                            color="green"
                                        ></v-text-field>
                                            
                                    </v-flex>
                                </v-layout>
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
                                    <v-checkbox readonly v-model="checkbox1" label="Pelo menos 6 caracteres"></v-checkbox>
                                    <v-checkbox readonly v-model="checkbox2" label="Pelo menos uma letra maiúscula"></v-checkbox>
                                    <v-checkbox readonly v-model="checkbox3" label="Pelo menos 1 número"></v-checkbox>
                                    
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field 
                                            name="confirmaSenha" 
                                            label="Confirmar Senha"
                                            id="confirmaSenha"
                                            v-model="confirmaSenha"
                                            type="password"
                                            :rules="[compararSenhas]"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <div class="text-center">
                                            <v-btn class="white--text" type="submit" :disabled="loading || !((checkbox1 && checkbox2 && checkbox3) && senhaIguais && email !== '' )" :loading="loading"  color="green accent-3" block>
                                                Cadastrar-se
                                            </v-btn>
                                        </div>
                                    </v-flex>
                                    <br/>
                                    <br/>
                                    <v-flex xs12>
                                        <div>
                                            <v-btn tile outlined color="green accent-3" to="/" block>
                                                Você já tem uma conta? Entre aqui
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
            confirmaSenha:'',
            buttons: {
                login: {
                    path: '/'
                }
            },
            checkbox1:false,
            checkbox2:false,
            checkbox3:false,
            nome:'',
            senhaIguais:false,
        }
    },
    computed:{
        compararSenhas(){
            if(this.senha !== this.confirmaSenha){
                this.senhaIguais = false
                return 'Senhas não são iguais'
            }else if(this.senha == this.confirmaSenha && this.confirmaSenha !== ''){
                this.senhaIguais = true
                return ''
            }
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
                this.$router.push('/Home')
            }
        },
        senha(val){
            if(val.length >= 6){
                this.checkbox1 = true
            }else{
               this.checkbox1 = false 
            }
            console.log(val)
            
            if (val.toLowerCase() == val){
                this.checkbox2 = false
            }else{
                this.checkbox2 = true
            }

            if(val.replace(/[^0-9]/g,'').length > 0){
                this.checkbox3 = true;
            }
            else{
                this.checkbox3 = false;
            }
        },
    },
    methods:{
        onCadastrar(){
            this.loading = true;
            this.$store.dispatch('signUserUp',{email:this.email,senha:this.senha,confirmaSenha:this.confirmaSenha}) 
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

