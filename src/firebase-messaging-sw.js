importScripts("https://www.gstatic.com/firebasejs/5.4.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.4.1/firebase-messaging.js");

firebase.initializeApp({
  messagingSenderId: "108327814733"
});

const messaging = firebase.messaging();
