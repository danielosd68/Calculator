jQuery(document).ready(function () {
    let arr = [];
    let result = 0;



    class AddToArray {

        constructor(number) {
            this.number = number;


            if (result == "Błąd matematyczny!") {
                $("#result").attr("value", "1");
                arr.splice(0, arr.length + 1);
            }

            //Specjalny przypadek (po wprowadzeniu liczby 0)
            if (number === "0") {
                if (this.isZeroInInput(number) != true) {
                    arr.push(number);
                }
                else {
                    this.isZeroInInput(number);
                }

                if (result == "Błąd matematyczny!") {
                    $("#result").attr("value", "0");
                    arr.splice(0, arr.length + 1);
                }
            }

            //W pozostałych przypadkach
            else {
                this.isZeroInInput(number);
                arr.push(number);
            }




        }

        isZeroInInput(input) {
            if ($("#result").val() == 0) {
                $("#result").attr("value", input);
                return true;
            }
            else {
                $("#result").attr("value", $("#result").val() + input);
            }
        }


    }


    class Operation {
        constructor(type) {
            this.type = type;

            if (result == "Błąd matematyczny!") {
                $("#result").attr("value", "");
                arr.splice(0, arr.length + 1);
            }

            if (type === "%") {
                if (result == "Błąd matematyczny!") {
                    result = 0;
                    arr.splice(0, arr.length + 1);
                }
                let value = parseInt($("#result").val());
                result = (value / 100);
                $("#result").attr("value", result);
                arr.splice(0, arr.length + 1, result);
            }
            else {
                $("#result").attr("value", $("#result").val() + type);
                arr.push(type);
            }

        }
    }

    class Functions {
        equal() {
            let action = arr.join("");
            console.log(action);


            window.addEventListener('error', (e) => {
                $("#result").attr('value', 'Błąd składni!');

                setTimeout(() => {
                    result = "";
                    $("#result").attr("value", 0);
                    arr.splice(0, arr.length + 1);
                }, 2000);
                arr.splice(0, arr.length + 1);

            });


            result = eval(action);



            if (result === Infinity || result === NaN || result === -Infinity) {
                result = "Błąd matematyczny!";

                setTimeout(() => {
                    result = 0;
                    $("#result").attr("value", result);
                    arr.splice(0, arr.length + 1, result);
                }, 2000);
                arr.splice(0, arr.length + 1);

            };


            console.log(action);

            arr.splice(0, arr.length + 1, result);
            $("#result").attr("value", result);
            result = 0;
        }

        backspace() {
            arr.pop();

            $("#result").attr("value", arr.join(""));
            if (arr.length == 0) {
                $("#result").attr("value", 0);
            }
            console.log(arr);
        }

        C() {
            arr.splice(0, arr.length + 1);
            $("#result").attr("value", "0");
            console.log(arr);

        }

        comma() {
            if (result == "Błąd matematyczny!") {
                $("#result").attr("value", "");
                arr.splice(0, arr.length + 1);
            }




            $("#result").attr("value", $("#result").val() + ",");
            arr.push(".");




            console.log(arr);
        }
    }


    ///////////////////////////////////////////////////////////

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
        let divider = new Operation(" / ");
    });

    /*Mnożenie*/
    $(".multiplication").click(() => {
        let multiplication = new Operation(" * ");
    });

    /*Odejmowanie*/
    $(".substraction").click(() => {
        let subtraction = new Operation(" - ");
    });

    /*Dodawanie*/
    $(".plus").click(() => {
        let add = new Operation(" + ");
    });

    /*Procent*/
    $(".percent").click(() => {
        let percent = new Operation("%")
    });

    let functions = new Functions;


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
