<template>
  <div class="service">
    <div class="container">
      <h2>Get $26,000 cash <br>for each W2 employee</h2>
      <div class="service--item">
        <p>The ERC Program is currently open, but has been amended in the past. We recommend you claim yours before anything changes.</p>
        <button class="btn" @click.prevent="goToForm">Take 60sec Quiz</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToForm(){
      document.querySelector('.form').scrollIntoView({behavior: "smooth", block: "start"});
    }
  }
}
</script>

<style lang="scss" scoped>
.service{
  padding-top: 80px;
  @media(min-width:992px){
    padding-top: 160px;
  }
  h2{
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    color: var(--text-black);
    margin-bottom: 32px;
    width: 100%;
    @media(min-width:768px){
      margin-bottom: 50px;
      font-size: 56px;
    }
  }
  p{
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    color: var(--text-black);
    margin-bottom: 40px;
    @media(min-width:768px){
      font-size: 32px;
    }
  }
  &--item{
    border-top: 2px solid #D5D4D4;
    margin-top: 32px;
    padding-top: 32px;
    padding-left: 100px;
    @media(min-width:768px){
      margin-top: 40px;
      padding-top: 40px;
      padding-left: 50%;
    }
  }
}
</style>