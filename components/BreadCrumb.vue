<template>
  <div class="sn-breadcrumb">
    <v-breadcrumbs
      large
      v-bind="{...$props, ...$attrs}"
      v-on="$listeners"
    ></v-breadcrumbs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
  .sn-breadcrumb{
    margin-top: 10px;
    margin-bottom: 10px;
    background: linear-gradient(225deg,#ea3694 0,#5a186b 122%);
    border-radius: 5px;
    li, a {
      color: white !important;
    }
  }
</style>
