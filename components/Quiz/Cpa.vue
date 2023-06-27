<template>
  <section class="cpa">
    <div class="container">
      <div class="cpa__item animate__animated" data-anim="fadeInUp">
        <h3>CPA’s</h3>
        <p>Each account is overseen by a licensed CPA who provides full ERC Audit protection</p>
      </div>
      <div class="cpa__item animate__animated" data-anim="fadeInUp" data-delay="100">
        <h3>+$26,000</h3>
        <p>Payout for each employee with NO cap on max credit received!</p>
      </div>
      <div class="cpa__item animate__animated" data-anim="fadeInUp" data-delay="200">
        <h3>$200k</h3>
        <p>Average Credit Size per ERC Application</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cpa{
  padding-top: 80px;
  @media(min-width:992px){
    padding-top: 160px;
  }
  .container{
    border-top: 1px solid var(--bg-lightgray);
    padding-top: 40px;
    @media(max-width:991px){
      padding-left: 100px;
    }
    @media(min-width:992px){
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 100px;
    }
  }
  &__item{
    &:not(:first-child){
      margin-top: 32px;
      @media(min-width:992px){
        margin-top: 0;
      }
    }
  }
  h3{
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    color: var(--bg-green);
    margin-bottom: 8px;
    @media(min-width:992px){
      font-size: 56px;
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
