<template>
  <v-col cols="4">
    <v-card
      class="sn-talk-card mx-auto"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>{{note.title}}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-2">{{note.author}}</v-card-subtitle>

      <v-card-text class="text-body-2 font-weight-light">
        {{note.description}}
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">

          <v-list-item-content>
            <v-list-item-subtitle>{{note.created_on}}</v-list-item-subtitle>
          </v-list-item-content>

          <v-row
            align="center"
            justify="end"
          >
            <v-btn color="primary" :href="note.link">Read</v-btn>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script lang="ts" src="./TalkCard.controller.ts"></script>
<style lang="scss" src="./TalkCard.style.scss"></style>