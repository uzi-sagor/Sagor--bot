module.exports.config = {
  name: "<command_name>",
  version: "1.0.0",
  hasPermission: 0,
  credits: "<Author>",
  description: "<Command Description>",
  usePrefix: true, // Set to true to enable the use of prefix while false if not.
  allowPrefix: true, // Set to true to allow prefix even if usePrefix is false, this doesn't do anything if the usePrefix is true.
  commandCategory: "other",
  cooldowns: 5 // seconds to activate again
};

<<<<<<< HEAD
module.exports.run = function ({ api, event, box }) {
  // Your command logic here
  // You can access the event object (event) and the api object (api), and the box object (box) within the function.
  // You can use the api object to send messages, get user information, and perform other actions.
  // You can also use box methods.
  // box.send("Hello, user!", event.threadID);
  // box.reply("Hello, world!");
  // box.react("❤️");
  // box.edit("new text"); edits the last send text (make sure box.send or box.reply is awaited)
=======
module.exports.run = function ({ api, event, message }) {
  // Your command logic here
  // You can access the event object (event) and the api object (api), and the message object (message) within the function.
  // You can use the api object to send messages, get user information, and perform other actions.
  // You can also use message methods.
  // message.send("Hello, user!", event.threadID);
  // message.reply("Hello, world!");
  // message.react("❤️");
  // message.edit("new text"); edits the last send text (make sure message.send or message.reply is awaited)
>>>>>>> f9668b5 (Initial commit)
  // const { [event.senderID]: userInfo } = await api.getUserInfo(event.senderID); for getting user info, it has .name properties.
}