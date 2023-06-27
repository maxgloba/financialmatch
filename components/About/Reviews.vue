<template>
  <div class="reviews">
    <div class="container">
      <div class="reviews--row">
        <h2>Client review</h2>
        <div class="reviews-buttons">
          <button class="reviews-prev">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.65723 11.6572L1.41459 7.41459L0.00037241 6.00037L1.41459 4.58616L5.65723 0.343518L7.07144 1.75773L3.67733 5.15184L9.89987 4.58616L9.89987 7.41459L3.67733 6.8489L7.07144 10.243L5.65723 11.6572Z" fill="#dc5750"/></svg>
            Prev review
          </button>
          <button class="reviews-next">
            Next review
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6H8V2V8H6V3.2L2 8L0 6L4.8 2H0V0Z" fill="#dc5750"/></svg>
          </button>
        </div>
      </div>
      <div class="reviews--slider">
        <vue-tiny-slider v-bind="homeOptions">
          <div>
            <div class="reviews--item">
              <div class="reviews--info">
                <h3>Terry O'Grady</h3>
                <h4>Backyard Games LLC</h4>
                <div class="reviews--left">
                  <div class="reviews--money"><span>$</span> 200,500</div>
                  <h5>received  to our clients</h5>
                </div>
                <div class="reviews--right">
                  <div class="reviews--monthes">4 <span>months</span></div>
                  <h5>from call to receiving money</h5>
                </div>
              </div>
              <div class="reviews--desc">
                "I was skeptical but I liked that they never asked for any upfront fee. They worked diligently and fast. I felt like I had a true partner the entire time. Words can't describe how grateful I was when I received a $182,900 ERC check less than 3 months later. Thank you to everyone at Financial Match!"
              </div>
            </div>
          </div>
          <div>
            <div class="reviews--item">
              <div class="reviews--info reviews--blue">
                <h3>Robert S.</h3>
                <h4>CarStar Collisions LLC</h4>
                <div class="reviews--left">
                  <div class="reviews--money"><span>$</span> 713,000</div>
                  <h5>received  to our clients</h5>
                </div>
                <div class="reviews--right">
                  <div class="reviews--monthes">4 <span>months</span></div>
                  <h5>from call to receiving money</h5>
                </div>
              </div>
              <div class="reviews--desc">
                ERC seemed too complicated. I didn't think I'd qualify since I took PPP. But Financial Match really came through for us. They got us over $200,000 in less than 60 days. I used the money to upgrade our facility and now I think we will make it through these next few turbulent years.
              </div>
            </div>
          </div>
        </vue-tiny-slider>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      winWidth: 1440,
      homeOptions: {
        mouseDrag: true,
        items: 1,
        nav: false,
        loop: false,
        prevButton: '.reviews-prev',
        nextButton: '.reviews-next',
        gutter: 16,
        responsive: {
          992: {
            gutter: 32,
            items: 1,
          }
        }
      },
    }
  },
  mounted(){
    this.winWidth = window.innerWidth
    window.addEventListener('resize', e => this.winWidth = window.innerWidth)
  }
}
</script>

<style lang="scss" scoped>
.reviews{
  overflow: hidden;
  padding-top: 80px;
  @media(min-width:992px){
    padding-top: 160px;
  }
  .container{
    overflow: hidden;
  }
  h2{
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    color: var(--text-black);
    @media(min-width:768px){
      font-size: 56px;
    }
  }
  &--desc{
    background: #D5D4D4;
    width: 100%;
    padding: 16px;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: var(--text-black);
    @media(max-width:991px){
      border-radius: 10px;
    }
    @media(min-width:992px){
      width: calc(100% - 344px);
      padding: 32px;
    }
  }
  &--info{
    width: 100%;
    padding: 16px;
    @media(max-width:991px){
      background: var(--brand-red);
      border-radius: 0px 0px 10px 10px;
      margin-top: -8px;
      display: flex;
      justify-content: space-between;
      order: 2;
    }
    @media(min-width:992px){
      width: 344px;
      padding: 32px;
    }
  }
  h3{
    font-weight: 600;
    font-size: 20px;
    line-height: 130%;
    color: var(--text-white);
    @media(max-width:991px){
      position: absolute;
      top: 0; left: 0;
      color: var(--text-black);
    }
  }
  h4{
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: var(--text-white);
    margin-bottom: 23px;
    @media(max-width:991px){
      position: absolute;
      top: 22px; left: 0;
      color: var(--text-black);
    }
  }
  h5{
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    color: var(--text-white);
    @media(min-width:992px){
      font-size: 16px;
    }
  }
  &--money{
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
    @media(min-width:992px){
      font-size: 56px;
      line-height: 73px;
    }
    span{
      font-size: 16px;
      font-weight: 400;
      line-height: 23px;
      @media(min-width:992px){
        font-size: 32px;
        line-height: 42px;
      }
    }
  }
  &--monthes{
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    @media(min-width:992px){
      margin-top: 23px;
      font-size: 56px;
      line-height: 73px;
    }
    span{
      font-size: 20px;
      font-weight: 400;
      line-height: 26px;
      @media(min-width:992px){
        font-size: 32px;
        line-height: 42px;
      }
    }
  }
  &--left, &--right{
    @media(max-width:576px){
      width: calc(50% - 8px);
    }
    @media(max-width:991px){
      width: calc(50% - 16px);
    }
  }
}
</style>