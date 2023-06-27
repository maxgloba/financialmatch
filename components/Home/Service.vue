<template>
  <div class="service">
    <div class="container">
      <h2>The “Done For You” <br>ERC Service</h2>
      <h4>Financial Match <br>simplifies the complicated.</h4>
      <div class="service--row">
        <div class="service--item">
          <h5>ERC Regulations</h5>
          <p>We make sure every number is accurate and fits within ERC regulations so you can “sleep well at night”.</p>
        </div>
        <div class="service--item">
          <h5>Experts</h5>
          <p>Our ERC experts will handle the paperwork for you, letting you focus on your business.</p>
        </div>
        <div class="service--item">
          <h5>Licensed CPAs</h5>
          <p>Each account is overseen by a licensed CPA.</p>
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
  h5{
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: var(--text-black);
    margin-bottom: 4px;
    @media(min-width:768px){
      font-size: 32px;
      margin-bottom: 8px;
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