(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{340:function(e,t,o){"use strict";(function(e){var n=o(86);o(35),o(25),o(52),o(13),o(53),o(419),o(45),o(114);t.a={data:function(){return{spinner:!1,step:0,number:"",first_name:null,last_name:null,email:null,phone:null,company:null,notValid:!0,quiz:[{question:"I had W2 Employees in 2020 or 2021",options:["Yes","No"],answer:null,id:"w2_employees"},{question:"How Many W2 Employees<br> Do You Have?",options:"Number",min:1,max:100,answer:null,id:"number_of_w2_employees"},{question:"Did You Experience a Supply Chain Disruption<br> in 2020 or 2021?",options:["Yes","No"],answer:null,id:"supply_chain_disruption"},{question:"Did You Have a Decrease in Revenue in 2020 or 2021 compared to 2019?",options:["Yes","No"],answer:null,id:"decreased_revenue"},{question:"Are you the owner or decision maker for this business?",options:["Yes","No"],answer:null,id:"owner_decision_maker"},{question:"Did You Receive PPP Money",options:["Yes","No"],answer:null,id:"ppp_money"}],utm_source:"",utm_medium:"",utm_campaign:"",c1:"",c2:"",c3:"",c4:"",sub1:"",sub2:"",sub3:"",sub4:""}},mounted:function(){this.$route.query.utm_source&&(this.utm_source=this.$route.query.utm_source),this.$route.query.utm_medium&&(this.utm_medium=this.$route.query.utm_medium),this.$route.query.utm_campaign&&(this.utm_campaign=this.$route.query.utm_campaign),this.$route.query.c1&&(this.c1=this.$route.query.c1),this.$route.query.c2&&(this.c2=this.$route.query.c2),this.$route.query.c3&&(this.c3=this.$route.query.c3),this.$route.query.c4&&(this.c4=this.$route.query.c4),this.$route.query.sub1&&(this.sub1=this.$route.query.sub1),this.$route.query.sub2&&(this.sub2=this.$route.query.sub2),this.$route.query.sub3&&(this.sub3=this.$route.query.sub3),this.$route.query.sub4&&(this.sub4=this.$route.query.sub4)},computed:{notQualify:function(){return("No"===this.quiz[0].answer||this.quiz[1].answer)<2&&this.step>1},result:function(){return this.$store.state.result}},methods:{chooseAnswer:function(a,i){this.step===this.quiz.length?this.submit():(this.quiz[i].answer=a,this.step=this.step+1),"call"===this.$route.name&&i===this.quiz.length-1&&(this.$parent.route=this.$route.name),"No"===this.quiz[i].answer&&"Did You Receive PPP Money"!==this.quiz[i].question&&(this.step=this.step+2)},stepBack:function(){this.step=this.step-1},phoneNumberInput:function(e){var t=e.target.value.replace(/[^\dA-Z]/g,"").replace(/[\s]/g,"").split("");this.phone=t.toString().replace(/[,]/g,"")},getAnswer:function(e){return!!this.quiz.find((function(t){return t.id===e}))&&this.quiz.find((function(t){return t.id===e})).answer},hookAction:function(t,o,r,d){var l=document.cookie.split("; ").reduce((function(e,t){var o=t.split("="),r=Object(n.a)(o),d=r[0],l=r.slice(1);return e[d]=l.join("="),e}),{}),m={name:t+" "+o,email:r,phone:d,transaction_id:this.$route.query.c1||!1,fbp:l._fbp||!1,fbc:l._fbc||!1,gclid:this.$route.query.gclid||!1};this.$axios.post(e.env.API+"/hook",{params:m}).then((function(e){console.log("hook sent"),console.dir(e)}))},submit:function(){var t=this;this.spinner=!0;var o=this.getAnswer("number_of_w2_employees"),n="1"+this.phone.replace(/[^\dA-Z]/g,"").replace(/[\s]/g,""),data={first_name:this.first_name,last_name:this.last_name,phone_home:n,email_address:this.email,company_name:this.company,ppp_money:this.getAnswer("ppp_money"),w2_employees:this.getAnswer("w2_employees"),number_of_w2_employees:this.getAnswer("number_of_w2_employees"),supply_chain_disruption:this.getAnswer("supply_chain_disruption"),decreased_revenue:this.getAnswer("decreased_revenue"),owner_decision_maker:this.getAnswer("owner_decision_maker"),opt_in_url:window.location.href,data8:!!this.$route.query.utm_source&&this.$route.query.utm_source,data9:!!this.$route.query.utm_medium&&this.$route.query.utm_medium,data10:!!this.$route.query.utm_campaign&&this.$route.query.utm_campaign,jornaya_lead_id:this.$refs.leadid_token.value,aff_id:!!this.$route.query.affid&&this.$route.query.affid};data.lp_offer_id=o>4?1:2,data.lp_campaign_id=o>4?"63d422cfa5b22":"63eea973c5f81","onyx18121990@gmail.com"===this.email&&(data.lp_test=1),this.$axios.post(e.env.API+"/lp",{headers:{"Content-Type":"application/json"},params:data}).then((function(e){if(console.dir(e),"failed"===e.data.result||e.status>299)throw e.data.message;o>4&&t.hook&&t.hookAction(t.first_name,t.last_name,t.email,n),t.$swal("Success")})).catch((function(e){t.$swal(e)})).finally((function(){t.spinner=!1}))}},watch:{notQualify:function(e){e&&(this.step=this.quiz.length)}}}}).call(this,o(115))},354:function(e,t,o){var content=o(421);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(28).default)("799bb622",content,!0,{sourceMap:!1})},419:function(e,t,o){"use strict";var n=o(2),r=o(69).find,d=o(116),l="find",m=!0;l in[]&&Array(1)[l]((function(){m=!1})),n({target:"Array",proto:!0,forced:m},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),d(l)},420:function(e,t,o){"use strict";o(354)},421:function(e,t,o){var n=o(27)(!1);n.push([e.i,'.form[data-v-3a66d35e]{background:var(--bg-white);position:relative;border-radius:15px;overflow:hidden;padding:80px 15px 50px;max-width:343px;width:100%;margin-left:auto;color:var(--text-black)}@media(max-width:767px){.form[data-v-3a66d35e]{margin-right:auto;margin-top:30px}}.form-progress[data-v-3a66d35e]{background:var(--brand-blue);height:5px;position:absolute;left:16px;right:16px;top:30px;width:0;border-radius:4px}.form .spinner[data-v-3a66d35e]{display:flex;justify-content:center;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:10}.form .spinner svg[data-v-3a66d35e]{width:50%;max-width:10rem;animation:rotate-3a66d35e 3.6s linear infinite}.form .spinner circle[data-v-3a66d35e]{fill:none;stroke:#106b70;stroke-width:8px;stroke-dasharray:300;animation:outline-3a66d35e 2s cubic-bezier(.77,0,.18,1) infinite}@keyframes outline-3a66d35e{0%{stroke-dashoffset:0}50%{stroke-dashoffset:300}to{stroke-dashoffset:600}}@keyframes rotate-3a66d35e{0%{transform:rotate(0turn)}to{transform:rotate(-1turn)}}.form[data-v-3a66d35e]:before{content:"";background:var(--bg-lightgray);position:absolute;left:16px;right:16px;top:30px;height:5px;border-radius:4px}.form h2[data-v-3a66d35e]{font-size:clamp(18px,1.7cqi,24px);margin-bottom:8px}.form h2[data-v-3a66d35e],.form h3[data-v-3a66d35e]{font-weight:600;line-height:140%;text-align:center}.form h3[data-v-3a66d35e]{font-size:clamp(14px,1.3cqi,18px)}.form-options[data-v-3a66d35e]{padding-top:8px}.form-options .buttons .back[data-v-3a66d35e]{background:var(--brand-red);opacity:.4}@media(max-width:767px){.form-options .buttons[data-v-3a66d35e]{display:flex;flex-direction:row-reverse}.form-options .buttons .back[data-v-3a66d35e]{flex:1 30%}}.form-options button[data-v-3a66d35e]{padding:16px 32px 13px;width:100%;height:57px;background:var(--brand-red);border-radius:8px;border:none;margin-top:24px;color:var(--text-white);font-size:20px;font-weight:600}.form-options button[data-v-3a66d35e]:hover{background:var(--brand-green)}.form input[data-v-3a66d35e],.form select[data-v-3a66d35e]{display:block;margin:0 auto;width:100%;max-width:100%;height:57px;background:#fff;border:2px solid var(--brand-green);border-radius:15px;font-weight:500;font-size:clamp(14px,1.3cqi,18px);color:#59595a;padding:0 16px}.form input[data-v-3a66d35e]:not(:first-child),.form select[data-v-3a66d35e]:not(:first-child){margin-top:15px}.form input[data-v-3a66d35e]::-moz-placeholder,.form select[data-v-3a66d35e]::-moz-placeholder{color:#a4bce1}.form input[data-v-3a66d35e]::placeholder,.form select[data-v-3a66d35e]::placeholder{color:#a4bce1}.form input[type=submit][data-v-3a66d35e],.form select[type=submit][data-v-3a66d35e]{border:none;font-weight:600;font-size:20px;text-align:center;color:#fff;background:var(--brand-red);height:57px;display:block;margin:15px auto}.form input[type=submit][data-v-3a66d35e]:hover,.form select[type=submit][data-v-3a66d35e]:hover{background:var(--brand-green)}.form input[type=submit].disabled[data-v-3a66d35e],.form input[type=submit][data-v-3a66d35e]:disabled,.form select[type=submit].disabled[data-v-3a66d35e],.form select[type=submit][data-v-3a66d35e]:disabled{opacity:.5;cursor:wait}.form-security[data-v-3a66d35e]{display:block;margin:30px auto 0}',""]),e.exports=n},497:function(e,t,o){"use strict";o.r(t);o(54),o(46),o(13);var n=o(340).a,r=(o(420),o(9)),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("div",{staticClass:"form-progress",style:"width: calc(".concat(100*(e.step+1)/(e.quiz.length+1),"% - 32px);")}),e._v(" "),e._l(e.quiz,(function(o,i){return t("div",{directives:[{name:"show",rawName:"v-show",value:e.step===i&&!e.notQualify,expression:"step === i && !notQualify"}],staticClass:"step"},[t("h2",{staticClass:"form-question",domProps:{innerHTML:e._s(o.question)}}),e._v(" "),0===e.step?t("h3",[e._v("Please Select One")]):e._e(),e._v(" "),"Number"===o.options?t("div",{staticClass:"form-options"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.number=t.target.multiple?o:o[0]}}},[t("option",{attrs:{disabled:"",value:""}},[e._v("Choose one")]),e._v(" "),e._l(o.max,(function(i){return t("option",{domProps:{value:i}},[e._v(e._s(i))])})),e._v(" "),t("option",{domProps:{value:+o.max+1}},[e._v(e._s(o.max+"+"))])],2),e._v(" "),t("div",{staticClass:"buttons"},[e.number?t("button",{key:e.number,staticClass:"yellow",on:{click:function(t){return t.preventDefault(),e.chooseAnswer(e.number,i)}}},[e._v("\n          Submit\n        ")]):e._e(),e._v(" "),t("button",{staticClass:"back",on:{click:function(t){return t.preventDefault(),e.stepBack.apply(null,arguments)}}},[t("svg",{attrs:{width:"41",height:"16",viewBox:"0 0 41 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM1 9H41V7H1V9Z",fill:"white"}})])])])]):t("div",{staticClass:"form-options"},e._l(o.options,(function(option){return t("button",{key:option,on:{click:function(t){return t.preventDefault(),e.chooseAnswer(option,i)}}},[e._v("\n        "+e._s(option)+"\n      ")])})),0)])})),e._v(" "),e.step!==e.quiz.length||e.notQualify?e._e():t("div",{staticClass:"step"},[t("h2",[e._v("Enter info below to get your results.")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.company,expression:"company"}],attrs:{type:"text",placeholder:"Company Name",required:"",id:"company"},domProps:{value:e.company},on:{input:function(t){t.target.composing||(e.company=t.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.first_name,expression:"first_name"}],attrs:{type:"text",placeholder:"First Name",required:"",id:"first_name"},domProps:{value:e.first_name},on:{input:function(t){t.target.composing||(e.first_name=t.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.last_name,expression:"last_name"}],attrs:{type:"text",placeholder:"Last Name",required:"",id:"last_name"},domProps:{value:e.last_name},on:{input:function(t){t.target.composing||(e.last_name=t.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Email",required:"",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"tel",placeholder:"Phone",minlength:"8",maxlength:"14",required:"",id:"phone"},domProps:{value:e.phone},on:{input:[function(t){t.target.composing||(e.phone=t.target.value)},e.phoneNumberInput]}}),e._v(" "),t("input",{attrs:{type:"submit",value:"Submit",disabled:e.spinner}}),e._v(" "),t("div",{staticClass:"small"},[e._v("By clicking “Submit,” I am providing my prior express written consent to be contacted at the above telephone number with offers and marketing communications from Financial Match [if applicable, “and affiliated tax professionals”] via automated telephone dialing and texting systems and artificial or pre-recorded voice (including SMS and MMS) and/or email, even if the telephone number above is on a corporate, state or national Do Not Call list.  Consent is not required as a condition to purchase any goods or services.")])]),e._v(" "),e.notQualify?t("div",{staticClass:"step"},[t("h2",[e._v("You Do Not Qualify for ERC")]),e._v(" "),t("p",[e._v("Unfortunately, based on your answers it appears we can not help you at this time.")])]):e._e(),e._v(" "),t("img",{staticClass:"form-security",attrs:{src:"/img/security.png"}}),e._v(" "),t("input",{ref:"leadid_token",attrs:{id:"leadid_token",name:"universal_leadid",type:"hidden"}}),e._v(" "),e.spinner?t("div",{staticClass:"spinner"},[t("svg",{attrs:{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"}},[t("circle",{attrs:{cx:"50",cy:"50",r:"46"}})])]):e._e()],2)}),[],!1,null,"3a66d35e",null);t.default=component.exports}}]);