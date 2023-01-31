//Jquery selectors to output the proper final grade
$("#BtnSubmit").click(function () {
    var assg = $("#assg").val();
    var group = $('#group').val();
    var midterm = $('#midterm').val();
    var final = $('#final').val();
    var intex = $('#intex').val();

    var total = (parseInt(assg)*.5)+(parseInt(group)*.1)+(parseInt(midterm)*.1)+(parseInt(final)*.1)+(parseInt(intex)*.1);

    var display = "Your final grade in this class will be " + total + "%.";

    $('#output1').html(display);

})