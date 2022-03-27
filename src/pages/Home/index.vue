<template>
  <q-card class="q-ma-lg">
    <q-card-section>
      <div class="row">
        <div class="row cols-12">
          <p class="text-subtitle1">Email: </p>
          <p class="text-subtitle1 q-ml-sm">{{ currentUser?.email }}</p>
        </div>
        <div class="row cols-12">
          <p class="text-subtitle1">Display name: </p>
          <p class="text-subtitle1 q-ml-sm">{{ currentUser?.displayName }}</p>
        </div>
      </div>
    </q-card-section>
    <q-card-actions>
      <q-btn color="primary" class="width100" @click="onSignOut">Sign Out</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { userService } from "@services";
import { routing } from "@utils";
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    async onSignOut() {
      try {
        await userService.signOut();
        this.$router.push(routing.SIGN_IN)
      } catch (error) {
        this.$q.notify({
          message: 'Sign out failed, please try again.'
        })
      }
    }
  },
  setup() {
    const currentUser = userService.getCurrentUser();
    return {
      currentUser,
    }
  }
});
</script>
