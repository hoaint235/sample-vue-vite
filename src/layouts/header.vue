<template>
  <p-menubar>
    <template #start>
      <img
        alt="logo"
        src="../assets/logo.png"
        height="40"
        class="mx-4"
      />
    </template>
    <template #end>
      <p-button>Sign Out</p-button>
    </template>
  </p-menubar>
</template>

<script lang="ts">
import { useAuth } from "@hooks";
import { userService } from "@services";
import { routing } from "@utils";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "p-header",
  setup() {
    const { user } = useAuth();
    const router = useRouter();

    const onSignOut = async () => {
      await userService.signOut();
      router.push(routing.SIGN_IN)
    }

    return {
      user,
      onSignOut
    };
  },
});
</script>
