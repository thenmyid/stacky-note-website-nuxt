<template>
  <v-container class="mx-auto py-0 sn-page-container">
    <v-row>
      <v-col>
        <slot></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style>
  .sn-page-container {
    margin-top: 64px;
  }
</style>
