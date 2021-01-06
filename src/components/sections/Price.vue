<template>
    <div class="section">
        <div class="section-description">
            <p class="section-first-line">
              <span>R</span><span class="text-underline">o</span><span> is running on national wide carrier network.</span>
            </p>
            <p style="line-height: 1.74">Try America's fastest, most advanced network before you switch with a <b class="section-bold">7-day free trial</b></p>
        </div>
        <div class="section-price">
            <span style="font-size:30px;" class="text-bold">$70</span><span> / month <sup>*</sup></span>
        </div>
        <div class="subscription">
            <p><sup>* </sup>with your own devices. Tax included.</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Price'
}
</script>
<style lang="scss" scoped>

@import '~@/assets/scss/color';
@import '~@/assets/scss/fonts';

.text-underline{
    text-decoration: underline;
}

.text-bold{
    font-family: $text-title;
}

.section{
    margin-left: auto;
    margin-right: auto;
    padding: 60px;
    width: 350px;
    border-radius: 90px 0px 90px 0px;
    background-color: $black;
    color: $white;
    font-family: $text-description;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    line-height: 1.04;

    &-first-line{
        font-size: 30px;
    }

    &-description{
        font-size: 15px;
    }

    &-price{
        font-size: 15px;
    }

    &-bold{
        font-family: $text-header;
    }
}

@media screen and (max-width: 768px) {
    .section{
        width: auto;
    }
}

</style>
