// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDsgH7I3syOoFfgLGVd9joqH_uE7m_tQjM",
    authDomain: "contact-form-4e0df.firebaseapp.com",
    databaseURL: "https://contact-form-4e0df.firebaseio.com",
    projectId: "contact-form-4e0df",
    storageBucket: "",
    messagingSenderId: "698574550823"
  };
  firebase.initializeApp(config);


  //Form Validation

  function emailValidation()
  {
    //Email Validation
  var email = document.getElementById('email');
  if (email.value == "")
  {
  window.alert("Please enter a valid e-mail address.");
  email.focus();
  return false;
  }
  if (email.value.indexOf("@", 0) < 0)
  {
  window.alert("Please enter a valid e-mail address.");
  email.focus();
  return false;
  }
  if (email.value.indexOf(".", 0) < 0)
  {
  window.alert("Please enter a valid e-mail address.");
  email.focus();
  return false;
  }
  }


 

  //Reference message collection
  var messageRef = firebase.database().ref('messages');




document.getElementById('contactForm').addEventListener('submit',submitForm);


function submitForm(e){
  e.preventDefault();

  var name = getValues('name');
  var email = getValues('email');
  var phone = getValues('phone');
  var comment = getValues('comment');

  //Save this data to Firebase
  saveToFirebase(name,email,phone,comment);


  //Show alert on form submition
  
  
  document.querySelector('.alert').style.display = 'block';

  //Hide alert after 8 seconds
  setTimeout(function(){
    $('.alert').fadeOut();
  },8000);

}


function getValues(id){
        return document.getElementById(id).value;
}



//Save the messages to firebase

function saveToFirebase(name,email,phone,comment){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
      name : name,
      email : email,
      phone:phone,
      comment: comment
    })
}
