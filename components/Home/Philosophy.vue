<template>
  <div class="philosophy">
    <div class="container">
      <div class="philosophy--left">
        <h2>Our <br>Philosophy</h2>
        <h4>Customers Success <br>Is Our Only Success</h4>
        <p>
          Financial Match’s team of executives have a long, successful track record of helping businesses of all sizes get the funding they need. Our core group of financial experts put the needs of clients first, acting as if their business was our own. <br><br>
          Business owners pour their hearts and lives into their companies, and our business philosophy is guided by the sacrifice every owner makes. Getting the maximum ERC funding possible is our primary focus, and it’s what sets us apart from the competition. <br><br>
          <nuxt-link to="/aboutus">
            Read More
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6H8V2V8H6V3.2L2 8L0 6L4.8 2H0V0Z" fill="#41A280"/></svg>
          </nuxt-link>
        </p>
      </div>
      <svg class="philosophy--img" width="688" height="612" viewBox="0 0 688 612" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- <g clip-path="url(#clip0_208_2507)"> -->
          <mask id="mask0_208_2507" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="688" height="612">
            <path d="M10 0H416.338C419.551 0 422.569 1.54428 424.449 4.15066L531.338 152.366L561.121 44.241H622.593V278.902L686.111 366.977C687.339 368.68 688 370.726 688 372.826V602C688 607.523 683.523 612 678 612H622.593V278.902L531.338 152.366L406.758 604.656C405.563 608.994 401.617 612 397.117 612H10C4.47716 612 0 607.523 0 602V10C0 4.47717 4.47715 0 10 0Z" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_208_2507)">
            <rect x="-201" width="889" height="612" fill="url(#pattern0)"/>
          </g>
          <rect
            class="animate__animated"
            data-anim="heightOut"
            data-duration="400"
            data-parent="2"
            style="opacity: 1;"
            width="531.35"
            height="500"
            fill="#F4EFE5"/>
          <rect
            class="animate__animated"
            data-anim="heightOut"
            data-delay="390"
            data-duration="300"
            data-parent="2"
            style="opacity: 1;"
            x="531"
            y="44.23"
            width="91.6"
            height="234.67"
            fill="#F4EFE5"/>
          <rect
            class="animate__animated"
            data-anim="heightOut"
            data-delay="680"
            data-duration="300"
            data-parent="2"
            style="opacity: 1;"
            x="622.58"
            y="278.9"
            width="65.42"
            height="333.1"
            fill="#F4EFE5"/>
        <!-- </g> -->
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_208_2507" transform="translate(-0.0158977) scale(0.000412718 0.00059952)"/>
          </pattern>
          <clipPath id="clip0_208_2507">
            <rect width="688" height="612" fill="white"/>
          </clipPath>
          <image id="image0_208_2507" width="2500" height="1668" xlink:href="@/assets/img/philosophy-01.png" />
        </defs>
      </svg>
      <!-- <img class="philosophy--img" src="@/assets/img/philosophy-01.png"> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.philosophy{
  padding-top: 80px;
  @media(min-width:992px){
    padding-top: 160px;
  }
  h2{
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    color: var(--text-black);
    margin-bottom: 8px;
    @media(max-width:767px){
      br{display: none;}
    }
    @media(min-width:768px){
      font-size: 56px;
      margin-bottom: 16px;
    }
  }
  h4{
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: var(--bg-gray);
    margin-bottom: 32px;
    @media(max-width:767px){
      br{display: none;}
    }
    @media(min-width:768px){
      font-size: 32px;
    }
  }
  p{
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: var(--text-black);
    margin-left: auto;
    width: calc(100% - 60px);
    margin-bottom: 40px;
    @media(min-width:576px){
      width: calc(100% - 100px);
    }
    @media(min-width:768px){
      width: 50%;
      margin-bottom: 0;
    }
  }
  a{
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    text-transform: capitalize;
    color: var(--brand-green);
    text-decoration: none;
  }
  .container{
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }
  &--left{
    @media(min-width:768px){
      width: 50%;
    }
  }
  &--img{
    width: 100%;
    height: auto;
    @media(min-width:768px){
      width: calc(50% - 32px);
    }
  }
}
</style>
