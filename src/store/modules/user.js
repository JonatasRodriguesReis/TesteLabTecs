import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default {
    state: {
        userToken: null,
    },
    mutations: {
        setUser(state, payload) {
            state.userToken = payload.token
        },
        clearUser(state) {
            state.userToken = null
        },
        
    },
    actions: {
        signUserUp({commit}, payload) {
            commit('setLoading', true)
            this.$http.post('api/auth/register', {
                email:payload.email,password:payload.senha, password_confirmation:payload.confirmaSenha
            })
            .then((response) => {
                this.$http.post('api/auth/login', {
                    email:payload.email,password:payload.senha
                })
                .then((responseLogin) => {
                    commit('setUser',{token:responseLogin.data.token})
                    console.log({token:responseLogin.data.token})
                    
                    
                })
                .catch((e) => {
                    console.log({...e})
                })
               
            })
            .catch((e) => {
                console.log({...e})
                console.log('Deu errado')
            })
            commit('setLoading', false)    
        },

        signUserOut ({commit}) {
           commit('clearUser')
        },

        signUserIn({commit}, payload) {
            commit('setLoading', true)
            this.$http.post('api/auth/login', {
                email:payload.email,password:payload.senha
            })
            .then((responseLogin) => {
                commit('setUser',{token:responseLogin.data.token,email:payload.email})
                console.log({token:responseLogin.data.token,email:payload.email})
            })
            .catch((e) => {
                console.log({...e})
            })
            commit('setLoading', false)
        },
        
    },
    getters: {
        user(state) {
            return state.userToken
        },
    }

}