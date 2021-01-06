<template>
    <div>
      <SiteHeader >
        <p slot="site-title"><span>R</span><span class="text-underlined">o</span></p>
      </SiteHeader>
      <div class="section">
        <p class="section-header">Privacy Policy</p>
        <p class="section-greeting">Your privacy is very important to us. Accordingly, we have developed this Policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information. The following outlines our privacy policy.</p><br>
        <div class="section-list">
          <li>Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.</li><br>
          <li>We will collect and use of personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.</li><br>
          <li>We will only retain personal information as long as necessary for the fulfillment of those purposes.</li><br>
          <li>We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.</li><br>
          <li>Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.</li><br>
          <li>We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.</li><br>
          <li>We will make readily available to customers information about our policies and practices relating to the management of personal information.</li><br>
        </div>
        <p>We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained.</p><br>
        <p>To improve your experience on our site, we may use ‘cookies’. Cookies are an industry standard and most major websites use them. A cookie is a small text file that our site may place on your computer as a tool to remember your visit to our website. You may refuse the use of cookies by selecting the appropriate settings on your browser.</p><br>
        <p>Our website uses Google Analytics, a service which transmits website traffic data to Google servers in the United States. Google Analytics does not identify individual users or associate your IP address with any other data held by Google. We use reports provided by Google Analytics to help us understand website traffic and webpage usage.</p><br>
        <p>The Service is hosted in the United States and is intended solely for visitors located within the United States. The information we provide and the third-party products and services featured are tailored for the United States market only. You agree that if you choose to use the Services from outside the United States, you will be transferring your information outside of those regions to the United States for storage and processing.</p><br>
      </div>
      <p class="section-link" @click="Back">Back</p>
    </div>
</template>

<script>
import SiteHeader from '@/components/sections/SiteHeader'

export default {
  name: 'privacy',
  components: {
    SiteHeader
  },
  methods: {
    Back () {
      window.history.back()
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/scss/fonts';

.section{
  padding-left: 20%;
  padding-right: 20%;
  font-family: $text-description;
  text-align:left!important;
  line-height: 1.6em;

  &-header{
    font-size: 35px;
    font-family: $text-header;
    text-decoration: underline;
  }

  &-list{
    padding-left:10%;
    padding-right:10%;
  }

  &-link{
    cursor: pointer;
    text-decoration: underline;
    color: #6b6b6b;
  }
}
</style>
