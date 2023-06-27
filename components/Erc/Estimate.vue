<template>
  <div class="estimate">
    <div class="container">
      <h2 v-if="winWidth < 992">Estimate your ERC Payout</h2>

      <div class="estimate--box">
        <h2
          class="animate__animated"
          data-anim="fadeInUp"
          data-delay="1000"
          data-parent="1"
          v-if="winWidth > 991">Estimate your ERC Payout</h2>

        <button
          class="btn btn-white animate__animated"
          data-anim="fadeInUp"
          data-delay="1050"
          data-parent="1"
          @click="$store.commit('setQuiz', true)"
          v-if="winWidth > 991">Check eligibility</button>

        <div
          class="estimate--form animate__animated"
          data-anim="fadeInUp"
          data-parent="1"
          data-delay="1100">
          <div class="estimate--number">Numbers of Employees: <span>{{ employees }}</span></div>
          <input type="range" v-model="employees" min="1" max="100" step="1">
          <div class="estimate--money"><span>$</span>{{ `${employees * 26000}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1,') }}</div>
        </div>

        <svg v-if="winWidth > 991" width="1376" height="347" viewBox="0 0 1376 347" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- <g clip-path="url(#clip0_212_2512)"> -->
          <!-- <rect width="1376" height="347" fill="white"/> -->
          <path d="M0 337V10C0 4.47715 4.47715 0 10 0H1033.5L1203.33 253.028L1297.11 201.133V46.6036H1366C1371.52 46.6036 1376 51.0807 1376 56.6036V145.688C1376 152.963 1372.05 159.665 1365.68 163.187L1297.11 201.133V298.703C1297.11 304.226 1292.63 308.703 1287.11 308.703H1246.03C1242.69 308.703 1239.58 307.043 1237.72 304.276L1203.33 253.028L1038.02 344.5C1035.05 346.14 1031.72 347 1028.34 347H10C4.47715 347 0 342.523 0 337Z" fill="#1D3C86"/>
          <rect
            class="animate__animated"
            data-anim="heightOut"
            data-duration="400"
            data-parent="2"
            style="opacity: 1;"
            width="1203.33"
            height="253.03"
            fill="#F4EFE5"/>
          <rect
            class="animate__animated"
            data-anim="heightOut"
            data-delay="390"
            data-duration="300"
            data-parent="2"
            style="opacity: 1;"
            x="1203.33"
            y="201"
            width="93.78"
            height="108"
            fill="#F4EFE5"/>
          <rect
            class="animate__animated"
            data-anim="heightOut"
            data-delay="680"
            data-duration="300"
            data-parent="2"
            style="opacity: 1;"
            x="1297.11"
            y="46.6"
            width="79"
            height="154.55"
            fill="#F4EFE5"/>
        <!-- </g> -->
          <defs>
            <clipPath id="clip0_212_2512">
              <rect width="1376" height="347" fill="white"/>
            </clipPath>
          </defs>
        </svg>

        <svg v-else width="343" height="150" viewBox="0 0 343 150" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 142V8C0 3.58172 3.58172 0 8 0H252.142C255.446 0 258.41 2.03116 259.603 5.11245L299.957 109.378L323.335 86.9449V20.1456H340.507C341.884 20.1456 343 21.2617 343 22.6384V65.9489C343 67.3067 342.446 68.6059 341.466 69.5461L323.335 86.9449V130.953C323.335 132.329 322.219 133.445 320.842 133.445H310.98C309.95 133.445 309.027 132.812 308.655 131.852L299.957 109.378L259.945 147.772C258.456 149.202 256.471 150 254.406 150H8C3.58172 150 0 146.418 0 142Z" fill="#1D3C86"/></svg>
      </div>
      <button @click="$store.commit('setQuiz', true)" class="btn" v-if="winWidth < 992">Check eligibility</button>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      winWidth: 1440,
      employees: 1
    }
  },
  mounted(){
    this.winWidth = window.innerWidth
    window.addEventListener('resize', e => this.winWidth = window.innerWidth)
  }
}
</script>

<style lang="scss" scoped>
.estimate{
  padding-top: 80px;
  @media(min-width:992px){
    padding-top: 160px;
  }
  &--box{
    position: relative;
  }
  h2{
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    color: var(--text-black);
    margin-bottom: 24px;
    @media(min-width:992px){
      margin-bottom: 0;
      position: absolute;
      left: 32px; top: 32px;
      color: var(--text-white);
      width: 367px;
      font-size: 36px;
    }
    @media(min-width:1200px){
      font-size: 42px;
    }
    @media(min-width:1400px){
      font-size: 56px;
    }
  }
  .btn{
    margin-top: 32px;
    border: none;
    &-white{
      color: var(--text-black);
      font-weight: 600;
      width: 186px;
    }
    @media(min-width:768px){
      position: absolute;
      left: 16px;
      bottom: 16px;
      margin-top: 0;
    }
    @media(min-width:992px){
      bottom: 32px;
    }
  }
  svg{
    display: block;
    width: 100%;
    height: auto;
    @media(max-width:991px){
      max-width: 500px;
    }
  }
  &--form{
    position: absolute;
    @media(max-width:991px){
      top: 16px;
      left: 16px;
      width: 230px;
    }
    @media(min-width:992px){
      min-width: 24.7%;
      bottom: 32px;
      left: 50%;
      font-size: 14px;
    }
  }
  &--number{
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    color: var(--text-white);
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    @media(min-width:992px){
      font-size: 16px;
    }
    span{
      font-weight: 600;
      font-size: 16px;
      line-height: 130%;
      text-align: right;
      @media(min-width:768px){
        font-size: 20px;
      }
    }
  }
  input[type=range] {
    width: 100%;
    margin: 12.5px 0;
    background-color: transparent;
    -webkit-appearance: none;
  }
  input[type=range]:focus {
    outline: none;
  }
  input[type=range]::-webkit-slider-runnable-track {
    background: #d5d4d4;
    border: 0px solid rgba(1, 1, 1, 0);
    border: 0;
    width: 100%;
    height: 5px;
    cursor: pointer;
  }
  input[type=range]::-webkit-slider-thumb {
    margin-top: -12.5px;
    width: 30px;
    height: 30px;
    background: #ffffff;
    border: 0px solid rgba(0, 0, 0, 0);
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    -webkit-appearance: none;
  }
  input[type=range]:focus::-webkit-slider-runnable-track {
    background: #d8d7d7;
  }
  input[type=range]::-moz-range-track {
    background: #d5d4d4;
    border: 0px solid rgba(1, 1, 1, 0);
    border: 0;
    width: 100%;
    height: 5px;
    cursor: pointer;
  }
  input[type=range]::-moz-range-thumb {
    width: 30px;
    height: 30px;
    background: #ffffff;
    border: 0px solid rgba(0, 0, 0, 0);
    border: 0;
    border-radius: 30px;
    cursor: pointer;
  }
  input[type=range]::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 12.5px 0;
    color: transparent;
    width: 100%;
    height: 5px;
    cursor: pointer;
  }
  input[type=range]::-ms-fill-lower {
    background: #d2d1d1;
    border: 0px solid rgba(1, 1, 1, 0);
    border: 0;
  }
  input[type=range]::-ms-fill-upper {
    background: #d5d4d4;
    border: 0px solid rgba(1, 1, 1, 0);
    border: 0;
  }
  input[type=range]::-ms-thumb {
    width: 30px;
    height: 30px;
    background: #ffffff;
    border: 0px solid rgba(0, 0, 0, 0);
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 0px;
    /*Needed to keep the Edge thumb centred*/
  }
  input[type=range]:focus::-ms-fill-lower {
    background: #d5d4d4;
  }
  input[type=range]:focus::-ms-fill-upper {
    background: #d8d7d7;
  }
  /*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
  how to remove the virtical space around the range input in IE*/
  @supports (-ms-ime-align:auto) {
    /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
    input[type=range] {
      margin: 0;
      /*Edge starts the margin from the thumb, not the track as other browsers do*/
    }
  }
  &--money{
    font-weight: 600;
    font-size: 42px;
    line-height: 130%;
    color: var(--text-white);
    margin-top: 16px;
    @media(min-width:1992px){
      font-size: 46px;
    }
    @media(min-width:1400px){
      font-size: 56px;
    }
    span{
      font-weight: 400;
      font-size: 20px;
      @media(min-width:768px){
        font-size: 32px;
      }
    }
  }
}
</style>