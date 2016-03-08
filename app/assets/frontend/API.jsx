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
    },
    getAllUsers() {
        $.get("/followers/random")
        .done( rawUsers => ServerActions.receivedUsers(rawUsers))
        .error(error => console.log(error));
    },
    followUser(userId){
        $.post("/followers",{ user_id: userId })
        .done( rawFollower => ServerActions.receivedOneFollower(rawFollower))
        .error(error => console.log(error));
    }
}