<template>
  <div class="banner">
    <div class="container">
      <div class="banner--box">
        <div class="banner--left">
          <h4 class="animate__animated" data-anim="fadeInUp">Most Business Owners Don’t Realize They Can Qualify To</h4>
          <h1 class="animate__animated" data-anim="fadeInUp" data-delay="50">“Get $26,000 Cash for Each W2 Employee</h1>
          <p class="animate__animated" data-anim="fadeInUp" data-delay="100">Using the IRS’ ERC Program”</p>
          <ul class="animate__animated" data-anim="fadeInUp" data-delay="150">
            <li>Qualify 1 of 3 Different Ways (Revenue Reduction, Shutdowns, Supply Chain Disruptions)</li>
            <li>Get Money from the IRS, Even If You Got PPP</li>
            <li>No Cap on Refund. Ie. a 50 Employee Business Can Get $1.3 Million!</li>
            <li>No Up Front Fees. No Credit Check. Not a loan.</li>
          </ul>
          <p class="animate__animated" data-anim="fadeInUp" data-delay="200">Take the 60sec Quiz to Find Out If You Qualify, and How Much You Can Get</p>
        </div>
        <div class="banner--right">
          <QuizForm class="animate__animated" data-anim="fadeInUp" data-delay="100" />
        </div>
      </div>
      <div class="banner--images">
        <img v-for="img in 12" :src="require(`@/assets/img/quiz/img-${img}.png`)">
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
    background: var(--bg-green);
    color: var(--text-white);
    padding: 32px 16px;
    border-radius: 16px 0 0 16px;
    @media(min-width:768px){
      padding: 32px;
      display: grid;
      grid-template-columns: 3fr 2fr;
      grid-gap: 30px;
    }
  }
  h1{
    font-size: clamp(28px, 3.9cqi, 56px);
    margin-bottom: 20px;
  }
  h4{
    font-weight: 400;
    font-size: clamp(16px, 1.4cqi, 20px);
    color: #FAFAFA;
    margin-bottom: 20px;
  }
  p, li{
    font-size: clamp(16px, 1.4cqi, 20px);
    font-weight: 600;
  }
  p{
    margin-bottom: 20px;
  }
  li{
    list-style: outside disc;
    line-height: 1.6;
    &:not(:first-child){
      margin-top: 5px;
    }
  }
  ul{
    margin-bottom: 30px;
    padding-left: 15px;
  }
  &--images{
    padding-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    img{
      display: block;
      margin: 7px;
    }
  }
}
</style>