<template>
  <div class="faq">
    <div class="container">
      <h2>Frequently Asked Questions</h2>
      <div class="faq--row">
        <!-- <svg width="656" height="557" viewBox="0 0 656 557" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00264e-05 492.874L0 68.9191C0 61.5628 5.96347 55.5993 13.3198 55.5993H60.3071L249.471 471.455L344 446.098V0H642.68C650.036 0 656 5.96346 656 13.3198V352.185C656 358.212 651.953 363.488 646.131 365.05L344 446.098V557H288.383L249.471 471.455L121.668 505.739C120.543 506.041 119.382 506.194 118.217 506.194H13.3198C5.9635 506.194 2.03633e-05 500.23 2.00264e-05 492.874Z" fill="#1D3C86"/></svg> -->
        <svg width="656" height="557" viewBox="0 0 656 557" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- <g clip-path="url(#clip0_213_2517)"> -->
          <path d="M2.00264e-05 492.874L0 68.9191C0 61.5628 5.96347 55.5993 13.3198 55.5993H60.3071L249.471 471.455L344 446.098V0H642.68C650.036 0 656 5.96346 656 13.3198V352.185C656 358.212 651.953 363.488 646.131 365.05L344 446.098V557H288.383L249.471 471.455L121.668 505.739C120.543 506.041 119.382 506.194 118.217 506.194H13.3198C5.9635 506.194 2.03633e-05 500.23 2.00264e-05 492.874Z" fill="#1D3C86"/>
          <rect
            class="animate__animated"
            data-anim="heightOut"
            data-duration="400"
            data-parent="2"
            style="opacity: 1;"
            y="55"
            width="249.47"
            height="452"
            fill="#F4EFE5"/>
          <rect
            class="animate__animated"
            data-anim="heightOut"
            data-delay="390"
            data-duration="300"
            data-parent="2"
            style="opacity: 1;"
            x="249.4"
            y="446"
            width="94.6"
            height="111"
            fill="#F4EFE5"/>
          <rect
            class="animate__animated"
            data-anim="heightOut"
            data-delay="680"
            data-duration="300"
            data-parent="2"
            style="opacity: 1;"
            x="344"
            width="312"
            height="446.1"
            fill="#F4EFE5"/>
          <!-- </g> -->
          <defs>
            <clipPath id="clip0_213_2517">
              <rect width="656" height="557" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <div class="faq--right">
          <div class="faq--tabs">
            <button class="active" @click="chooseFaq('tax', $event)">Qualification</button>
            <button @click="chooseFaq('credit', $event)">Tax Credit</button>
          </div>
          <div class="faq--item" v-for="(item, index) in this[faq]" :key="`faq_${index}`" @click="openFaq">
            <h4>{{ item.title }}</h4>
            <div v-html="item.dscr"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faq: 'tax',
      tax: [
        {
          title: 'Can I qualify if I’m a 1099 Contractor?',
          dscr: 'Unfortunately, no. This program is only for companies that paid W2 wages to non-owners.',
        },
        {
          title: 'Can I qualify if I don’t have any W2 employees?',
          dscr: 'Unfortunately, no. This program is only for companies who paid W2 wages to non-owners.',
        },
        {
          title: 'Can I qualify for ERC when I already received a PPP?',
          dscr: 'Yes! There are multiple quarters you can qualify for, even if you got PPP. Unfortunately, you can’t use the same covered time period that you used for PPP, which may reduce your overall ERC amount, but you may still absolutely qualify for ERC credits.',
        },
        {
          title: 'What if my revenue went up in 2020 or 2021? Can I still qualify?',
          dscr: 'Absolutely! It’s called the “Employee Retention” credit, not the “Revenue Reduction” credit. It is intended to help out the businesses that kept people employed during the height of the pandemic. This means you can qualify even if your revenue increased. You’ll need to qualify using one of the other qualification checks - either shutdowns/mandates or supply chain disruptions.',
        },
        {
          title: 'How long is the ERC program open for?',
          dscr: 'For most businesses, this program will be open into 2024 (unless Congress changes the rules again). It is open as long as you can file amended 941-X returns, which is the latest of 3 years from the date you filed your original return, or 2 years from the date you paid the payroll tax.',
        },
        {
          title: 'What if I have bad credit? Is there a credit check involved?',
          dscr: 'Doesn’t matter! This is not a loan, it’s a tax credit. There are no credit checks, collateral, or personal guarantees required.'
        },
        {
          title: 'Can I qualify for ERC if my business is now closed?',
          dscr: 'Yes, there is a possibility. It will depend upon when your business closed, so contact Financial Match today and let us walk you through the process.'
        },
      ],
      credit: [
        {
          title: 'What documents do I need to send you?',
          dscr: `The complete your tax credit, we’ll work with you and your CPA to get the following documents:<ul><li>Payroll Journals outlining all payments, deductions, contributions, and taxes for each employee, for each paycheck, during your ERC eligibility period.</li><li>Filed 941, 943, or 944 payroll reports.</li><li>Profit and Loss Statements (P&L’s) for 2020 and 2021</li><li>Tax returns for 2020 and 2021</li><li>PPP Loan Forgiveness Application (if applicable)</li></ul>`
        },
        {
          title: 'Do I need to repay the tax credit?',
          dscr: `Nope! There is nothing to repay with a tax credit. THIS IS NOT A LOAN.`
        },
        {
          title: 'How long will it take to get my credit?',
          dscr: `We are generally telling clients between 7-9 months. We take a few weeks to do the work, and the IRS is taking a wide range of times to process these applications. Mostly, we are seeing responses from the IRS in the 7-9 month range.`
        },
        {
          title: 'When will the ERC funds run out?',
          dscr: `There are currently tens of billions available in the program, there is no time table on when funds will run out.`
        },
        {
          title: 'What if I owe back taxes on my account with the IRS?',
          dscr: `If you owe back taxes on your account to the IRS, they will deduct the amount you owe from the credit amount. You will be paid the difference. But getting ERC could eliminate back taxes!`
        },
        {
          title: 'Is the ERC credit taxable?',
          dscr: `The ERC credit is not considered taxable income for federal tax purposes. However, it could impact your company’s deductible wage expenses by the tax credit amount, which will most likely increase your net profit. That could impact what you pay in taxes. Please provide the credit to your CPA or tax preparer when you file.`
        },
        {
          title: 'Will I get in trouble with the IRS for filing?',
          dscr: `Absolutely not! The IRS created this program and doubled-down on making it easier and more lucrative for businesses, so they want owners like you to file and use it.`
        },
      ]
    }
  },
  methods: {
    chooseFaq(name, e){
      this.faq = name
      document.querySelectorAll('.faq--item').forEach(item => item.classList.remove('active'))
      document.querySelector('button.active').classList.remove('active')
      e.target.classList.add('active')
    },
    openFaq(e){
      e.target.classList.toggle('active')
    }
  }
}
</script>

