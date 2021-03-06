/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// this callback runs once the document is "ready"
$(document).ready(() => {
  $('.new-tweet form').on('submit', function(event) {
    event.preventDefault();
    //use this.serialize to get all the values at once
    const data = $(this).serialize();
    
    //before posting the tweet ensure that its within the character parameters
    let currLen = $('#tweet-text').val().length;
    if(currLen <= 0) {
      alert("Please enter some content");
    } else if (currLen > 140) {
      alert(`You are ${currLen - 140} characters over`);
    } else {
      $.post('/tweets', data)
        .then(function(data1) {
        loadTweets();
      });
    }
  });

  //hard coded get method location for now (can change later)
  const loadTweets = function() {
    $.getJSON('/tweets')
      .then(function(data) {
      $('#tweet-container').empty();
      renderTweets(data);
    });
  };
  
  const renderTweets = function(tweets) {
    for(const tweet of tweets) {
      const $tweetHTML = createTweetElement(tweet);
      $('#tweet-container').prepend($tweetHTML);
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
        <main>${escape(data.content.text)}</main>
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

  //from Method 2 use escape function notes, (escaping text given by user in main)
  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  loadTweets();
 
});