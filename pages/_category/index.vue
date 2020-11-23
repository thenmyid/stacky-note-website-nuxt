<template>
  <PageWrapper>

    <BreadCrumb :items="breadcrumbItems"></BreadCrumb>

    <Jumbotron
      :title="category.category_name"
      :description="category.description"
      :about="category.about"
      :links="category.links"
    />

    <v-row>
      <SubCategoryCard
        v-for="(subCategory, index) in subCategoryList"
        :key="subCategory.sub_category_name + index"
        :subCategory="subCategory"
      />
    </v-row>

  </PageWrapper>
</template>

<script lang="ts" src="./index.controller.ts"></script>
<style></style>
