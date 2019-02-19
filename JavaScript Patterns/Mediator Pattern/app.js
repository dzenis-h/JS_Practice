const User = function(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },
  recieve: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function() {
  let users = {}; // list of users

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if(to) {
        // Single user message
        to.recieve(message, from);
      } else {
        // Mass message
        for(key in users) {
          if(users[key] !== from) {
            users[key].recieve(message, from);
          }
        }
      }
    }
  }
}

const dzenis = new User('Dzenis');
const bill = new User('Bill');
const amra = new User('Amra');

const chatroom = new Chatroom();

chatroom.register(dzenis);
chatroom.register(bill);
chatroom.register(amra);

bill.send('Hello to guys :)', '');
amra.send(`Hello ${dzenis.name}, you are the best dev ever!`, dzenis);
dzenis.send('Just getting started ;)', amra);
dzenis.send('Oh, hi Bill, all good?', bill);

