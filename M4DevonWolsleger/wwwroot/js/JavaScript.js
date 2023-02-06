//Jquery selectors to output the proper final grade
$("#BtnSubmit").click(function () {
    var assg = $("#assg").val();
    var group = $('#group').val();
    var midterm = $('#midterm').val();
    var final = $('#final').val();
    var intex = $('#intex').val();

    var total = (parseInt(assg)*.5)+(parseInt(group)*.1)+(parseInt(midterm)*.1)+(parseInt(final)*.1)+(parseInt(intex)*.1);


    var percentage = parseFloat($(total).val());
    var letterGrade;

    if (percentage >= 90) {
        letterGrade = "A";
    } else if (percentage >= 80) {
        letterGrade = "B";
    } else if (percentage >= 70) {
        letterGrade = "C";
    } else if (percentage >= 60) {
        letterGrade = "D";
    } else {
        letterGrade = "F";
    }

    $("#letterGrade").val(letterGrade);


    var display = "Your final grade in this class will be " + total + "%. Which is an " + letterGrade;

    $('#output1').html(display);

})