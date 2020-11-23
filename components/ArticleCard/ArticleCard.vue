<template>
  <v-col cols="4">
    <v-card
      class="sn-article-card mx-auto"
    >
      <v-list-item>
        <v-list-item-avatar color="grey">
          <v-img
            class="elevation-6"
            src="https://th.bing.com/th/id/OIP.CSdYHgkCAsBOxJDZ6daCdwHaFj?pid=Api&rs=1"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-h6 font-weight-light">{{note.author}}</v-list-item-title>
          <v-list-item-subtitle class="text-caption">Medium Article</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-text class="text-h6 font-weight-bold pb-0">
        {{note.title}}
      </v-card-text>

      <v-card-text class="text-body-2 font-weight-light">
        {{note.description}}
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">

          <v-list-item-content>
            <v-list-item-subtitle>{{note.created_on | formatDate}}</v-list-item-subtitle>
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

<script lang="ts" src="./ArticleCard.controller.ts"></script>
<style lang="scss" src="./ArticleCard.style.scss"></style>