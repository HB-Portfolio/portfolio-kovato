<template>
  <section class="py-20 font-nunitosans">
    <div class="max-w-[1050px] mx-auto px-8 md:px-14">
      <div class="flex flex-col">
        <h1 class="text-5xl font-semibold font-spacemono mb-6 text-center">
          Welcome to Kovato
        </h1>
        <img
          class="flex justify-center items-center align-middle max-h-28"
          src="/public/images/logo-short.svg"
        />
        <p class="text-xl mb-12 mt-4 text-center text-primary">
          The Future of Web Design and Development.
        </p>
      </div>

      <div class="max-w-3xl mx-auto">
        <p class="mb-6">
          At <strong>Kovato</strong>, we're transforming how businesses approach
          web and app design. Typically, getting a website or web app developed
          requires a hefty upfront payment—anywhere between $3,000 to $20,000,
          depending on your needs. We understand that securing such capital
          expenses can be difficult.
        </p>
        <p class="mb-6">
          That's why we've introduced a flexible, monthly subscription model for
          our exceptional web and app development services. This approach allows
          you to integrate the costs into your operating expenses, saving you
          time, money, and effort.
        </p>

        <h2 class="text-3xl font-bold mb-4 mt-24">
          Built with Modern Frameworks
        </h2>
        <p class="mb-6">
          Our websites and apps are developed using cutting-edge frameworks like
          <strong>Nuxt</strong>, <strong>Vue</strong>, and
          <strong>React</strong>. Unlike traditional website builders such as
          WordPress, Wix, and Webflow—which are often plagued with
          vulnerabilities—we ensure that your digital presence is secure,
          efficient, and scalable.
        </p>
        <p class="mb-6">
          We guarantee the quality and security of our code by scanning it with
          our internal proprietary tool based on<a
            href="https://quick-snyk.onrender.com"
            target="_blank"
            class="text-primary px-1 md:hover:bg-primary md:hover:text-white rounded-md transition-all duration-200 ease-in-out"
            >Quick Snyk</a
          >. This ensures that your website or app is free from known
          vulnerabilities and adheres to industry best practices.
        </p>

        <section class="mb-12 mt-14">
          <h2 class="text-3xl font-bold mb-6 text-center">Our Plans</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              class="flex flex-col justify-center border-2 rounded-lg p-6 text-center"
            >
              <img src="/public/images/silver-coin.svg" class="max-h-60 mb-6" />
              <h3 class="text-2xl font-bold mb-4 text-primary">Regular Plan</h3>
              <p class="mb-2">
                Ideal for standard websites that provide information about your
                business without complex functionalities.
              </p>
            </div>

            <div
              class="flex flex-col justify-center border-2 rounded-lg p-6 text-center"
            >
              <img src="/public/images/gold-coin.svg" class="max-h-60 mb-6" />
              <h3 class="text-2xl font-bold mb-4 text-primary">Premium Plan</h3>
              <p class="mb-2">
                Suited for more complex projects, including e-commerce
                capabilities and custom applications.
              </p>
            </div>
          </div>
          <div class="text-center mt-10">
            <NuxtLink
              to="/pricing"
              class="bg-primary text-white px-6 py-3 md:hover:bg-white border-2 md:hover:text-primary border-primary md:hover:shadow-md rounded-md transition-all duration-200 ease-in-out"
            >
              Explore Our Plans
            </NuxtLink>
          </div>
        </section>

        <section class="pt-8">
          <h2 class="text-3xl font-bold mb-4">About the Founder</h2>
          <p>
            Kovato was founded by a passionate developer and designer committed
            to making high-quality web solutions accessible to businesses of all
            sizes. With extensive experience in the industry, our founder
            recognizes the challenges companies face when investing in digital
            infrastructure. This understanding drives our mission to offer
            exceptional services without the burden of large upfront costs.
          </p>
        </section>
      </div>
    </div>

    <AuthModal
      v-if="isAuthModalVisible"
      :visible="isAuthModalVisible"
      v-model:mode="authMode"
      @close="isAuthModalVisible = false"
      @authenticated="onAuthenticated"
    />
  </section>
</template>

<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();
const userProfile = ref(null);

const isAuthModalVisible = ref(false);
const authMode = ref("signup");

const showAuthModal = (mode) => {
  authMode.value = mode;
  isAuthModalVisible.value = true;
};

const onAuthenticated = () => {
  fetchUserProfile();
  isAuthModalVisible.value = false;
};

const fetchUserProfile = async () => {
  if (!user.value) return;
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.value.id)
    .single();
  if (data) {
    userProfile.value = data;
  } else {
    console.error("Error fetching profile:", error);
  }
};

onMounted(() => {
  if (user.value) {
    fetchUserProfile();
  }
});
</script>
