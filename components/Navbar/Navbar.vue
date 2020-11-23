<template>
  <v-app-bar
    app
    flat
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />

    <v-container class="mx-auto py-0">
      <v-row align="center">
        <v-img
          src="/logo.png"
          class="mr-3 sn-pointer"
          contain
          height="50"
          href="/"
          @click.prevent="navigate('/')"
          width="50"
          max-width="50"
          @click="$vuetify.goTo(0)"
        />

        <v-toolbar-title
          href="/"
          class="sn-pointer"
          @click.prevent="navigate('/')"
          >
          Stacky Note
        </v-toolbar-title>

        <v-spacer />

        <v-menu
          open-on-hover
          bottom
          transition="slide-y-transition"
          v-for="(menu, menuIndex) in navMenus"
          :key="menuIndex">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              class="hidden-sm-and-down"
              v-bind="attrs"
              v-on="on"
            >
              {{menu.category_name}}
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              :href="`/${menu.category_code}`"
              @click.prevent="navigate(`/${menu.category_code}`)"
            >
              <v-list-item-title>All {{ menu.category_name }}</v-list-item-title>
            </v-list-item>
            <v-list-item
              :href="`/${menu.category_code}/${item.sub_category_code}`"
              @click.prevent="navigate(`/${menu.category_code}/${item.sub_category_code}`)"
              v-for="(item, menuIndex) in (menu.subCategories || [])"
              :key="menuIndex"
            >
              <v-list-item-title>{{ item.sub_category_name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn
          class="hidden-sm-and-down"
          text
          href="/about"
          @click.prevent="navigate(`/about`)"
        >
          About
        </v-btn>
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip, attrs }">
            <v-btn
              class="mx-2 hidden-sm-and-down"
              fab small
              color="primary"
              href="/add-note"
              @click.prevent="navigate(`/add-note`)"
              v-bind="attrs"
              v-on="tooltip"
            >
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </template>
          <span>Add your notes</span>
        </v-tooltip>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts" src="./Navbar.controller.ts"></script>
<style lang="scss" src="./Navbar.style.scss"></style>
