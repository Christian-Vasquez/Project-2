$(document).ready(function() {

  var days = 0;
  var plandays = 1;

  $(".createPlannerButton").click(function(){
    $("#pt").hide();
    console.log("createPlannerButton clikced")
    var start = $('#trainName').datepicker('getDate');
    var end = $('#destination').datepicker('getDate');
    days = (end-start)/1000/60/60/24;
    console.log(start)
    console.log(days);

    for(days; days > 0; days --){
        var card = '<div class="card" id="frequency">';
  card += '<div class="card-header">';
  card += 'Day ' + plandays;
  card += '</div>';
  card += '<div class="card-block">';
  card += '<blockquote class="card-blockquote">';
  card += '<input class="form-control" type="text" placeholder="what is your plan">';
  card += '</blockquote>';
  card += '</div>';
  card += '</div> <br>';



    plandays++;
    $("#planner").append(card);

  }
  $("#planner").append('<input type="submit" value="Submit" class="btn btn-secondary"   />');



    checkup();
  });





  function checkup(){
    console.log("check")
}





})