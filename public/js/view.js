$(document).ready(function() {

  var days = 0;
  var plandays = 1;
  $(".useless").hide();


  $(".createPlannerButton").click(function(){
    $("#pt").hide();
    console.log("createPlannerButton clikced")
    var start = $('#trainName').datepicker('getDate');
    var end = $('#destination').datepicker('getDate');
    days = (end-start)/1000/60/60/24;
    console.log(start)
    console.log(days);

//card and input forms

$("#planner").append($('#frequency').val());
    for(days; days > 0; days --){
  var card = '<div class="card">';
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
  $("#planner").append('<a href="admin.html"><button class="btn btn-default border-radius custom-sub-btn submitButton"  type="button">Submit</button></a>');



    checkup();
  });





  function checkup(){
    console.log("check")
}




  var table = jQuery("#trainTable");
  var form = jQuery("#trainForm");
  var name = jQuery("#trainName");
  var dest = jQuery("#destination");
  var time = jQuery("#trainTime");
  var freq = jQuery("#frequency");
  var database = firebase.database();


  jQuery('.btn').mousedown(function() {
    database.ref().push({
      name: name.val(),
      dest: dest.val(),
      time: time.val(),
      freq: freq.val()
    })
  });


database.ref().on("child_added", function(snapshot) {
    var current = snapshot.val();
    var now = moment();
    var tStart = moment(current.time, "HH:mm");
    var nextTrain = moment(tStart.add((Math.ceil((now.diff(tStart, "minutes")/current.freq)) * current.freq), "minutes"));
    var minAway = nextTrain.diff(now, "minutes");
    var timediff = moment().diff(moment(current.time, "HH:mm"), "minutes");
    table.append(`<tr><td>${
      current.name
    }</td><td>${
      current.dest
    }</td><td>${
      current.freq
    }</td></tr>`);
    });


})