window.onload=function(){

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAiO2k7mZvzt6AelscOILjQxRuP08WYgAI",
    authDomain: "testproject-e127d.firebaseapp.com",
    databaseURL: "https://testproject-e127d.firebaseio.com",
    storageBucket: "testproject-e127d.appspot.com",
    messagingSenderId: "170820253129"
  };
  firebase.initializeApp(config);


  const txtEmail=document.getElementById('txtEmail');
  const txtPassword=document.getElementById('txtPassword');
  const btnSignin=document.getElementById('btnSignin');
  const btnSignUp=document.getElementById('btnSignUp');
  const txtSignout=document.getElementById('btnSignout');

  btnSignin.addEventListener('click',e=> {

  	const email=txtEmail.value;
  	const pass=txtPassword.value;
  	const auth=firebase.auth();

  	const promise=auth.signInWithEmailAndPassword(email,pass);
  	promise.catch(e=>console.log(e.message)); 
  });

  btnSignUp.addEventListener('click',e=> {

  	const email=txtEmail.value;
  	const pass=txtPassword.value;
  	const auth=firebase.auth();

  	const promise=auth.createUserWithEmailAndPassword(email,pass);
  	promise.catch(e=>console.log(e.message)); 
  });

  btnSignout.addEventListener('click',e=>{
  	firebase.auth().signOut();
  });

  firebase.auth().onAuthStateChanged(firebaseUser=> {
  	if(firebaseUser)
  		alert("logged in");
  	else
  		alert("logged out!");
  });
};
