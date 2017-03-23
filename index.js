const ChatApp = require('./class');

let webinarChat =  new ChatApp('webinar');
let facebookChat = new ChatApp('=========facebook');
let vkChat =       new ChatApp('---------vk');

let chatOnMessage = (message) => {
  console.log(message);
};

let onMessage = () => {
  console.log('Готовлюсь к ответу');
};
// 5
let closeVk = () => {
  console.log('Чат вконтакте закрылся :(');
};

// 1
webinarChat.on('message', onMessage);

webinarChat.on('message', chatOnMessage);
facebookChat.on('message', chatOnMessage);
vkChat.on('message', chatOnMessage);
// 2
vkChat.setMaxListeners(2);
// 3
vkChat.on('message', onMessage);
// 6
vkChat.once('close', closeVk);
vkChat.close();


function close(name, timeout, message) {
  setTimeout( ()=> {
    console.log(message);
  name.close();
}, timeout );
}

// Закрыть вконтакте
close(vkChat, 10000, 'Закрываю вконтакте...');
// Закрыть фейсбук
close(facebookChat, 15000, 'Закрываю фейсбук, все внимание — вебинару!');
// Закрыть вебинар
close(webinarChat, 30000, 'Закрываю вебинар.');
