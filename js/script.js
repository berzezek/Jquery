// $('.elem').slideUp();
$(".show").on("click", function () {
    $(".some").css('display', 'block');
    $("p.some__new").slideDown();
});

let counter = 0;

$(".insert").on("click", function () {

    if ($(".job").val() != "") {
        counter ++;
        $(".some").after($('<p>').attr({'class':'some'}));
        $(".some").next().text("Задание #"+ counter + " " + $(".job").val());
        $("p.some").prev().attr({'class':'some__new'});

        $(".elem").fadeIn();
        $(".elem").fadeOut(1500, 0);
        $(".job").val("");
    } else {
        alert("Введите значение!");
    };
});

$(".job").on("click", function () {
    $(this).css({
        'color': 'red',
        'font-size': '40px',
        'font-style': 'bold',
    })
    $(".job").val("")
    $(this).attr('placeholder', '');
});

$(".btn, .job").on("mouseover", function () {
    $(this).css('border-color', '#695050');
});
$(".btn, .job").on("mouseout", function () {
    $(this).css('border-color', 'silver');
});

$(".btn").on("mouseover", function () {
    $(this).css('background', '#888898');
});
$(".btn").on("mouseout", function () {
    $(this).css('background', 'none');
});


$(".btn").on("click", function () {
    $('.job').css({
        'color': 'blue',
        'font-size': '16px',
        'font-style': 'normal',
    })
    $(".job").val("");
    $(".job").attr('placeholder', 'Задание');
});

$('h2').on("mouseover", function () {
    $('img').slideDown();
})
$('h2').on("mouseout", function () {
    $('img').slideUp();
})
