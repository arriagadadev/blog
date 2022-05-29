<template>
    <v-row>
    <v-col md="3">
      <div class="sticky-top">
          <slot name="left-sidebar"/>
      </div>
    </v-col>
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-text>
          <slot name="content" />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col md="3">
      <div class="sticky-top">
          <slot name="right-sidebar"/>
      </div>
    </v-col>
  </v-row>
</template>