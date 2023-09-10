const socket = io('https://chat-websocket-yp19.onrender.com');
const msgBox = document.getElementById('exampleFormControlTextarea1');
const msgCont = document.getElementById('data-container');
const email = document.getElementById('email');
const APP_URL = 'https://chat-websocket-yp19.onrender.com';

//get old messages from the server
const messages = [];
function getMessages() {
  fetch(`${APP_URL}/api/chat`)
    .then((response) => response.json())
    .then((data) => {
      loadDate(data);
      data.forEach((el) => {
        messages.push(el);
      });
    })
    .catch((err) => console.error(err));
}
getMessages();
//When a user press the enter key, send message.
msgBox.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage({ email: email.value, text: e.target.value });
    e.target.value = '';
  }
});
//Display messages to the users
function loadDate(data) {
  let messages = '';
  data.map((message) => {
    messages += ` <li class="bg-secondary p-2 rounded mb-2 text-light">
      <span class="fw-bolder">${message.email}</span>
      ${message.text}
    </li>`;
  });
  msgCont.innerHTML = messages;
}

//socket.io
//emit sendMessage event to send message
function sendMessage(message) {
  socket.emit('message', message);
}
//Listen to recMessage event to get the messages sent by users
socket.on('recMessage', (message) => {
  messages.push(message);
  loadDate(messages);
});
