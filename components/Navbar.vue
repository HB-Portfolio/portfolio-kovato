<template>
  <nav class="bg-white shadow-md font-nunitosans z-50">
    <div
      class="max-w-[1600px] mx-auto md:px-12 px-4 py-3 md:py-5 flex items-center justify-between"
    >
      <div>
        <NuxtLink to="/" class="hidden md:flex">
          <img class="min-h-10" src="/public/images/logo-long.svg" />
        </NuxtLink>
        <NuxtLink to="/" class="flex md:hidden">
          <img class="min-h-16" src="/public/images/logo-short.svg" />
        </NuxtLink>
      </div>
      <div>
        <button @click="toggleMenu" class="block md:hidden focus:outline-none">
          <svg
            v-if="!isMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <transition name="slide-down">
          <div
            v-show="isMenuOpen"
            class="absolute top-8 min-w-full left-0 bg-white shadow-md md:hidden overflow-hidden mt-10 pb-4 text-lg"
          >
            <ul class="flex flex-col space-y-4 items-center text-center p-4">
              <li><NuxtLink to="/" @click="closeMenu">Home</NuxtLink></li>
              <li>
                <NuxtLink to="/pricing" @click="closeMenu">Pricing</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" @click="closeMenu">Contact</NuxtLink>
              </li>
              <li v-if="!user">
                <button
                  @click="
                    showAuthModal('signin');
                    closeMenu();
                  "
                  class="text-primary"
                >
                  Sign In
                </button>
              </li>
              <div v-else class="flex flex-col">
                <li>
                  <NuxtLink
                    to="/dashboard"
                    @click="closeMenu"
                    class="text-primary"
                    >Dashboard</NuxtLink
                  >
                </li>
                <li>
                  <button @click="signOut" class="text-red-500 md:ml-4 pt-4">
                    Sign Out
                  </button>
                </li>
              </div>
            </ul>
          </div>
        </transition>
        <div class="hidden md:flex md:space-x-4 items-center">
          <ul class="flex flex-row space-x-4 items-center">
            <li>
              <NuxtLink
                to="/"
                class="p-2 md:hover:bg-primary md:hover:text-white rounded-md transition-all duration-200 ease-in-out"
                >Home</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/pricing"
                class="p-2 md:hover:bg-primary md:hover:text-white rounded-md transition-all duration-200 ease-in-out"
                >Pricing</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/contact"
                class="p-2 md:hover:bg-primary md:hover:text-white rounded-md transition-all duration-200 ease-in-out"
                >Contact</NuxtLink
              >
            </li>
            <li v-if="!user">
              <button
                @click="showAuthModal('signin')"
                class="text-primary p-2 md:hover:bg-green-600 md:hover:text-white rounded-md transition-all duration-200 ease-in-out"
              >
                Sign In
              </button>
            </li>
            <li v-else>
              <NuxtLink
                to="/dashboard"
                class="text-primary p-2 md:hover:bg-primary md:hover:text-white rounded-md transition-all duration-200 ease-in-out"
                >Dashboard</NuxtLink
              >
              <button
                @click="signOut"
                class="text-red-500 ml-3 p-2 md:hover:bg-red-500 md:hover:text-white rounded-md transition-all duration-200 ease-in-out"
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <AuthModal
      v-if="isAuthModalVisible"
      :visible="isAuthModalVisible"
      v-model:mode="authMode"
      @close="isAuthModalVisible = false"
      @authenticated="onAuthenticated"
    />
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMenuOpen = ref(false);
const user = useSupabaseUser();
const supabase = useSupabaseClient();
const isAuthModalVisible = ref(false);
const authMode = ref("signin");

const showAuthModal = (mode) => {
  authMode.value = mode;
  isAuthModalVisible.value = true;
};

const onAuthenticated = () => {
  isAuthModalVisible.value = false;
};

const signOut = async () => {
  await supabase.auth.signOut();
  navigateTo("/");
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleResize = () => {
  if (window.innerWidth >= 768) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
@media (min-width: 768px) {
  .md\:flex {
    display: flex;
  }
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: max-height 0.3s ease-in-out;
}
.slide-down-enter,
.slide-down-leave-to {
  max-height: 0;
  overflow: hidden;
}
.slide-down-enter-active {
  max-height: 500px;
}
</style>
