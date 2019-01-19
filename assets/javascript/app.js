$(document).ready(() => {
    refreshRows();
})

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

$('#submit').click(event => {
    event.preventDefault();

    database.collection('Employees').doc().set({
        Name: $('#name').val(),
        Role: $('#role').val(),
        StartDate: $('#start-date').val(),
        PayRate: $('#rate').val()
    })

    refreshRows();
})

function refreshRows() {
    $('.table-body').html('');
    let row = 0;
    database.collection('Employees').get().then(documents => {
        documents.forEach(doc => {
            let months = 0;
            let total = months * doc.data().PayRate;
            $(`<div class="row" id=${row}>`).append($('<div class="col-sm-2">').text(doc.data().Name), $('<div class="col-sm-2">').text(doc.data().Role), $('<div class="col-sm-2">').text(doc.data().StartDate), $('<div class="col-sm-2">').text(0), $('<div class="col-sm-2">').text(doc.data().PayRate), $('<div class="col-sm-2">').text(total)).appendTo('.table-body');
        })
    })
}