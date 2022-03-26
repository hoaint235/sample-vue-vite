<template>
  <header-layout></header-layout>

  <v-main>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from './header.vue';

export default defineComponent({
  name: "auth-layout",
  components: { Header },
  setup() {},
});
</script>
