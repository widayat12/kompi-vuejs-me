<template>
   <v-container>
       <v-layout row v-if="error">
           <v-flex xs12 sm6 offset-sm3>
               <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
           </v-flex>
       </v-layout>
       <v-layout row>
           <v-flex xs12 sm6 offset-sm3>
               <v-card>
                   <v-card-text>
                       <v-container>
                           <form @submit.prevent="onSignUp">
                               <v-layout row>
                                   <v-flex xs12>
                                       <v-text-field
                                       name="email"
                                       label="Email"
                                       type="email"
                                       v-model="email"
                                       id="email"
                                       required>
                                       </v-text-field>
                                   </v-flex>
                               </v-layout>
                               <v-layout row>
                                   <v-flex xs12>
                                       <v-text-field
                                       name="password"
                                       label="Password"
                                       type="password"
                                       v-model="password"
                                       id="password"
                                       required>
                                       </v-text-field>
                                   </v-flex>
                               </v-layout>
                               <v-layout row>
                                   <v-flex xs12>
                                       <v-text-field
                                       name="confirmPassword"
                                       label="Confirm Password"
                                       type="password"
                                       v-model="confirmPassword"
                                       id="confirmPassword"
                                       :rules="[comparePassword]">
                                       </v-text-field>
                                   </v-flex>
                               </v-layout>
                               <v-layout row>
                                   <v-flex xs12>
                                       <v-btn type="submit" class="primary" :disabled="loading" :loading="loading">
                                           Sign up
                                           <span slot="loader" class="custom-loader">
                                               <v-icon light>cached</v-icon>
                                           </span>
                                        </v-btn>
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
import {VTextField} from 'vuetify/lib'
export default {
  components: {VTextField},
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    comparePassword () {
      return this.password !== this.confirmPassword ? 'password tidak cocok' : ''
    },
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignUp () {
      this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
    },
    onDismissed () {
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
