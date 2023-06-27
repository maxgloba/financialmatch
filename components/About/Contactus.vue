<template>
  <section class="contactus">
    <div class="container">
      <h2>Contact us</h2>
      <div class="contactus-row">
        <svg width="656" height="407" viewBox="0 0 656 407" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 393.03V13.9695C0 6.25438 6.25438 0 13.9695 0H364.919C368.175 0 371.329 1.13733 373.836 3.21549L505.277 112.193L524.467 63.2835H591.136V183.379L650.947 232.968C654.148 235.622 656 239.564 656 243.722V393.03C656 400.746 649.746 407 642.03 407H591.136V183.379L505.277 112.193L389.604 407H13.9695C6.25437 407 0 400.746 0 393.03Z" fill="#41A280"/>
          <rect
            class="animate__animated"
            data-anim="heightOut"
            data-duration="400"
            data-parent="4"
            style="opacity: 1;"
            width="505.28"
            height="407"
            fill="#F4EFE5"/>
          <rect
            class="animate__animated"
            data-anim="heightOut"
            data-delay="390"
            data-duration="300"
            data-parent="4"
            style="opacity: 1;"
            x="505"
            y="63"
            width="88"
            height="120.35"
            fill="#F4EFE5"/>
          <rect
            class="animate__animated"
            data-anim="heightOut"
            data-delay="680"
            data-duration="300"
            data-parent="4"
            style="opacity: 1;"
            x="591"
            y="183.3"
            width="65"
            height="224"
            fill="#F4EFE5"/>
          <defs>
            <clipPath id="clip0_248_2502">
              <rect width="656" height="407" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <form @submit.prevent="submit" class="contactus-form">
          <div class="contactus-field">
            <input @change="checkEmpty" type="text" v-model="form.name" id="name" minlength="2" required>
            <label for="name">Name</label>
          </div>
          <div class="contactus-field">
            <input @change="checkEmpty" type="text" v-model="form.company" id="company" minlength="2" required>
            <label for="company">Company</label>
          </div>
          <div class="contactus-field">
            <input @change="checkEmpty" type="email" v-model="form.email" id="email" required>
            <label for="email">Email</label>
          </div>
          <div class="contactus-field">
            <input @change="checkEmpty" type="tel" v-model="form.phone" id="phone" @input="phoneInput" minlength="8" maxlength="14" required>
            <label for="phonee">Phone</label>
          </div>
          <div class="contactus-field">
            <input type="submit" value="Send" :disabled="!valid">
          </div>
        </form>
      </div>
    </div>
    <div v-if="loader" class="contactus-loader"></div>
  </section>
</template>

<script>
export default{
  data(){
    return{
      valid: false,
      loader: false,
      form: {
        name: '',
        company: '',
        email: '',
        phone: ''
      }
    }
  },
  methods: {
    checkEmpty(e){
      if(e.target.value.length > 0){
        e.target.classList.add('not-empty')
      } else {
        e.target.classList.remove('not-empty')
      }

      if(this.form.name.length > 1 && this.form.company.length > 1 && this.form.phone.length > 8){
        this.valid = true
      } else {
        this.valid = false
      }
    },
    phoneInput(e){
      let arr = e.target.value
        .replace(/[^\dA-Z]/g, '')
        .replace(/[\s]/g, '')
        .split('')
      this.form.phone = arr.toString().replace(/[,]/g, '')
    },
    submit(e){
      e.preventDefault()
      this.loader = true
      const api = process.env.NODE_ENV === 'production' ? `https://financialmatch.com` : `http://${process.env.API}`
      this.$axios.post(`${api}/api/email`, {
        headers: { 'Content-Type': 'application/json' },
        params: this.form
      })
        .then(res => {
          this.loader = false
          alert(res.data.status)
          console.dir(res.data.msg);
          // if(res.data.status === "error"){}
        })
        .catch(err => {
          console.dir(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.contactus{
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  @media(min-width:992px){
    padding-top: 160px;
    padding-bottom: 160px;
  }
  h2{
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    color: var(--text-black);
    margin-bottom: 16px;
    @media(min-width:992px){
      font-size: 56px;
    }
  }
  &-row{
    display: flex;
    @media(max-width:991px){
      flex-direction: column;
    }
    @media(min-width:992px){
      justify-content: space-between;
    }
    svg{
      width: 100%;
      height: auto;
      @media(max-width:991px){
        order: 2;
        margin-top: 32px;
      }
      @media(min-width:992px){
        width: calc(50% - 32px);
      }
    }
    form{
      width: 100%;
      @media(min-width:992px){
        width: 50%;
      }
    }
  }
  &-field{
    position: relative;
    height: 60px;
    display: flex;
    align-items: flex-end;
    padding-bottom: 1px;
    &:last-child{
      margin-top: 32px;
    }
    input{
      font-weight: 600;
      font-size: 20px;
      line-height: 140%;
      color: var(--text-black);
      display: block;
      width: 100%;
      background: none;
      border: none;
      border-bottom: 1px solid #797B87;
      padding: 0;
      resize: none;
      height: 36px;
      &:focus,
      &:active{
        background: none !important;
        border: none;
        box-shadow: none !important;
        outline: none !important;
        border-bottom: 1px solid #797B87;
      }
      &:focus,
      &.not-empty{
        & + label{
          opacity: .5;
          top: 10px;
          transform: translateY(0);
          font-size: 14px;
        }
      }
      &[type="submit"]{
        font-weight: 600;
        font-size: 16px;
        line-height: 140%;
        color: var(--text-white);
        padding: 16px 32px 13px;
        height: 51px;
        background: var(--brand-green);
        border-radius: 8px;
        @media(min-width:992px){
          width: 186px;
        }
        &:hover{
          background: var(--bg-green);
        }
        &:disabled{
          opacity: 0.5;
          cursor: default;
          background: var(--brand-green);
        }
        &:active, &:focus{
          background: var(--brand-green) !important;
        }
      }
    }
    label{
      font-weight: 400;
      line-height: 140%;
      color: var(--text-black);
      position: absolute;
      left: 0;
      transition: .2s ease;
      top: 100%;
      transform: translateY(calc(-100% - 2px));
      font-size: 16px;
    }
  }
  &-loader{
    position: absolute;
    left: 0; top: 0;
    width: 100%; height: 100%;
    background: rgba(255, 255, 255, .7);
    display: flex;
    justify-content: center;
    align-items: center;
    &:before{
      content: "";
      width: 100px;
      height: 100px;
      border-radius: 50%;
      animation: 3s ease-in infinite bgAnim;
    }
  }
}
@keyframes bgAnim {
  10%  { background: var(--text-white) }
  20%  { background: var(--text-black) }
  30%  { background: var(--brand-blue) }
  40%  { background: var(--brand-green) }
  50%  { background: var(--brand-red) }
  60%  { background: var(--brand-yellow) }
  70%  { background: var(--bg-green) }
  80%  { background: var(--bg-white) }
  90%  { background: var(--bg-lightgray) }
  100% { background: var(--bg-gray) }
}
</style>
