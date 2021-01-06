<template>
  <div class="section">
    <div class="section-header">
      <Header></Header>
    </div>
    <div class="section-tagline">
      <TagLine hook='One Sim. One Plan. Five Devices. Unlimited Data'></TagLine>
    </div>
    <div class="section-feature">
      <Features :valuePropositionList="[
        {
          'title': 'Unlimited Connectivity',
          'icon': 'connectivity',
          'description': 'Pay one price for data shared among up to 5 devices, including tablet, smartwatch, kindle+No more switching SIMs when you travel. Easy activiation with virtual SIMs+Get a refund when you used less data'
        },
        {
          'title': 'Connectivity with Peace of Mind',
          'icon': 'privacy',
          'description': 'See which apps can access your location, contacts, messages, and more+Get device’︎s location after loss or theft and wipe personal data with one click+Safe and private browsing with VPN and warnings for risky websites'
        },
      ]"
      ></Features>
    </div>
    <div class="section-price">
      <Price></Price>
    </div>
    <div>
      <p><router-link to="/privacy">Privacy Policy</router-link></p>
    </div>
  </div>
</template>

<script>
import Header from '@/components/sections/SiteHeader'
import Features from '@/components/sections/Features'
import TagLine from '@/components/sections/TagLine'
import Price from '@/components/sections/Price'

export default {
  name: 'landingA',
  components: {
    Header,
    TagLine,
    Features,
    Price
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.section-header{
  display:inline-block!important;
}

@media screen and (max-width: 768px) {
  .section-header{
    text-align:left !important;
    border-bottom: 2px solid grey;
    width:calc(100% - 30px);
    margin-left:15px;
    margin-right:15px;
  }
}
</style>
