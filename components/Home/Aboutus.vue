<template>
  <div class="aboutus">
    <div class="container">
      <h2>Featured In</h2>
      <div class="aboutus--row">
        <div v-for="item in 12" class="aboutus--item">
          <img :src="require(`@/assets/img/about/about-${item}.png`)">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aboutus{
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
    @media(min-width:768px){
      font-size: 56px;
    }
  }
  &--row{
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #D5D4D4;
    border-radius: 10px 0px 10px 0px;
    overflow: hidden;
  }
  &--item{
    width: 50%;
    min-height: 126px;
    padding: 16px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #D5D4D4;
    @media(min-width:768px){
      width: 25%;
      min-height: 238px;
      padding: 24px;
    }
    img{
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
