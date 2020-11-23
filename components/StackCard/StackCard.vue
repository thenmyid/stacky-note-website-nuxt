<template>
  <v-col cols="4">

    <v-card
      class="sn-stack-card mx-auto"
      max-width="344"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-2">{{stack.stack_name}}</v-list-item-title>
          <v-list-item-subtitle>{{stack.description}}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar
          tile
          size="80"
          color="grey"
        >
          <v-img
            :src="stack.image"
            :lazy-src="stack.image"
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
      </v-list-item>

      <v-card-actions>
        <v-btn
          @click.prevent="navigate"
          color="primary"
        >
          Learn More
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script lang="ts" src="./StackCard.controller.ts"></script>
<style lang="scss" src="./StackCard.style.scss"></style>
