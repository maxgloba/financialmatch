<template>
  <div class="reviews">
    <div class="container">
      <div class="reviews--row">
        <h2>Client review</h2>
        <button v-if="winWidth > 991" @click.prevent="next">
          Next review
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6H8V2V8H6V3.2L2 8L0 6L4.8 2H0V0Z" fill="#DC5750"/></svg>
        </button>
      </div>
      <div class="reviews--slider">

        <div class="reviews--item active">
          <img src="@/assets/img/review-1.png" @click="videoOpen('terry')">
          <div class="reviews--info">
            <h3
              class="animate__animated"
              data-anim="fadeInRight"
              data-delay="50"
              data-parent="3">Terry O'Grady</h3>
            <h4
              class="animate__animated"
              data-anim="fadeInRight"
              data-delay="100"
              data-parent="3">Backyard Games LLC</h4>
            <div
              class="reviews--left animate__animated"
              data-anim="fadeInRight"
              data-delay="150"
              data-parent="3">
              <div class="reviews--money"><span>$</span> 200,500</div>
              <h5>received  to our clients</h5>
            </div>
            <div
              class="reviews--right animate__animated"
              data-anim="fadeInRight"
              data-delay="200"
              data-parent="3">
              <div class="reviews--monthes">4 <span>months</span></div>
              <h5>from call to receiving money</h5>
            </div>
          </div>
        </div>

        <div class="reviews--item reviews--blue">
          <img src="@/assets/img/review-2.png" @click="videoOpen('robert')">
          <div class="reviews--info">
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
        </div>

        <div class="reviews--item">
          <img src="@/assets/img/review-1.png" @click="videoOpen('terry')">
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
        </div>

        <div class="reviews--item reviews--blue">
          <img src="@/assets/img/review-2.png" @click="videoOpen('robert')">
          <div class="reviews--info">
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
        </div>

      </div>
      <button v-if="winWidth < 992" @click.prevent="next">
        Next review
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6H8V2V8H6V3.2L2 8L0 6L4.8 2H0V0Z" fill="#DC5750"/></svg>
      </button>
    </div>
    <Video v-if="video" :name="video"/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      video: false,
      winWidth: 1440
    }
  },
  mounted(){
    this.winWidth = window.innerWidth
    window.addEventListener('resize', e => this.winWidth = window.innerWidth)
  },
  methods: {
    videoOpen(name){
      this.video = name
    },
    next(){
      const activeSlide = document.querySelector(`.active`)
      if(activeSlide.nextElementSibling){
        activeSlide.classList.remove('active')
        activeSlide.nextElementSibling.classList.add('active')
      } else {
        const firstSlide = document.querySelector(`.reviews--item:first-child`)
        activeSlide.classList.remove('active')
        firstSlide.classList.add('active')
      }
    }
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
  button{
    background: none;
    border: none;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    text-transform: capitalize;
    color: var(--brand-red);
    padding: 0;
    @media(max-width:767px){
      margin-left: auto;
      display: block;
    }
    svg{
      margin-left: 4px;
      transition: transform .5s ease;
    }
    &:hover{
      svg{transform: rotate(45deg);}
    }
    &:active{
      svg{transform: rotate(45deg) scale(1.3);}
    }
  }
  &--row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    margin-bottom: 32px;
  }
  &--slider{
    min-height: 330px;
    position: relative;
    width: calc(100% - 32px);
    @media(min-width:992px){
      width: 1000px;
      min-height: 349px;
    }
  }
  &--item{
    width: 100%;
    max-width: calc(100% - 32px);
    background: var(--brand-red);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateX(calc(200% + 64px));
    opacity: 0;
    transition: transform 1s ease .5s, opacity .5s ease;
    @media(max-width:991px){
      flex-direction: column;
      padding-top: 55px;
      background: none;
      overflow: visible;
    }
    @media(min-width:992px){
      max-width: 1000px;
    }
    &.active{
      transform: translateX(0);
      opacity: 1;
      transition: transform 1s ease, opacity .5s ease;
      & + .reviews--item{
        transform: translateX(calc(100% + 32px));
        opacity: 1;
        transition: transform 1s ease, opacity .5s ease;
      }
    }
    img{
      width: 100%;
      cursor: pointer;
      transition: 1s ease;
      @media(max-width:991px){
        border-radius: 10px;
      }
      @media(min-width:992px){
        width: calc(100% - 344px);
      }
      &:hover{
        transform: translateX(-15px);
      }
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
    }
    @media(min-width:992px){
      width: 344px;
      padding: 32px;
    }
  }
  &--blue{
    @media(min-width:992px){
      background: var(--brand-blue);
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