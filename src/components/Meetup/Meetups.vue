<template>
    <v-container>
        <v-layout row wrap class="mb-2" v-for="meetup in meetups" :key="meetup.id">
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-card class="info flexcard">
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs5 sm4 md5>
                                <v-img
                                :src="meetup.imageUrl"
                                height="100px"
                                >    
                                </v-img>
                            </v-flex>
                            <v-flex xs7 sm8 md9>
                                <v-card-title primary-title>
                                    <div>
                                        <h5 class="white--text mb-0">{{ meetup.title}}</h5>
                                    <div>{{ meetup.date | date }}</div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat :to="'/meetups/' + meetup.id">
                                        <v-icon left-light>arrow-foward</v-icon>
                                        Pertemuan yang ada
                                    </v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import {VCard, VImg, VCardTitle} from 'vuetify/lib'
export default {
  components: {VCard, VImg, VCardTitle},
  computed: {
    meetups () {
      return this.$store.getters.loadedMeetups
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
