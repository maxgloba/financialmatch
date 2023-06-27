<template>
  <div>
    <HomeBanner />
    <HomeAboutus />
    <HomePhilosophy />
    <HomeService />
    <HomeWhyus />
    <HomeEstimate />
    <HomeIndustries />
    <HomeWorks />
    <Owners />
    <client-only>
      <HomeReviews />
    </client-only>
    <Faq />
  </div>
</template>

<script>
export default {
  mounted(){
    localStorage.lead_source = window.location.origin
    localStorage.optinurl = window.location.href
    if(this.$route.query.utm_source) localStorage.utm_source = this.$route.query.utm_source
    if(this.$route.query.utm_medium) localStorage.utm_medium = this.$route.query.utm_medium
    if(this.$route.query.utm_campaign) localStorage.utm_campaign = this.$route.query.utm_campaign
    if(this.$route.query.c1) localStorage.c1 = this.$route.query.c1
    if(this.$route.query.c2) localStorage.c2 = this.$route.query.c2
    if(this.$route.query.c3) localStorage.c3 = this.$route.query.c3
    if(this.$route.query.c4) localStorage.c4 = this.$route.query.c4
    if(this.$route.query.sub1) localStorage.sub1 = this.$route.query.sub1
    if(this.$route.query.sub2) localStorage.sub2 = this.$route.query.sub2
    if(this.$route.query.sub3) localStorage.sub3 = this.$route.query.sub3
    if(this.$route.query.sub4) localStorage.sub4 = this.$route.query.sub4
    if(this.$route.query.affid) localStorage.affid = this.$route.query.affid
    if(this.$route.query.c1) localStorage.c1 = this.$route.query.c1
    if(this.$route.query.gclid) localStorage.gclid = this.$route.query.gclid
  }
}
</script>