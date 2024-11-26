<template>
  <section class="py-20 md:px-12 px-10 font-nunitosans">
    <h1 class="text-4xl font-bold text-center mb-10">Pricing Plans</h1>
    <div
      class="max-w-[1050px] mx-auto flex flex-col md:flex-row gap-8 justify-center z-30"
    >
      <div class="relative space-y-2 w-full max-w-lg mx-auto md:mx-0">
        <div
          class="border rounded-lg p-6 transition-all duration-300 ease-in-out flex-1 bg-white"
        >
          <h2 class="text-2xl font-bold mb-4">Regular Plan</h2>
          <p class="text-4xl font-extrabold mb-4">
            $299<span class="text-lg">/mo</span>
          </p>
          <ul class="list-disc list-inside">
            <li
              v-for="(feature, index) in regularPlan.features.slice(0, 5)"
              :key="index"
              class="mb-2"
            >
              {{ feature }}
            </li>
          </ul>
          <transition name="accordion">
            <div
              v-show="isRegularExpanded"
              class="overflow-hidden transition-all duration-300"
            >
              <ul class="list-disc list-inside">
                <li
                  v-for="(feature, index) in regularPlan.features.slice(5)"
                  :key="index"
                  class="mb-2"
                >
                  {{ feature }}
                </li>
              </ul>
            </div>
          </transition>
          <button
            @click="toggleRegularFeatures"
            class="px-1 text-primary mb-4 md:hover:bg-primary md:hover:text-white rounded-md transition-all duration-200 ease-in-out"
          >
            {{ isRegularExpanded ? "See Less" : "See More" }}
          </button>
          <button
            @click="choosePlan('Regular')"
            :class="getButtonClass(isButtonDisabled('Regular'))"
            :disabled="isButtonDisabled('Regular')"
            class="w-full mt-4"
          >
            {{ getButtonLabel("Regular") }}
          </button>
        </div>
      </div>

      <div class="relative space-y-2 w-full max-w-lg mx-auto md:mx-0">
        <div
          class="border rounded-lg p-6 transition-all duration-300 ease-in-out flex-1 bg-white"
        >
          <h2 class="text-2xl font-bold mb-4">Premium Plan</h2>
          <p class="text-4xl font-extrabold mb-4">
            $399<span class="text-lg">/mo</span>
          </p>
          <ul class="list-disc list-inside">
            <li
              v-for="(feature, index) in premiumPlan.features.slice(0, 5)"
              :key="index"
              class="mb-2 first:text-green-600 first:font-semibold"
            >
              {{ feature }}
            </li>
          </ul>
          <transition name="accordion">
            <div
              v-show="isPremiumExpanded"
              class="overflow-hidden transition-all duration-300"
            >
              <ul class="list-disc list-inside mb-6">
                <li
                  v-for="(feature, index) in premiumPlan.features.slice(5)"
                  :key="index"
                  class="mb-2"
                >
                  {{ feature }}
                </li>
              </ul>
            </div>
          </transition>
          <button
            @click="togglePremiumFeatures"
            class="px-1 text-primary mb-4 md:hover:bg-primary md:hover:text-white rounded-md transition-all duration-200 ease-in-out"
          >
            {{ isPremiumExpanded ? "See Less" : "See More" }}
          </button>
          <button
            @click="choosePlan('Premium')"
            :class="getButtonClass(isButtonDisabled('Premium'))"
            :disabled="isButtonDisabled('Premium')"
            class="w-full mt-4"
          >
            {{ getButtonLabel("Premium") }}
          </button>
        </div>
      </div>
    </div>

    <div
      class="max-w-[510px] md:max-w-[1050px] flex flex-col justify-center mx-auto md:mt-16 mt-8 border rounded-md"
    >
      <p class="mb-4 p-4">
        Both plans are designed to provide you with the tools and features you
        and your business need to succeed. Whether you're opting for our regular
        plan or upgrading to premium, you'll enjoy reliable access to essential
        services, a user-friendly experience, and support to help you get the
        most out of your plan. The regular plan covers the basics for everyday
        use, while the premium plan offers enhanced functionality, priority
        support, and additional customization options for those looking to
        elevate their experience.
      </p>
      <p class="p-4 pt-0">
        Please take a look at our
        <NuxtLink
          to="/legal"
          class="text-black font-bold md:hover:underline underline-offset-4 decoration-2 md:hover:animate-pulse md:hover:text-primary rounded-md transition-all duration-200 ease-in-out"
          >legal</NuxtLink
        >
        page to get more familiar with the terms and conditions of the
        subscription.
      </p>
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
import { ref, onMounted } from "vue";

