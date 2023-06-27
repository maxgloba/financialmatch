<template>
  <div class="estimate--form">
    <div class="estimate--number">Numbers of Employees: <span>{{ employees }}</span></div>
    <input type="range" v-model="employees" min="1" max="100" step="1" >
    <div class="estimate--money"><span>$</span>{{ `${employees * 26000}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1,') }}</div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      employees: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.estimate{
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
    @media(min-width:768px){
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
  }
  input[type=range]:focus::-ms-fill-lower {
    background: #d5d4d4;
  }
  input[type=range]:focus::-ms-fill-upper {
    background: #d8d7d7;
  }
  @supports (-ms-ime-align:auto) {
    input[type=range] {
      margin: 0;
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