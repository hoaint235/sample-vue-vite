<template>
  <product-item
    v-for="item in items"
    :key="item.id"
    v-bind="item"
  ></product-item>
</template>

<script lang="ts">
import { IProduct } from "@models/products";
import { defineComponent, ref } from "vue";
import { ProductItem } from "./components";

export default defineComponent({
  components: { ProductItem },
  setup() {
    const items = ref<IProduct[]>([
      {
        id: "test",
        name: "test 1",
        quantity: 12,
      },
       {
        id: "test 1",
        name: "test 2",
        quantity: 67,
      },
    ]);

    return {
      items,
    };
  },
});
</script>
