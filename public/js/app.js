 
jQuery(document).ready(function() {
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