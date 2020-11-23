<template>
  <PageWrapper>
    <BreadCrumb :items="breadcrumbItems"></BreadCrumb>

    <Jumbotron
      title="Stack"
    />

    <v-row>
      <StackCard
        v-for="(stack, index) in stacks"
        :key="stack.stack_code + index"
        :stack="stack"
      />
    </v-row>
  </PageWrapper>
</template>

<script lang="ts" src="./index.ts"></script>

<style>
</style>
