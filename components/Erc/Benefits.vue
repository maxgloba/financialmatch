<template>
  <div class="whyus">
    <div class="container">
      <h2>Our benefits</h2>
      <div class="whyus--row">
        <div class="whyus--item whyus--1">
          <div class="whyus--box animate__animated" data-anim="fadeIn">
            <span>01</span>
            <h5>CPA’s</h5>
            <h6>Each account is overseen by a licensed CPA</h6>
          </div>
        </div>
        <div class="whyus--item whyus--2">
          <div class="whyus--box animate__animated" data-anim="fadeIn">
            <span>02</span>
            <h5>+$26,000</h5>
            <h6>We make sure all numbers are accurate and fit within ERC regulations so you can “sleep well at night”</h6>
          </div>
        </div>
        <div class="whyus--item whyus--3 whyus--hide"></div>
        <div class="whyus--item whyus--4">
          <div class="whyus--box animate__animated" data-anim="fadeIn">
            <span>06</span>
            <h5>Can qualify even if you got PPP</h5>
            <h6>There are many ways to qualify, even if your CPA didn’t think you could qualify. We’re conservative, but qualify you for as much as possible</h6>
          </div>
        </div>
        <div class="whyus--item whyus--5  whyus--hide"></div>
        <div class="whyus--item whyus--6">
          <div class="whyus--box animate__animated" data-anim="fadeIn">
            <span>03</span>
            <h5>$200k</h5>
            <h6>Our ERC experts will take care of the paperwork so you can focus on running your business</h6>
          </div>
        </div>
        <div class="whyus--item whyus--7">
          <div class="whyus--box animate__animated" data-anim="fadeIn">
            <span>04</span>
            <h5>Up to $26,000 per w2 employee kept on payroll</h5>
            <h6>Can qualify for multiple quarters in 2020 and 2021, up to $26,000 per W2 employee. Average credit is $200,000+</h6>
          </div>
        </div>
        <div class="whyus--item whyus--8">
          <div class="whyus--box animate__animated" data-anim="fadeIn">
            <span>05</span>
            <h5>Reasonable fee only after you receive credit</h5>
            <h6>Reasonable fee only after you receive credit</h6>
          </div>
        </div>
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
    @media(min-width:992px){
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
    border: 2px solid #D5D4D4;
    border-radius: 10px 0px 0px 0px;
    @media(min-width:992px){
      border-radius: 10px 0px 0px 10px;
    }
  }
  &--2{
    @media(max-width:991px){
      border: 2px solid #D5D4D4;
      border-left: none;
      border-radius: 0px 10px 0px 0px;
    }
    @media(min-width:992px){
      border: 2px solid #D5D4D4;
      border-left: none;
    }
  }
  &--3{
    @media(min-width:992px){
      border-bottom: 2px solid #D5D4D4;
    }
  }
  &--4{
    @media(max-width:991px){
      order: 20;
      border: 2px solid #D5D4D4;
      border-top: none;
      border-left: 0;
      border-radius: 0px 0px 10px 0px;
    }
    @media(min-width:992px){
      border: 2px solid #D5D4D4;
      border-radius: 0px 10px 0px 0px;
    }
  }
  &--5{}
  &--6{
    @media(max-width:991px){
      border: 2px solid #D5D4D4;
      border-top: none;
    }
    @media(min-width:992px){
      border: 2px solid #D5D4D4;
      border-top: none;
    }
  }
  &--7{
    @media(max-width:991px){
      border: 2px solid #D5D4D4;
      border-left: none;
      border-top: none;
    }
    @media(min-width:992px){
      border: 2px solid #D5D4D4;
      border-left: none;
      border-right: none;
      border-top: none;
    }
  }
  &--8{
    @media(max-width:991px){
      border: 2px solid #D5D4D4;
      border-top: none;
      border-radius: 0px 0px 0px 10px;
    }
    @media(min-width:992px){
      border: 2px solid #D5D4D4;
      border-top: none;
      border-radius: 0px 0px 10px 0px;
    }
  }
  h2{
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    color: var(--text-black);
    margin-bottom: 16px;
    @media(min-width:992px){
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
      padding-left: 65px;
    }
    h5{
      font-weight: 600;
      font-size: 16px;
      line-height: 130%;
      color: var(--brand-blue);
      padding-top: 2px;
      margin-bottom: 16px;
      @media(min-width:992px){
        font-size: 20px;
        padding-top: 10px;
        margin-bottom: 16px;
      }
    }
    h6{
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;
      margin-left: -34px;
      @media(min-width:992px){
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
      @media(min-width:992px){
        font-size: 32px;
      }
    }
  }
}
</style>