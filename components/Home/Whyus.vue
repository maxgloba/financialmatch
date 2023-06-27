<template>
  <div class="whyus">
    <div class="container">
      <h2>Why Financial Match?</h2>
      <div class="whyus--row">
        <div class="whyus--item whyus--1"></div>
        <div class="whyus--item whyus--2">
          <p>
            Listening. Understanding. Identifying. <br><br>
            Our financial experts listen to you. <br><br>
            We understand your specific business needs. <br><br>
            We identify the best way to help you maximize your ERC credits. <br><br>
            Let us help you utilize this key government program to get the funding you need.
          </p>
        </div>
        <div class="whyus--item whyus--3 whyus--hide"></div>
        <div class="whyus--item whyus--4">
          <div class="whyus--box animate__animated" data-anim="fadeIn">
            <span>05</span>
            <h5>Honesty & Accuracy</h5>
            <h6>Financial Match is built with integrity. You need honest financial analysis when dealing with the IRS, and our goal in delivering results is to be fast and accurate.</h6>
          </div>
        </div>
        <div class="whyus--item whyus--5">
          <div class="whyus--box animate__animated" data-anim="fadeIn">
            <span>01</span>
            <h5>Licensed CPAs</h5>
            <h6>Having real accountants review your documents is absolutely necessary when dealing with the IRS. That’s why we use them for your ERC review.</h6>
          </div>
        </div>
        <div class="whyus--item whyus--6 whyus--hide"></div>
        <div class="whyus--item whyus--7">
          <div class="whyus--box animate__animated" data-anim="fadeIn">
            <span>04</span>
            <h5>No Upfront Fees</h5>
            <h6>We don’t get paid unless you get paid. Our success only happens when we win for you.</h6>
          </div>
        </div>
        <div class="whyus--item whyus--8 whyus--hide"></div>
        <div class="whyus--item whyus--9 whyus--hide"></div>
        <div class="whyus--item whyus--10">
          <div class="whyus--box animate__animated" data-anim="fadeIn">
            <span>02</span>
            <h5>Multiple Ways To Qualify</h5>
            <h6>You need an advisor that can help you look at every way you may qualify; Financial Match has the knowledge to get you the max ERC credit possible.</h6>
          </div>
        </div>
        <div class="whyus--item whyus--11">
          <div class="whyus--box animate__animated" data-anim="fadeIn">
            <span>03</span>
            <h5>Integrity Over Profit</h5>
            <h6>We get max results, but we NEVER compromise our clients’ integrity to do it.</h6>
          </div>
        </div>
        <div class="whyus--item whyus--12 whyus--hide"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.whyus{
  padding-top: 80px;
  @media(min-width:992px){
    padding-top: 160px;
  }
  &--row{
    display: flex;
    flex-wrap: wrap;
  }
  &--item{
    width: 50%;
    min-height: 253px;
    padding: 12px;
    display: flex;
    @media(max-width:767px){
      order: 10;
    }
    @media(min-width:576px){
      padding: 16px;
    }
    @media(min-width:768px){
      width: 25%;
      min-height: 238px;
      padding: 20px;
    }
  }
  &--hide{
    @media(max-width:767px){
      display: none;
    }
  }
  &--1{
    @media(max-width:767px){
      order: 1;
    }
  }
  &--2{
    @media(max-width:767px){
      order: 0;
      width: 100%;
      min-height: 0px;
      padding-bottom: 32px;
      padding-left: 0;
      padding-right: 0;
    }
  }
  &--3{}
  &--4{
    border: 2px solid #D5D4D4;
    @media(max-width:767px){
      order: 6;
      border-radius: 0px 0px 10px 0px;
    }
    @media(min-width:768px){
      margin-left: -4px;
      border-radius: 0px 10px 10px 0px;
    }
  }
  &--5{
    border: 2px solid #D5D4D4;
    border-radius: 0px 10px 0px 0px;
    @media(max-width:767px){
      order: 2;
      border-bottom: 1px;
    }
    @media(min-width:768px){
      border-radius: 10px 0px 0px 10px;
      margin-left: 2px;
    }
  }
  &--6{}
  &--7{
    border: 2px solid #D5D4D4;
    @media(max-width:767px){
      order: 5;
      border-radius: 0px 0px 0px 10px;
      border-right: 1px;
    }
    @media(min-width:768px){
      margin-left: -4px;
    }
  }
  &--8{}
  &--9{}
  &--10{
    border: 2px solid #D5D4D4;
    @media(max-width:767px){
      order: 3;
      border-radius: 10px 0px 0px 0px;
      border-bottom: 1px;
      border-right: 1px;
    }
    @media(min-width:768px){
      margin-top: -2px;
    }
  }
  &--11{
    border: 2px solid #D5D4D4;
    @media(max-width:767px){
      order: 4;
      border: 2px solid #D5D4D4;
      border-bottom: 1px;
    }
    @media(min-width:768px){
      margin-left: -2px;
      margin-top: -2px;
    }
  }
  &--12{}
  h2{
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    color: var(--text-black);
    margin-bottom: 16px;
    @media(min-width:768px){
      font-size: 56px;
      margin-bottom: 32px;
    }
  }
  p{
    font-weight: 600;
    font-size: 20px;
    line-height: 130%;
    color: var(--text-black);
  }
  &--box{
    position: relative;
    padding-left: 34px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media(min-width:992px){
      padding-left: 58px;
    }
    @media(min-width:1200px){
      padding-left: 84px;
    }
    h5{
      font-weight: 600;
      font-size: 16px;
      line-height: 130%;
      color: var(--brand-blue);
      padding-top: 2px;
      margin-bottom: 16px;
      @media(min-width:768px){
        font-size: 20px;
        padding-top: 10px;
        margin-bottom: 0;
      }
    }
    h6{
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;
      margin-left: -34px;
      @media(min-width:768px){
        font-size: 16px;
        margin-left: 0;
      }
    }
    span{
      position: absolute;
      left: 0; top: 0;
      font-weight: 400;
      font-size: 20px;
      line-height: 130%;
      color: var(--brand-blue);
      @media(min-width:768px){
        font-size: 32px;
      }
    }
  }
}
</style>