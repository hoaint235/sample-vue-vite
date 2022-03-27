<template>
  <q-card class="q-ma-lg">
    <q-card-section>
      
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { useAuth } from "@plugins";
import { routing } from "@utils";
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    async onSignOut() {
      try {
        await this.signOut();
        this.$router.push(routing.SIGN_IN)
      } catch (error) {
        this.$q.notify({
          message: 'Sign out failed, please try again.'
        })
      }
    }
  },
  setup() {
    const { user: currentUser, onSignOut: signOut } = useAuth();
    
    return {
      currentUser,
      signOut
    }
  }
});
</script>
