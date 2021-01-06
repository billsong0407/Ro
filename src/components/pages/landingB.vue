<template>
  <div class="site">
    <div class="site-header">
      <Header>
        <p slot="site-title"><span>R</span><span class="text-underlined">o</span></p>
      </Header>
    </div>
    <div class="site-tagline">
      <TagLine hook='One Sim. One Plan. Five Devices. Unlimited Data'></TagLine>
    </div>
    <div class="site-feature">
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
        {
          'title': 'Conectivity with a Purpose',
          'icon': 'social',
          'description': '1 in 12 Americans struggle to get internet access to the mobile internet+Your subscription will sponsor one of those to get mobile internet for free+Ever wondered what to do with used phones? Donate for credit'
        }
      ]"
      ></Features>
    </div>
    <div class="site-price">
      <Price></Price>
    </div>
    <div class="site-button">
      <AppButton id="show-modal"
                 type='regular'
                 label='Tell Me More'
                 backgroundColor='sea-blue'
                 labelColor='white'
                 @click="showModal = true">
                 </AppButton>
      <Form class="site-form" v-if="showModal" @close="showModal = false"></Form>
    </div>
    <div class="site-cta">
      <AppButton id="show-modal"
                 type='cta'
                 label='Tell Me More'
                 backgroundColor='sea-blue'
                 labelColor='white'
                 @click="showModal = true">
                 </AppButton>
    </div>
    <div>
      <router-link to="/privacy">Privacy Policy</router-link>
    </div>
  </div>
</template>
<script>

import Header from '@/components/sections/SiteHeader'
import Features from '@/components/sections/Features'
import TagLine from '@/components/sections/TagLine'
import Price from '@/components/sections/Price'
import AppButton from '@/components/sections/AppButton'
import Form from '@/components/sections/Form'

export default {
  name: 'landingB',

  components: {
    Header,
    TagLine,
    Features,
    Price,
    AppButton,
    Form
  },

  data () {
    return {
      showModal: false
    }
  }
}
</script>
<style lang="scss" scoped>

@import '~@/assets/scss/fonts';

.site{
  &-header{
    display:inline-block!important;
  }

  &-feature{
    margin-top: 5px;
  }

  &-price{
    margin-top: 70px;
  }

  &-form{
    position:fixed;
  }

  &-button{
    margin-top: 45px;
    margin-bottom: 30px;
  }

  &-cta{
    z-index:99;
    top:50%;
    right:10%;
    position:fixed;
  }
}

a:-webkit-any-link {
  color: #6b6b6b!important;
  font-family: $text-description;
}

@media screen and (max-width: 768px) {
  .site{
    &-header{
    text-align:left !important;
    border-bottom: 2px solid grey;
    width:calc(100% - 30px);
    margin-left:15px;
    margin-right:15px;
    }
  }
}
</style>
