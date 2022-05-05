$("h2").addClass("disabled-header");
$("li").addClass("disabled-li");

jQuery(document).ready(() => {

    $("h2").animate({ left: "0%" }, 1000);
    setTimeout(() => { $("h2").removeClass("disabled-header"); }, 1000);

    setTimeout(() => {
        $("li:nth-child(1)").animate({ left: "0%" }, 1000);
    }, 1200);

    setTimeout(() => {
        $("li:nth-child(2)").animate({ left: "0%" }, 1000);
    }, 1400);

    setTimeout(() => {
        $("li:nth-child(3)").animate({ left: "0%" }, 1000);
    }, 1600);

    setTimeout(() => {
        $("li:nth-child(4)").animate({ left: "0%" }, 1000);
    }, 1800);

    setTimeout(() => {
        $("li:nth-child(5)").animate({ left: "0%" }, 1000);
    }, 2000);

    setTimeout(() => {
        $("li:nth-child(6)").animate({ left: "0%" }, 1000);
    }, 2200);

    setTimeout(() => {
        $("li:nth-child(7)").animate({ left: "0%" }, 1000);
    }, 2400);
});
