<template>
  <div>

    <v-row
      transition="slide-y-transition"
      v-if="type == 'articles'">
      <ArticleCard
        v-for="(note, index) in items"
        :key="note.title + index"
        :note="note"
      />
    </v-row>
    <v-row
      v-if="type == 'books'">
      <BookCard
        v-for="(note, index) in items"
        :key="note.title + index"
        :note="note"
      />
    </v-row>
    <v-row
      transition="slide-y-transition"
      v-if="type == 'talks'">
      <TalkCard
        v-for="(note, index) in items"
        :key="note.title + index"
        :note="note"
      />
    </v-row>
    <v-row
      transition="slide-y-transition"
      v-if="type == 'examples'">
      <ExampleCard
        v-for="(note, index) in items"
        :key="note.title + index"
        :note="note"
      />
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    items: {
      default: () => []
    },
    type: String
  }
})
</script>

<style>
</style>
