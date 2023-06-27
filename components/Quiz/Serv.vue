<template>
  <section class="serv">
    <div class="container">
      <div class="serv__item animate__animated" data-anim="fadeInUp">
        <h3>Reasonable Fee Only After You Receive Credit</h3>
        <p>We only get paid after you do. Most businesses are getting sent checks by the IRS in 5-9 </p>
      </div>
      <div class="serv__item animate__animated" data-anim="fadeInUp" data-delay="100">
        <h3>Up to $26,000 per W2 Employee Kept on Payroll</h3>
        <p>Can qualify for multiple quarters in 2020 and 2021, up to $26,000 per W2 employee. Average credit is $200,000+</p>
      </div>
      <div class="serv__item animate__animated" data-anim="fadeInUp" data-delay="200">
        <h3>Can Qualify Even If You Got a PPP Loan</h3>
        <p>There are many ways to qualify, even if your serv didn’t think you could qualify. We’re conservative, but qualify you for as much as possible</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.serv{
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
      grid-gap: 62px;
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
