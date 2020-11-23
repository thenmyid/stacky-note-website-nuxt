<template>
  <PageWrapper>
    <BreadCrumb :items="breadcrumbItems"></BreadCrumb>

    <Jumbotron
      :title="subCategory.sub_category_name"
      :description="subCategory.description"
      :about="subCategory.about"
      :links="subCategory.links"
      :image="subCategory.image"
    />

    <v-row>
      <StackCard
        v-for="(stack, index) in stackList"
        :key="stack.stack_code + index"
        :stack="stack"
      />
    </v-row>

  </PageWrapper>
</template>

<script lang="ts" src="./index.controller.ts"></script>
<style lang="scss" src="./index.style.scss"></style>
