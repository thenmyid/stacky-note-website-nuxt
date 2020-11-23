<template>
  <div class="container-wrapper">
    <PageWrapper>

      <v-row>
        <v-col> <Logo /> </v-col>
      </v-row>

      <v-row>
        <v-col>
          <h1>
            Latest on StackyNote
          </h1>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-btn
            :href="`#${tab.value}`"
            class="mr-5"
            v-for="tab in [stackTabButton, ...tabs]"
            @click="onClickTabHandle(tab.value)"
            :key="tab.value"
            :color="inActiveTab == tab.value ? 'primary' : ''"
            min-width="120"
            large>
            {{tab.label}}
          </v-btn>
        </v-col>
      </v-row>

      <v-row
        v-show="inActiveTab == 'Stack'"
        transition="slide-y-transition"
      >
        <StackCard
          v-for="(stack, index) in stackSummary"
          :key="stack.stack_code + index"
          :stack="stack"
        />
      </v-row>

      <NotesCardGroup
        :type="inActiveTab"
        transition="slide-y-transition"
        :items="noteList"
      ></NotesCardGroup>

    </PageWrapper>
  </div>
</template>

<script lang="ts" src="./index.controller.ts"></script>
<style lang="scss" src="./index.style.scss"></style>
