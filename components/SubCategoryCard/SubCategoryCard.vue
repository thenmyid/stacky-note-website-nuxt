<template>
  <v-col cols="6">
    <v-card
      class="sn-subCategory-card mx-auto">
      <v-list-item three-line>
        <v-list-item-content  class="pb-0">
          <v-card-text class="pb-0 pl-0">
            <!-- <div>Web service stack</div> -->
            <p class="display-1 text--primary">
              {{subCategory.sub_category_name}}
            </p>
            <p>{{subCategory.description}}</p>
          </v-card-text>
        </v-list-item-content>

        <v-list-item-avatar
          tile
          size="110"
          color="grey">
          <v-img
            :src="subCategory.image"
            :lazy-src="subCategory.image"
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
      <v-card-text class="pt-0">
        <div class="text--primary">
          {{subCategory.about}}
        </div>
      </v-card-text>
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

<script lang="ts" src="./SubCategoryCard.controller.ts"></script>
<style lang="scss" src="./SubCategoryCard.style.scss"></style>