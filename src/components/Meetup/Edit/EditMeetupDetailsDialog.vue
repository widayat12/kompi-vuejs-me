<template>
    <v-dialog width="350px" persistent v-model="editDialog">
        <v-btn class="primary" fab accent slot="activator">
            <v-icon>edit</v-icon>
        </v-btn>
        <v-card class="flexcard">
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title>Rubah pertemuan</v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-text>
                            <v-text-field
                            name="title"
                            label="Title"
                            id="title"
                            v-model="editedTitle"
                            required>
                            </v-text-field>
                            <v-textarea
                            name="description"
                            label="Description"
                            id="description"
                            multi-line
                            v-model="editedDescription"
                            required>
                            </v-textarea>
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout>
                    <v-flex>
                        <v-card-actions>
                            <v-btn flat class="red--text darken" @click="editDialog = false">batal</v-btn>
                            <v-btn flat class="green--text darken" @click="onSaveChanges">simpan</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>
<script>
import {VDialog, VCard, VCardTitle, VDivider, VTextField, VTextarea} from 'vuetify/lib'
export default {
  components: {VDialog, VCard, VCardTitle, VDivider, VTextField, VTextarea},
  props: ['meetup'],
  data () {
    return {
      editDialog: false,
      editedTitle: this.meetup.title,
      editedDescription: this.meetup.description
    }
  },
  methods: {
    onSaveChanges () {
      if (this.editedTitle.trim() === '' || this.editedDescription.trim() === '') {
        return
      }
      this.editDialog = false
      this.$store.dispatch('updateMeetupData', {
        id: this.meetup.id,
        title: this.editedTitle,
        description: this.editedDescription
      })
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
