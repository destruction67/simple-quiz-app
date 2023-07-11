
export const API_URL = {
    index(endpoint){
        return 'https://corsproxy.io/?' +
            encodeURIComponent('https://s3.eu-west-2.amazonaws.com/' + 'interview.mock.data/' + endpoint);

    }
};

export const API_QUIZ_APP = 'interview.mock.data/'

export default { API_URL, API_QUIZ_APP }