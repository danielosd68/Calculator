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
                    arr.splice(0, arr.length + 1, result);
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

    $(".element:nth-child(13)").click(() => {
        let one = new AddToArray("1");
    });

    $(".element:nth-child(14)").click(() => {
        let two = new AddToArray("2");
    });

    $(".element:nth-child(15)").click(() => {
        let three = new AddToArray("3");
    });

    $(".element:nth-child(5)").click(() => {
        let seven = new AddToArray("7");
    });

    $(".element:nth-child(6)").click(() => {
        let eight = new AddToArray("8")
    });

    $(".element:nth-child(7)").click(() => {
        let nine = new AddToArray("9")
    });

    $(".element:nth-child(9)").click(() => {
        let four = new AddToArray("4")
    });

    $(".element:nth-child(10)").click(() => {
        let five = new AddToArray("5")
    });

    $(".element:nth-child(11)").click(() => {
        let six = new AddToArray("6")
    });

    $(".element:nth-child(18)").click(() => {
        let zero = new AddToArray("0")
    });

    //Działanie klawiszy funkcyjnych

    /*Dzielenie*/
    $(".element:nth-child(4)").click(function dzielenie() {
        let divider = new Operation(" / ");
    });

    /*Mnożenie*/
    $(".element:nth-child(8)").click(() => {
        let multiplication = new Operation(" * ");
    });

    /*Odejmowanie*/
    $(".element:nth-child(12)").click(() => {
        let subtraction = new Operation(" - ");
    });

    /*Dodawanie*/
    $(".element:nth-child(16)").click(() => {
        let add = new Operation(" + ");
    });

    /*Procent*/
    $(".element:nth-child(1)").click(() => {
        let percent = new Operation("%")
    });

    let functions = new Functions;


    /*backspace*/
    $(".element:nth-child(2)").click(() => {

        functions.backspace();


    });

    /*C*/
    $(".element:nth-child(3)").click(() => {

        functions.C();
    });

    /*Przecinek*/
    $(".element:nth-child(19)").click(() => {

        functions.comma();

    });

    $(".element:nth-child(20)").click(() => {

        functions.equal();
    });

    let date = new Date();
    let year = date.getFullYear();
    $("footer h3").html(`&copy; Copyright ${year} <a href='https://github.com/danielosd68'>Daniel Chyliński</a>`);






});
