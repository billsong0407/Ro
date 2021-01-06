<template>
    <transition name="modal">
    <div class="modal">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <button class="modal-default-button" @click="$emit('close')">
                X
            </button>
          </div>
          <div class="modal-body" v-if="form">
            <p style="font-size: 15px;">We are working around the clock to launch the service in a few short months. Please leave your email to get on the priority list:</p>
            <form class="modal-form">
              <label class="modal-label"
                     for="mce-EMAIL">
                     Email
                     <span class="asterisk">*</span>
              </label><br>
              <input class="modal-field"
                     id="email"
                     type="email"
                     name="email"
                     v-model="email"
                     autofocus="autofocus"
                     required="required"
                     placeholder="Enter Your Email">
            </form>
          </div>
          <div class="modal-footer">
            <AppButton label="Remind Me"
                       type="regular"
                       backgroundColor="sea-blue"
                       labelColor="white"
                       v-if="button"
                       @click="submitForm">
            </AppButton>
          </div>
          <div class="modal-submission" v-if="submission">
            <p style="font-size:43px;">Thank You!</p>
            <p>{{ message }}</p>
            <div>
              <img src="~@/assets/icons/group-6.png">
            </div>
            <div class="modal-footer">
            <AppButton label="Close"
                       type="regular"
                       backgroundColor="sea-blue"
                       labelColor="white"
                       @click="$emit('close')">
            </AppButton>
          </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>

import formService from '@/services/submit-form'
import AppButton from '@/components/sections/AppButton'

export default {
  name: 'Form',
  components: {
    AppButton
  },
  data () {
    return {
      form: true,
      submission: false,
      button: true,
      message: 'error',
      email: null,
      errors: []
    }
  },
  methods: {
    submitForm () {
      this.form = false
      this.button = false
      this.submission = true
      this.message = formService.submit()
    }
  }
}
</script>
<style lang="scss" scoped>

@import '~@/assets/scss/fonts';
@import '~@/assets/scss/color';

.modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;

  &-wrapper {
    display: table-cell;
    vertical-align: middle;
    width:auto
  }

  &-container {
    max-width: 390px;
    max-height: 415px;
    width: auto;
    height:auto;
    margin: 0px auto;
    padding: 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    //transition: all .3s ease;
    font-family: $text-description;
    border: 2px solid $orange;
    border-radius: 30px;
  }

  &-default-button {
    border: none;
    font-size: 15px;
    font-stretch: extra-expanded;
    float: right;
    cursor: pointer;
  }

  &-body {
    margin-top: 48px;
    padding: 0px 15px;
  }

  &-submission {
    margin-top: 48px;
    padding: 0px 15px;
  }

  &-form{
    margin-top: 60px;
  }

  &-form input[type=email]:focus{
    color: $black;
  }

  &-field{
    margin-top: 6px;
    width: 354px;
    height: 60px;
    text-align: center;
    font-size: 14px;
    background-color: #f5f5f5;
    color: $light-grey;
    border-radius: 12px;
    border: none;
  }

  &-footer{
    margin-top: 50px;
  }

  &-enter {
    opacity: 0;
  }

  &-leave-active {
    opacity: 0;
  }

  &-enter &-container,
  &-leave-active &-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}
</style>
