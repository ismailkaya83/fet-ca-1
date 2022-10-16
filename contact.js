function getContact(email, telephone_number, address) {
    email = prompt("Please enter your email address");
    while (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        email = prompt("Please enter a valid email address");
    }
    $("h5:contains('Email')")
        .next()
        .text("From: " + email);

    telephone_number = prompt("Please enter your telephone number");
    while (isNaN(telephone_number)) {
        telephone_number = prompt("Please enter a valid telephone number");
    }
    $("h5:contains('Call Me')")
        .next()
        .text("Contact: " + telephone_number);
        
    address = prompt("Please enter your address");
    while (address == "") {
        address = prompt("Please enter a valid address");
    }
    $("h5:contains('Visit Us')")
        .next()
        .text("Address: " + address);
}

$(function () {
    $("button:contains('Button')").click(function () {
        getContact();
    });
});
