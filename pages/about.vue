<template>
  <PageWrapper>
    <v-row>
      <v-col> <Logo /> </v-col>
    </v-row>
    <v-row>
      <v-col align="center"> <h1>StackyNote</h1> </v-col>
    </v-row>
    <br>
    <v-row>
      <v-col align="center">
        <h1>
          About
        </h1>
        <br>
        <p>
          When I joined the QuickBooks Design System team last year, I started collecting resources for my personal reference. <br>
          I've gone back and browsed my collection of sites, articles and tools countless times since then. <br>
          I decided to organize and catalog these resources into a site so it can be of help to others in the design community.
        </p>
        <br><br>
      </v-col>
      <v-col align="center">
        <h1>
          Credit
        </h1>
        <br>
        <p>
          Design Systems Repo was designed in the browser using HTML, CSS, and Javascript and coded in 💻 Sublime Text. <br>
          I'm using Gridsome to compile the site's markdown content into a static site. <br>
          This is the first time I've used Gridsome and Vue on a project, so I'm still learning it and working through a few issues. <br>
          The site is uploaded on GitHub and then the build is done through 🌎 Netlify. <br>
          They are also providing the CDN and SSL.<br>
          The illustrations on the site are from the 🌟 Streamline UX set made by my friend, <br>
          Vincent Le Moign who creates amazing icons and illustrations for designers.<br>
        </p>
        <br><br>
      </v-col>
    </v-row>
  </PageWrapper>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
</style>
