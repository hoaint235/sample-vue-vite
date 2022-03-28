<template>
  <div class="container">
    <q-card class="sign-in-container">
      <q-card-section class="q-pb-xl">
        <div class="row justify-center">
          <div class="col-12 text-center">
            <img src="../../assets/logo.png" width="48" height="48" />
          </div>
          <div class="col-12 text-center">
            <h1 class="text-h5 font-weight-thin">Vue Firebase</h1>
            <h3 class="text-subtitle1">Sign in with your Google account to chat</h3>
          </div>

          <div class="row col-12 justify-center">
            <q-btn outline color="primary" class="width80" @click="onSignIn">
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

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { routing } from "@utils";
import { userService } from "@services";

const loading = ref<boolean>(false);
const errorMessage = ref<string>("");
const router = useRouter();

const onSignIn = async () => {
  try {
    await userService.signIn();
    router.push(routing.HOME);
  } catch (error: any) {
    errorMessage.value = error.code;
  }
};
</script>
