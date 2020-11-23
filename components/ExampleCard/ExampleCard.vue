<template>
  <v-col cols="4">
    <v-card
      class="sn-example-card mx-auto"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="note.image"
      >
      </v-img>

      <v-card-subtitle class="pb-0">{{note.author}}</v-card-subtitle>

      <v-card-text class="text-h6 font-weight-bold pb-0">
        {{note.title}}
      </v-card-text>

      <v-card-text class="text-body-2 font-weight-light">
        {{note.description}}
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">

          <v-row
            align="center"
            justify="end"
          >
            <v-btn :href="note.link" color="primary">Read</v-btn>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script lang="ts" src="./ExampleCard.controller.ts"></script>
<style lang="scss" src="./ExampleCard.tyle.scss"></style>