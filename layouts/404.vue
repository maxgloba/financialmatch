<template>
  <main class="main-wrap 404">
    <Nuxt />
  </main>
</template>

<script>
export default{
  mounted(){
    this.$mgAnimation()
    window.addEventListener('scroll', e => this.$mgAnimation())
  },
  watch: {
    $route(to, from) {
      this.$mgAnimation()
    }
  }
}
</script>