<style lang="scss" scoped>
.faq{
  padding: 80px 0;
  @media(min-width:992px){
    padding: 160px 0;
  }
  h2{
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    color: var(--text-black);
    margin-bottom: 32px;
    @media(min-width:768px){
      font-size: 56px;
    }
  }
  &--row{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media(max-width:767px){
      flex-direction: column;
    }
  }
  svg{
    display: block;
    width: 100%;
    height: auto;
    margin-top: 4px;
    @media(max-width:767px){
      order: 2;
    }
    @media(min-width:768px){
      width: calc(50% - 32px);
      margin-top: 58px;
    }
  }
  &--right{
    width: 100%;
    @media(min-width:768px){
      width: 50%;
    }
  }
  &--tabs{
    margin-bottom: 32px;
    button{
      font-weight: 400;
      font-size: 20px;
      line-height: 140%;
      color: var(--bg-gray);
      padding: 0 8px;
      background: none;
      border: none;
      border-bottom: 2px solid transparent;
      &.active{
        color: var(--brand-blue);
        border-color: var(--brand-blue);
      }
      &:not(:first-child){
        margin-left: 32px;
      }
    }
  }
  &--item{
    padding: 24px 0px;
    border-top: 2px solid #D5D4D4;
    cursor: pointer;
    *{
      pointer-events: none;
    }
    h4{
      font-weight: 600;
      font-size: 20px;
      line-height: 130%;
      color: var(--text-black);
      position: relative;
      padding-right: 16px;
      &:after{
        content:"+";
        font-weight: 600;
        font-size: 20px;
        line-height: 130%;
        color: var(--bg-gray);
        transition: .5s ease;
        position: absolute;
        right: 0; top: 50%;
        transform-origin: top center;
        transform: rotate(0deg) translateY(-50%);
      }
    }
    div{
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      color: var(--text-black);
      transition: 1s ease;
      max-height: 0px;
      opacity: 0;
      padding-right: 15px;
    }
    &:hover{
      opacity: .7;
      h4{
        &:after{
          transform: rotate(30deg) translateY(-50%);
        }
      }
    }
    &.active{
      h4{
        &:after{
          transform: rotate(45deg) translateY(-50%) !important;
        }
      }
      div{
        max-height: 1000px;
        padding-top: 8px;
        opacity: 1;
      }
    }
  }
}
</style>
