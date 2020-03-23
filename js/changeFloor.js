$('#showSecondFloor').click(function(){
    $('.about__virtual_first').fadeOut(1);
    $('.about__virtual_second').fadeIn(1);
    $('#showSecondFloor').fadeOut(1);
    $('#showFirstFloor').fadeIn(1);
});

$('#showFirstFloor').click(function(){
    $('.about__virtual_second').fadeOut(1);
    $('.about__virtual_first').fadeIn(1);
    $('#showFirstFloor').fadeOut(1);
    $('#showSecondFloor').fadeIn(1);
});