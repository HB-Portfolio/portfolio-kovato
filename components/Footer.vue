<template>
  <footer class="bg-primary shadow-2xl py-4 mt-auto font-spacemono">
    <section
      class="flex flex-col md:flex-row justify-center align-middle items-center mx-auto text-center text-white"
    >
      <article>
        &copy; {{ new Date().getFullYear()
        }}<NuxtLink
          to="/legal"
          class="text-white md:pr-1 pl-2 md:hover:bg-white md:hover:text-primary rounded-md transition-all duration-200 ease-in-out md:hover:mx-10"
          >Kovato.</NuxtLink
        >
      </article>
      <article>All rights reserved.</article>
    </section>
  </footer>
</template>
