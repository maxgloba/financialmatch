<template>
  <div class="works">
    <div class="container">
      <h2>How it works</h2>
      <div class="works--row">
        <div class="works--item works--item-no"></div>
        <div class="works--item animate__animated" data-anim="fadeInUp" data-delay="100">
          <h3>Take the Qualification Quiz</h3>
          <span>01</span>
        </div>
        <div class="works--item animate__animated" data-anim="fadeInUp" data-delay="200">
          <h3>Fill Out Application (Online or Phone)</h3>
          <span>02</span>
        </div>
        <div class="works--item animate__animated" data-anim="fadeInUp" data-delay="300">
          <h3>Work With Our Team to Get Docs and Info</h3>
          <span>03</span>
        </div>
        <div class="works--item animate__animated" data-anim="fadeInUp" data-delay="400">
          <h3>Processing, Submission and Payment from IRS</h3>
          <span>04</span>
        </div>
        <div class="works--item works--item-no"></div>
        <div class="works--item works--item-no"></div>
        <div class="works--item works--item-no"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.works{
  padding-top: 80px;
  @media(min-width:992px){
    padding-top: 160px;
  }
  h2{
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    margin-bottom: 32px;
    @media(min-width:768px){
      font-size: 56px;
    }
  }
  &--row{
    display: flex;
    flex-wrap: wrap;
  }
  &--item{
    width: 50%;
    min-height: 253px;
    padding: 16px;
    display: flex;
    border: 2px solid var(--bg-lightgray);
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    @media(min-width:768px){
      width: 25%;
      min-height: 238px;
      padding: 24px;
    }
    &-no{
      border: none;
      @media(max-width:767px){
        display: none;
      }
    }
    &:nth-child(2){
      @media(max-width:767px){
        border-radius: 10px 0 0 0;
      }
    }
    &:nth-child(3){
      @media(max-width:767px){
        border-radius: 0 10px 0 0;
      }
      @media(min-width:768px){
        border-left-width: 1px;
      }
    }
    &:nth-child(4){
      @media(min-width:768px){
        border-radius: 0px 10px 10px 0px;
        border-left-width: 1px;
      }
    }
    &:nth-child(5){
      @media(min-width:768px){
        border-radius: 10px 0px 0px 10px;
        right: -2px;
        top: -2px;
      }
    }
  }
  h3{
    font-weight: 600;
    font-size: 20px;
    font-size: clamp(16px, 1.4cqi, 20px);
    line-height: 140%;
    color: #0E0E11;
    margin-bottom: 23px;
  }
  span{
    font-weight: 400;
    font-size: clamp(80px, 9cqi, 130px);
    line-height: 130%;
    color: #30785D;
    display: block;
  }
}
</style>