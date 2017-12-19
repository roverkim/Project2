$(document).ready(function() {


  /////////////////////////////////////////////// /* SVG */ //////////////////////////////////////////////////////////
  // Activate Drop Down Menu
  $(".dropdown-button").dropdown();

  // Activate Youtube modal
  $('.youtubeModal').modal();

  // Changes the main page background. 8 images every 5 seconds
  function run(interval, frames) {
      var int = 1;

      function func() {
          document.body.id = "bg"+int;
          int++;
          if(int === frames) { int = 1; }
      }

      var swap = window.setInterval(func, interval);
  }

  run(20000, 9); //milliseconds, frames

  /////////////////////////////////////////////// /* Google Authentication*/ /////////////////////////////////////////////////////////
  // function onSignIn(googleUser) {
  //   // Useful data for client-side scripts:
  //   var profile = googleUser.getBasicProfile();
  //
  //   // The ID token you need to pass to your backend:
  //   var id_token = googleUser.getAuthResponse().id_token;
  //   console.log("ID Token: " + id_token);
  //
  //   var xhr = new XMLHttpRequest();
  //   xhr.open('POST', 'api/signin');
  //   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  //   xhr.onload = function() {
  //     console.log('Signed in as: ' + xhr.responseText);
  //   };
  //   xhr.send('idtoken=' + id_token);
  // };

});
