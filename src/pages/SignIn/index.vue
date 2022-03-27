<template>
  <div class="container">
    <q-card class="sign-in-container">
      <q-card-section>
        <div class="row justify-center">
          <div class="col-12 text-center">
            <img src="../../assets/logo.png" width="48" height="48" />
          </div>
          <div class="col-12 text-center">
            <h1 class="text-h5 font-weight-thin">
              Sign In with Firebase account
            </h1>
          </div>
          <div class="col-12 q-mt-md">
            <p class="text-subtitle2">User Name</p>
            <q-input
              outlined
              v-model="userName"
              dense
              :rules="[(val) => (val && val.length > 0) || 'Please user name']"
            />
          </div>
          <div class="col-12">
            <p class="text-subtitle2">Password</p>
            <q-input
              v-model="password"
              dense
              :rules="[(val) => (val && val.length > 0) || 'Please password']"
              outlined
              :type="isPwd ? 'password' : 'text'"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </div>
          <div class="col-12" v-if="errorMessage">
            <q-alert type="error" :message="errorMessage"/>
          </div>
          <div class="col-12 q-mt-sm">
            <q-btn
              color="primary width100"
              label="Sign in"
              :loading="loading"
              @click="onSignIn"
            />
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
import { QAlert } from '@components';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "sign-in",
  components: { QAlert },
  setup() {
    const userName = ref<string>("");
    const password = ref<string>("");
    const loading = ref<boolean>(false);
    const isPwd = ref<boolean>(true);
    const errorMessage = ref<string>('')
    const router = useRouter();

    const onSignIn = async () => {
      try {
        loading.value = true;
        await userService.signIn(userName.value, password.value);
        router.push("/home");
      } catch (error: any) {
        errorMessage.value = error.code;
      } finally {
        loading.value = false;
      }
    };

    return {
      userName,
      password,
      onSignIn,
      loading,
      isPwd,
      errorMessage
    };
  },
});
</script>
