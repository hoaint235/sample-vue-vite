import { computed, onUnmounted, ref } from "vue";
import { auth } from '@plugins';
import { User } from "firebase/auth";

const useAuth = () => {
  const user = ref<User | null>(null);
  const unsubcribe = auth.onAuthStateChanged(_user => (user.value = _user));
  onUnmounted(unsubcribe);

  const isAuthenticated = computed(() => user.value !== null);

  return {
    user,
    isAuthenticated
  }
}

export default useAuth;