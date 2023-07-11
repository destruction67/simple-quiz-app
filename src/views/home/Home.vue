<template>
  <div >
    <br>
    <div class="row">


      <div class="col-sm-12">

        <div class="card-shadow">
          <div class="card-body">


            <!--            First row-->
            <!--            Welcome Card-->

            <div class="row">
              <div class="col-sm-12">
                <h5 class="font-weight-bold text-left">
                  Welcome, User!
                </h5>
              </div>
            </div>


            <div class="row mt-3">
              <div class="col-sm-12">
                <p class="font-weight-normal text-left" style="color: #7b8191">
                  {{ quizInfo.heading }}
                </p>
              </div>
            </div>



          </div>
        </div>


        <!--        Second row-->
        <div class="row mt-3">

          <div class="col-sm-12">
            <div class="card-shadow">
              <div class="card-body">

                <div class="row">
                  <div class="col-sm-12">


                    <!--                    Graphic-->
                    <div class="row">


                      <div class="col-12 mt-2">
                        <h1 class="font-weight-bold">{{ quizInfo.name }}</h1>
                      </div>

                    </div>

                    <div class="row">
                      <div class="col-12 mt-2">
                        <a class="navbar-brand p-0">
                          <img class="img-avatar" :src="teamQuiz" alt=""
                               style="min-width: 25px; max-width: 350px; height: auto;">
                        </a>
                      </div>

                    </div>


                    <!--                    separator-->
                    <div class="row mt-3">
                      <hr class="w-100">
                    </div>


                    <!--                    Select Activity -->

                    <div class="row mt-3">
                      <div class="col-sm-12">
                        <button type="button" class="btn btn-primary btn-lg btn-block" @click="goToActivity('ActivityOne')">
                          Activity 1
                        </button>
                      </div>
                    </div>

                    <div class="row mt-3">
                      <div class="col-sm-12">
                        <button type="button" class="btn btn-warning btn-lg btn-block" @click="goToActivity('ActivityTwo')">Activity 2</button>
                      </div>
                    </div>

                    <div class="row mt-3">
                      <div class="col-sm-12">
                        <button type="button" class="btn btn-danger btn-lg btn-block" disabled>Activity 3</button>
                      </div>
                    </div>

                    <div class="row mt-3">
                      <div class="col-sm-12">
                        <button type="button" class="btn btn-info btn-lg btn-block" disabled>Activity 4</button>
                      </div>
                    </div>

                    <div class="row mt-3">
                      <div class="col-sm-12">
                        <button type="button" class="btn btn-success btn-lg btn-block" disabled>Activity 5</button>
                      </div>
                    </div>


                    <!--                    separator-->
                    <div class="row mt-3">
                      <hr class="w-100">
                    </div>
                  </div>


                  <div class="row mt-3">
                    <hr class="w-100">
                  </div>


                </div>

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
import {mapActions, mapGetters} from "vuex";
import teamQuiz from "@/assets/team-quiz.jpg"


export default {
  name: "Home",

  mixins: [],

  data() {
    return {
      teamQuiz: teamQuiz,

    }
  },


  /** methods**/
  methods: {
    ...mapActions([
        'set_quizActivities'
    ]),

    goToActivity(activity) {
      this.$router.push({
        name: activity,
        // params: {vesselId: vesselId},
      });
    },


  },

  /** watch **/
  watch: {},

  /**  computed  **/
  computed: {
    ...mapGetters(
        [
            'quizInfo'
        ],
    ),
  },

  /**  created  **/
  created() {
    this.set_quizActivities();
  },


}
</script>

<style scoped>

</style>