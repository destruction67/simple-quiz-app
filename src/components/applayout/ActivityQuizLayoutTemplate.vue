<template>
  <div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="row">


      <div class="col-sm-12">

        <div class="card-shadow">
          <div class="card-body">

            <slot name="top-card-body"></slot>

          </div>
        </div>


        <!--        Second row-->
        <div class="row mt-3">

          <div class="col-sm-12">
            <div class="card-shadow">
              <div class="card-body">

                <slot name="activity-card-body"></slot>



              </div>
              <br>

            </div>
          </div>
        </div>


      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ActivityQuizLayoutTemplate"
}
</script>

<style scoped>

</style>