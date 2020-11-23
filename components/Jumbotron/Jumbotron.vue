<template>
  <div class="sn-jumbotron">
    <v-row>
      <v-col sm="12" md="8" lg="10">
        <h1>{{title}}</h1>
        <p class="lead">
          {{description}}
        </p>
      </v-col>
      <v-col sm="12" md="4" lg="2">
        <v-img
          height="120"
          v-if="image"
          :src="image"
          :lazy-src="image"
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
      </v-col>
    </v-row>
    <hr>
    <p>
      {{about}}
    </p>
    <v-btn large
      v-for="link in links"
      :key="link.type"
      class="mr-5"
      :href="link.link"
      target="_blank"
    >{{link.type}}</v-btn>
    <v-row>
      <slot/>
    </v-row>
  </div>
</template>

<script lang="ts" src="./Jumbotron.controller.ts"></script>
<style lang="scss" src="./Jumbotron.style.scss"></style>
