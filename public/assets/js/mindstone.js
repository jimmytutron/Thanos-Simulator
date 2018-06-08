// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".snapped").on("click", function(event) {
    var id = $(this).data("id");
    var status = $(this).data("alive");

    var aliveStatus = {
      alive: status
    };

    // Send the PUT request.
    $.ajax("/api/avengers/" + id, {
      type: "PUT",
      data: aliveStatus
    }).then(
      function() {
        console.log("This avenger is now", status);
        // Reload the page to get the updated list
        setTimeout(window.location.reload.bind(window.location), 2005);
      }
    );
  });

  $(".add-avenger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var userInput = $("#avengerName").val().trim();

    if(userInput === ""){
      $("#invalid-feedback").html(`<p class=" text-danger text-right">Please enter a name...<p>`);
    }else {

    var newAvenger = {
      name: userInput,
      alive: 1
    };

    // Send the POST request.
    $.ajax("/api/avengers", {
      type: "POST",
      data: newAvenger
    }).then(
      function() {
        console.log("Assembled new Avenger");
        // Reload the page to get the updated list
        location.reload();
      });
  }

  });

});
