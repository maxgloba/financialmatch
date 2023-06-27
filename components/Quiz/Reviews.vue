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

        <div class="reviews--item reviews--blue active">
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
            <p
              class="animate__animated"
              data-anim="fadeInRight"
              data-delay="100"
              data-parent="3">"I was skeptical but I liked that they never asked for any upfront fee. They worked diligently and fast. I felt like I had a true partner the entire time. Words can't describe how grateful I was when I received a $182,900 ERC check less than 3 months later. Thank you to everyone at Financial Match!" </p>
            <svg
              class="animate__animated"
              data-anim="fadeInRight"
              data-delay="100"
              data-parent="3" width="106" height="19" viewBox="0 0 106 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.30603 0L11.3954 6.43031H18.1566L12.6866 10.4045L14.776 16.8348L9.30603 12.8606L3.83608 16.8348L5.92542 10.4045L0.45547 6.43031H7.2167L9.30603 0Z" fill="white"/><path d="M30.9181 0L33.0074 6.43031H39.7687L34.2987 10.4045L36.388 16.8348L30.9181 12.8606L25.4481 16.8348L27.5375 10.4045L22.0675 6.43031H28.8288L30.9181 0Z" fill="white"/><path d="M52.5302 0L54.6195 6.43031H61.3807L55.9108 10.4045L58.0001 16.8348L52.5302 12.8606L47.0602 16.8348L49.1495 10.4045L43.6796 6.43031H50.4408L52.5302 0Z" fill="white"/><path d="M74.1422 0L76.2316 6.43031H82.9928L77.5228 10.4045L79.6122 16.8348L74.1422 12.8606L68.6723 16.8348L70.7616 10.4045L65.2917 6.43031H72.0529L74.1422 0Z" fill="white"/><path d="M95.7543 0L97.8436 6.43031H104.605L99.1349 10.4045L101.224 16.8348L95.7543 12.8606L90.2843 16.8348L92.3737 10.4045L86.9037 6.43031H93.6649L95.7543 0Z" fill="white"/></svg>
          </div>
        </div>

        <div class="reviews--item">
          <img src="@/assets/img/review-2.png" @click="videoOpen('robert')">
          <div class="reviews--info">
            <h3>Robert S.</h3>
            <h4>CarStar Collisions LLC</h4>
            <p>ERC seemed too complicated. I didn't think I'd qualify since I took PPP. But Financial Match really came through for us. They got us over $200,000 in less than 60 days. I used the money to upgrade our facility and now I think we will make it through these next few turbulent years.</p>
            <svg width="106" height="19" viewBox="0 0 106 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.30603 0L11.3954 6.43031H18.1566L12.6866 10.4045L14.776 16.8348L9.30603 12.8606L3.83608 16.8348L5.92542 10.4045L0.45547 6.43031H7.2167L9.30603 0Z" fill="white"/><path d="M30.9181 0L33.0074 6.43031H39.7687L34.2987 10.4045L36.388 16.8348L30.9181 12.8606L25.4481 16.8348L27.5375 10.4045L22.0675 6.43031H28.8288L30.9181 0Z" fill="white"/><path d="M52.5302 0L54.6195 6.43031H61.3807L55.9108 10.4045L58.0001 16.8348L52.5302 12.8606L47.0602 16.8348L49.1495 10.4045L43.6796 6.43031H50.4408L52.5302 0Z" fill="white"/><path d="M74.1422 0L76.2316 6.43031H82.9928L77.5228 10.4045L79.6122 16.8348L74.1422 12.8606L68.6723 16.8348L70.7616 10.4045L65.2917 6.43031H72.0529L74.1422 0Z" fill="white"/><path d="M95.7543 0L97.8436 6.43031H104.605L99.1349 10.4045L101.224 16.8348L95.7543 12.8606L90.2843 16.8348L92.3737 10.4045L86.9037 6.43031H93.6649L95.7543 0Z" fill="white"/></svg>
          </div>
        </div>

        <div class="reviews--item reviews--blue">
          <img src="@/assets/img/review-1.png" @click="videoOpen('terry')">
          <div class="reviews--info">
            <h3>Terry O'Grady</h3>
            <h4>Backyard Games LLC</h4>
            <p>"I was skeptical but I liked that they never asked for any upfront fee. They worked diligently and fast. I felt like I had a true partner the entire time. Words can't describe how grateful I was when I received a $182,900 ERC check less than 3 months later. Thank you to everyone at Financial Match!" </p>
            <svg width="106" height="19" viewBox="0 0 106 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.30603 0L11.3954 6.43031H18.1566L12.6866 10.4045L14.776 16.8348L9.30603 12.8606L3.83608 16.8348L5.92542 10.4045L0.45547 6.43031H7.2167L9.30603 0Z" fill="white"/><path d="M30.9181 0L33.0074 6.43031H39.7687L34.2987 10.4045L36.388 16.8348L30.9181 12.8606L25.4481 16.8348L27.5375 10.4045L22.0675 6.43031H28.8288L30.9181 0Z" fill="white"/><path d="M52.5302 0L54.6195 6.43031H61.3807L55.9108 10.4045L58.0001 16.8348L52.5302 12.8606L47.0602 16.8348L49.1495 10.4045L43.6796 6.43031H50.4408L52.5302 0Z" fill="white"/><path d="M74.1422 0L76.2316 6.43031H82.9928L77.5228 10.4045L79.6122 16.8348L74.1422 12.8606L68.6723 16.8348L70.7616 10.4045L65.2917 6.43031H72.0529L74.1422 0Z" fill="white"/><path d="M95.7543 0L97.8436 6.43031H104.605L99.1349 10.4045L101.224 16.8348L95.7543 12.8606L90.2843 16.8348L92.3737 10.4045L86.9037 6.43031H93.6649L95.7543 0Z" fill="white"/></svg>
          </div>
        </div>

        <div class="reviews--item">
          <img src="@/assets/img/review-2.png" @click="videoOpen('robert')">
          <div class="reviews--info">
            <h3>Robert S.</h3>
            <h4>CarStar Collisions LLC</h4>
            <p>ERC seemed too complicated. I didn't think I'd qualify since I took PPP. But Financial Match really came through for us. They got us over $200,000 in less than 60 days. I used the money to upgrade our facility and now I think we will make it through these next few turbulent years.</p>
            <svg width="106" height="19" viewBox="0 0 106 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.30603 0L11.3954 6.43031H18.1566L12.6866 10.4045L14.776 16.8348L9.30603 12.8606L3.83608 16.8348L5.92542 10.4045L0.45547 6.43031H7.2167L9.30603 0Z" fill="white"/><path d="M30.9181 0L33.0074 6.43031H39.7687L34.2987 10.4045L36.388 16.8348L30.9181 12.8606L25.4481 16.8348L27.5375 10.4045L22.0675 6.43031H28.8288L30.9181 0Z" fill="white"/><path d="M52.5302 0L54.6195 6.43031H61.3807L55.9108 10.4045L58.0001 16.8348L52.5302 12.8606L47.0602 16.8348L49.1495 10.4045L43.6796 6.43031H50.4408L52.5302 0Z" fill="white"/><path d="M74.1422 0L76.2316 6.43031H82.9928L77.5228 10.4045L79.6122 16.8348L74.1422 12.8606L68.6723 16.8348L70.7616 10.4045L65.2917 6.43031H72.0529L74.1422 0Z" fill="white"/><path d="M95.7543 0L97.8436 6.43031H104.605L99.1349 10.4045L101.224 16.8348L95.7543 12.8606L90.2843 16.8348L92.3737 10.4045L86.9037 6.43031H93.6649L95.7543 0Z" fill="white"/></svg>
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
    max-width: 1143px;
    margin-bottom: 32px;
  }
  &--slider{
    min-height: 435px;
    position: relative;
    width: calc(100% - 32px);
    @media(min-width:992px){
      width: 1143px;
      min-height: 370px;
    }
  }
  &--item{
    position: relative;
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
      max-width: 1143px;
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
        width: 60%;
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
      width: 40%;
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
  p{
    font-weight: 600;
    font-size: 14px;
    line-height: 140%;
    margin-bottom: 23px;
    @media(min-width:992px){
      font-size: 18px;
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