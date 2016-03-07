import ServerActions from "./actions/ServerActions"

export default {
    getAllTweets() {
        $.get("/tweets")
        .done( rawTweets => ServerActions.receivedTweets(rawTweets))
        .error(error => console.log(error));
    },
    createTweet(body) {
        $.post("/tweets", { body })
        .done( rawTweet => ServerActions.receivedOneTweet(rawTweet))
        .error(error => console.log(error));
    }
    
}