<template>
  <v-container class="container">
    <v-card class="sign-in-container">
      <v-card-title>
        <v-row align="center" justify="center">
          <v-col cols="12" class="text-center">
            <h1 class="text-h4 font-weight-thin">
              Sign In with Firebase account
            </h1>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-content>
        <v-form>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="userName"
                label="User name"
                required
                variant="outlined"
                hide-details="auto"
                density="compact"
                color="primary"
                :disabled="loading"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="password"
                label="Password"
                required
                variant="outlined"
                density="compact"
                hide-details="auto"
                color="primary"
                :disabled="loading"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-btn
                @click="onSignIn"
                color="primary"
                class="width100"
                :disabled="loading"
                >{{ loading ? "Signing in..." : "Sign In" }}</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </v-card-content>
    </v-card>
  </v-container>
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

export default defineComponent({
  name: "sign-in",
  setup() {
    const userName = ref<string>("");
    const password = ref<string>("");
    const loading = ref<boolean>(false);

    const onSignIn = async () => {
      try {
        loading.value = true;
        await userService.signIn(userName.value, password.value);
      } catch (error: any) {
        console.log(error.code)
      } finally {
        loading.value = false;
      }
    };

    return {
      userName,
      password,
      onSignIn,
      loading,
    };
  },
});
</script>
