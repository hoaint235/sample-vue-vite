<template>
  <div class="container">
    <q-card class="sign-in-container">
      <q-card-section>
        <div class="row justify-center">
          <div class="col-12 text-center">
            <img src="../../assets/logo.png" width="48" height="48" />
          </div>
          <div class="col-12 text-center">
            <h1 class="text-h5 font-weight-thin">Vue - Firebase</h1>
          </div>

          <div class="col-12">
            <q-btn
              flat
              color="primary"
              class="width100"
              @click="onSignIn"
            >
              <img src="../../assets/google.svg" width="24" height="24" />
              <div class="q-ml-sm">Sign in with Google</div></q-btn
            >
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { userService } from "@services";
import { QAlert } from "@components";
import { useRouter } from "vue-router";
import { isRequired, formatEmail } from "@validations";
import { routing } from "@utils";
import { useAuth } from '@plugins';

export default defineComponent({
  name: "sign-in",
  components: { QAlert },
  setup() {
    const userName = ref<string>("");
    const password = ref<string>("");
    const loading = ref<boolean>(false);
    const isPwd = ref<boolean>(true);
    const errorMessage = ref<string>("");
    const router = useRouter();
    const auth = useAuth();

    const onSignIn = async () => {
      try {
        await auth.onSignIn();
        router.push(routing.HOME);
      } catch (error: any) {
        errorMessage.value = error.code;
      }
    };

    return {
      userName,
      password,
      loading,
      isPwd,
      errorMessage,
      onSignIn,
      isRequired,
      formatEmail,
    };
  },
});
</script>
