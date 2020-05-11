'use strict'

$('.project-calc__radio-elem').click(function() {
    event.preventDefault();

    $('.project-calc__radio-elem_active').removeClass('project-calc__radio-elem_active');
    $(this).addClass('project-calc__radio-elem_active');
})


 // Calculate form
 $(document).on('change','.project-calc__checkbox', function () {
    var price = 5000;
    var options = new Array();
    var allPrice = 0;
    var square = $('input#calc-input').val();
    if (square == '')
    {
        $('input#calc-input').val('70');
    }
    if (square < 70) {
        square = 70;
    }

    var squarePrice = price * square;
    allPrice = squarePrice;
    $('.project-calc__column-checkbox .project-calc__checkbox:checked').each(function (){
        options.push($(this).attr('data-value'));
    })

    for (var i = 0; i < options.length; i++) {
        allPrice = Number(allPrice) + (Number(squarePrice) * Number(options[i]));
    }
    if (!$('.project-calc__column-checkbox .project-calc__checkbox').is(':checked'))
    {
        allPrice = 0;
    }
    $('.project-calc__result').html(allPrice);
})





