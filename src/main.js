import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import router from './router'
import { store } from './store'
import DateFilter from './filter/Date'
import {
  Vuetify,
  VCarousel,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VCard
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'
import AlertCmp from './components/shared/Alert.vue'
import EditMeetupDetailsDialog from './components/Meetup/Edit/EditMeetupDetailsDialog.vue'
import EditMeetupDateDialog from './components/Meetup/Edit/EditMeetupDateDialog.vue'
import RegisterDialog from './components/Meetup/Registration/RegisterDialog.vue'

Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)
Vue.component('app-edit-meetup-date-dialog', EditMeetupDateDialog)
Vue.component('app-register-dialog', RegisterDialog)

Vue.use(Vuetify, {
  components: {
    VCarousel,
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VCard
  }
})

Vue.config.productionTip = false

Vue.filter('date', DateFilter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCBspmz7YMcLCLwl393fn2IepZyi1qsEnA',
      authDomain: 'pertemuan-f9449.firebaseapp.com',
      databaseURL: 'https://pertemuan-f9449.firebaseio.com',
      projectId: 'pertemuan-f9449',
      storageBucket: 'gs://pertemuan-f9449.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
