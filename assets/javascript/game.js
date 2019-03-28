$(document).ready(function)
var config = {
  apiKey: "AIzaSyCCGquCQzFe8bddfYtyw6WlBUuh3DuPjOY",
  authDomain: "train-scheduler-6b3c6.firebaseapp.com",
  databaseURL: "https://train-scheduler-6b3c6.firebaseio.com",
  projectId: "train-scheduler-6b3c6",
  storageBucket: "train-scheduler-6b3c6.appspot.com",
  messagingSenderId: "614224330559"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#add-train-btn").on("click", function(event) {
    event.preventDefault();

    
    var trainName = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var trainTime = $("#time-input").val().trim();
    var frequency = $("#frequency-input").val().trim();


    var newTrain = {
        name: trainName,
        desti: destination,
        time: trainTime,
        rate: frequency
    };


    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.desti);
    console.log(newTrain.time);
    console.log(newTrain.rate);

    
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#time-input").val("");
    $("#frequency-input").val("");
});


database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());



    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().desti;
    var trainTime = childSnapshot.val().time;
    var frequency = childSnapshot.val().rate;


    console.log(trainName);
    console.log(destination);
    console.log(trainTime);
    console.log(frequency);






    var tFrequency = 5;


    var firstTime = "05:30";


    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);



    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));



    var diffTime = momment().diff(moment(firstTimeConverted), "minutes");


    var tRemainder = diffTime % tFrequency;


    var tMinutesTillTrain = tFrequency - tRemainder;


    var nextTrain = moment().add(tMinutesTillTrain, "minutes");


    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(destination),
        $("<td>").text(trainTime),
        $("<td>").text(frequency)
    );


    $("#train-table > tbody").append(newRow);










});