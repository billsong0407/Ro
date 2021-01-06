<template>
    <div class="tagline">
      <div class="tagline-logo">
      </div>
      <div class="tagline-hook">
        {{ hook }}
      </div>
      <div class="tagline-catch">
        <span>Meet </span><span>R</span><span class="text-underlined">o</span>
      </div>
    </div>
</template>
<script>
export default {
  name: 'Tagline',
  props: {
    hook: {
      type: String,
      required: false,
      default: ''
    },
    logoName: {
      type: String,
      requried: false,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>

@import '~@/assets/scss/fonts';

.tagline{
  &-logo{
    height:400px;
    width:360px;
    display:inline-block;
    content: url(~@/assets/logo/Ro-logo.png);
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    letter-spacing: normal;
  }

  &-hook{
    margin-top:30px;
    margin-left: auto;
    margin-right: auto;
    width:290px;
    display:block;
    font-size: 33px;
    font-family: $text-description;
  }

  &-catch{
    font-family: $text-title;
    font-size: 33px;
  }
}

.text-underlined{
  text-decoration: underline;
}
</style>
