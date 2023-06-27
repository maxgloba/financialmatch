<template>
  <nav class="menu" v-if="visual">
    <div class="menu--top">
      <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.162 4.66176L25.9991 0.0519201C26.0046 0.0243031 25.9838 0 25.9564 0H1.90438C1.88359 0 1.86499 0.0154656 1.86171 0.0364545L0.0409225 10.6447C-0.249046 12.3338 1.03885 13.8781 2.73599 13.8781H6.43008L7.7322 6.92636H22.4714C23.7921 6.92636 24.9235 5.97412 25.162 4.66287V4.66176Z" fill="#FAFAFA"/><path d="M6.38071 13.8214L4.1868 26.7738C3.9012 28.4607 5.18801 30.0006 6.88296 30.0006H10.5475C10.5683 30.0006 10.5869 29.9851 10.5902 29.9641L12.2446 20.7456H20.1996C21.5203 20.7456 22.6518 19.7933 22.8903 18.4821L23.7274 13.8722C23.7329 13.8446 23.7121 13.8203 23.6847 13.8203H6.38071V13.8214Z" fill="#FAFAFA"/></svg>
    </div>
    <div class="menu--middle">
      <nuxt-link @click="closeMenu" to="/">Home</nuxt-link>
      <nuxt-link @click="closeMenu" to="/aboutus">About us</nuxt-link>
      <nuxt-link @click="closeMenu" to="/erc">ERC</nuxt-link>
      <a href="tel:18558559365">(855) 855-9365</a>
    </div>
    <div class="menu--bottom">
      <div class="menu--bottom-left">
        <span>© Financial Match <br>2022 All rights reserved.</span>
        <nuxt-link to="/terms">Terms and Conditions</nuxt-link>
        <nuxt-link to="/privacy">Privacy policy</nuxt-link>
      </div>
      <div class="menu--bottom-right">
        <div class="menu--bottom-item">
          <h4>Facebook</h4>
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="21" cy="21" r="21" fill="#FAFAFA"/><circle cx="21" cy="21" r="10.35" fill="#30785D" stroke="#FAFAFA" stroke-width="0.3"/><g clip-path="url(#clip0_145_460)"><path d="M31.5002 21.0642C31.5002 15.2288 26.7988 10.4985 21.0002 10.4985C15.1989 10.4998 10.4976 15.2288 10.4976 21.0655C10.4976 26.3378 14.3379 30.7084 19.3569 31.5012V24.1183H16.6926V21.0655H19.3596V18.7358C19.3596 16.0885 20.928 14.6263 23.3259 14.6263C24.4757 14.6263 25.6766 14.8324 25.6766 14.8324V17.4312H24.3523C23.049 17.4312 22.6421 18.2462 22.6421 19.0823V21.0642H25.5532L25.0886 24.117H22.6408V31.4998C27.6598 30.7071 31.5002 26.3365 31.5002 21.0642Z" fill="#FAFAFA"/></g><defs><clipPath id="clip0_145_460"><rect width="21" height="21" fill="white" transform="translate(10.5 10.5)"/></clipPath></defs></svg>
        </div>
        <div class="menu--bottom-item">
          <h4>LinkedIn</h4>
          <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="21.5" cy="21" r="21" fill="#FAFAFA"/><circle cx="21.5" cy="21" r="10.35" fill="#30785D" stroke="#FAFAFA" stroke-width="0.3"/><g clip-path="url(#clip0_145_467)"><path d="M11 12.0041C11 11.1733 11.6904 10.5 12.5422 10.5H30.4578C31.3096 10.5 32 11.1733 32 12.0041V29.9959C32 30.8267 31.3096 31.5 30.4578 31.5H12.5422C11.6904 31.5 11 30.8267 11 29.9959V12.0041ZM17.4877 28.0796V18.5968H14.3364V28.0796H17.4877ZM15.9127 17.3014C17.0113 17.3014 17.6951 16.5743 17.6951 15.6634C17.6754 14.7328 17.0126 14.0254 15.9337 14.0254C14.8548 14.0254 14.15 14.7341 14.15 15.6634C14.15 16.5743 14.8338 17.3014 15.8917 17.3014H15.9127ZM22.3544 28.0796V22.7837C22.3544 22.5002 22.3754 22.2167 22.4594 22.0146C22.6865 21.4489 23.2049 20.8622 24.0764 20.8622C25.217 20.8622 25.6724 21.7311 25.6724 23.0068V28.0796H28.8237V22.6406C28.8237 19.7269 27.2698 18.3724 25.196 18.3724C23.5239 18.3724 22.7744 19.2911 22.3544 19.9382V19.971H22.3334C22.3404 19.96 22.3474 19.9491 22.3544 19.9382V18.5968H19.2044C19.2438 19.4867 19.2044 28.0796 19.2044 28.0796H22.3544Z" fill="#FAFAFA"/></g><defs><clipPath id="clip0_145_467"><rect width="21" height="21" fill="white" transform="translate(11 10.5)"/></clipPath></defs></svg>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['visual'],
  methods: {
    closeMenu(){
      console.log(222);
    }
  }
}
</script>

<style lang="scss" scoped>
.menu{
  background: var(--bg-green);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &--top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg{
      *{
        pointer-event: none;
      }
    }
  }
  &--middle{
    a{
      font-weight: 600;
      font-size: 32px;
      line-height: 130%;
      color: var(--text-white);
      display: block;
      text-decoration: none;
      &:not(:first-child){
        margin-top: 48px;
      }
    }
  }
  &--bottom{
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    color: var(--text-white);
    display: flex;
    justify-content: space-between;
    span{
      display: block;
      margin-bottom: 16px;
    }
    a{
      color: var(--text-white);
      text-decoration: underline;
      display: block;
      &:not(:first-child){
        margin-top: 8px;
      }
    }
    &-right{
      display: flex;
      text-align: center;
    }
    &-item{
      &:not(:first-child){
        margin-left: 32px;
      }
      h4{
        font-weight: 400;
        font-size: 12px;
        line-height: 140%;
        margin-bottom: 8px;
      }
    }
  }

}
</style>