// console.log(`Connected to script.js`);

$(function () {

  $("#add").on("click", function(event) {
       
    //prevent actions from click until add button is explicitly clicked
    event.preventDefault();

    // console.log($("#addfeed").val())
    
      //create object to pass into post req
      //food is the value the user entered and devoured is false by default

      console.log($("#addfeed").val().length !== 0)

      if ($("#addfeed").val().length !== 0) {

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

      }

  });

  //when any feedharvey button is clicked...
  $(".feed-harvey").on("click", function(event) {
    //prevent actions from click until add button is explicitly clicked
    event.preventDefault();

    //harvey img grow 15px bigger than existing size
    let harvey = $("#harvey");
    harvey.animate({
    height: '+=' + '15' + 'px',
    width: '+=' + '15' + 'px'
    }, 'slow');

    // $(".feedme").css('visibility', 'visible').fadeOut(1000);
    

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

  $("#deleteall").on("click", function(event) {
       
    //prevent actions from click until add button is explicitly clicked
    event.preventDefault();

    //devoured value is true - will look for all data with this condition
    let devouredTrue = {
      devoured: 1
    };

    $.ajax("/api/food/", {
      type: "DELETE",
      data: devouredTrue

    }).then(
      
      function() {

        // reload page for updated lists
        location.reload();
      }

    );
  
  });

  $("#feedme").fadeOut(3500);

  //after document loads, check length of not-devoured and devoured lists and add appropriate text

  let harvey = $("#harvey");

  function growHarvey () {
    harvey.animate({
      height: '+=' + '7' + 'px',
      width: '+=' + '7' + 'px'
      }, 'slow');
  }

  if ($("#not-devoured li").length === 0) {
    $("#not-devoured").append("<p>Add Food For Harvey to Eat!</p>");
  } 

  if ($("#devoured li").length === 0) {
    $("#devoured").append("<p>Feed Harvey!</p>");
  }

  if ($("#devoured li").length < 3) {
    growHarvey();
    $("#harvey").attr("src", "./assets/images/harvey.jpg");
    $("#feedme").css("font-size", "15px");

  }
  
  if ($("#devoured li").length >= 3 && $("#devoured li").length <= 5 ) {
    growHarvey();
    $("#harvey").attr("src", "./assets/images/harvey_mouth.jpg");
    $("#feedme").css("font-size", "25px");
  }

  if ($("#devoured li").length >= 6 && $("#devoured li").length <= 8 ) {
    growHarvey();
    $("#harvey").attr("src", "./assets/images/harvey_spiky.jpg");
    $("#feedme").css("font-size", "40px");
  }

  if ($("#devoured li").length >= 9) {
    harvey.animate({
      height: '+=' + '60' + 'px',
      width: '+=' + '60' + 'px'
      }, 'slow');
    $("#harvey").attr("src", "./assets/images/harvey_monster.jpg");
    $("#feedme").css("font-size", "70px");
  }

});