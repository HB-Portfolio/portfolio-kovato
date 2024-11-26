<template>
  <section class="py-20 px-8 md:px-12 font-nunitosans">
    <div class="max-w-[1050px] mx-auto">
      <h1 class="text-4xl font-bold mb-2">Account Dashboard</h1>
      <p class="mb-8 text-xl">
        Welcome,
        <span class="text-primary">{{
          userProfile?.username || user.email
        }}</span
        >!
      </p>
      <div class="mb-8 border rounded-lg p-6 pb-10">
        <h2 class="text-3xl font-bold mb-4">Your Plan</h2>
        <p class="mb-8">
          You are currently on the
          <strong>{{ userProfile?.plan || "No Plan" }}</strong> plan.
        </p>
        <NuxtLink
          to="/pricing"
          class="bg-primary text-white px-6 py-3 md:hover:bg-white border-2 md:hover:text-primary border-primary md:hover:shadow-md rounded-md transition-all duration-200 ease-in-out"
          >Change Plan</NuxtLink
        >
      </div>
      <div class="mb-8 border rounded-lg p-6 pb-10">
        <h2 class="text-3xl font-bold mb-4">Billing</h2>
        <p class="mb-4">Your next billing date is: <strong>TBA</strong></p>
        <button
          class="bg-gray-400 text-white px-6 py-3 rounded cursor-not-allowed"
          disabled
        >
          Pay Now
        </button>
        <p class="text-green-600 font-semibold text-sm mt-2 animate-pulse">Coming Soon</p>
      </div>
      <form
        @submit.prevent="updateProfile"
        class="space-y-4 border rounded-lg p-6 pb-10"
      >
        <h2 class="text-3xl font-bold mb-4">Update Profile</h2>
        <div>
          <label class="block mb-1">Full Name:</label>
          <input
            v-model="fullName"
            type="text"
            class="w-full p-2 border rounded"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label class="block mb-1">Current Website (If Any):</label>
          <input
            v-model="website"
            type="url"
            class="w-full p-2 border rounded"
            placeholder="https://yourwebsite.com"
          />
        </div>
        <button
          type="submit"
          class="bg-primary text-white px-6 py-3 md:hover:bg-white border-2 md:hover:text-primary border-primary md:hover:shadow-md rounded-md transition-all duration-200 ease-in-out"
        >
          Update Profile
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();
const userProfile = ref(null);
const fullName = ref("");
const website = ref("");

onMounted(async () => {
  if (!user.value) {
    navigateTo("/");
  } else {
    await fetchUserProfile();
  }
});

const fetchUserProfile = async () => {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.value.id)
    .single();
  if (error) {
    console.error("Error fetching profile:", error);
  } else {
    userProfile.value = data;
    fullName.value = data.full_name || "";
    website.value = data.website || "";
  }
};

const updateProfile = async () => {
  const { error } = await supabase
    .from("profiles")
    .update({
      full_name: fullName.value,
      website: website.value,
      updated_at: new Date(),
    })
    .eq("id", user.value.id);
  if (error) {
    console.error("Error updating profile:", error);
  } else {
    alert("Profile updated successfully!");
  }
};
</script>
