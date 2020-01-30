console.log(`Connected to script.js`);

$(function () {

    //any time the a feed button is clicked 
    $(".feed-harvey").click(function(){
        var harvey = $("#harvey");
        harvey.animate({
        height: '+=15px',
        width: '+=15px'
      }, 'slow');
    })

    $("#add").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        // console.log($("#addfeed").val())
    
        var foodEntry = {
          food: $("#addfeed").val(),
          devoured: 0
        };


        console.log(foodEntry);
        // console.log(foodEntry.food);
        // console.log(foodEntry.devoured);

        // Send the POST request.
        $.ajax("/api/food", {
          type: "POST",
          data: foodEntry
        }).then(
          function() {
            console.log("created new food item");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });


});