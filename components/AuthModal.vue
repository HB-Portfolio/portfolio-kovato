<template>
  <div
    v-if="visible"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
  >
    <div class="bg-white p-6 rounded-lg w-96">
      <h2 class="text-2xl font-bold mb-4">
        {{ mode === "signin" ? "Sign In" : "Sign Up" }}
      </h2>
      <form v-if="!showConfirmation" @submit.prevent="authenticate">
        <div class="mb-4">
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div class="mb-4" v-if="mode === 'signup'">
          <input
            v-model="username"
            type="text"
            placeholder="Username"
            class="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div class="mb-4">
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          class="bg-primary text-white px-6 py-2 md:hover:bg-white border-2 md:hover:text-primary border-primary md:hover:shadow-md rounded-md transition-all duration-200 ease-in-out w-full"
        >
          {{ mode === "signin" ? "Sign In" : "Sign Up" }}
        </button>
      </form>
      <div v-else>
        <p class="text-center mb-4">Thank you for signing up!</p>
        <p class="text-center mb-4">
          Please check your email to confirm your sign-up.
        </p>
        <button
          @click="close"
          class="bg-primary text-white px-4 py-2 rounded w-full"
        >
          Close
        </button>
      </div>
      <div v-if="!showConfirmation" class="mt-2 text-center">
        <button
          @click="toggleMode"
          class="px-1 text-primary mb-4 md:hover:bg-primary md:hover:text-white rounded-md transition-all duration-200 ease-in-out w-full"
        >
          {{
            mode === "signin"
              ? "Don't have an account? Sign Up"
              : "Already have an account? Sign In"
          }}
        </button>
      </div>
      <button
        v-if="!showConfirmation"
        @click="close"
        class="text-gray-500 px-1 mb-4 md:hover:bg-gray-500 md:hover:text-white rounded-md transition-all duration-200 ease-in-out w-full"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
  mode: {
    type: String,
    default: "signin",
  },
});

const emits = defineEmits(["close", "authenticated", "update:mode"]);

const email = ref("");
const password = ref("");
const username = ref("");
const showConfirmation = ref(false);
const supabase = useSupabaseClient();

const close = () => {
  emits("close");
  showConfirmation.value = false;
};

const mode = computed({
  get: () => props.mode,
  set: (value) => emits("update:mode", value),
});

const authenticate = async () => {
  let result;
  if (mode.value === "signin") {
    result = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (result.error) {
      alert(`Authentication error: ${result.error.message}`);
    } else {
      emits("authenticated", result.data);
      close();
    }
  } else {
    result = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          username: username.value,
          full_name: "",
        },
      },
    });

    if (result.error) {
      alert(`Authentication error: ${result.error.message}`);
    } else {
      showConfirmation.value = true;
    }
  }
};

const toggleMode = () => {
  mode.value = mode.value === "signin" ? "signup" : "signin";
  email.value = "";
  password.value = "";
  username.value = "";
};
</script>
