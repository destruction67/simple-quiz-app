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


        <template v-for="(activity, index) in quizTwoActivities.questions">

          <activity-intro-card
              :activity-name="quizTwoActivities.activity_name"
              button-proceed="Let's Go"
              alternate-button="Exit"
              :round-no="activity.round_title"
              @homeEvent="goToHome"
              @proceedEvent="introCard = false"
              v-if="activity.order == currentRound && introCard"
          />


          <template v-if="!introCard">
            <!--          Current Round-->
            <template v-if="activity.order == currentRound">

              <!--            <span class="text-success">{{ activity.order }}</span>-->
              <!--            <span class="text-danger"> {{ currentRound }}</span>-->

              <div class="row">
                <div class="col text-left">
                  <h5 class="font-weight-bold">ACTIVITY 2 / ROUND {{ activity.order }}</h5>
                </div>
              </div>

              <!--            {{ activity.questions.length }}-->

              <template v-for="(setOfQuestions, index) in activity.questions">
                <template v-if="setOfQuestions.order === currentQuestionOrder">

                  <div class="row">
                    <div class="col-sm-12">

                      <div class="row mt-3">
                        <div class="col text-left">
                          <h3 class="font-weight-bold">Q{{ setOfQuestions.order }}</h3>
                        </div>
                      </div>

                      <!--                    separator-->
                      <div class="row mt-3">
                        <hr class="w-100">
                      </div>

                      <!--                    Questions-->
                      <div class="row">
                        <div class="col-12 mt-3 text-left">
                          <h5>{{ setOfQuestions.stimulus }} </h5>
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
                                  @click="answerQuestion(activity.questions.length,setOfQuestions.is_correct,true)"
                          >
                            Correct
                          </button>
                        </div>

                        <div class="col-6">
                          <button type="button" class="btn btn-danger btn-lg btn-block"
                                  @click="answerQuestion(activity.questions.length, setOfQuestions.is_correct ,false)"
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


              <!--            Second Round-->


            </template>

          </template>
        </template>


        <!--        <template v-if="currentRoundOrder == quizTwoActivities.questions.length + 1">-->
        <!--          <h1>Quiz is done</h1>-->
        <!--          {{ userAnswers  }}-->
        <!--        </template>-->

        <!--                RESULTS-->
        <!--        {{ userAnswers }}-->
        <!--        {{ userAnswers.length }}-->
        <!--        {{ quizTwoActivities.questions.length }}-->

        <!--        todo: match index of each activity -->
        <template v-if="activityEnd">
          <div class="row mt-3">

            <div class="col-sm-12">
              <div class="card-shadow">
                <div class="card-body">

                  <div class="row">
                    <div class="col-sm-12">

                      <div class="row">
                        <div class="col-12">
                          <h5 class="font-weight-bold">{{ quizTwoActivities.activity_name }}</h5>
                        </div>
                      </div>

                      <div class="row mt-3">
                        <div class="col-12">
                          <h1 class="font-weight-bold">Results</h1>
                        </div>
                      </div>


                      <div v-for="(activity, index) in quizTwoActivities.questions">
                        <template v-for="(userAnswer, index) in userAnswers[activity.order-1]">

                          <div class="row mt-3">
                            <hr class="w-100">
                          </div>


                          <div class="row mt-3">
                            <div class="col-sm-12">
                              <h5 class="font-weight-bold">{{ activity.round_title }}</h5>
                            </div>
                          </div>

                          <div v-for="(question, index) in activity.questions">


                            <!--                    separator-->
                            <div class="row mt-3">
                              <hr class="w-100">
                            </div>

                            <div class="row mt-3">
                              <div class="col-sm-4">
                                <h1>Q{{ index + 1 }}</h1>
                              </div>


                              <div class="col-sm-8">

                                <h1 v-if="userAnswer[question.order-1]" class="text-success">CORRECT</h1>
                                <h1 v-if="!userAnswer[question.order-1]" class="text-danger">FALSE</h1>


                              </div>

                            </div>

                            <div class="row mt-3">
                              <div class="col-sm-12">
                                <p>{{ question.stimulus }}</p>
                              </div>
                            </div>
                          </div>


                          <!--                    separator-->
                          <div class="row mt-3">
                            <hr class="w-100">
                          </div>
                        </template>
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

    </activity-quiz-layout-template>


  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ActivityTwo",


  data() {
    return {
      currentQuestionOrder: 1,
      currentRound: 1,

      userAnswers: [],
      answersForTheRound: [],
      noOfQuestionsThisRound: null,

      activityEnd: false,

      introCard: true,


    }
  },


  /** methods**/
  methods: {
    ...mapActions([
      'set_quizActivities'
    ]),

    answerQuestion(noOfQuestions, isCorrectAnswer, userAnswer) {
      this.noOfQuestionsThisRound = noOfQuestions;

      // this is on top
      let checkUserAnswer = isCorrectAnswer == userAnswer;
      this.answersForTheRound.push(checkUserAnswer);

      if (noOfQuestions == this.answersForTheRound.length) {
        this.currentQuestionOrder = 0;
      }


      const roundKey = this.currentRound;
      if (!this.userAnswers[this.currentRound - 1]) {
        const roundObject = {};
        roundObject[roundKey] = [];
        this.userAnswers.push(roundObject);
      }
      this.userAnswers[this.currentRound - 1][roundKey].push(isCorrectAnswer === userAnswer);

      return this.currentQuestionOrder++
    },

    goToHome() {
      this.$router.push({
        name: 'Home',
      });
    },


  },

  /** watch **/
  watch: {
    answersForTheRound: {
      handler(newVal) {
        if (this.noOfQuestionsThisRound == newVal.length) {
          // console.log(newVal.length, 'advanced to next round');
          this.currentRound += 1;
          this.introCard = true;
          this.answersForTheRound = [];
        }

        if (this.userAnswers.length == this.quizTwoActivities.questions.length) {
          if (this.noOfQuestionsThisRound == newVal.length) {
            // console.log('ENDED');
            this.activityEnd = true;
          }
        }

      },
      deep: true // Enable deep watching of the array elements
    }

  },

  /**  computed  **/
  computed: {
    ...mapGetters(
        [
          'quizInfo',
          'quizActivities',
          'quizTwoActivities',
        ],
    ),

    percentage() {
      // return (this.correctAnswers / this.this.quizActivities[0].questions.length) * 100;
    },
    progressPercentage() {
      if (this.quizTwoActivities.questions && this.quizTwoActivities.questions.length > 0) {
        return ((this.currentRound - 1) / this.quizTwoActivities.questions.length) * 100;
      } else {
        return 0; // or any other default value
      }
    },

  },

  mounted() {

  },

  /**  created  **/
  created() {
    this.set_quizActivities();
  },


}
</script>

<style scoped>

</style>