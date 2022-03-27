<template>
  <q-header reveal elevated class="bg-primary text-white" height-hint="98">
    <q-toolbar>
      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>
        Vue Firebase
      </q-toolbar-title>
      <q-btn flat round dense>
        <q-icon name="more_vert" />
        <q-menu fit max-width="300px" :style="{ width: '200px' }">
          <div class="no-wrap q-pa-md">
              <p>
                Hello,
              </p>
              <p class="text-subtitle1">{{ currentUser?.displayName }}</p>

            <q-btn
              color="primary"
              label="Logout"
              size="md"
              v-close-popup
              outline
              @click="onSignOut"
              class="width100 q-mt-md"
            />
          </div>
        </q-menu>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { useAuth } from "@plugins";
import { routing } from "@utils";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "p-header",
  setup() {
    const { user: currentUser, onSignOut: signOut } = useAuth();
    const router = useRouter();

    const onSignOut = async () => {
      await onSignOut();
      router.push(routing.SIGN_IN)
    }

    return {
      currentUser,
      onSignOut
    };
  },
});
</script>
