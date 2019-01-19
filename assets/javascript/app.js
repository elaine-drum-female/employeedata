
var config = {
    apiKey: "AIzaSyD-UOTfAohaCsTYKynpLJZ_Aq8SiePKVHE",
    authDomain: "bev-employeedata.firebaseapp.com",
    databaseURL: "https://bev-employeedata.firebaseio.com",
    projectId: "bev-employeedata",
    storageBucket: "bev-employeedata.appspot.com",
    messagingSenderId: "1043364122825"
};
firebase.initializeApp(config);

var database = firebase.firestore();

var rowNum = 1;
$('#submit').on('click', function () {
    var newRow = $('<div>').addClass('row').attr('id', 'row' + rowNum );
    var targetRow = $('div');
    var newColName = $('<div>').addClass('col-2').text($('#inputName.val()'));
    targetRow.append(newColName);
    var newColRole = $('<div>').addClass('col-2').text($('#inputRole.val()'));
    targetRow.append(newColRole);
    var newColStart = $('<div>').addClass('col-2').text($('#inputStart.val()'));
    targetRow.append(newColStart);
    //format date
    var monthsWorked = ;
    var newColMonths = $('<div>').addClass('col-2').text(monthsWorked);
    targetRow.append(newColMonths);
    var payRate = $('inputRate.val()')
    var newColRate = $('<div>').addClass('col-2').text(payRate);
    targetRow.append(newColRate);
    var newColBilled = $('<div>').addClass('col-2').text(monthsWorked*payRate);
    targetRow.append(newColBilled);
    $('.table').append(newRow);
    rowNum++;
    });

