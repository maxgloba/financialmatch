<template>
  <section class="done">
    <div class="container">
      <h2><span>100%</span> <br>Done-For-You ERC Service <br>from Financial Match</h2>
      <div class="done-row">
        <div class="done-item animate__animated" data-anim="fadeInUp">
          <span>01</span>
          <h3>“Sleep well at night” ERC audit protection</h3>
          <h4>Our team works with you during the entire ERC filing process. We make sure all numbers are accurate and fit within ERC regulations.</h4>
        </div>
        <div class="done-item animate__animated" data-anim="fadeInUp" data-delay="100">
          <span>02</span>
          <h3>Our licensed professionals do all the hard work</h3>
          <h4>We have a dream team of ERC experts who take care of paperwork so you can focus on running your business.</h4>
        </div>
        <div class="done-item animate__animated" data-anim="fadeInUp" data-delay="200">
          <span>03</span>
          <h3>No collateral, personal guarantee or credit check</h3>
          <h4>Because this is a tax credit from the IRS and not a loan, there is no collateral, personal guarantees or credit check required to receive the tax credit.</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.done{
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
    padding-bottom: 40px;
    margin-bottom: 40px;
    border-bottom: 2px solid #41A280;
    @media(min-width:992px){
      font-size: 56px;
    }
    span{
      font-size: 56px;
      @media(min-width:992px){
        font-size: 84px;
      }
    }
  }
  &-row{
    margin-left: 86px;
    @media(min-width:992px){
      display: flex;
      margin-left: 25%;
      justify-content: space-between;
    }
  }
  &-item{
    @media(max-width:991px){
      margin-bottom: 16px;
    }
    @media(min-width:992px){
      width: calc(33% - 31.5px);
    }
    span{
      font-weight: 600;
      font-size: 32px;
      line-height: 130%;
      color: var(--brand-green);
      display: block;
      margin-bottom: 8px;
      @media(min-width:992px){
        font-size: 56px;
      }
    }
  }
  h3{
    margin-bottom: 8px;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: var(--text-white);
    @media(min-width:992px){
      font-size: 32px;
    }
  }
  h4{
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: var(--text-white);
  }
}
</style>
