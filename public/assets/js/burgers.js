
$(function () {
    $(".devour").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr("data-id");
        console.log(id);


        var newDevourState = {
            devoured: true,
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState,
        }).then(function () {
            console.log("Devoured : " + newDevourState);
            location.reload();
        });
    });

    $(".delete-burger").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr("data-id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
        }).then(function () {
            console.log("Deleted!", id);
            location.reload();
        });
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var userInput = $("#burgerText").val().trim();

        if (userInput == "") {
            alert("Invalid input. Please try again!");
            location.reload();
        }

        var newBurger = {
            burger_name: $("#burgerText").val().trim(),
            devoured: false,
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger,
        }).then(function () {
            console.log("Inserted the new burger!");
            location.reload();
        });
    });
});
