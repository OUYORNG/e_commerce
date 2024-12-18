<script>


</script>

<template>
  <nav class="flex justify-between p-4 bg-red-300">
    <h1>Header</h1>
    <div class="flex gap-4">
      <a href="/Page1">Page1</a>
      <a href="/Page2">Page2</a>
      <a href="/Page3">Page3</a>
    </div>
  </nav>
  <main>
  <RouterView />
  </main>
  <footer class="flex w-full bg-red-300 p-4">
  <h1>This is footer</h1>
  </footer>
</template>
