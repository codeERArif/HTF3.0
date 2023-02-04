const firebaseConfig = {
    apiKey: "AIzaSyDb9Q2Ig6AK1xzr3SDCjv-OpGHBFYGgiRE",
    authDomain: "patientdata-26d09.firebaseapp.com",
    databaseURL: "https://patientdata-26d09-default-rtdb.firebaseio.com",
    projectId: "patientdata-26d09",
    storageBucket: "patientdata-26d09.appspot.com",
    messagingSenderId: "117950988691",
    appId: "1:117950988691:web:3eb1cdaa8dedad90c42866",
    measurementId: "G-5JT7E9GCN0"
  };



  //this is to initilize the firebase
firebase.initializeApp(firebaseConfig);


// refrence your datababase 

var submitFormDetail= firebase.database().ref('submitForm');

document.getElementById("detailForm").addEventListener("submit", submitForm)

function submitForm(e){
    e.preventDefault();
    var patientName= getElementvalue('patientName');
    var date= getElementvalue('date');
    var cureDisease= getElementvalue('cureDisease');
    var email= getElementvalue('emailAddres');
    var uploadReport= getElementvalue('uploadReport');
    saveDetail(patientName, date, cureDisease, email, uploadReport);
}


    // to check  its  printing the name

    console.log(patientName, date, cureDisease, email, uploadReport); 


    const saveDetail = (patientName, date, cureDisease , email, uploadReport)=> {
        var newForm=submitFormDetail.push();
        newForm.set({
            patientName:patientName,
            date:date,
            cureDisease:cureDisease,
            email:email,
            uploadReport:uploadReport,
        });
}; 
 







const getElementvalue = (id) =>{
    return document.getElementById(id).value;
}