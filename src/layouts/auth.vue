<template>
  <q-layout view="hhh lpR fFf">
    <Header/>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from './header.vue';

export default defineComponent({
  name: "auth-layout",
  components: { Header }
});
</script>
