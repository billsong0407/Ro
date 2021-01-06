<template>
  <section class="section">
    <section class="feature" v-for="(part,index) in splitedList" :key='index'>
      <div :class="[part.icon, 'feature-icon']"></div>
      <p class="feature-header"> {{part.title}}</p>
      <div v-for="sentence in part.description" :key='sentence'>
        <p class="feature-description">{{sentence}}</p>
      </div>
    </section>
  </section>
</template>

<script>
export const Icons = {
  connectivity: 'connectivity',
  privacy: 'privacy',
  social: 'social',
  gadget: 'gadget',
  default: ''
}

export default {
  name: 'Features',
  props: {
    valuePropositionList: {
      type: Array,
      required: false
    }
  },

  computed: {
    splitedList () {
      let tempList = [...this.valuePropositionList]
      tempList.map(temp => {
        return (temp.description = temp.description.split('+'))
      })
      return tempList
    }
  }
}
</script>

<style lang="scss" scoped>

@import '~@/assets/scss/fonts';
@import '~@/assets/scss/color';

$icon-path: '~@/assets/icons/';

.connectivity{
  content: url($icon-path + 'connectivity.png');
}

.privacy{
  content: url($icon-path + 'privacy.png');
}

.social{
  content: url($icon-path + 'social.png');
}

.gadget{
  content: url($icon-path + 'gadget.png');
}

.section{
  display:inline-block;
  padding-left: 10%;
  padding-right: 10%;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
}

.feature{
  margin-left:5%;
  margin-right:5%;
  margin-top: 70px;
  width:30%;
  min-height:430px;
  padding:10px;
  display:inline-block;
  border: 3px solid black;
  border-radius: 60px;
  vertical-align: text-top;
  letter-spacing: normal;

  &-icon{
    width:140px;
    height:160px;
    margin-top:15px;
    display:inline-block!important;
  }

  &-header{
    font-size:30px;
    font-family: $text-header;
    letter-spacing: normal;
  }

  &-description{
    font-family: $text-description;
  }
}

@media screen and (max-width: 800px){
  .feature{
    margin-top: 40px;
    width:60%;
    min-height: 500px;
  }
}

</style>
