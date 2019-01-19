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