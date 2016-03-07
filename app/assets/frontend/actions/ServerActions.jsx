import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"

export default {
    receivedTweets(rawTweets){
        AppDispatcher.dispatch({
            actionType: ActionTypes.RECEIVED_TWEETS,
            rawTweets 
        })
    },
    receivedOneTweet(rawTweet) {
        AppDispatcher.dispatch({
            actionType: ActionTypes.RECEIVE_ONE_TWEET,
            rawTweet
        })
    }
}