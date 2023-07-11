import axios from 'axios';

import {QUIZ_APP_CONSTANTS} from '@/config/constants.config';
import {AlertService} from "@/service/AlertService";
import {UtilityService} from "@/service/UtilityService";

import quizPayloadJson from "@/store/payload.json"
import {API_URL} from "@/config/server-constant.config";

const initializeState = () => {
    return {
        quizInfo: {},
        quizActivities: [],
        quizOneActivities: [],
        quizTwoActivities: [],

        isReloading: false,

    }
}

const state = {
    ...initializeState()
};



const mutations = {
    set_quizActivities(state, params) {
        state.quizActivities = params
    },

    set_quizOneActivities(state, params) {
        state.quizOneActivities = params
    },

    set_quizTwoActivities(state, params) {
        state.quizTwoActivities = params
    },

    set_quizInfo(state, params) {
        state.quizInfo = params
    },

    set_is_reloading(state, payload) {
        state.isReloading = payload
    },
};


const actions = {
    async set_quizActivities({commit}, params) {
        commit('set_is_reloading', true)
        return await axios.get(API_URL.index(QUIZ_APP_CONSTANTS.QUIZ),
            {params}).then((r) => {
            // commit('set_quizes', r.data)

            commit('set_quizActivities', r.data.activities);
            commit('set_quizOneActivities', r.data.activities[0]);
            commit('set_quizTwoActivities', r.data.activities[1]);
            commit('set_quizInfo', r.data);

            // console.log(r.data.activities, 'r.data.activities')
            return true

        }).catch((er) => {
            commit('set_is_reloading', false)
            UtilityService.generateResponseMessage(er, 'Get Quizes')
            console.log(er, ' this is er')
            return false
        })
    },

    // async set_quizActivities({ commit }) {
    //     commit('set_is_reloading', true);
    //     try {
    //         commit('set_quizActivities', quizPayloadJson.activities);
    //         commit('set_quizOneActivities', quizPayloadJson.activities[0]);
    //         commit('set_quizTwoActivities', quizPayloadJson.activities[1]);
    //         commit('set_quizInfo', quizPayloadJson);
    //         console.log(quizPayloadJson);
    //         return true;
    //     } catch (error) {
    //         commit('set_is_reloading', false);
    //         UtilityService.generateResponseMessage(error, 'Get Quizzes');
    //         console.log(error);
    //         return false;
    //     }
    // },



};


const getters = {
    quizActivities: state => state.quizActivities,
    quizOneActivities: state => state.quizOneActivities,
    quizTwoActivities: state => state.quizTwoActivities,
    quizInfo: state => state.quizInfo,
};


/** export **/
export default {state, actions, mutations, getters};