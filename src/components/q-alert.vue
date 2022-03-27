<template>
  <div :class="iconProps?.className">
    <slot name="icon">
      <q-icon :name="iconProps?.icon" color="primary" size="sm" />
    </slot>
    <p class="text-subtitle1 content">{{ message }}</p>
  </div>
</template>

<style lang="scss" scoped>
.content {
  padding-left: 8px;
}
</style>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

type AlertType = "error" | "info";
type AlertIcon = {
  icon: string;
  className: string;
};

export default defineComponent({
  name: "q-alert",
  props: {
    type: {
      type: String as PropType<AlertType>,
      required: true,
    },
    message: String,
  },
  setup(props) {
    const { type } = props;
    const iconProps = ref<AlertIcon>({
      icon: type,
      className: `alert alert-${type}`
    });

    return {
      iconProps
    };
  },
});
</script>
