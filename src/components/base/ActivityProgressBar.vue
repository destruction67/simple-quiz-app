<template>
  <div class="progress">
    <div class="progress-bar bg-success" role="progressbar" :style="{ width: progressPercentage + '%' }"
         aria-valuenow="25"
         aria-valuemin="0" aria-valuemax="100">{{ progressPercentage }}%
    </div>
  </div>
</template>

<script>
export default {
  name: "ActivityProgressBar",

  data () {
    return {}
  },

  props : {
    progressPercentage: {
      type: Number,
      default: 500,
    },
  },


}
</script>

<style scoped>

</style>