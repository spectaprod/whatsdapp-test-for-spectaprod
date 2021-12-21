const MNEMONIC = '<mnemonic goes here';
const IDENTITY = 'identity string goes here'

//taht's my chatbot id
const RECIPIENT_IDENTITY='5Swnsrr86bMsCQQcJ5YSs7VuCoBktGv6xQ6ztaC7vc2c'

const LocalStorageClearDevPurposeOnly = require('./local_storage_clear_dev');

const {WhatsDapp, WhatsDappEvent} = require('whatsdapp');

const path = require('path');

const run = async () => {

  const appDataPath = process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + '/Library/Preferences' : process.env.HOME + "/.local/share")
  const storagePath = path.join(appDataPath, 'whatsDappSessionsTestKd/' + IDENTITY)

  const storage = new LocalStorageClearDevPurposeOnly(storagePath)

  try {
   await WhatsDapp.prepareEmptyStorage(MNEMONIC, IDENTITY, storage)
  } catch (e) {
    console.log("Storage seems to be initiated already. Try to move on...")
  }

  //generic profile will be created
  const messenger = await WhatsDapp.createWhatsDapp(storage, undefined, true);

  //if you deleted storage uncomment these two lines, rerun, wait for deleting profile and comment it again and rerun
  //await messenger.deleteProfileFromDrive();  
  //return; 

  await messenger.sendMessage(RECIPIENT_IDENTITY, "Hello ChatBot");

  const newMsgArrived = async (msg/*: WhatsDappMessage*/, interlocutor/*: string*/) => {
	console.log("New message arrived:",msg);
    console.log("Now answer");
    let answer = "Echo: " + msg.content;
    await messenger.sendMessage(interlocutor, answer);
  }
  messenger.on(WhatsDappEvent.NewIncomingMessage, newMsgArrived)

  messenger.startPolling();
}
run();
