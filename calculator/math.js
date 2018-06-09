
$(function ()
{
    // Ripped this handy function from this page: https://stackoverflow.com/questions/469357/html-text-input-allows-only-numeric-input?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
    // Basically it prevents the user from entering letters.
    // The html5 'number' input type was insufficient for what was needed.
    $(document).ready(function () {
        $("#equation").keydown(function (e) {
            // Allow: backspace, delete, tab, escape, enter and .
            if ($.inArray(e.keyCode, [46, 56, 8, 9, 27, 13, 106, 110, 187, 189, 190, 191 ]) !== -1 ||
                // Allow: Ctrl/cmd+A
                (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
                // Allow: Ctrl/cmd+C
                (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
                // Allow: Ctrl/cmd+X
                (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });
    });

    $("#calculate").click(function()
    {
        // Get the equation from the text box
        var equation = $("#equation").val();

        // Evaluate the Equation
        $("#equation").val(eval(equation));
    });

    // Function that appends a particular number or symbol to the equation
    function appendToEquation(symbol)
    {
        // grab the value from the equation box
        var equation = $("#equation").val();

        // Append the letter
        $("#equation").val( equation + "" + symbol );
    }

    // Event handlers
    $("#nine").click(function () { appendToEquation(9) });
    $("#eight").click(function () { appendToEquation(8) });
    $("#seven").click(function () { appendToEquation(7) });
    $("#six").click(function () { appendToEquation(6) });
    $("#five").click(function () { appendToEquation(5) });
    $("#four").click(function () { appendToEquation(4) });
    $("#three").click(function () { appendToEquation(3) });
    $("#two").click(function () { appendToEquation(2) });
    $("#one").click(function () { appendToEquation(1) });
    $("#zero").click(function () { appendToEquation(0) });
    $("#add").click(function () { appendToEquation("+") });
    $("#subtract").click(function () { appendToEquation("-") });
    $("#multiply").click(function () { appendToEquation("*") });
    $("#divide").click(function () { appendToEquation("/") });
});