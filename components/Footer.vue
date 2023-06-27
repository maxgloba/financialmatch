<template>
  <footer class="footer">
    <div class="container">
      <h2>How to contact us?</h2>
      <div class="footer--row">
        <div class="footer--left">
          <div class="footer--item">
            <h4>call us</h4>
            <a href="tel:18556795587">(855) 679-5587</a>
          </div>
          <div class="footer--item">
            <h4>write to us</h4>
            <a href="mailto:support@financialmatch.com">support@financialmatch.com</a>
          </div>
        </div>
        <div class="footer--right">
          <div class="footer--item">
            <h4>Facebook</h4>
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="21" cy="21" r="21" fill="#FAFAFA"/><circle cx="21" cy="21" r="10.35" fill="#30785D" stroke="#FAFAFA" stroke-width="0.3"/><g clip-path="url(#clip0_145_460)"><path d="M31.5002 21.0642C31.5002 15.2288 26.7988 10.4985 21.0002 10.4985C15.1989 10.4998 10.4976 15.2288 10.4976 21.0655C10.4976 26.3378 14.3379 30.7084 19.3569 31.5012V24.1183H16.6926V21.0655H19.3596V18.7358C19.3596 16.0885 20.928 14.6263 23.3259 14.6263C24.4757 14.6263 25.6766 14.8324 25.6766 14.8324V17.4312H24.3523C23.049 17.4312 22.6421 18.2462 22.6421 19.0823V21.0642H25.5532L25.0886 24.117H22.6408V31.4998C27.6598 30.7071 31.5002 26.3365 31.5002 21.0642Z" fill="#FAFAFA"/></g><defs><clipPath id="clip0_145_460"><rect width="21" height="21" fill="white" transform="translate(10.5 10.5)"/></clipPath></defs></svg>
          </div>
          <div class="footer--item">
            <h4>LinkedIn</h4>
            <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="21.5" cy="21" r="21" fill="#FAFAFA"/><circle cx="21.5" cy="21" r="10.35" fill="#30785D" stroke="#FAFAFA" stroke-width="0.3"/><g clip-path="url(#clip0_145_467)"><path d="M11 12.0041C11 11.1733 11.6904 10.5 12.5422 10.5H30.4578C31.3096 10.5 32 11.1733 32 12.0041V29.9959C32 30.8267 31.3096 31.5 30.4578 31.5H12.5422C11.6904 31.5 11 30.8267 11 29.9959V12.0041ZM17.4877 28.0796V18.5968H14.3364V28.0796H17.4877ZM15.9127 17.3014C17.0113 17.3014 17.6951 16.5743 17.6951 15.6634C17.6754 14.7328 17.0126 14.0254 15.9337 14.0254C14.8548 14.0254 14.15 14.7341 14.15 15.6634C14.15 16.5743 14.8338 17.3014 15.8917 17.3014H15.9127ZM22.3544 28.0796V22.7837C22.3544 22.5002 22.3754 22.2167 22.4594 22.0146C22.6865 21.4489 23.2049 20.8622 24.0764 20.8622C25.217 20.8622 25.6724 21.7311 25.6724 23.0068V28.0796H28.8237V22.6406C28.8237 19.7269 27.2698 18.3724 25.196 18.3724C23.5239 18.3724 22.7744 19.2911 22.3544 19.9382V19.971H22.3334C22.3404 19.96 22.3474 19.9491 22.3544 19.9382V18.5968H19.2044C19.2438 19.4867 19.2044 28.0796 19.2044 28.0796H22.3544Z" fill="#FAFAFA"/></g><defs><clipPath id="clip0_145_467"><rect width="21" height="21" fill="white" transform="translate(11 10.5)"/></clipPath></defs></svg>
          </div>
        </div>
      </div>
      <div class="footer--row">
        <span>© Financial Match <br>2023 All rights reserved.</span>
        <div class="footer--menu">
          <nuxt-link to="/terms">Terms and Conditions</nuxt-link>
          <nuxt-link to="/privacy">Privacy policy</nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer{
  background: var(--bg-green);
  padding: 40px 0;
  @media(min-width:768px){
    padding: 80px 0;
  }
  h2{
    border-bottom: 1px solid #D4D4D4;
    padding-bottom: 32px;
    margin-bottom: 32px;
    font-size: 32px;
    line-height: 130%;
    color: var(--text-white);
    @media(min-width:768px){
      font-size: 56px;
    }
  }
  &--menu{
    @media(max-width:767px){
      order: 2;
    }
    a {
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      text-decoration-line: underline;
      color: var(--text-white);
      @media(max-width:767px){
        display: block;
        font-size: 12px;
      }
      &:hover{
        text-decoration: none;
      }
      &:not(:first-child){
        @media(max-width:767px){
          margin-top: 16px;
        }
        @media(min-width:768px){
          margin-left: 32px;
        }
      }
    }
  }
  &--row{
    display: flex;
    justify-content: space-between;
    @media(max-width:767px){
      flex-direction: column;
    }
    &:last-child{
      margin-top: 40px;
      @media(min-width:768px){
        margin-top: 80px;
      }
    }
    span{
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      color: var(--text-white);
      @media(max-width:767px){
        margin-bottom: 16px;
        font-size: 12px;
        order: 2;
      }
      @media(min-width:768px){
        br{display: none;}
      }
    }
  }
  &--left, &--right{
    @media(min-width:768px){
      display: flex;
    }
  }
  &--right{
    @media(max-width:767px){
      display: flex;
      position: absolute;
      bottom: 59px;
      right: 16px;
      .footer--item:not(:first-child){
        margin-top: 0px;
        margin-left: 16px;
      }
    }
    @media(min-width:768px){
      margin-left: auto;
    }
  }
  &--item{
    &:not(:first-child){
      @media(max-width:767px){
        margin-top: 32px;
      }
      @media(min-width:768px){
        margin-left: 32px;
      }
    }
  }
  h4{
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    color: var(--text-white);
    margin-bottom: 4px;
    @media(min-width:768px){
      font-size: 16px;
      margin-bottom: 8px;
    }
    & + a{
      font-weight: 400;
      font-size: 20px;
      line-height: 130%;
      color: var(--text-white);
      display: block;
      text-decoration: none;
      @media(min-width:768px){
        font-size: 32px;
      }
      &:hover{
        text-decoration: underline;
      }
    }
  }
  svg{
    display: block;
    margin: 0 auto;
  }
}
</style>
