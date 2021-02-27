$(".show").on("click", function () {
    $(".some").css('display', 'block');
    setTimeout(function () {
        $(".some").css('display', 'none');
    }, 1500)

});

let counter = 0;

$(".insert").on("click", function () {

    if ($(".job").val() != "") {
        counter ++;
        $("#spisok").after($('<p>').attr({'class':'some'}));
        $("#spisok").next().text("Задание #"+ counter +"  " + $(".job").val());
        $(".elem p").css('display', 'block');
        $(".job").val("");

        setTimeout(function () {
            $(".elem p").css('display', 'none');
        }, 2000)

    } else {
        $(".elem p").css('display', 'none');
        alert("Введите значение!");
    }
});

$(".job").on("click", function () {
    $(this).css({
        'color': 'red',
        'font-size': '40px',
        // 'font-style': 'bold'
    })
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
