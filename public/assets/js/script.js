// console.log(`Connected to script.js`);

$(function () {
  
  // $(".feedme").css("visibility", 'visible').fadeIn(2000).fadeOut(2000)


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

  //when any feedharvey button is clicked...
  $(".feed-harvey").on("click", function(event) {
    //prevent actions from click until add button is explicitly clicked
    event.preventDefault();

    //harvey img grow 15px bigger than existing size
    // let harvey = $("#harvey");
    // harvey.animate({
    // height: '+=' + '15' + 'px',
    // width: '+=' + '15' + 'px'
    // }, 'slow');
    

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