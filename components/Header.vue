<template>
  <v-card style="position: relative">
    <v-toolbar class="centered" flat>
      <v-toolbar-title><Logo /></v-toolbar-title>
    </v-toolbar>
    <v-toolbar class="centered" flat>
      <a href="/blog">Blog</a>
      <a href="https://github.com/arriagadadev">
        <v-icon>mdi-github</v-icon> Github
      </a>
      <a href="/about"> About me </a>
    </v-toolbar>
    <v-switch
      v-model="nocturneMode"
      class="dark-mode-switch"
      label="Dark mode"
      hide-details
      color="black"
    ></v-switch>
  </v-card>
</template>
    
<script>
import Logo from "./Logo"
export default {
  name: 'HeaderComponent',
  components: { Logo },
  data: () => ({
    nocturneMode: true,
  }),
}
</script>

<style lang="sass">
.centered
    display: flex
    justify-content: center
    a
        &:link, &:visited
            text-decoration: none
            margin: 10px
            color: white
            font-size: 1.2rem
.dark-mode-switch
    position: absolute
    right: 10px
    top: 0
</style>