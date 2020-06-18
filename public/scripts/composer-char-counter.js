$(document).ready(() => {
  // this callback runs once the document is "ready"
  const MAX_TXT_LEN = 140; 
  
  // used keyup as we want to get the length of the textbox aftet the charcter added
  $('.new-tweet form textarea').keyup(function() {
    // console.log(MAX_TXT_LEN - this.textLength);
    //traverse up dowm tree and down to child text
    const lenRem = MAX_TXT_LEN - $(this).val().length;
    
    let counterObj = $(this).parent().children().find('.counter');

    if(lenRem < 0) {
      counterObj.addClass("negative");
    } else {
      counterObj.removeClass("negative");
    }
    counterObj.text(lenRem);    
  })
});
