<template>
  <PageWrapper>
    <BreadCrumb :items="breadcrumbItems"></BreadCrumb>

    <Jumbotron
      :title="stack.stack_name"
      :description="stack.description"
      :about="stack.about"
      :links="stack.links"
      :image="stack.image"
    />

    <v-row>
      <v-col>
        <v-btn
          :href="`#${tab.value}`"
          class="mr-5"
          v-for="tab in tabs"
          @click="onClickTabHandle(tab.value)"
          :key="tab.value"
          :color="inActiveTab == tab.value ? 'primary' : ''"
          large>
          {{tab.label}}
        </v-btn>
      </v-col>
    </v-row>
    <br>
    <NotesCardGroup
      :type="inActiveTab"
      :items="noteList"
    ></NotesCardGroup>
  </PageWrapper>
</template>

<script lang="ts" src="./index.controller.ts"></script>
<style></style>
