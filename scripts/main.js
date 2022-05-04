jQuery(document).ready(function () {
    let arr = [];
    let result = 0;

    class AddToArray {

        constructor(number) {
            this.number = number;

            //Specjalny przypadek (gdy jest liczba 0)
            if (number === "0") {
                if (this.isZeroInInput(number) != true) {
                    arr.unshift(number);
                }
                else {
                    this.isZeroInInput(number);
                }

            }

            //W pozostałych przypadkach
            else {
                this.isZeroInInput(number);
                arr.push(number);
            }



        }
        isZeroInInput(input) {
            if ($("#result").val() == 0 && typeof (input) == "number") {
                $("#result").attr("value", input);

                return true;
            }
            else {
                $("#result").attr("value", $("#result").val() + input);
            }
        }
    }

    class Functions {
        equal() {
            if (typeof (arr[0]) != "number") {
                arr.unshift(0);
            }


            let action = arr.join("");
            console.log("Działanie: " + action);


            window.addEventListener('error', (e) => {
                $("#result").attr('value', 'Błąd składni!');

                setTimeout(() => {
                    result = "";
                    $("#result").attr("value", 0);
                    arr.splice(0, arr.length + 1);
                }, 2000);
                arr.splice(0, arr.length + 1);

            });

            Number.prototype.round = function (nr) {
                return +(Math.round(this + "e+" + nr) + "e-" + nr);
            }

            result = (eval(action)).round(14);
            console.log("Działanie: " + result);

            if (result == Infinity || isNaN(result) === true || result == -Infinity) {
                result = "Błąd matematyczny!";

                setTimeout(() => {
                    result = 0;
                    $("#result").attr("value", result);
                    arr.splice(0, arr.length + 1);
                }, 2000);
                arr.splice(0, arr.length + 1);
                console.log(arr);

            };

            console.log(action);

            arr.splice(0, arr.length + 1, result);
            $("#result").attr("value", result);

        }

        backspace() {
            arr.pop();

            $("#result").attr("value", arr.join(""));
            if (arr.length == 0) {
                $("#result").attr("value", 0);
            }

        }

        C() {
            arr.splice(0, arr.length + 1);
            $("#result").attr("value", "0");


        }

        comma() {

            $("#result").attr("value", $("#result").val() + ",");
            arr.push(".");


        }

        percent() {
            this.equal();

            result = (result / 100);

            arr.splice(0, arr.length + 1, result);
            $("#result").attr("value", result);
            result = 0;

        }
    }


    $(".one").click(() => {
        let one = new AddToArray(1);
    });

    $(".two").click(() => {
        let two = new AddToArray(2);
    });

    $(".three").click(() => {
        let three = new AddToArray(3);
    });

    $(".seven").click(() => {
        let seven = new AddToArray(7);
    });

    $(".eight").click(() => {
        let eight = new AddToArray(8)
    });

    $(".nine").click(() => {
        let nine = new AddToArray(9)
    });

    $(".four").click(() => {
        let four = new AddToArray(4)
    });

    $(".five").click(() => {
        let five = new AddToArray(5)
    });

    $(".six").click(() => {
        let six = new AddToArray(6)
    });

    $(".zero").click(() => {
        let zero = new AddToArray(0)
    });

    //Działanie klawiszy funkcyjnych

    /*Dzielenie*/
    $(".divider").click(function dzielenie() {
        let divider = new AddToArray(" / ");
    });

    /*Mnożenie*/
    $(".multiplication").click(() => {
        let multiplication = new AddToArray(" * ");
    });

    /*Odejmowanie*/
    $(".substraction").click(() => {
        let subtraction = new AddToArray(" - ");
    });

    /*Dodawanie*/
    $(".plus").click(() => {
        let add = new AddToArray(" + ");
    });



    let functions = new Functions;

    /*Procent*/
    $(".percent").click(() => {
        functions.percent();
    });

    /*backspace*/
    $(".backspace").click(() => {
        functions.backspace();
    });

    /*C*/
    $(".clear").click(() => {
        functions.C();
    });

    /*Przecinek*/
    $(".comma").click(() => {
        functions.comma();
    });

    $(".equal").click(() => {

        functions.equal();
    });

    let date = new Date();
    let year = date.getFullYear();
    $("footer h3").html(`&copy; Copyright ${year} <a href='https://github.com/danielosd68'>Daniel Chyliński</a>`);


});
