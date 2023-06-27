<template>
  <section class="team">
    <div class="container">
      <h2>Our Team</h2>
      <div class="team-menu">
        <button class="link link-less">
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.65723 11.6572L1.41459 7.41459L0.00037241 6.00037L1.41459 4.58616L5.65723 0.343518L7.07144 1.75773L3.67733 5.15184L9.89987 4.58616L9.89987 7.41459L3.67733 6.8489L7.07144 10.243L5.65723 11.6572Z" fill="#41A280"/></svg>
          View Less
        </button>
        <button class="link link-more">
          View More
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6H8V2V8H6V3.2L2 8L0 6L4.8 2H0V0Z" fill="#41A280"/></svg>
        </button>
        <button class="team-menu--btn" @click.prevent="changeTab('seo')" :class="tab === 'seo' ? 'active':''">SEO</button>
        <button class="team-menu--btn" @click.prevent="changeTab('manager')" :class="tab === 'manager' ? 'active':''">Manager</button>
        <button class="team-menu--btn" @click.prevent="changeTab('designer')" :class="tab === 'designer' ? 'active':''">Designer</button>
      </div>
      <vue-tiny-slider v-bind="options" class="team-row">
        <div class="team-item" v-for="item in tabs[tab]">
          <div class="team-header">
            <h4>{{ item.name }}</h4>
            <h5>{{ item.position }}</h5>
          </div>
          <img :src="require(`@/assets/img/team/${item.img}`)">
        </div>
      </vue-tiny-slider>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      options: {
        mouseDrag: false,
        items: 2,
        slideBy: 'page',
        swipeAngle: 45,
        nav: false,
        speed: 1000,
        controls: true,
        loop: false,
        prevButton: '.link-less',
        nextButton: '.link-more',
        responsive: {
          992: {
            items: 4
          }
        }
      },
      tab: 'manager',
      tabs: {
        seo: [
          {
            name: 'Lebron James',
            position: 'seo',
            img: 'team-2.png'
          },
          {
            name: 'Kevin Durant',
            position: 'seo',
            img: 'team-3.png'
          },
          {
            name: 'Stephen Curry',
            position: 'seo',
            img: 'team-1.png'
          },
          {
            name: 'Kyrie Irving',
            position: 'seo',
            img: 'team-4.png'
          },
          {
            name: 'Stephen Curry',
            position: 'seo',
            img: 'team-5.png'
          },
          {
            name: 'Lebron James',
            position: 'v',
            img: 'team-6.png'
          }
        ],
        manager: [
          {
            name: 'Stephen Curry',
            position: 'manager',
            img: 'team-1.png'
          },
          {
            name: 'Lebron James',
            position: 'manager',
            img: 'team-2.png'
          },
          {
            name: 'Kevin Durant',
            position: 'manager',
            img: 'team-3.png'
          },
          {
            name: 'Kyrie Irving',
            position: 'manager',
            img: 'team-4.png'
          },
          {
            name: 'Stephen Curry',
            position: 'manager',
            img: 'team-5.png'
          },
          {
            name: 'Lebron James',
            position: 'manager',
            img: 'team-6.png'
          }
        ],
        designer: [
          {
            name: 'Kevin Durant',
            position: 'designer',
            img: 'team-3.png'
          },
          {
            name: 'Kyrie Irving',
            position: 'designer',
            img: 'team-4.png'
          },
          {
            name: 'Stephen Curry',
            position: 'designer',
            img: 'team-5.png'
          },
          {
            name: 'Stephen Curry',
            position: 'designer',
            img: 'team-1.png'
          },
          {
            name: 'Lebron James',
            position: 'designer',
            img: 'team-2.png'
          },
          {
            name: 'Lebron James',
            position: 'designer',
            img: 'team-6.png'
          }
        ],
      }
    }
  },
  methods: {
    changeTab(tab){
      this.tab = tab
    }
  }
}
</script>


<style lang="scss" scoped>
.team{
  padding-top: 80px;
  @media(min-width:992px){
    padding-top: 160px;
  }
  &-menu{
    position: relative;
    margin-bottom: 44px;
    @media(min-width:992px){
      margin-bottom: 24px;
    }
    &--btn{
      background: none;
      border: none;
      padding: 0 5px;
      margin: 0;
      font-weight: 600;
      font-size: 20px;
      line-height: 140%;
      color: var(--text-black);
      margin-right: 16px;
      @media(min-width:992px){
        margin-right: 32px;
      }
      &.active{
        color: var(--brand-green);
        text-decoration: underline;
      }
    }
  }
  .container{
    overflow: hidden;
  }
  &-header{
    background: var(--brand-green);
    padding: 8px;
    @media(min-width:992px){
      padding: 22px;
    }
  }
  .link{
    position: absolute;
    top: 150%;
    right: 0;
    line-height: 1;
    @media(min-width:992px){
      top: 0;
    }
    &:disabled{
      opacity: .5;
    }
    &-less{
      @media(max-width:991px){
        right: auto;
        left: 0;
      }
      @media(min-width:992px){
        transform: translateX(-100%);
        &:disabled{
          opacity: 0;
        }
      }
    }
  }
  &-row{
    display: flex;
  }
  &-item{
    border-width: 2px 0px 2px 2px;
    border-style: solid;
    border-color: #D5D4D4;
    overflow: hidden;
    @media(min-width:992px){
      width: 336px;
    }
    &:first-child{
      border-radius: 10px 0px 0px 10px;
    }
    &:last-child{
      border-radius: 0px 10px 10px 0px;
    }
    img{
      display: block;
      width: 100%;
      height: auto;
    }
  }
  h2{
    font-weight: 600;
    line-height: 130%;
    color: var(--text-black);
    margin-bottom: 32px;
    font-size: 32px;
    @media(min-width:992px){
      font-size: 56px;
    }
  }
  h4{
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    color: var(--text-white);
    @media(min-width:992px){
      font-size: 20px;
      margin-bottom: 8px;
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
}
</style>
