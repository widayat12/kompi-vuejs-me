<template>
    <v-container>
        <v-layout row wrap v-if="loading">
            <v-flex xs12 class="text-xs-center">
                <v-progress-circular
                indeterminate
                class="primary--text"
                :width="7"
                :size="70"></v-progress-circular>
            </v-flex>
        </v-layout>
        <v-layout row wrap v-else>
            <v-flex xs12>
                <v-card class="flexcard">
                    <v-card-title>
                        <h2 class="primary--text">{{ meetup.title}}</h2>
                        <template v-if="userIsCreator">
                            <v-spacer></v-spacer>
                            <app-edit-meetup-details-dialog
                            :meetup="meetup"></app-edit-meetup-details-dialog>
                        </template>
                    </v-card-title>
                     <v-img
                        :src="meetup.imageUrl"
                        height="250px"
                        >    
                        </v-img>
                    <v-card-text>
                        <div class="info--text">{{ meetup.date | date }}-{{ meetup.location}}</div>
                        <div>{{ meetup.description}}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <app-register-dialog
                        :meetupId="meetup.id"
                        v-if="userIsAuthenticated && !userIsCreator"></app-register-dialog>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import {VCard, VImg, VCardTitle, VProgressCircular} from 'vuetify/lib'
export default {
  components: {VCard, VImg, VCardTitle, VProgressCircular},
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    userIsCreator () {
      if (!this.userIsAuthenticated) {
        return false
      }
      return this.$store.getters.user.id === this.meetup.creatorId
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>    
</script>

<style scoped>
.flexcard {
  display: flex;
  flex-direction: column;
}
</style>
