jQuery(document).ready(function () {

    let arr = [0];
    let result = 0;

    function isZeroInInput(input) {
        if ($("#result").val() == 0) {
            $("#result").attr("value", input);
            return true;
        }
        else {
            $("#result").attr("value", $("#result").val() + input);
        }
    }



    ///////////////////////////////////////////////////////////

    $(".element:nth-child(13)").click(() => {


        isZeroInInput("1");

        if (result == "Błąd matematyczny") {
            $("#result").attr("value", "1");
            arr.splice(0, arr.length + 1, 0);
        }


        arr.push(1);
        console.log(arr);

    });

    $(".element:nth-child(14)").click(() => {



        isZeroInInput("2");

        if (result == "Błąd matematyczny") {
            $("#result").attr("value", "2");
            arr.splice(0, arr.length + 1, 0);
        }
        arr.push(2);

    });

    $(".element:nth-child(15)").click(() => {



        isZeroInInput("3");

        if (result == "Błąd matematyczny") {
            $("#result").attr("value", "3");
            arr.splice(0, arr.length + 1, 0);
        }
        arr.push(3);

    });

    $(".element:nth-child(5)").click(() => {



        isZeroInInput("7");

        if (result == "Błąd matematyczny") {
            $("#result").attr("value", "7");
            arr.splice(0, arr.length + 1, 0);
        }
        arr.push(7);

    });

    $(".element:nth-child(6)").click(() => {



        isZeroInInput("8");

        if (result == "Błąd matematyczny") {
            $("#result").attr("value", "8");
            arr.splice(0, arr.length + 1, 0);
        }
        arr.push(8);

    });

    $(".element:nth-child(7)").click(() => {



        isZeroInInput("9");

        if (result == "Błąd matematyczny") {
            $("#result").attr("value", "9");
            arr.splice(0, arr.length + 1, 0);
        }
        arr.push(9);

    });

    $(".element:nth-child(9)").click(() => {



        isZeroInInput("4");

        if (result == "Błąd matematyczny") {
            $("#result").attr("value", "4");
            arr.splice(0, arr.length + 1, 0);
        }
        arr.push(4);

    });

    $(".element:nth-child(10)").click(() => {



        isZeroInInput("5");

        if (result == "Błąd matematyczny") {
            $("#result").attr("value", "5");
            arr.splice(0, arr.length + 1, 0);
        }
        arr.push(5);

    });

    $(".element:nth-child(11)").click(() => {



        isZeroInInput("6");

        if (result == "Błąd matematyczny") {
            $("#result").attr("value", "6");
            arr.splice(0, arr.length + 1, 0);
        }
        arr.push(6);

    });

    $(".element:nth-child(18)").click(() => {

        if (isZeroInInput("0") != true) {
            arr.push(0);
        }
        else {
            isZeroInInput("0");
        }

        if (result == "Błąd matematyczny") {
            $("#result").attr("value", "0");
            arr.splice(0, arr.length + 1, 0);
        }


    });

    //Działanie klawiszy funkcyjnych

    /*Dzielenie*/
    $(".element:nth-child(4)").click(function dzielenie() {

        if (result == "Błąd matematyczny") {
            $("#result").attr("value", "");
            arr.splice(0, arr.length + 1, 0);
        }

        $("#result").attr("value", $("#result").val() + " / ");
        arr.push("/");

    });

    /*Mnożenie*/
    $(".element:nth-child(8)").click(() => {

        if (result == "Błąd matematyczny") {
            $("#result").attr("value", "");
            arr.splice(0, arr.length + 1, 0);

        }

        $("#result").attr("value", $("#result").val() + ' * ');
        arr.push("*");
    });

    /*Odejmowanie*/
    $(".element:nth-child(12)").click(() => {

        if (result == "Błąd matematyczny") {
            $("#result").attr("value", "");
            arr.splice(0, arr.length + 1, 0);
        }

        $("#result").attr("value", $("#result").val() + ' - ');
        arr.push("-");
    });

    /*Dodawanie*/
    $(".element:nth-child(16)").click(() => {

        if (result == "Błąd matematyczny") {
            $("#result").attr("value", "");
            arr.splice(0, arr.length + 1, 0);
        }
        $("#result").attr("value", $("#result").val() + ' + ');
        arr.push("+");
    });

    /*Procent*/
    $(".element:nth-child(1)").click(() => {

        if (result == "Błąd matematyczny") {
            result = 0;
            arr.splice(0, arr.length + 1, 0);
        }
        let value = parseInt($("#result").val());
        result = (value / 100);
        $("#result").attr("value", result);
        arr.splice(0, arr.length + 1, result);


    });


    /*CE*/
    $(".element:nth-child(2)").click(() => {

        arr.splice(0, arr.length + 1, 0);
        console.log(arr);
        $("#result").attr("value", "0");




    });

    /*C*/
    $(".element:nth-child(3)").click(() => {

        arr.splice(0, arr.length + 1, 0);
        $("#result").attr("value", "0");

    });

    $(".element:nth-child(20)").click(() => {



        let action = arr.join("");

        result = eval(action);
        if (result === Infinity || result === NaN || result === -Infinity) {
            result = "Błąd matematyczny";

            setTimeout(() => {
                result = 0;
                $("#result").attr("value", result);
                arr.splice(0, arr.length + 1, result);
            }, 2000);
            arr.splice(0, arr.length + 1, 0);

        };


        console.log(action);

        arr.splice(0, arr.length + 1, result);
        $("#result").attr("value", result);
        result = 0;
    });









});