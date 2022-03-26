<template>
  <v-card>
    <v-card-title>{{ name }}</v-card-title>
    <v-card-content>{{ quantity }}</v-card-content>
    <v-card-actions>
      <v-button color="primary">Cart</v-button>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { IProduct } from "@models/products";
import { defineComponent } from "vue";

export default defineComponent<IProduct>({
  name: "product-item",
  setup(props) {
    return props;
  },
});
</script>
