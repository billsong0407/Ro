<template>
    <div class="site-header">
        <slot name="site-title"></slot>
    </div>
</template>

<script>
export default {
  name: 'SiteHeader',
  prop: {
    title: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

@import '~@/assets/scss/fonts';

.site-header{
    margin: 15px 30px;
}

.site-header span{
    font-family: $text-title;
    font-size: 56px;
}

.text-underlined{
    text-decoration: underline;
}

</style>
