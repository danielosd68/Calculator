
jQuery(document).ready(() => {

    $("h2").animate({ left: "0%" }, 1000);


    for (let i = 0; i < $("li").length; i++) {

        setTimeout(() => {
            $(`li:nth-child(${i + 1})`).animate({ left: "0%" }, 1000);
        }, 1000 + (i * 100));
    }

});
