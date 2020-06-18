/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {
  // this callback runs once the document is "ready"
  /*
  const data = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  };
  */

 const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];
  
  const renderTweets = function(tweets) {
    for(const tweet of tweets) {
      const $item = createTweetElement(tweet);
      $('#tweet-container').append($item);
    }
  }

  const createTweetElement = function(data) {
    return $(`
      <article class="tweet">
        <header>
          <div class="hd-lhs">
            <img src="${data.user.avatars}"/>
            <h3>${data.user.name}</h3>
          </div>
          <div class="hd-rhs">
            <h3>${data.user.handle}</h3>
          </div>
        </header>
        <main>${data.content.text}</main>
        <hr class="tweet-dividor" />
        <footer>
          <div class="ft-lhs">
            ${data.created_at}
          </div>
          <div class="ft-rhs">
            btn1 btn2 btn3
          </div>
      </footer>
    </article>`);
  }
  renderTweets(data);

  // console.log(createTweetElement(data));
  // console.log(createTweetElement(data));
  // console.log(createTweetElement(data));
  // const $tweet = $(`<article class="tweet">Hello world</article>`);
 
});