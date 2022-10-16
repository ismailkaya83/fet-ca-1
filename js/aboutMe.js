$(document).ready(function () {
    $("p:contains('Something about me')").addClass("somethingAboutMe");

    $(".somethingAboutMe:first").text("My name is Ismail Kaya");
    $(".somethingAboutMe:last").text("I am living in Bergen, Norway");

    $(".somethingAboutMe").click(function () {
        $(this).css("background-color", "powderblue");
        $(this).css("color", "white");
    });
});
