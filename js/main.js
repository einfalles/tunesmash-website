$(document).ready(function(){
  $(".intro-2").css({
    transform: 'translate(200%,-50%)',
    MozTransform: 'translate(200%,-50%)',
    WebkitTransform: 'translate(200%,-50%)',
    msTransform: 'translate(200%,-50%)'
  });
  $(".smooch-button").click(function(){
    $(".intro-2").addClass("asdf");
    $(".intro-1").css({
      transform: 'translate(-200%,0%)',
      MozTransform: 'translate(-200%,0%)',
      WebkitTransform: 'translate(-200%,0%)',
      msTransform: 'translate(-200%,0%)'
    });
    $(".intro-2").css({
      transform: 'translate(0%,-50%)',
      MozTransform: 'translate(0%,-50%)',
      WebkitTransform: 'translate(0%,-50%)',
      msTransform: 'translate(0%,-50%)'
    });
    req_body = $('#email').val();
    // console.log(req_body);
    $.post(
    	'https://hooks.slack.com/services/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',
    	'payload={"channel": "#tunesmash-leads", "text": "' +req_body +'"}'
    );
  });

});
