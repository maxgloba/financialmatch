<template>
  <div>
    <ErcBanner />
    <ErcProgram />
    <ErcEstimate />
    <ErcQualify />
    <ErcBenefits />
    <ErcDone />
    <Owners />
    <Faq />
  </div>
</template>

<script>
export default {
  data(){
    return{
      quiz: false,
      sent: false
    }
  }
}