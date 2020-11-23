<template>
  <PageWrapper>

    <Jumbotron
      title="Add Note"
    >
    </Jumbotron>

    <v-card
      color="blue-grey darken-1"
      dark
    >
      <template v-slot:progress>
        <v-progress-linear
          absolute
          color="green lighten-3"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>
      <v-img
        height="200"
        src="https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg"
      >
        <v-row>
          <v-row
            class="pa-4"
            align="center"
            justify="center"
          >
            <v-col class="text-center">
              <h3 class="headline">
                Add Notes
              </h3>
              <span class="grey--text text--lighten-1">Add you stack note's</span>
            </v-col>
          </v-row>
        </v-row>
      </v-img>
      <form>
        <v-container>
          <v-alert
            v-model="alert.show"
            dismissible
            :type="alert.type">
            {{alert.text}}
          </v-alert>

          <v-row>

            <v-col
              cols="12"
              md="6"
            >
              <v-select
                v-model="stacks"
                :items="stackList"
                :error-messages="stackErrors"
                label="Stack"
                multiple
                item-text="stack_name"
                placeholder="Select stack"
                item-value="stack_code"
                filled
                required
                @change="$v.stacks.$touch()"
                @blur="$v.stacks.$touch()"
              ></v-select>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-select
                v-model="type"
                :items="typeList"
                :error-messages="typeErrors"
                label="Types"
                item-text="label"
                placeholder="Select note types"
                item-value="value"
                filled
                required
                @change="$v.type.$touch()"
                @blur="$v.type.$touch()"
              ></v-select>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="title"
                :error-messages="titleErrors"
                :counter="50"
                label="Title"
                filled
                required
                @input="$v.title.$touch()"
                @blur="$v.title.$touch()"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="author"
                :error-messages="authorErrors"
                :counter="50"
                label="Author"
                filled
                required
                @input="$v.author.$touch()"
                @blur="$v.author.$touch()"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-textarea
                v-model="description"
                :error-messages="descriptionErrors"
                :counter="255"
                label="Your Note"
                filled
                required
                @input="$v.description.$touch()"
                @blur="$v.description.$touch()"
              ></v-textarea>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="link"
                :error-messages="linkErrors"
                :counter="255"
                label="Link"
                filled
                required
                @input="$v.link.$touch()"
                @blur="$v.link.$touch()"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="image"
                :error-messages="imageErrors"
                :counter="255"
                label="Image Url"
                filled
                required
                @input="$v.image.$touch()"
                @blur="$v.image.$touch()"
              ></v-text-field>
            </v-col>

          </v-row>
        </v-container>
      </form>

      <v-divider></v-divider>

      <v-card-actions>
        <v-checkbox
          v-model="isAgree"
          :error-messages="isAgreeErrors"
          label="Do you agree?"
          required
          @change="$v.isAgree.$touch()"
          @blur="$v.isAgree.$touch()"
        ></v-checkbox>

        <v-spacer></v-spacer>

        <v-btn @click="clear">
          Clear
        </v-btn>

        <v-btn
          class="mr-4"
          color="primary"
          @click="submit"
        >
          Add Note
        </v-btn>
      </v-card-actions>
    </v-card>

  </PageWrapper>
</template>

<script lang="ts" src="./index.controller.ts"></script>

<style>
</style>
