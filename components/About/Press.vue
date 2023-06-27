<template>
  <section class="press">
    <div class="container">
      <div class="press-header">
        <h2>Press about us</h2>
        <div class="press-buttons">
          <button class="link press-less">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.65723 11.6572L1.41459 7.41459L0.00037241 6.00037L1.41459 4.58616L5.65723 0.343518L7.07144 1.75773L3.67733 5.15184L9.89987 4.58616L9.89987 7.41459L3.67733 6.8489L7.07144 10.243L5.65723 11.6572Z" fill="#41A280"/></svg>
            View Less
          </button>
          <button class="link press-more">
            View More
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6H8V2V8H6V3.2L2 8L0 6L4.8 2H0V0Z" fill="#41A280"/></svg>
          </button>
        </div>
      </div>
      <vue-tiny-slider v-bind="pressOptions">
        <div class="press-item" v-for="item in posts">
          <img :src="require(`@/assets/img/posts/${item.img}`)">
          <h4>{{ item.subtitle }}</h4>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
          <nuxt-link class="link" :to="item.link">
            Read More
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6H8V2V8H6V3.2L2 8L0 6L4.8 2H0V0Z" fill="#41A280"/></svg>
          </nuxt-link>
        </div>
      </vue-tiny-slider>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      pressOptions: {
        mouseDrag: false,
        items: 1,
        slideBy: 'page',
        nav: false,
        loop: false,
        gutter: 16,
        prevButton: '.press-less',
        nextButton: '.press-more',
        responsive: {
          992: {
            items: 4,
            gutter: 32
          }
        }
      },
      posts: [
        {
          img: 'post-1.png',
          subtitle: 'The Losangeles Tribune',
          title: 'Financial Match Continues Industry-Leading National ERC...',
          desc: 'Financial Match has unique expertise in navigating the ERC (Employee Retention...',
          link: '/aboutus'
        },
        {
          img: 'post-2.png',
          subtitle: 'Business First Online',
          title: 'My CPA didn’t tell me about ERC',
          desc: 'Many businesses suffered as a result of the pandemic, whether due to supply chain issues, mandated operational limitations, or simply revenue reductions...',
          link: '/aboutus'
        },
        {
          img: 'post-3.png',
          subtitle: 'CEO Weekly',
          title: 'Maximizes Your ERC Credits',
          desc: 'ERC (Employee Retention Credits), part of the Cares Act, is widely misunderstood and not something many business owners know about. As an industry-leading...',
          link: '/aboutus'
        },
        {
          img: 'post-4.png',
          subtitle: 'Disrupt Magazine',
          title: 'Can I get both PPP and ERC?',
          desc: 'The Cares Act was enacted to help individuals and businesses offset challenges experienced as a result of the pandemic. For businesses, these...',
          link: '/aboutus'
        },
        {
          img: 'post-5.png',
          subtitle: 'USA today',
          title: 'Why choose Financial Match?',
          desc: 'The Cares Act was enacted to help individuals and businesses offset challenges experienced as a result of the pandemic. For businesses, these...',
          link: '/aboutus'
        }
      ]
    }
  },
  methods: {
    showMore(){
      this.more = this.more ? false : true
    }
  }
}
</script>

<style lang="scss" scoped>
.press{
  padding-top: 80px;
  @media(min-width:992px){
    padding-top: 160px;
  }
  .container{
    overflow: hidden;
  }
  h2{
    font-weight: 600;
    line-height: 130%;
    color: var(--text-black);
    font-size: 32px;
    @media(max-width:991px){
      margin-bottom: 32px;
    }
    @media(min-width:992px){
      font-size: 56px;
    }
  }
  &-buttons{
    display: flex;
    justify-content: space-between;
  }
  &-item{
    .link{
      text-decoration: none;
      text-align: left;
    }
    img{
      display: block;
      border-radius: 4px;
      display: block;
      width: 100%;
      height: auto;
      margin-bottom: 8px;
    }
    h4{
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;
      color: var(--text-black);
      margin-bottom: 8px;
    }
    h3{
      font-weight: 600;
      font-size: 20px;
      line-height: 140%;
      color: var(--text-black);
      margin-bottom: 8px;
    }
    p{
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      color: var(--text-black);
      margin-bottom: 16px;
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
}
</style>