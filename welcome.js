$(document).ready(function () {
    $("#liveToastBtn").click(function () {
        $("#liveToast").toast("show");
    });

    $("#boredBtn").click(function () {
        $.ajax({
            url: "https://www.boredapi.com/api/activity/",
            success: function (res) {
                console.log(res);
            },
        });
    });
});
