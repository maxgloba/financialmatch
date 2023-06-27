<template>
  <div class="works">
    <div class="container">
      <h2>How it works</h2>
      <div class="works--row">
        <div class="works--item"></div>
        <div class="works--item animate__animated" data-anim="fadeInUp" data-delay="100">
          <span>01</span>
          <h5>Take The Qualification Quiz</h5>
          <h6>A quick way to know if you may qualify.</h6>
        </div>
        <div class="works--item animate__animated" data-anim="fadeInUp" data-delay="200">
          <span>02</span>
          <h5>Fill Out The Form</h5>
          <h6>You can do this over the phone or online.</h6>
        </div>
        <div class="works--item animate__animated" data-anim="fadeInUp" data-delay="300">
          <span>03</span>
          <h5>Get Your Documents In Order</h5>
          <h6>Let us help you organize your paperwork and get everything in order for the accountants.</h6>
        </div>
        <div class="works--item animate__animated" data-anim="fadeInUp" data-delay="400">
          <span>04</span>
          <h5>Processing</h5>
          <h6>The accountants review your paperwork and prepare your filing return.</h6>
        </div>
        <div class="works--item animate__animated" data-anim="fadeInUp" data-delay="500">
          <span>05</span>
          <h5>Submission</h5>
          <h6>Let us help you submit your application and update you on the process as it moves through the IRS.</h6>
        </div>
        <div class="works--item animate__animated" data-anim="fadeInUp" data-delay="600">
          <span>06</span>
          <h5>Payment From The IRS</h5>
          <h6>The best part. Receive your money from the Treasure in the form of a check.</h6>
        </div>
        <div class="works--item"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.works{
  background: var(--bg-green);
  padding: 80px 0;
  @media(min-width:992px){
    padding: 160px 0;
  }
  h2{
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    color: var(--text-white);
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
    border: 2px solid #41A280;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    @media(min-width:768px){
      width: 25%;
      min-height: 238px;
      padding: 24px 24px 24px 89px;
    }
    &:first-child, &:last-child{
      border: none;
      @media(max-width:767px){
        display: none;
      }
    }
    &:nth-child(2){
      @media(max-width:767px){
        border-radius: 10px 0 0 0;
      }
      @media(min-width:768px){
        border-bottom-width: 1px;
      }
    }
    &:nth-child(3){
      @media(max-width:767px){
        border-radius: 0 10px 0 0;
      }
      @media(min-width:768px){
        border-left-width: 1px;
        border-bottom-width: 1px;
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
        border-right-width: 1px;
      }
    }
    &:nth-child(6){
      @media(max-width:767px){
        border-radius: 0 0 0 10px;
      }
      @media(min-width:768px){
        border-left-width: 1px;
      }
    }
    &:nth-child(7){
      @media(max-width:767px){
        border-radius: 0 0 10px 0;
      }
      @media(min-width:768px){
        border-left-width: 1px;
      }
    }
  }
  h5{
    font-weight: 600;
    font-size: 16px;
    line-height: 130%;
    color: #fff;
    padding-top: 2px;
    margin-bottom: 16px;
    width: 100%;
    padding-left: 34px;
    @media(min-width:768px){
      padding-left: 0;
      font-size: 20px;
      padding-top: 10px;
      margin-bottom: 0;
    }
  }
  h6{
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    color: #fff;
    width: 100%;
    @media(min-width:768px){
      font-size: 16px;
      margin-left: 0;
    }
  }
  span{
    position: absolute;
    left: 16px; top: 16px;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: #fff;
    @media(min-width:768px){
      font-size: 32px;
      left: 24px; top: 24px;
    }
  }
}
</style>