const eval = require("eval");

module.exports.config = {
  name: "eval",
  version: "1.0.2",
  hasPermssion: 2,
  usePrefix: true,
  credits: "Nil Akasher lal tarar Abbu",
  description: "Test codes",
  commandCategory: "system",
  usages: "[Script]",
  cooldowns: 0,
  dependencies: {
    eval: "",
  },
};

module.exports.run = async function ({
  api,
  event,
  args,
  Threads,
  Users,
  Currencies,
  models,
<<<<<<< HEAD
=======
  message,
  msg
>>>>>>> f9668b5 (Initial commit)
}) {
  const out = function (a) {
    if (typeof a === "object" || typeof a === "array") {
      if (Object.keys(a).length != 0) a = JSON.stringify(a, null, 4);
      else a = "";
    }

    if (typeof a === "number") a = a.toString();

    return api.sendMessage(a, event.threadID, event.messageID);
  };
  try {
    const response = await eval(
      args.join(" "),
<<<<<<< HEAD
      { out, api, event, args, Threads, Users, Currencies, models, global },
=======
      { out, api, event, args, Threads, Users, Currencies, models, global, message, msg },
>>>>>>> f9668b5 (Initial commit)
      true,
    );
    return out(response);
  } catch (e) {
    return out(e);
  }
};
