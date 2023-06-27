<template>
  <div class="estimate">
    <div class="container">

      <div class="estimate--box">
        <h2
          class="animate__animated"
          data-anim="fadeInUp"
          data-delay="1000"
          data-parent="1">Introducing the 100% Done-For-You ERC Service from Financial Match</h2>

        <svg v-if="winWidth > 991" width="1376" height="347" viewBox="0 0 1376 347" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 337V10C0 4.47715 4.47715 0 10 0H1033.5L1203.33 253.028L1297.11 201.133V46.6036H1366C1371.52 46.6036 1376 51.0807 1376 56.6036V145.688C1376 152.963 1372.05 159.665 1365.68 163.187L1297.11 201.133V298.703C1297.11 304.226 1292.63 308.703 1287.11 308.703H1246.03C1242.69 308.703 1239.58 307.043 1237.72 304.276L1203.33 253.028L1038.02 344.5C1035.05 346.14 1031.72 347 1028.34 347H10C4.47715 347 0 342.523 0 337Z" fill="#DC5750"/>
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
          <defs>
            <clipPath id="clip0_212_2512">
              <rect width="1376" height="347" fill="white"/>
            </clipPath>
          </defs>
        </svg>

        <svg v-else width="343" height="150" viewBox="0 0 343 150" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 142V8C0 3.58172 3.58172 0 8 0H252.142C255.446 0 258.41 2.03116 259.603 5.11245L299.957 109.378L323.335 86.9449V20.1456H340.507C341.884 20.1456 343 21.2617 343 22.6384V65.9489C343 67.3067 342.446 68.6059 341.466 69.5461L323.335 86.9449V130.953C323.335 132.329 322.219 133.445 320.842 133.445H310.98C309.95 133.445 309.027 132.812 308.655 131.852L299.957 109.378L259.945 147.772C258.456 149.202 256.471 150 254.406 150H8C3.58172 150 0 146.418 0 142Z" fill="#DC5750"/></svg>
      </div>
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
    container-type: inline-size;
  }
  h2{
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    color: var(--text-black);
    font-size: clamp(28px, 3.9cqi, 56px);
    margin-bottom: 16px;
    @media(min-width:992px){
      margin-bottom: 0;
      position: absolute;
      left: 32px;
      top: 10cqh;
      color: var(--text-white);
      max-width: 71%;
    }
    @media(min-width:1200px){
      top: 14cqh;
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
}
</style>