<template>
  <form @submit.prevent="submit" class="form">
    <div
      class="form-progress"
      :style="`width: calc(${((step + 1) * 100) / (quiz.length + 1)}% - 32px);`"
    ></div>
    <div
      class="step"
      v-for="(item, i) in quiz"
      v-show="step === i && !notQualify"
    >
      <h2 class="form-question" v-html="item.question"></h2>
      <h3 v-if="step === 0">Please Select One</h3>
      <div class="form-options" v-if="item.options === 'Number'">
        <select v-model="number">
          <option disabled value="">Choose one</option>
          <option :value="i" v-for="i in item.max">{{ i }}</option>
          <option :value="+item.max + 1">{{ item.max + '+' }}</option>
        </select>
        <div class="buttons">
          <button
            @click.prevent="chooseAnswer(number, i)"
            :key="number"
            class="yellow"
            v-if="number"
          >
            Submit
          </button>
          <button class="back" @click.prevent="stepBack">
            <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM1 9H41V7H1V9Z" fill="white"/></svg>
          </button>
        </div>
      </div>
      <div class="form-options" v-else>
        <button
          v-for="option in item.options"
          @click.prevent="chooseAnswer(option, i)"
          :key="option"
        >
          {{ option }}
        </button>
      </div>
    </div>
    <div class="step" v-if="step === quiz.length && !notQualify">
      <h2>Enter info below to get your results.</h2>
      <input
        type="text"
        placeholder="Company Name"
        v-model="company"
        required
        id="company"
      />
      <input
        type="text"
        placeholder="First Name"
        v-model="first_name"
        required
        id="first_name"
      />
      <input
        type="text"
        placeholder="Last Name"
        v-model="last_name"
        required
        id="last_name"
      />
      <input
        type="email"
        placeholder="Email"
        v-model="email"
        required
        id="email"
      />
      <input
        type="tel"
        @input="phoneNumberInput"
        placeholder="Phone"
        v-model="phone"
        minlength="8"
        maxlength="14"
        required
        id="phone"
      />
      <input type="submit" value="Submit" :disabled="spinner" />
      <div class="small">By clicking “Submit,” I am providing my prior express written consent to be contacted at the above telephone number with offers and marketing communications from Financial Match [if applicable, “and affiliated tax professionals”] via automated telephone dialing and texting systems and artificial or pre-recorded voice (including SMS and MMS) and/or email, even if the telephone number above is on a corporate, state or national Do Not Call list.  Consent is not required as a condition to purchase any goods or services.</div>
    </div>
    <div class="step" v-if="notQualify">
      <h2>You Do Not Qualify for ERC</h2>
      <p>Unfortunately, based on your answers it appears we can not help you at this time.</p>
    </div>

    <img class="form-security" src="/img/security.png">

    <input
      ref="leadid_token"
      id="leadid_token"
      name="universal_leadid"
      type="hidden"
    />
    <div class="spinner" v-if="spinner">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" />
      </svg>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      spinner: false,
      step: 0,
      number: '',
      first_name: null,
      last_name: null,
      email: null,
      phone: null,
      company: null,
      notValid: true,
      quiz: [
        {
          question: 'I had W2 Employees in 2020 or 2021',
          options: ['Yes', 'No'],
          answer: null,
          id: 'w2_employees',
        },
        {
          question: 'How Many W2 Employees<br> Do You Have?',
          options: 'Number',
          min: 1,
          max: 100,
          answer: null,
          id: 'number_of_w2_employees',
        },
        {
          question:
            'Did You Experience a Supply Chain Disruption<br> in 2020 or 2021?',
          options: ['Yes', 'No'],
          answer: null,
          id: 'supply_chain_disruption',
        },
        {
          question:
            'Did You Have a Decrease in Revenue in 2020 or 2021 compared to 2019?',
          options: ['Yes', 'No'],
          answer: null,
          id: 'decreased_revenue',
        },
        {
          question: 'Are you the owner or decision maker for this business?',
          options: ['Yes', 'No'],
          answer: null,
          id: 'owner_decision_maker',
        },
        {
          question: 'Did You Receive PPP Money',
          options: ['Yes', 'No'],
          answer: null,
          id: 'ppp_money',
        }
      ],
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
      c1: '',
      c2: '',
      c3: '',
      c4: '',
      sub1: '',
      sub2: '',
      sub3: '',
      sub4: '',
    }
  },
  mounted() {
    if (this.$route.query.utm_source) this.utm_source = this.$route.query.utm_source
    if (this.$route.query.utm_medium) this.utm_medium = this.$route.query.utm_medium
    if (this.$route.query.utm_campaign) this.utm_campaign = this.$route.query.utm_campaign
    if (this.$route.query.c1) this.c1 = this.$route.query.c1
    if (this.$route.query.c2) this.c2 = this.$route.query.c2
    if (this.$route.query.c3) this.c3 = this.$route.query.c3
    if (this.$route.query.c4) this.c4 = this.$route.query.c4
    if (this.$route.query.sub1) this.sub1 = this.$route.query.sub1
    if (this.$route.query.sub2) this.sub2 = this.$route.query.sub2
    if (this.$route.query.sub3) this.sub3 = this.$route.query.sub3
    if (this.$route.query.sub4) this.sub4 = this.$route.query.sub4
  },
  computed: {
    notQualify() {
      return ((this.quiz[0].answer === 'No' || this.quiz[1].answer) < 2 && this.step > 1)
    },
    result() {
      return this.$store.state.result
    },
  },
  methods: {
    chooseAnswer(a, i) {
      if(this.step === this.quiz.length){
        this.submit()
      } else {
        this.quiz[i].answer = a
        this.step = this.step + 1
      }
      if(this.$route.name === 'call' && i === this.quiz.length - 1){
        this.$parent.route = this.$route.name
        // this.$store.commit('setResult', this.quiz[1].answer)
      }
      if (this.quiz[i].answer === 'No' && this.quiz[i].question !== 'Did You Receive PPP Money') {
        this.step = this.step + 2
      }
    },
    stepBack() {
      this.step = this.step - 1
    },
    phoneNumberInput(e) {
      let arr = e.target.value
        .replace(/[^\dA-Z]/g, '')
        .replace(/[\s]/g, '')
        .split('')
      this.phone = arr.toString().replace(/[,]/g, '')
    },
    getAnswer(id){
      if(this.quiz.find(item => item.id === id)){
        const item = this.quiz.find(item => item.id === id)
        return item.answer
      } else {
        return false
      }
    },
    hookAction(first_name, last_name, email, phone){
      const cookie = document.cookie.split('; ').reduce((prev, current) => {
        const [name, ...value] = current.split('=');
        prev[name] = value.join('=');
        return prev;
      }, {});
      const hookData = {
        name: first_name+' '+last_name,
        email: email,
        phone: phone,
        transaction_id: this.$route.query.c1 || false,
        fbp: cookie._fbp || false,
        fbc: cookie._fbc || false,
        gclid: this.$route.query.gclid || false,
      }
      this.$axios.post(process.env.API+'/hook', { params: hookData })
        .then(result => {
          console.log('hook sent');
          console.dir(result)
        })
    },
    submit() {
      this.spinner = true
      // this.$store.commit('setResult', this.getAnswer('number_of_w2_employees'))

      const employees = this.getAnswer('number_of_w2_employees')

      const phone = '1'+this.phone.replace(/[^\dA-Z]/g, '').replace(/[\s]/g, '')

      const data = {
        first_name: this.first_name,
        last_name: this.last_name,
        phone_home: phone,
        email_address: this.email,
        company_name: this.company,
        ppp_money: this.getAnswer('ppp_money'),
        w2_employees: this.getAnswer('w2_employees'),
        number_of_w2_employees: this.getAnswer('number_of_w2_employees'),
        supply_chain_disruption: this.getAnswer('supply_chain_disruption'),
        decreased_revenue: this.getAnswer('decreased_revenue'),
        owner_decision_maker: this.getAnswer('owner_decision_maker'),
        opt_in_url: window.location.href,
        data8: this.$route.query.utm_source ? this.$route.query.utm_source : false,
        data9: this.$route.query.utm_medium ? this.$route.query.utm_medium : false,
        data10: this.$route.query.utm_campaign ? this.$route.query.utm_campaign : false,
        jornaya_lead_id: this.$refs.leadid_token.value,
        aff_id: this.$route.query.affid ? this.$route.query.affid : false,
      }

      data.lp_offer_id = employees > 4 ? 1 : 2
      data.lp_campaign_id = employees > 4 ? "63d422cfa5b22" : "63eea973c5f81"

      if(process.env.NODE_ENV === 'development' || this.email === 'onyx18121990@gmail.com') data.lp_test = 1


      this.$axios.post(process.env.API+'/lp', {
        headers: {'Content-Type': 'application/json'},
        params: data
      })
        .then(res => {
          console.dir(res)
          if(res.data.result === "failed" || res.status > 299){
            throw res.data.message
          } else {
            if(employees > 4 && this.hook){
              this.hookAction(this.first_name, this.last_name, this.email, phone)
            }
            this.$swal('Success')
          }
        })
        .catch(err => {
          this.$swal(err)
        })
        .finally(() => {
          this.spinner = false
        })
    }
  },
  watch: {
    notQualify(val) {
      if (val) this.step = this.quiz.length
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  background: var(--bg-white);
  border-radius: 15px;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  padding: 80px 15px 50px;
  max-width: 343px;
  width: 100%;
  margin-left: auto;
  color: var(--text-black);
  @media(max-width:767px){
    margin-right: auto;
    margin-top: 30px;
  }
  &-progress {
    background: var(--brand-blue);
    height: 5px;
    position: absolute;
    left: 16px;
    right: 16px;
    top: 30px;
    width: 0%;
    border-radius: 4px;
  }
  .spinner {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    svg {
      width: 50%;
      max-width: 10rem;
      animation: rotate 3.6s linear infinite;
    }
    circle {
      fill: none;
      stroke: #106b70;
      stroke-width: 8px;
      stroke-dasharray: 300;
      animation: outline 2s cubic-bezier(0.77, 0, 0.18, 1) infinite;
    }
  }
    @keyframes outline {
      0% {
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dashoffset: 300;
      }
      100% {
        stroke-dashoffset: 600;
      }
    }

    @keyframes rotate {
      from {
        transform: rotate(0turn);
      }
      to {
        transform: rotate(-1turn);
      }
    }

  &:before {
    content: '';
    background: var(--bg-lightgray);
    position: absolute;
    left: 16px; right: 16px;
    top: 30px;
    height: 5px;
    border-radius: 4px;
  }
  h2 {
    font-weight: 600;
    font-size: clamp(18px, 1.7cqi, 24px);
    line-height: 140%;
    text-align: center;
    margin-bottom: 8px;
  }
  h3 {
    font-weight: 600;
    font-size: clamp(14px, 1.3cqi, 18px);
    line-height: 140%;
    text-align: center;
  }
  &-options {
    padding-top: 8px;
    .buttons {
      .back {
        background: var(--brand-red);
        opacity: .4;
      }
      @media (max-width: 767px) {
        display: flex;
        flex-direction: row-reverse;
        .back {
          flex: 1 30%;
        }
      }
    }
    button {
      padding: 16px 32px 13px;
      width: 100%;
      height: 57px;
      background: var(--brand-red);
      border-radius: 8px;
      border: none;
      margin-top: 24px;
      color: var(--text-white);
      font-size: 20px;
      font-weight: 600;
      &:hover{
        background: var(--brand-green);
      }
    }
  }
  input,
  select {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    height: 57px;
    background: #ffffff;
    border: 2px solid var(--brand-green);
    border-radius: 15px;
    font-weight: 500;
    font-size: clamp(14px, 1.3cqi, 18px);
    color: #59595a;
    padding: 0 16px;
    &:not(:first-child) {
      margin-top: 15px;
    }
    &::placeholder {
      color: #a4bce1;
    }

    &[type='submit'] {
      border: none;
      font-weight: 600;
      font-size: 20px;
      text-align: center;
      color: #fff;
      background: var(--brand-red);
      height: 57px;
      display: block;
      margin: 15px auto;
      &:hover{
        background: var(--brand-green);
      }
      &.disabled, &:disabled {
        opacity: 0.5;
        cursor: wait;
      }
    }
  }

  &-security{
    display: block;
    margin: 30px auto 0;
  }
}
</style>
