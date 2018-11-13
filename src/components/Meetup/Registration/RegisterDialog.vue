<template>
    <v-dialog persistent v-model="registerDialog">
        <v-btn class="primary" accent slot="activator">
            {{ userIsRegistered ? 'Unregister' : 'Regirter' }}
        </v-btn>
        <v-card class="flexcard">
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title v-if="userIsRegistered">Tidak registrsi?</v-card-title>
                        <v-card-title v-else>Registrasi untuk pertemuan?</v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                      <v-card-text>Anda dapat merubahnya nanti. </v-card-text>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex>
                        <v-card-actions>
                            <v-btn
                            class="red--text darken-1"
                            flat
                            @click="registerDialog = false">batal</v-btn>
                            <v-btn
                            class="green--text darken-1"
                            flat
                            @click="onAgree">confirm</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>
<script>
  import {VDialog, VDivider} from 'vuetify/lib'
  export default {
    components: {VDialog, VDivider},
    props: ['meetupId'],
    data () {
      return {
        registerDialog: false
      }
    },
    computed: {
      userIsRegistered () {
        return this.$store.getters.user.registeredMeetups.findIndex(meetupId => {
          return meetupId === this.meetupId
        }) >= 0
      }
    },
    methods: {
      onAgree () {
        if (this.userIsRegistered) {
          this.$store.dispatch('unregisterUserFromMeetup', this.meetupId)
        } else {
          this.$store.dispatch('registerUserForMeetup', this.meetupId)
        }
      }
    }
}
</script>
<style scoped>
.flexcard {
  display: flex;
  flex-direction: column;
}
</style>
