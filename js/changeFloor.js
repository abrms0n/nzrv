$('#showSecondFloor').click(function(){
    $('.about-virtual_first').fadeOut(1);
    $('.about-virtual_second').fadeIn(1);
    $('#showSecondFloor').fadeOut(1);
    $('#showFirstFloor').fadeIn(1);
});

$('#showFirstFloor').click(function(){
    $('.about-virtual_second').fadeOut(1);
    $('.about-virtual_first').fadeIn(1);
    $('#showFirstFloor').fadeOut(1);
    $('#showSecondFloor').fadeIn(1);
});