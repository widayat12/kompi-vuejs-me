<template>
    <v-alert error dismissible @input="onClose" :value="true">
        {{ text }}
    </v-alert>
</template>
<script>
    import {VAlert} from 'vuetify/lib'
    export default {
      components: {VAlert},
      props: ['text'],
      methods: {
        onClose () {
          this.$emit('dismissed')
        }
      }
    }
</script>