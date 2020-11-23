<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    dark
    temporary
  >
    <v-list>

      <v-list-item
        to="/"
        href="`/"
        @click="onClick($event, `/`)"
      >
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item
        v-for="(menu, menuIndex) in navMenus"
        :key="menuIndex"
        :to="menu.value"
        :href="`/${menu.value}`"
      @click="onClick($event, `/${menu.value}`)"
      >
        <v-list-item-title v-text="menu.label" />
      </v-list-item>

      <v-list-item
        to="/about"
        href="`/about"
        @click="onClick($event, `/about`)"
      >
        <v-list-item-title>About</v-list-item-title>
      </v-list-item>
      <v-list-item
        to="/about"
        href="`/about"
        @click="onClick($event, `/about`)"
      >
        <v-list-item-content>
          <v-list-item-title>
            <v-icon dark>mdi-plus</v-icon>
            Add your notes
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" src="./Drawer.controller.ts"></script>
<style lang="scss" src="./Drawer.style.scss"></style>
