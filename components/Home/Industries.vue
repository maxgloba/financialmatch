<template>
  <div class="industries">
    <div class="container">
      <h2>Industries <br>we’ve helped</h2>
      <div class="industries--row">
        <div class="industries--left">
          <h3>We’ve helped clients of all sizes and across multiple different industries</h3>
          <button v-if="winWidth > 991" @click="$store.commit('setQuiz', true)" class="btn">Check eligibility</button>
        </div>
        <div class="industries--right">
          <div class="industries--item">
            Construction
            <span>1</span>
          </div>
          <div class="industries--item">
            Restaurants / QSR
            <span>2</span>
          </div>
          <div class="industries--item">
            Warehouse / 3PL
            <span>3</span>
          </div>
          <div class="industries--item">
            Business Services
            <span>4</span>
          </div>
          <div class="industries--item">
            Retail
            <span>5</span>
          </div>
          <div class="industries--item">
            Mechanical Supplies
            <span>6</span>
          </div>
        </div>
      </div>
      <button v-if="winWidth < 992" @click="$store.commit('setQuiz', true)" class="btn">Check eligibility</button>
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
.industries{
  padding: 80px 0;
  @media(min-width:992px){
    padding: 160px 0;
  }
  &--row{
    margin-bottom: 30px;
    @media(min-width:768px){
      display: flex;
      margin-bottom: 0;
    }
  }
  &--left{
    border-top: 2px solid #D9D9D9;
    padding-top: 22px;
    padding-bottom: 32px;
    @media(min-width:768px){
      width: 50%;
      padding-bottom: 0;
    }
  }
  &--right{
    @media(min-width:768px){
      width: 50%;
    }
  }
  &--item{
    border-top: 2px solid #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: var(--text-black);
    display: flex;
    justify-content: space-between;
    height: 74px;
    align-items: center;
    @media(min-width:768px){
      font-size: 32px;
      height: 90px;
    }
    span{
      font-weight: 400;
      font-size: 20px;
      line-height: 130%;
      text-align: right;
      color: var(--bg-gray);
      @media(min-width:768px){
        font-size: 32px;
      }
    }
  }
  h2{
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    color: var(--text-black);
    margin-bottom: 32px;
    @media(max-width:767px){
      br{display: none;}
    }
    @media(min-width:768px){
      font-size: 56px;
    }
  }
  h3{
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: var(--bg-gray);
    @media(max-width:767px){
      br{display: none;}
    }
    @media(min-width:768px){
      font-size: 32px;
      max-width: 344px;
      margin-bottom: 32px;
    }
  }
}
</style>