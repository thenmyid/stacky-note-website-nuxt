<template>
  <v-col cols="4">
    <v-card
      class="sn-stack-card mx-auto"
    >
      <v-list-item three-line>

        <v-list-item-avatar
          tile
          height="200"
          max-width="200"
          min-width="125"
          color="grey"
        >
          <v-img
            :src="note.image"
            :lazy-src="note.image"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="text-h6 font-weight-light">{{note.title}}</v-list-item-title>
          <v-list-item-subtitle class="text-caption">{{note.writter}}</v-list-item-subtitle>
          <v-card-text class="text-body-2 font-weight-light pl-0">
            {{note.description}}
          </v-card-text>
          <v-list-item class="grow">
            <v-row
              align="center"
              justify="end"
            >
              <v-btn :href="note.link" color="primary">Read</v-btn>
            </v-row>
          </v-list-item>
        </v-list-item-content>

      </v-list-item>

    </v-card>
  </v-col>
</template>

<script lang="ts" src="./BookCard.controller.ts"></script>
<style lang="scss" src="./BookCard.style.scss"></style>
