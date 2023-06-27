<template>
  <div class="owners">
    <div class="container">
      <h4>Most business owners don’t realize they can</h4>
      <h2>Qualify for up to $26,000 <br>for each W2 employee</h2>
      <button @click="$store.commit('setQuiz', true)" class="btn" v-if="winWidth > 767">Check eligibility</button>
      <div class="owners--row">
        <h3>Take advantage of the ERC <br>program today!</h3>
        <div class="owners--right">
          <div class="owners--item">
            <h5>Transparency Guarantee</h5>
            <ul>
              <li>No upfront fees</li>
              <li>No credit check</li>
              <li>This is not a loan</li>
            </ul>
          </div>
          <div class="owners--item">
            <h5>Qualify 1 of 3 Ways</h5>
            <ul>
              <li>Revenue Reduction</li>
              <li>Partial or Full Shutdowns</li>
              <li>Supply Chain Disruptions</li>
            </ul>
          </div>
          <div class="owners--item">
            <h5>Get Money</h5>
            <ul>
              <li>From the IRS - EVEN if you received PPP</li>
            </ul>
          </div>
          <div class="owners--item">
            <h5>No Cap On Refund</h5>
            <ul>
              <li>One 50-employee business received $1.3 million in ERC Credits</li>
            </ul>
          </div>
        </div>
      </div>
      <button @click="$store.commit('setQuiz', true)" class="btn" v-if="winWidth < 768">Check eligibility</button>
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
.owners{
  padding-top: 80px;
  @media(min-width:992px){
    padding-top: 160px;
  }
  h4{
    font-weight: 600;
    font-size: 16px;
    line-height: 130%;
    color: var(--bg-gray);
    margin-bottom: 8px;
    @media(min-width:768px){
      font-size: 20px;
    }
  }
  h2{
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    color: var(--text-black);
    margin-bottom: 32px;
    @media(max-width:767px){
      br{
        display: none;
      }
    }
    @media(min-width:768px){
      font-size: 56px;
    }
  }
  &--row{
    border-top: 1px solid #D5D4D4;
    margin-top: 32px;
    padding-top: 32px;
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      padding-top: 40px;
    }
  }
  h3{
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: var(--bg-gray);
    @media(max-width:767px){
      br{
        display: none;
      }
    }
    @media(min-width:768px){
      font-size: 32px;
      width: 50%;
    }
  }
  &--right{
    margin-bottom: 48px;
    @media(min-width:768px){
      margin-bottom: 0;
      margin-top: -34px;
      display: flex;
      flex-wrap: wrap;
      width: 50%;
    }
  }
  &--item{
    margin-top: 16px;
    @media(max-width:767px){
      padding-left: 86px;
    }
    @media(min-width:768px){
      width: 50%;
      margin-top: 34px;
    }
  }
  h5{
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: var(--text-black);
    margin-bottom: 8px;
    @media(min-width:768px){
      font-size: 32px;
    }
  }
  p, li{
    font-size: 16px;
    line-height: 140%;
    color: var(--text-black);
  }
  ul{
    list-style: outside disc;
    padding-left: 12px;
  }
}
</style>