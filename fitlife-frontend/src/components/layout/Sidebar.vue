<template>
  <div class="sidebar">
    <h2>FitLife</h2>
    <nav>
      <slot />
    </nav>
  </div>
</template>

<style scoped>
.sidebar {
  width: 240px;
  background: #111827;
  color: white;
  min-height: 100vh;
  padding: 20px;
}
</style>
