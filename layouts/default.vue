<template>
  <v-app dark>
    <v-main>
      <Header />
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Header from '../components/Header'

export default {
  name: 'DefaultLayout',
  components: {Header},
  data() {
    return {

    }
  },
}
</script>