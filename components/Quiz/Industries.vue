<template>
  <section class="industries">
    <div class="container">
      <div class="industries__item animate__animated" data-anim="fadeInUp">
        <h3>Conservative and Honest Numbers for “Sleep Well at Night” ERC Audit Protection</h3>
        <p>Our team works with you during the entire ERC filing process. We make sure all numbers are accurate and fit within ERC regulations.</p>
      </div>
      <div class="industries__item animate__animated" data-anim="fadeInUp">
        <h3>Our Licensed Professionals Do All The Hard Work</h3>
        <p>We have a dream team of ERC experts who take care of paperwork so you can focus on running your business.</p>
      </div>
      <div class="industries__item animate__animated" data-anim="fadeInUp">
        <h3>No Collateral, Personal Guarantee or Credit Check</h3>
        <p>No Collateral, Personal Guarantee or Credit Check Because this is a tax credit from the IRS and not a loan, there is no collateral, personal guarantees or credit check required to receive the tax credit.</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.industries{
  padding-top: 80px;
  @media(min-width:992px){
    padding-top: 160px;
  }
  .container{
    border-top: 1px solid var(--bg-lightgray);
    padding-top: 40px;
  }
  &__item{
    padding-top: 24px;
    padding-bottom: 24px;
    margin-left: 100px;
    @media(min-width:992px){
      margin-left: 45%;
    }
    &:not(:first-child){
      border-top: 2px solid var(--bg-lightgray);
    }
  }
  h3{
    font-weight: 600;
    font-size: 22px;
    line-height: 130%;
    color: var(--text-black);
    margin-bottom: 8px;
    @media(min-width:992px){
      font-size: 32px;
    }
  }
  p{
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: var(--text-black);
    @media(min-width:992px){
      font-size: 18px;
    }
  }
}
</style>
