<template>
  <section class="clients">
    <div class="container">
      <div class="clients-header">
        <div class="clients-buttons">
          <button class="link clients-less">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.65723 11.6572L1.41459 7.41459L0.00037241 6.00037L1.41459 4.58616L5.65723 0.343518L7.07144 1.75773L3.67733 5.15184L9.89987 4.58616L9.89987 7.41459L3.67733 6.8489L7.07144 10.243L5.65723 11.6572Z" fill="#41A280"/></svg>
            View Prev
          </button>
          <button class="link clients-more">
            View Next
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6H8V2V8H6V3.2L2 8L0 6L4.8 2H0V0Z" fill="#41A280"/></svg>
          </button>
        </div>
      </div>
      <vue-tiny-slider v-bind="quizclOptions">
        <div class="clients-item" v-for="item in posts">
          <div class="clients-row">
            <img :src="require(`@/assets/img/quiz/${item.img}`)">
            <div class="clients-right">
              <h3>{{ item.title }}</h3>
              <p v-html="item.desc"></p>
            </div>
          </div>
        </div>
      </vue-tiny-slider>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      quizclOptions: {
        mouseDrag: false,
        items: 1,
        nav: false,
        loop: false,
        prevButton: '.clients-less',
        nextButton: '.clients-more',
        gutter: 16,
        responsive: {
          992: {
            gutter: 32,
            items: 1,
          }
        }
      },
      posts: [
        {
          img: 's3_1.jpg',
          title: 'Employee Retention Tax Credit (ERC) Was Put Into Place with CARES Act, But PPP Got All the Attention',
          desc: `The pandemic and related shutdown wreaked havoc on businesses, so Congress passed multiple stimulus acts to distribute relief quickly.<br><br>The two programs that got all the media attention were the PPP and EIDL programs. Most didn’t even know about the ERC Program, and even if so, didn’t think they qualified for it (even though it was as good or better than PPP).`
        },
        {
          img: 's3_2.jpg',
          title: 'Program Was Not Well Understood (even by many CPA’s), so Few Took Advantage',
          desc: `The ERC Program has been amended which can help more businesses qualify.<br><br>Unlike PPP, there is no limit on max amount you can receive. ERC is getting more attention as business owners realize they can still take advantage.`
        },
        {
          img: 's3_3.jpg',
          title: 'Many Businesses Don’t Realize They Can Qualify (for $200k on average), but the Window is Closing',
          desc: `Most businesses don’t realize they actually can qualify, or were told incorrectly by their CPAs that they wouldn’t.<br><br>It’s not really the CPA’s fault, as the rules were confusing (and changed multiple times), and this is a very specialized one-time program.`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.clients{
  padding-top: 80px;
  @media(min-width:992px){
    padding-top: 160px;
  }
  .container{
    overflow: hidden;
  }
  &-buttons{
    display: flex;
    justify-content: space-between;
    margin-left: auto;
  }
  &-row{
    border: 1px solid var(--bg-lightgray);
    border-radius: 16px;
    overflow: hidden;
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    img{
      border-radius: 16px;
      display: block;
      width: 100%;
      height: auto;
      @media(min-width:768px){
        width: 50%;
      }
    }
  }
  &-right{
    padding: 16px;
    @media(min-width:992px){
      padding: 32px;
    }
  }
  &-more, &-less{
    display: inline-block;
    line-height: 1;
    &:disabled{
      opacity: .5;
    }
  }
  &-less{
    @media(min-width:992px){
      &:disabled{
        opacity: 0;
      }
    }
  }
  &-header{
    margin-bottom: 16px;
    @media(min-width:992px){
      margin-bottom: 32px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }
  h3{
    font-weight: 600;
    line-height: 140%;
    margin-bottom: 23px;
    font-size: clamp(18px, 1.55cqi, 24px);
  }
  p{
    font-weight: 400;
    font-size: clamp(14px, 1.15cqi, 18px);
    line-height: 140%;
  }
}
</style>