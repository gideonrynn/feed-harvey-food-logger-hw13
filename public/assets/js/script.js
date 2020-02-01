// console.log(`Connected to script.js`);

$(function () {

  $("#add").on("click", function(event) {
       
    //prevent actions from click until add button is explicitly clicked
    event.preventDefault();

    // console.log($("#addfeed").val())
    
      //create object to pass into post req
      //food is the value the user entered and devoured is false by default
    let foodEntry = {
      food: $("#addfeed").val(),
      devoured: 0
    };

    // Send post request and pass on data to post route
    $.ajax("/api/food", {
      type: "POST",
      data: foodEntry
    
    }).then(
      function() {
            
        // reload page for updated lists
        location.reload();
      }

    );

  });

  //when the feed harvey button is clicked
  $(".feed-harvey").on("click", function() {

    //harvey img grow 15px bigger than existing size
    let harvey = $("#harvey");
      harvey.animate({
      height: '+=15px',
      width: '+=15px'
      }, 'slow');

    });

    //when any feedharvey button is clicked...
    $(".feed-harvey").on("click", function(event) {

      //prevent actions from click until add button is explicitly clicked
      event.preventDefault();

      //grab the id of the button clicked
      let id = $(this).data("id");
    
      // set devoured value to true
      let devouredTrue = {
        devoured: 1
      };
    
      // Send put request and pass on data to put route
      $.ajax("/api/food/" + id, {
        type: "PUT",
        data: devouredTrue

      }).then(
      
        function() {

          // reload page for updated lists
          location.reload();
        }

      );

  });

});