const user = useSupabaseUser();
const supabase = useSupabaseClient();
const isAuthModalVisible = ref(false);
const authMode = ref("signup");
const userProfile = ref(null);

const isRegularExpanded = ref(false);
const isPremiumExpanded = ref(false);

const regularPlan = {
  name: "Regular",
  price: 299,
  features: [
    "Custom Website Design",
    "Integration with Social Media",
    "Stock Images and Image Editing",
    "Scalability",
    "Basic Search Engine Optimization (SEO)",
    "Website & Web Hosting Support and Maintenance",
    "Content Management System (CMS) and Training",
    "Clear and Transparent Costings and Prices",
    "Mobile Responsive Design",
    "Domain Assistance",
    "Analytics Integration",
    "Design Services",
    "Submit Your Website to Google",
    "Color Scheme Consultation",
    "Typography Guidance",
    "Management Services",
  ],
};

const premiumPlan = {
  name: "Premium",
  price: 399,
  features: [
    "All Regular Plan Features Plus:",
    "24/7 Customer Support",
    "E-commerce Capabilities",
    "Payment Processing Built into Website",
    "Personal Website Training",
    "End User Licence Agreement (EULA)",
    "Photograph Services",
    "Flexible and Scalable Platform",
  ],
};

onMounted(() => {
  if (user.value) {
    fetchUserProfile();
  }
});

const fetchUserProfile = async () => {
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

const getButtonLabel = (planName) => {
  if (!user.value) {
    return "Sign Up Now";
  }
  if (userProfile.value?.plan === planName) {
    return "Active";
  }
  if (planName === "Premium") {
    return userProfile.value?.plan === "Regular" ? "Upgrade" : "Choose Plan";
  }
  if (planName === "Regular") {
    return userProfile.value?.plan === "Premium" ? "Downgrade" : "Choose Plan";
  }
  return "Choose Plan";
};

const isButtonDisabled = (planName) => {
  if (!user.value) {
    return false;
  }
  return userProfile.value?.plan === planName;
};

const getButtonClass = (disabled) => {
  return [
    "px-4",
    "py-2",
    "rounded",
    disabled
      ? "bg-gray-400 text-white px-6 py-3 border-2 border-gray-400 cursor-not-allowed"
      : "bg-primary text-white px-6 py-3 md:hover:bg-white border-2 md:hover:text-primary border-primary md:hover:shadow-md rounded-md transition-all duration-200 ease-in-out",
  ];
};

const choosePlan = async (planName) => {
  if (!user.value) {
    authMode.value = "signup";
    isAuthModalVisible.value = true;
  } else {
    const { error } = await supabase
      .from("profiles")
      .update({ plan: planName })
      .eq("id", user.value.id);
    if (error) {
      console.error("Error updating plan:", error);
    } else {
      await fetchUserProfile();
      alert(`You have selected the ${planName} plan.`);
    }
  }
};

const onAuthenticated = () => {
  isAuthModalVisible.value = false;
  fetchUserProfile();
};

const toggleRegularFeatures = () => {
  isRegularExpanded.value = !isRegularExpanded.value;
};

const togglePremiumFeatures = () => {
  isPremiumExpanded.value = !isPremiumExpanded.value;
};

const getRegularFeatures = () => {
  return isRegularExpanded.value
    ? regularPlan.features.slice(0, 5)
    : regularPlan.features.slice(0, 5);
};

const getPremiumFeatures = () => {
  return isPremiumExpanded.value
    ? premiumPlan.features.slice(0, 5)
    : premiumPlan.features.slice(0, 5);
};
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.3s ease-in-out;
}
.accordion-enter,
.accordion-leave-to {
  max-height: 0;
}
</style>
