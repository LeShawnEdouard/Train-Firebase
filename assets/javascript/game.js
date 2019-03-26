
var config = {
  apiKey: "AIzaSyCCGquCQzFe8bddfYtyw6WlBUuh3DuPjOY",
  authDomain: "train-scheduler-6b3c6.firebaseapp.com",
  databaseURL: "https://train-scheduler-6b3c6.firebaseio.com",
  projectId: "train-scheduler-6b3c6",
  storageBucket: "train-scheduler-6b3c6.appspot.com",
  messagingSenderId: "614224330559"
};
firebase.initializeApp(config);

var database = firebase(config);

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


