<template>
  <v-card>
    <v-toolbar class="header" height="100px" flat>
      <v-container>
        <v-row>
          <v-col cols="12">
            <Logo />
          </v-col>
          <v-col cols="12">
            <HeaderLinks />
          </v-col>
        </v-row>
      </v-container>
    </v-toolbar>
    <div class="hide-mobile">
      <v-switch
      v-model="nocturneMode"
      class="dark-mode-switch"
      label="Dark mode"
      hide-details
      color="black"
    />
    </div>
  </v-card>
</template>
    
<script>
import Logo from "./Logo"
import HeaderLinks from "./HeaderLinks.vue"
export default {
  name: 'HeaderComponent',
  components: { Logo, HeaderLinks },
  data: () => ({
    nocturneMode: true,
  }),
}
</script>

<style lang="sass">
.header
  .container
    .col
      padding: 2px
</style>