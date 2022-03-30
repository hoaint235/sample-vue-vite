<template>
  <Header/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./header.vue";

export default defineComponent({
  name: "auth-layout",
  components: { Header },
});
</script>
