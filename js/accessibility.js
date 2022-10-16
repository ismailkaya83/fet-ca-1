$(document).ready(function () {
    $("#accessToggle").change(function () {
        if ($("#accessToggle").prop("checked")) {
            $("p").css("font-size", "1.2em");
        } else {
            $("p").css("font-size", "1em");
        }
    });
});
