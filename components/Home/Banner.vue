<template>
  <div class="banner">
    <div class="container">
      <h1 v-if="winWidth < 992" >Have you received your Tax Credit?</h1>
      <div class="banner--box">

        <h1
          class="animate__animated"
          data-anim="fadeInUp"
          data-delay="1000"
          v-if="winWidth > 991">
          Have you received your Tax Credit?
        </h1>

        <h4
          class="animate__animated"
          data-anim="fadeInUp"
          data-delay="1000">
          Let our professionals do the hard work and help you get up to $26,000 per employee with the ERC Program!
        </h4>

        <button
          @click="$store.commit('setQuiz', true)"
          class="btn btn-white animate__animated"
          data-anim="fadeInUp"
          data-delay="1000">
          Check eligibility
        </button>

        <svg
          v-if="winWidth > 991"
          width="1376" height="542" viewBox="0 0 1376 542" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1376 100.357V267.346C1376 272.945 1373.15 277.848 1369.04 279.317L691.474 540.66C689.178 541.546 686.755 542 684.294 542C672.362 542 635.679 542 634.98 542H9.44429C4.23081 542 0 536.44 0 529.588V12.4122C0 5.56036 4.23081 0 9.44429 0H822L1032 542H1224V88L1366.55 87.945C1371.76 87.945 1375.99 93.5054 1375.99 100.357H1376Z" fill="#41A280"/>
          <rect
            class="animate__animated"
            data-anim="heightOut"
            data-duration="400"
            data-parent="2"
            style="opacity: 1;"
            width="987.27"
            height="542"
            fill="#F4EFE5" />
          <rect
            class="animate__animated"
            data-anim="heightOut"
            data-delay="390"
            data-duration="300"
            data-parent="2"
            style="opacity: 1;"
            x="987.275"
            y="335.25"
            width="236.73"
            height="206.75"
            fill="#F4EFE5" />
          <rect
            class="animate__animated"
            data-anim="heightOut"
            data-delay="680"
            data-duration="300"
            data-parent="2"
            style="opacity: 1;"
            x="1224"
            y="88"
            width="152"
            height="247"
            fill="#F4EFE5" />
        </svg>

        <svg
          v-else
          width="343"
          height="203"
          viewBox="0 0 343 203"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M343 37.5877V100.131C343 102.228 342.29 104.065 341.265 104.615L206.307 202.057C205.457 202.67 204.462 203 203.415 203C195.266 203 158.469 203 158.283 203H2.35421C1.05463 203 0 200.917 0 198.351V4.64886C0 2.08257 1.05463 0 2.35421 0H225.5L273.5 203H301V32.9388H340.644C341.944 32.9388 342.999 35.0214 342.999 37.5877H343Z" fill="#41A280"/>
        </svg>

      </div>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      winWidth: 1440
    }
  },
  mounted(){
    this.winWidth = window.innerWidth
    window.addEventListener('resize', e => this.winWidth = window.innerWidth)
  }
}
</script>

<style lang="scss" scoped>
.banner{
  padding-top: 16px;
  @media(min-width:768px){
    padding-top: 32px;
  }
  &--box{
    position: relative;
  }
  h1{
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    color: var(--text-black);
    margin-bottom: 24px;
    @media(min-width:992px){
      margin-bottom: 0;
      position: absolute;
      left: 32px; top: 32px;
      color: var(--text-white);
      width: 57.5%;
      font-size: 36px;
    }
    @media(min-width:1200px){
      font-size: 42px;
    }
    @media(min-width:1400px){
      font-size: 56px;
    }
  }
  h4{
    position: absolute;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: var(--text-white);
    left: 16px;
    width: 190px;
    @media(max-width:991px){
      top: 16px;
    }
    @media(min-width:992px){
      left: 32px; bottom: 32px;
      width: 22.67%;
      font-size: 15px;
    }
    @media(min-width:1200px){
      font-size: 16px;
    }
    @media(min-width:1400px){
      font-size: 20px;
    }
  }
  .btn{
    position: absolute;
    left: 16px;
    bottom: 16px;
    color: var(--text-black);
    font-weight: 600;
    width: 186px;
    padding-left: 0;
    padding-right: 0;
    @media(min-width:992px){
      bottom: 32px;
      left: 36.48%;
    }
  }
  svg{
    display: block;
    width: 100%;
    height: auto;
    @media(max-width:991px){
      max-width: 500px;
    }
  }
}
</style>