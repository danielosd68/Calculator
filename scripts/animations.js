$("h2").addClass("disabled-header");
$("li").addClass("disabled-li");

jQuery(document).ready(() => {

    $("h2").animate({ left: "0%" }, 1000);
    setTimeout(() => { $("h2").removeClass("disabled-header"); }, 1000);

    for (let i = 0; i < $("li").length; i++) {

        setTimeout(() => {

            $(`li:nth-child(${i + 1})`).animate({ left: "0%" }, 1000);
            setTimeout(() => { $(`li:nth-child(${i + i})`).removeClass("disabled-header"); }, 1000);
        }, 1000 + (i * 100));
    }

});
