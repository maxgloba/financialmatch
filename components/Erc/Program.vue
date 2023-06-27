<template>
  <div class="service">
    <div class="container">
      <h2>Program was not <br>well understood</h2>
      <h4>(Even by many CPA’s), <br> so few took advantage</h4>
      <div class="service--row">
        <div class="service--item">
          <p>The ERC Program has been amended which can help more businesses qualify. Unlike PPP, there is no limit on max amount you can receive.</p>
        </div>
        <div class="service--item">
          <p>ERC is getting more attention as business owners realize they can still take advantage.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.service{
  padding-top: 80px;
  @media(min-width:992px){
    padding-top: 160px;
  }
  h2{
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    color: var(--text-black);
    margin-bottom: 32px;
    width: 100%;
    @media(min-width:768px){
      margin-bottom: 50px;
      font-size: 56px;
    }
  }
  h4{
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: var(--bg-gray);
    border-top: 2px solid #D5D4D4;
    padding-top: 32px;
    @media(max-width:767px){
      br{
        display: none;
      }
    }
    @media(min-width:768px){
      font-size: 32px;
      padding-top: 64px;
      width: 50%;
    }
  }
  p{
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: var(--text-black);
  }
  &--row{
    padding-top: 16px;
    @media(min-width:768px){
      padding-top: 32px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 50%;
      border-top: 2px solid #D5D4D4;
    }
  }
  &--item{
    margin-top: 16px;
    width: calc(100% - 60px);
    margin-left: auto;
    @media(min-width:576px){
      width: calc(100% - 100px);
    }
    @media(min-width:768px){
      width: calc(50% - 16px);
      margin-top: 32px;
    }
  }
  .container{
    @media(min-width:768px){
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>