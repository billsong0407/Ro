<template>
    <div>
      <button :class="[backgroundColor, type]"
              @click="$emit('click')">
        <p :class="labelColor">
          {{ label }}
        </p>
      </button>
    </div>
</template>
<script>

export default {
  name: 'AppButton',
  props: {
    label: {
      type: String,
      required: false,
      default: ''
    },
    backgroundColor: {
      type: String,
      required: false,
      default: undefined
    },
    labelColor: {
      type: String,
      required: false,
      default: undefined
    },
    shadow: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>

@import '~@/assets/scss/fonts';
@import '~@/assets/scss/color';

.regular{
  width: 163px;
  height: 60px;
  font-family: $text-description;
  font-size:14px;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 14px 31px -9px rgba(43, 79, 253, 0.78);
}

.cta{
  width: 60px;
  height: 160px;
  font-family: $text-description;
  font-size:14px;
  border-radius: 0px 60px 0px 60px;
  cursor: pointer;
  box-shadow: 0 14px 31px -9px rgba(43, 79, 253, 0.78);
}

button{

  :active{
    border-color: transparent;
  }

  &.white{
    background-color: $white;
  }

  &.silver{
    background-color: $silver;
  }

  &.light-grey{
    background-color: $light-grey;
  }

  &.grey{
    background-color: $grey;
  }

  &.black{
    background-color: $black;
  }

  &.red{
    background-color: $red;
  }

  &.maroon{
    background-color: $maroon;
  }

  &.yellow{
    background-color: $yellow;
  }

  &.orange{
    background-color: $orange;
  }

  &.olive{
    background-color: $olive;
  }

  &.lime{
    background-color: $lime;
  }

  &.green{
    background-color: $green;
  }

  &.aqua{
    background-color: $aqua;
  }

  &.teal{
    background-color: $teal;
  }

  &.sea-blue{
    background-color: $sea-blue;
  }

  &.blue{
    background-color: $blue;
  }

  &.navy{
    background-color: $navy;
  }

  &.pink{
    background-color: $pink;
  }

  &.purple{
    background-color: $purple;
  }
}

p{
   &.white{
    color:$white;
  }

  &.silver{
    color: $silver;
  }

  &.light-grey{
    color: $light-grey;
  }

  &.grey{
    color: $grey;
  }

  &.black{
    color: $black;
  }

  &.red{
    color: $red;
  }

  &.maroon{
    color: $maroon;
  }

  &.yellow{
    color: $yellow;
  }

  &.orange{
    color: $orange;
  }

  &.olive{
    color: $olive;
  }

  &.lime{
    color: $lime;
  }

  &.green{
    color: $green;
  }

  &.aqua{
    color: $aqua;
  }

  &.teal{
    color: $teal;
  }

  &.sea-blue{
    color: $sea-blue;
  }

  &.blue{
    color: $blue;
  }

  &.navy{
    color: $navy;
  }

  &.pink{
    color: $pink;
  }

  &.purple{
    color: $purple;
  }
}

</style>
