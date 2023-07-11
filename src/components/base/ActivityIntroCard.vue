<template>
  <div class="row">
    <div class="col-sm-12">

      <div class="row mt-3">
        <div class="col text-left">
          <h5 class="font-weight-bold">{{ activityName }}</h5>
        </div>
      </div>

      <!--                    separator-->
      <div class="row">
        <hr class="w-100">
      </div>


      <div class="row mt-3" v-if="roundNo">
        <div class="col">
          <h2 class="font-weight-bold text-primary">{{ roundNo }}</h2>
        </div>
      </div>

      <!--                    intro message-->
      <div class="row">
        <div class="col-12 mt-3">
          <h5>Are you ready? </h5>
        </div>
      </div>


      <!--                    separator-->
      <div class="row mt-3">
        <hr class="w-100">
      </div>


      <!--                    intro choices -->
      <div class="row">
        <div class="col-6">
          <button type="button" class="btn btn-success btn-lg btn-block"
                  @click="thisProceedEvent"
          >
            {{ buttonProceed }}
          </button>
        </div>

        <div class="col-6">
          <button type="button" class="btn btn-danger btn-lg btn-block"
          @click="thisHomeEvent"
          >
            {{ alternateButton }}
          </button>
        </div>
      </div>

    </div>


    <div class="row mt-3">
      <hr class="w-100">
    </div>
  </div>
</template>

<script>
export default {
  name: "ActivityIntroCard",

  props : {
    activityName: {
      type: String,
      default: 'ActivityName',
    },

    buttonProceed: {
      type: String,
      default: 'Start',
    },

    alternateButton: {
      type: String,
      default: 'Home',
    },

    roundNo: {
      type: String,
      default: '',
    },

  },

  methods: {
    thisHomeEvent(){
      this.$emit('homeEvent');
    },

    thisProceedEvent(){
      this.$emit('proceedEvent');
    }

  },


}
</script>

<style scoped>

</style>