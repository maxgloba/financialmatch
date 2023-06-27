<template>
  <main class="main-wrap">
    <Header />
    <Nuxt />
    <Footer />
    <Transition>
      <Quiz v-if="quiz" />
    </Transition>
    <Transition>
      <Thanks v-if="thanks" />
    </Transition>
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
  },
  computed: {
    quiz(){ return this.$store.getters.getQuiz },
    thanks(){ return this.$store.getters.getThanks }
  }
}
</script>