<template>
  <section class="py-20 font-nunitosans px-8">
    <div
      class="max-w-lg lg:max-w-[1050px] mx-auto lg:px-6 grid gap-6 lg:gap-20 lg:grid-cols-2 my-4"
    >
      <article
        class="flex flex-col justify-start items-start gap-6 text-start text-4xl lg:text-5xl leading-tight capitalize"
      >
        <h2>Get In Touch!</h2>
      </article>
      <article
        class="flex flex-col justify-start items-start gap-6 text-start text-lg leading-relaxed"
      >
        <h3 class="text-2xl text-primary">Thank you for visiting Kovato!</h3>
        <p>
          If you have any questions about our services, need assistance, or want
          to share feedback, we're here to help. Drop us a message, and we'll
          get back to you as soon as possible!
        </p>
      </article>
    </div>
    <div
      class="mx-auto max-w-xl lg:max-w-[1050px] border lg:px-12 lg:py-10 px-4 py-6 rounded-md lg:mt-16 my-12"
    >
      <form action="https://formspree.io/f/meoqrqqg" method="POST">
        <div class="mb-4">
          <label class="block text-gray-700">Name</label>
          <input
            v-model="form.name"
            name="name"
            type="name"
            class="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <input
            v-model="form.email"
            name="email"
            type="email"
            class="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Message</label>
          <textarea
            v-model="form.message"
            name="message"
            class="w-full border px-3 py-2 rounded"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-primary text-white px-6 py-3 md:hover:bg-white border-2 md:hover:text-primary border-primary md:hover:shadow-md rounded-md transition-all duration-200 ease-in-out"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
const form = reactive({
  name: "",
  email: "",
  message: "",
});
</script>
