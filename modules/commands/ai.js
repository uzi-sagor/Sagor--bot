const { Hercai } = require('hercai');
const herc = new Hercai();

module.exports.config = {
  name: 'ai',
  version: '1.1.0',
  hasPermssion: 0,
  credits: 'Yan Maglinte | Liane Cagara',
  description: 'An AI command using Hercai API!',
  usePrefix: false,
  allowPrefix: true,
  commandCategory: 'chatbots',
  usages: 'Ai [prompt]',
  cooldowns: 5,
};

<<<<<<< HEAD
module.exports.run = async function ({ api, event, args, box }) {
  const prompt = args.join(' ');
  if (!box) {
=======
module.exports.run = async function ({ api, event, args, message }) {
  const prompt = args.join(' ');
  if (!message) {
>>>>>>> f9668b5 (Initial commit)
    return api.sendMessage(`Unsupported.`, event.threadID);
  }

  try {
    // Available Models: "v3", "v3-32k", "turbo", "turbo-16k", "gemini"
    if (!prompt) {
<<<<<<< HEAD
      box.reply('Please specify a message!');
      box.react('❓');
    } else {
      const info = await box.reply(`Fetching answer...`);
      box.react('⏱️');
      const response = await herc.question({ model: 'v3', content: prompt });
      await box.edit(response.reply, info.messageID);
      box.react('');
    }
  } catch (error) {
    box.reply('⚠️ Something went wrong: ' + error);
    box.react('⚠️');
=======
      message.reply('Please specify a message!');
      message.react('❓');
    } else {
      const info = await message.reply(`Fetching answer...`);
      message.react('⏱️');
      const response = await herc.question({ model: 'v3', content: prompt });
      await message.edit(response.reply, info.messageID);
      message.react('');
    }
  } catch (error) {
    message.reply('⚠️ Something went wrong: ' + error);
    message.react('⚠️');
>>>>>>> f9668b5 (Initial commit)
  }
};
