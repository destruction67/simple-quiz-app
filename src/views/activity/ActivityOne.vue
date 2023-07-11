<template>
  <div>

    <activity-quiz-layout-template>
      <template slot="top-card-body">
        <div class="form-inline mb-3">
          <div class="form-group mb-2 mr-5">

            <div class="circle-icon mr-3">
              <font-awesome-icon icon="list" style="font-size: 18px"/>
            </div>

            <div class="row ml-0">
              <div class="col-12">
                <div class="row">
                  <span class="font-weight-bold">Progress</span>
                </div>

              </div>
            </div>

          </div>
        </div>


        <activity-progress-bar :progress-percentage="progressPercentage"></activity-progress-bar>
      </template>


      <template slot="activity-card-body">

          <activity-intro-card
              :activity-name="quizOneActivities.activity_name"
              button-proceed="Let's Go"
              alternate-button="Exit"
              @homeEvent="goToHome"
              @proceedEvent="introCard = false"
              v-if="introCard"
          />


        <template v-if="!introCard">
          <div class="row">
            <div class="col text-left">
              <h5 class="font-weight-bold">ACTIVITY 1</h5>
            </div>
          </div>

          <template v-for="(activity, index) in quizOneActivities.questions">

            <template v-if="activity.order === currentQuestionOrder">
              <div class="row">
                <div class="col-sm-12">

                  <div class="row mt-3">
                    <div class="col text-left">
                      <h3 class="font-weight-bold">Q{{ activity.order }}</h3>
                    </div>
                  </div>

                  <!--                    separator-->
                  <div class="row">
                    <hr class="w-100">
                  </div>


                  <!--                    Graphic-->
                  <div class="row">
                    <div class="col-12 mt-3 text-left">
                      <h5>{{ activity.stimulus }} </h5>
                    </div>
                  </div>


                  <!--                    separator-->
                  <div class="row mt-3">
                    <hr class="w-100">
                  </div>


                  <!--                    Select Activity -->

                  <div class="row">
                    <div class="col-6">
                      <button type="button" class="btn btn-primary btn-lg btn-block"
                              @click="answerQuestion(null, activity.is_correct,true)"
                      >
                        Correct
                      </button>
                    </div>

                    <div class="col-6">
                      <button type="button" class="btn btn-danger btn-lg btn-block"
                              @click="answerQuestion(null, activity.is_correct, false)"
                      >
                        Incorrect
                      </button>
                    </div>
                  </div>

                </div>


                <div class="row mt-3">
                  <hr class="w-100">
                </div>
              </div>
            </template>

          </template>

          <!--                RESULTS-->
          <template v-if="currentQuestionOrder == quizOneActivities.questions.length + 1">
            <div class="row mt-3">

              <div class="col-sm-12">
                <div class="card-shadow">
                  <div class="card-body">

                    <div class="row">
                      <div class="col-sm-12">

                        <div class="row">
                          <div class="col-12">
                            <h5 class="font-weight-bold">{{ quizOneActivities.activity_name }}</h5>
                          </div>
                        </div>

                        <div class="row mt-3">
                          <div class="col-12">
                            <h1 class="font-weight-bold">Results</h1>
                          </div>
                        </div>


                        <!--                    separator-->
                        <div class="row mt-3">
                          <hr class="w-100">
                        </div>

                        <div v-for="(activity, index) in quizOneActivities.questions" :key="index">

                          <div class="row mt-3">
                            <div class="col-sm-4">
                              <h1>Q{{ index + 1 }}</h1>
                            </div>


                            <div class="col-sm-8">
                              <!--                                    {{ userAnswers[index] }}-->
                              <!--                                    {{ activity.is_correct }}-->

                              <h1 v-if="userAnswers[index]" class="text-success">CORRECT</h1>
                              <h1 v-if="!userAnswers[index]" class="text-danger">FALSE</h1>


                            </div>
                          </div>

                          <div class="row mt-3">
                            <div class="col-sm-12">
                              <p>{{ activity.stimulus }}</p>
                            </div>
                          </div>

                          <!--                    separator-->
                          <div class="row mt-3">
                            <hr class="w-100">
                          </div>

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

            <div class="row mt-3">
              <div class="col-sm-12">
                <button type="button" class="btn btn-primary btn-lg btn-block" @click="goToHome">HOME</button>
              </div>
            </div>

          </template>

        </template>
      </template>

    </activity-quiz-layout-template>


  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: "ActivityQuiz",

  data() {
    return {
      currentQuestionOrder: 1,
      userAnswers: [],
      introCard: true,
    }
  },


  /** methods**/
  methods: {
    ...mapActions([
      'set_quizActivities'
    ]),

    answerQuestion(noOfQuestions, isCorrectAnswer, userAnswer) {
      let checkUserAnswer = isCorrectAnswer == userAnswer;
      this.userAnswers.push(checkUserAnswer);
      return this.currentQuestionOrder++
    },

    goToHome() {
      this.$router.push({
        name: 'Home',
      });
    },


  },

  /** watch **/
  watch: {},

  /**  computed  **/
  computed: {
    ...mapGetters(
        [
          'quizOneActivities',
        ],
    ),

    percentage() {
      // return (this.correctAnswers / this.this.quizActivities[0].questions.length) * 100;
    },
    progressPercentage() {

      if (this.quizOneActivities.questions && this.quizOneActivities.questions.length > 0) {
        return ((this.currentQuestionOrder - 1) / this.quizOneActivities.questions.length) * 100;
      } else {
        return 0; // or any other default value
      }
    },

  },

  /**  created  **/
  created() {
    this.set_quizActivities();
  },


}
</script>

<style scoped>

</style>