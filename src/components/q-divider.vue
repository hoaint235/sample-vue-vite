<template>
  <slot>
    <div :class="className"></div>
  </slot>
</template>

<style lang="scss" scoped>
.q-divider {
  border: 0.5px solid rgb(211, 209, 209);
  border-radius: 4px;
  width: 100%;
}
</style>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

type Spacing = "xl" | "lg" | "md" | "sm" | "xs"

export default defineComponent({
  name: "q-divider",
  props: {
    spacing: {
      type: String as PropType<Spacing>,
      default: 'md'
    },
  },
  setup(props) {
    const className = ref<string>(`q-divider q-my-${props.spacing}`);

    return {
      className
    }
  }
});
</script>
