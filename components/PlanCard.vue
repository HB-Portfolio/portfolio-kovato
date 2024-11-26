<template>
  <div class="border rounded-lg p-6 text-center">
    <h2 class="text-2xl font-bold mb-4">{{ plan.name }}</h2>
    <p class="text-4xl font-extrabold mb-4">
      ${{ plan.price }}<span class="text-lg">/mo</span>
    </p>
    <ul class="mb-6">
      <li v-for="feature in plan.features" :key="feature" class="mb-2">
        {{ feature }}
      </li>
    </ul>
    <button
      @click="$emit('choosePlan', plan.name)"
      :class="buttonClass"
      :disabled="buttonDisabled"
    >
      {{ buttonLabel }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  plan: {
    type: Object,
    required: true,
  },
  buttonLabel: {
    type: String,
    default: "Choose Plan",
  },
  buttonDisabled: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["choosePlan"]);

const buttonClass = computed(() => {
  return [
    "px-4",
    "py-2",
    "rounded",
    props.buttonDisabled
      ? "bg-gray-400 text-white cursor-not-allowed"
      : "bg-primary text-white",
  ];
});
</script>
