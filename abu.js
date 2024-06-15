const _0x146595 = function () {
  let _0x582ac0 = true;
  return function (_0x2ad11f, _0x4eaab8) {
    const _0x2a749c = _0x582ac0 ? function () {
      if (_0x4eaab8) {
        const _0x57d375 = _0x4eaab8.apply(_0x2ad11f, arguments);
        _0x4eaab8 = null;
        return _0x57d375;
      }
    } : function () {};
    _0x582ac0 = false;
    return _0x2a749c;
  };
}();
const _0x4dc114 = _0x146595(this, function () {
  let _0x4b3d65;
  try {
    const _0x22e62b = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x4b3d65 = _0x22e62b();
  } catch (_0x23a2ff) {
    _0x4b3d65 = window;
  }
  const _0x145660 = _0x4b3d65.console = _0x4b3d65.console || {};
  const _0x3389f2 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x1f35d3 = 0; _0x1f35d3 < _0x3389f2.length; _0x1f35d3++) {
    const _0x2ba77 = _0x146595.constructor.prototype.bind(_0x146595);
    const _0x269533 = _0x3389f2[_0x1f35d3];
    const _0x16870d = _0x145660[_0x269533] || _0x2ba77;
    _0x2ba77.__proto__ = _0x146595.bind(_0x146595);
    _0x2ba77.toString = _0x16870d.toString.bind(_0x16870d);
    _0x145660[_0x269533] = _0x2ba77;
  }
});
_0x4dc114();
'use strict';
let mdata = {};
var __createBinding = this && this.__createBinding || (Object.create ? function (_0x322d5b, _0x572f80, _0x5ac376, _0x75ccc4) {
  if (_0x75ccc4 === undefined) {
    _0x75ccc4 = _0x5ac376;
  }
  var _0x18abb0 = Object.getOwnPropertyDescriptor(_0x572f80, _0x5ac376);
  if (!_0x18abb0 || ("get" in _0x18abb0 ? !_0x572f80.__esModule : _0x18abb0.writable || _0x18abb0.configurable)) {
    const _0x130779 = {
      "enumerable": true,
      "get": function () {
        return _0x572f80[_0x5ac376];
      }
    };
    _0x18abb0 = _0x130779;
  }
  Object.defineProperty(_0x322d5b, _0x75ccc4, _0x18abb0);
} : function (_0x1fbcd9, _0x51a771, _0x2f4922, _0x2113e5) {
  if (_0x2113e5 === undefined) {
    _0x2113e5 = _0x2f4922;
  }
  _0x1fbcd9[_0x2113e5] = _0x51a771[_0x2f4922];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (_0x3a0a09, _0x31aca6) {
  const _0x46854b = {
    enumerable: true,
    "value": _0x31aca6
  };
  Object.defineProperty(_0x3a0a09, "default", _0x46854b);
} : function (_0x275717, _0x4cfe8e) {
  _0x275717["default"] = _0x4cfe8e;
});
var __importStar = this && this.__importStar || function (_0x41d39c) {
  if (_0x41d39c && _0x41d39c.__esModule) {
    return _0x41d39c;
  }
  var _0x345198 = {};
  if (_0x41d39c != null) {
    for (var _0x49ab54 in _0x41d39c) if (_0x49ab54 !== "default" && Object.prototype.hasOwnProperty.call(_0x41d39c, _0x49ab54)) {
      __createBinding(_0x345198, _0x41d39c, _0x49ab54);
    }
  }
  __setModuleDefault(_0x345198, _0x41d39c);
  return _0x345198;
};
var __importDefault = this && this.__importDefault || function (_0x4a4cf7) {
  return _0x4a4cf7 && _0x4a4cf7.__esModule ? _0x4a4cf7 : {
    "default": _0x4a4cf7
  };
};
const _0x51f603 = {
  value: true
};
Object.defineProperty(exports, "__esModule", _0x51f603);
const baileys_1 = __importStar(require("@whiskeysockets/baileys"));
const logger_1 = __importDefault(require("@whiskeysockets/baileys/lib/Utils/logger"));
const logger = logger_1["default"].child({});
logger.level = "silent";
const pino = require("pino");
const boom_1 = require("@hapi/boom");
const conf = require("./set");
let fs = require("fs-extra");
let path = require("path");
const FileType = require("file-type");
const {
  verifierEtatJid,
  recupererActionJid
} = require("./data/antilien");
const {
  atbverifierEtatJid,
  atbrecupererActionJid
} = require("./data/antibot");
let evt = require(__dirname + "/france/king");
let {
  reagir
} = require(__dirname + "/france/app");
var session = conf.session.replace(/FLASH-MD-WA-BOT;;;=>/g, '');
const prefixe = conf.PREFIXE;
async function authentification() {
  try {
    if (!fs.existsSync(__dirname + "/auth/creds.json")) {
      console.log("connection in progress ...");
      await fs.writeFileSync(__dirname + "/auth/creds.json", atob(session), "utf8");
    } else if (fs.existsSync(__dirname + "/auth/creds.json") && session != "zokk") {
      await fs.writeFileSync(__dirname + "/auth/creds.json", atob(session), "utf8");
    }
  } catch (_0xc6d2d7) {
    console.log("Session Invalid " + _0xc6d2d7);
    return;
  }
}
authentification();
const _0x1ce233 = {
  "level": "silent",
  "stream": "store"
};
0;
const store = baileys_1.makeInMemoryStore({
  "logger": pino().child(_0x1ce233)
});
setTimeout(() => {
  async function _0x4e643f() {
    0;
    0;
    const {
      state: _0x42beb6,
      saveCreds: _0xce10ab
    } = await baileys_1.useMultiFileAuthState(__dirname + "/auth");
    const _0x5f4fc6 = {
      level: "silent"
    };
    0;
    const _0x30fb25 = {
      "version": _0x24c202,
      "logger": pino(_0x5f4fc6),
      "browser": ["Flash-Md", "safari", "1.0.0"],
      "printQRInTerminal": true,
      "fireInitQueries": false,
      "shouldSyncHistoryMessage": true,
      "downloadHistory": true,
      "syncFullHistory": true,
      "generateHighQualityLinkPreview": true,
      "markOnlineOnConnect": false,
      "keepAliveIntervalMs": 0x7530,
      "auth": {
        "creds": _0x42beb6.creds,
        "keys": baileys_1.makeCacheableSignalKeyStore(_0x42beb6.keys, logger)
      },
      "getMessage": async _0x2eb232 => {
        if (store) {
          const _0x29aa3f = await store.loadMessage(_0x2eb232.remoteJid, _0x2eb232.id, undefined);
          return _0x29aa3f.message || undefined;
        }
        const _0x5bbb0d = {
          conversation: "An Error Occurred, Repeat Command!"
        };
        return _0x5bbb0d;
      }
    };
    0;
    const _0x3e9e76 = baileys_1["default"](_0x30fb25);
    store.bind(_0x3e9e76.ev);
    setInterval(() => {
      store.writeToFile("store.json");
    }, 3000);
    _0x3e9e76.ev.on("messages.upsert", async _0x430808 => {
      const {
        messages: _0x2bf1a5
      } = _0x430808;
      const _0x1db3b8 = _0x2bf1a5[0];
      if (!_0x1db3b8.message) {
        return;
      }
      const _0x4f16fb = _0x10ab10 => {
        if (!_0x10ab10) {
          return _0x10ab10;
        }
        if (/:\d+@/gi.test(_0x10ab10)) {
          0;
          let _0x1ba2aa = baileys_1.jidDecode(_0x10ab10) || {};
          return _0x1ba2aa.user && _0x1ba2aa.server && _0x1ba2aa.user + "@" + _0x1ba2aa.server || _0x10ab10;
        } else {
          return _0x10ab10;
        }
      };
      0;
      var _0x3a0f69 = baileys_1.getContentType(_0x1db3b8.message);
      var _0x3f5e5b = _0x3a0f69 == "conversation" ? _0x1db3b8.message.conversation : _0x3a0f69 == "imageMessage" ? _0x1db3b8.message.imageMessage?.["caption"] : _0x3a0f69 == "videoMessage" ? _0x1db3b8.message.videoMessage?.["caption"] : _0x3a0f69 == "extendedTextMessage" ? _0x1db3b8.message?.["extendedTextMessage"]?.["text"] : _0x3a0f69 == "buttonsResponseMessage" ? _0x1db3b8?.["message"]?.["buttonsResponseMessage"]?.["selectedButtonId"] : _0x3a0f69 == "listResponseMessage" ? _0x1db3b8.message?.["listResponseMessage"]?.["singleSelectReply"]?.["selectedRowId"] : _0x3a0f69 == "messageContextInfo" ? _0x1db3b8?.["message"]?.["buttonsResponseMessage"]?.["selectedButtonId"] || _0x1db3b8.message?.["listResponseMessage"]?.["singleSelectReply"]?.["selectedRowId"] || _0x1db3b8.text : '';
      var _0x533869 = _0x1db3b8.key.remoteJid;
      var _0x219270 = _0x4f16fb(_0x3e9e76.user.id);
      var _0x3b16e3 = _0x219270.split("@")[0];
      if (_0x533869 === "120363244435092946@g.us") {
        return;
      }
      const _0x3ff4e1 = _0x533869?.["endsWith"]("@g.us");
      var _0x222b18 = _0x3ff4e1 ? await _0x3e9e76.groupMetadata(_0x533869) : '';
      var _0x395f30 = _0x3ff4e1 ? _0x222b18.subject : '';
      var _0x45dc0d = _0x1db3b8.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"];
      var _0x13dc8d = _0x4f16fb(_0x1db3b8.message?.["extendedTextMessage"]?.["contextInfo"]?.["participant"]);
      var _0x33816f = _0x3ff4e1 ? _0x1db3b8.key.participant ? _0x1db3b8.key.participant : _0x1db3b8.participant : _0x533869;
      if (_0x1db3b8.key.fromMe) {
        _0x33816f = _0x219270;
      }
      mdata[_0x1db3b8.key.id] = {
        "text": _0x3f5e5b,
        "del_by": _0x33816f,
        "chat": _0x395f30 || _0x533869.split("@")[0]
      };
      var _0x192a02 = _0x3ff4e1 ? _0x1db3b8.key.participant : '';
      const {
        getAllSudoNumbers: _0x430ec3
      } = require("./data/sudo");
      const _0x8f9ded = _0x1db3b8.pushName;
      const _0x1603fb = await _0x430ec3();
      const _0x1c760c = [_0x3b16e3, "923184474176", "254742063632", "254757835036", "254750948696", "254751284190", conf.OWNER_NUMBER].map(_0x1f9db8 => _0x1f9db8.replace(/[^0-9]/g) + "@s.whatsapp.net");
      const _0x2dbf30 = _0x1c760c.concat(_0x1603fb);
      const _0x3cb7c3 = _0x2dbf30.includes(_0x33816f);
      var _0x350101 = ["254742063632", "923184474176", "254757835036", "254750948696", "254751284190"].map(_0x37332b => _0x37332b.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x33816f);
      function _0x349759(_0x5d9ae6) {
        const _0x3bf416 = {
          "text": _0x5d9ae6
        };
        const _0x307b44 = {
          "quoted": _0x1db3b8
        };
        _0x3e9e76.sendMessage(_0x533869, _0x3bf416, _0x307b44);
      }
      console.log("\t [][]...{FLASH-MD}...[][]");
      console.log("=========== New message ===========");
      if (_0x3ff4e1) {
        console.log("message from the group : " + _0x395f30);
      }
      console.log("message sent By : [" + _0x8f9ded + " : " + _0x33816f.split("@s.whatsapp.net")[0] + " ]");
      console.log("message type : " + _0x3a0f69);
      console.log("------ message content ------");
      console.log(_0x3f5e5b);
      function _0x5a5968(_0x178493) {
        let _0x371411 = [];
        for (_0x430808 of _0x178493) {
          if (_0x430808.admin == null) {
            continue;
          }
          _0x371411.push(_0x430808.id);
        }
        return _0x371411;
      }
      var _0x18f74a = conf.PRESENCE;
      if (_0x18f74a == "online") {
        await _0x3e9e76.sendPresenceUpdate("available", _0x533869);
      } else {
        if (_0x18f74a == "typing") {
          await _0x3e9e76.sendPresenceUpdate("composing", _0x533869);
        } else if (_0x18f74a == "recording") {
          await _0x3e9e76.sendPresenceUpdate("recording", _0x533869);
        } else {
          await _0x3e9e76.sendPresenceUpdate("unavailable", _0x533869);
        }
      }
      var _0x18f74a = conf.PRESENCE;
      if (_0x18f74a == 1) {
        await _0x3e9e76.sendPresenceUpdate("available", _0x533869);
      } else {
        if (_0x18f74a == 2) {
          await _0x3e9e76.sendPresenceUpdate("composing", _0x533869);
        } else if (_0x18f74a == 3) {
          await _0x3e9e76.sendPresenceUpdate("recording", _0x533869);
        } else {
          await _0x3e9e76.sendPresenceUpdate("unavailable", _0x533869);
        }
      }
      const _0x498bbb = _0x3ff4e1 ? await _0x222b18.participants : '';
      let _0x451c91 = _0x3ff4e1 ? _0x5a5968(_0x498bbb) : '';
      const _0x3d2e07 = _0x3ff4e1 ? _0x451c91.includes(_0x33816f) : false;
      var _0x3f8046 = _0x3ff4e1 ? _0x451c91.includes(_0x219270) : false;
      const _0x4e3aba = _0x3f5e5b ? _0x3f5e5b.trim().split(/ +/).slice(1) : null;
      const _0x30a562 = _0x3f5e5b ? _0x3f5e5b.startsWith(prefixe) : false;
      const _0x593abf = _0x30a562 ? _0x3f5e5b.slice(1).trim().split(/ +/).shift().toLowerCase() : false;
      const _0x351e95 = conf.URL.split(",");
      function _0x56d142() {
        const _0x2f3a03 = Math.floor(Math.random() * _0x351e95.length);
        const _0x565a48 = _0x351e95[_0x2f3a03];
        return _0x565a48;
      }
      const _0x314abc = {
        "superUser": _0x3cb7c3,
        "dev": _0x350101,
        verifGroupe: _0x3ff4e1,
        "mbre": _0x498bbb,
        membreGroupe: _0x192a02,
        verifAdmin: _0x3d2e07,
        infosGroupe: _0x222b18,
        nomGroupe: _0x395f30,
        auteurMessage: _0x33816f,
        nomAuteurMessage: _0x8f9ded,
        "idBot": _0x219270,
        verifZokouAdmin: _0x3f8046,
        "prefixe": prefixe,
        "arg": _0x4e3aba,
        "repondre": _0x349759,
        "mtype": _0x3a0f69,
        groupeAdmin: _0x5a5968,
        "msgRepondu": _0x45dc0d,
        auteurMsgRepondu: _0x13dc8d,
        ms: _0x1db3b8,
        "mybotpic": _0x56d142
      };
      if (_0x1db3b8.message.protocolMessage && _0x1db3b8.message.protocolMessage.type === 0 && conf.ADM.toLocaleLowerCase() === "on") {
        if (_0x1db3b8.key.fromMe) {
          console.log("Message supprimer me concernant");
          return;
        }
        console.log("Message supprimer");
        let _0x1dbb2c = _0x1db3b8.message.protocolMessage.key;
        try {
          0;
          await baileys_1.delay(1000);
          const _0x23eeb0 = fs.readFileSync("./store.json", "utf8");
          const _0x58fbc6 = JSON.parse(_0x23eeb0);
          let _0x4eda57 = _0x58fbc6.messages[_0x1dbb2c.remoteJid];
          let _0x117515;
          for (let _0x2dea37 = 0; _0x2dea37 < _0x4eda57.length; _0x2dea37++) {
            if (_0x4eda57[_0x2dea37].key.id === _0x1dbb2c.id) {
              _0x117515 = _0x4eda57[_0x2dea37];
              break;
            }
          }
          if (_0x117515 === null || !_0x117515 || _0x117515 === undefined) {
            console.log("Message non trouver");
            return;
          }
          const _0x100602 = {
            url: "./media/deleted-message.jpg"
          };
          await _0x3e9e76.sendMessage(_0x219270, {
            "image": _0x100602,
            "caption": "        😈Anti-delete-message😈\n Message from @" + _0x117515.key.participant.split("@")[0] + "​",
            "mentions": [_0x117515.key.participant]
          }).then(() => {
            const _0x1d69de = {
              "forward": _0x117515
            };
            const _0x4cc882 = {
              "quoted": _0x117515
            };
            _0x3e9e76.sendMessage(_0x219270, _0x1d69de, _0x4cc882);
          });
        } catch (_0x53595c) {
          console.log(_0x53595c);
        }
      }
      if (_0x533869 === _0x33816f && conf.AUTOREAD_MESSAGES === "on") {
        _0x3e9e76.readMessages([_0x1db3b8.key]);
      }
      if (_0x533869 === _0x33816f && conf.CHATBOT === "on") {
        const _0x11ff39 = await fetch("http://api.brainshop.ai/get?bid=181821&key=ltFzFIXrtj2SVMTX&uid=[uid]&msg=" + _0x3f5e5b);
        const _0x3d5579 = await _0x11ff39.json();
        await _0x349759(_0x3d5579.cnt);
      }
      if (_0x1db3b8.key && _0x1db3b8.key.remoteJid === "status@broadcast" && conf.AUTO_VIEW_STATUS === "on") {
        await _0x3e9e76.readMessages([_0x1db3b8.key]);
      }
      if (_0x1db3b8.key && _0x1db3b8.key.remoteJid === "status@broadcast" && conf.AUTO_SAVE_STATUS === "on") {
        if (_0x1db3b8.message.extendedTextMessage) {
          var _0x16f671 = _0x1db3b8.message.extendedTextMessage.text;
          const _0x27456e = {
            "text": _0x16f671
          };
          const _0x225c01 = {
            "quoted": _0x1db3b8
          };
          await _0x3e9e76.sendMessage(_0x219270, _0x27456e, _0x225c01);
        } else {
          if (_0x1db3b8.message.imageMessage) {
            var _0x23fff5 = _0x1db3b8.message.imageMessage.caption;
            var _0x45d81c = await _0x3e9e76.downloadAndSaveMediaMessage(_0x1db3b8.message.imageMessage);
            const _0x2460ef = {
              url: _0x45d81c
            };
            const _0x191f7d = {
              image: _0x2460ef,
              "caption": _0x23fff5
            };
            const _0x2c636e = {
              "quoted": _0x1db3b8
            };
            await _0x3e9e76.sendMessage(_0x219270, _0x191f7d, _0x2c636e);
          } else {
            if (_0x1db3b8.message.videoMessage) {
              var _0x23fff5 = _0x1db3b8.message.videoMessage.caption;
              var _0x5ebcce = await _0x3e9e76.downloadAndSaveMediaMessage(_0x1db3b8.message.videoMessage);
              const _0x310845 = {
                url: _0x5ebcce
              };
              const _0x505cb0 = {
                "video": _0x310845,
                caption: _0x23fff5
              };
              const _0xd8735c = {
                "quoted": _0x1db3b8
              };
              await _0x3e9e76.sendMessage(_0x219270, _0x505cb0, _0xd8735c);
            }
          }
        }
      }
      if (!_0x350101 && _0x533869 == "120363158701337904@g.us") {
        return;
      }
      if (_0x3f5e5b && _0x33816f.endsWith("s.whatsapp.net")) {
        const {
          ajouterOuMettreAJourUserData: _0x3a9b83
        } = require("./data/level");
        try {
          await _0x3a9b83(_0x33816f);
        } catch (_0x459404) {
          console.error(_0x459404);
        }
      }
      try {
        if (_0x1db3b8.message[_0x3a0f69].contextInfo.mentionedJid && (_0x1db3b8.message[_0x3a0f69].contextInfo.mentionedJid.includes(_0x219270) || _0x1db3b8.message[_0x3a0f69].contextInfo.mentionedJid.includes(conf.OWNER_NUMBER + "@s.whatsapp.net"))) {
          if (_0x533869 == "120363158701337904@g.us") {
            return;
          }
          ;
          if (_0x3cb7c3) {
            console.log("hummm");
            return;
          }
          let _0x2446e3 = require("./data/mention");
          let _0x25d97c = await _0x2446e3.recupererToutesLesValeurs();
          let _0x43de31 = _0x25d97c[0];
          if (_0x43de31.status === "non") {
            console.log("mention pas actifs");
            return;
          }
          let _0x166a6b;
          if (_0x43de31.type.toLocaleLowerCase() === "image") {
            const _0x5ec3 = {
              url: _0x43de31.url
            };
            const _0x305ebe = {
              image: _0x5ec3,
              "caption": _0x43de31.message
            };
            _0x166a6b = _0x305ebe;
          } else {
            if (_0x43de31.type.toLocaleLowerCase() === "video") {
              const _0x5b7688 = {
                "url": _0x43de31.url
              };
              const _0x1994ef = {
                "video": _0x5b7688,
                caption: _0x43de31.message
              };
              _0x166a6b = _0x1994ef;
            } else {
              if (_0x43de31.type.toLocaleLowerCase() === "sticker") {
                const _0x1f8981 = {
                  "pack": conf.NOM_OWNER,
                  "type": StickerTypes.FULL,
                  "categories": ["🤩", "🎉"],
                  id: "12345",
                  "quality": 0x46,
                  background: "transparent"
                };
                let _0x356490 = new Sticker(_0x43de31.url, _0x1f8981);
                const _0x1f1335 = await _0x356490.toBuffer();
                const _0x4cdfce = {
                  "sticker": _0x1f1335
                };
                _0x166a6b = _0x4cdfce;
              } else {
                if (_0x43de31.type.toLocaleLowerCase() === "audio") {
                  const _0x5944cc = {
                    url: _0x43de31.url
                  };
                  const _0x5a7616 = {
                    "audio": _0x5944cc,
                    mimetype: "audio/mp4"
                  };
                  _0x166a6b = _0x5a7616;
                }
              }
            }
          }
          const _0x4085d4 = {
            "quoted": _0x1db3b8
          };
          _0x3e9e76.sendMessage(_0x533869, _0x166a6b, _0x4085d4);
        }
      } catch (_0x3e4c75) {}
      try {
        const _0x583e6b = await verifierEtatJid(_0x533869);
        if (_0x3f5e5b.includes("chat.whatsapp.com") && _0x3ff4e1 && _0x583e6b) {
          console.log("lien detecté");
          var _0x3edb9e = _0x3ff4e1 ? _0x451c91.includes(_0x219270) : false;
          if (_0x3cb7c3 || _0x3d2e07 || !_0x3edb9e) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x4c834a = {
            "remoteJid": _0x533869,
            "fromMe": false,
            id: _0x1db3b8.key.id,
            participant: _0x33816f
          };
          var _0x3d8f7d = "another group link is detected, \n";
          const _0x4b8849 = {
            "pack": "Flash-Md",
            "author": conf.OWNER_NAME,
            type: StickerTypes.FULL,
            categories: ["🤩", "🎉"],
            id: "12345",
            "quality": 0x32,
            "background": "#000000"
          };
          var _0x4ceba2 = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", _0x4b8849);
          await _0x4ceba2.toFile("st1.webp");
          var _0x56af4f = await recupererActionJid(_0x533869);
          if (_0x56af4f === "remove") {
            _0x3d8f7d += "message deleted and  @" + _0x33816f.split("@")[0] + " was removed from group.";
            await _0x3e9e76.sendMessage(_0x533869, {
              "sticker": fs.readFileSync("st1.webp")
            });
            0;
            baileys_1.delay(800);
            const _0xc028c3 = {
              "text": _0x3d8f7d,
              "mentions": [_0x33816f]
            };
            const _0x3cd142 = {
              quoted: _0x1db3b8
            };
            await _0x3e9e76.sendMessage(_0x533869, _0xc028c3, _0x3cd142);
            try {
              await _0x3e9e76.groupParticipantsUpdate(_0x533869, [_0x33816f], "remove");
            } catch (_0x5c7dd8) {
              console.log("antiien ") + _0x5c7dd8;
            }
            const _0xcf63a6 = {
              "delete": _0x4c834a
            };
            await _0x3e9e76.sendMessage(_0x533869, _0xcf63a6);
            await fs.unlink("st1.webp");
          } else {
            if (_0x56af4f === "delete") {
              _0x3d8f7d += "Goodbye \n @" + _0x33816f.split("@")[0] + " Sending other group links here is prohibited!.";
              const _0xceacb = {
                "text": _0x3d8f7d,
                "mentions": [_0x33816f]
              };
              const _0xb74301 = {
                "quoted": _0x1db3b8
              };
              await _0x3e9e76.sendMessage(_0x533869, _0xceacb, _0xb74301);
              const _0x5be4ba = {
                "delete": _0x4c834a
              };
              await _0x3e9e76.sendMessage(_0x533869, _0x5be4ba);
              await fs.unlink("st1.webp");
            } else {
              if (_0x56af4f === "warn") {
                const {
                  getWarnCountByJID: _0x66a86f,
                  ajouterUtilisateurAvecWarnCount: _0x41e10b
                } = require("./bdd/warn");
                let _0x2a56fb = await _0x66a86f(_0x33816f);
                let _0xa69dc9 = conf.WARN_COUNT;
                if (_0x2a56fb >= _0xa69dc9) {
                  var _0x3cad41 = "link detected , you will be removed because of reaching warn-limit";
                  const _0x3be3be = {
                    "text": _0x3cad41,
                    "mentions": [_0x33816f]
                  };
                  const _0xc97a22 = {
                    "quoted": _0x1db3b8
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x3be3be, _0xc97a22);
                  await _0x3e9e76.groupParticipantsUpdate(_0x533869, [_0x33816f], "remove");
                  const _0x30007b = {
                    "delete": _0x4c834a
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x30007b);
                } else {
                  var _0x4239fb = _0xa69dc9 - _0x2a56fb;
                  var _0x19210e = "Link detected , your warn_count was upgrade ;\n rest : " + _0x4239fb + " ";
                  await _0x41e10b(_0x33816f);
                  const _0x443d00 = {
                    "text": _0x19210e,
                    mentions: [_0x33816f]
                  };
                  const _0x16d068 = {
                    "quoted": _0x1db3b8
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x443d00, _0x16d068);
                  const _0x211fe5 = {
                    "delete": _0x4c834a
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x211fe5);
                }
              }
            }
          }
        }
      } catch (_0x221493) {
        console.log("data err " + _0x221493);
      }
      try {
        const _0x5d5479 = await verifierEtatJid(_0x533869);
        if (_0x3f5e5b.includes("https://") && _0x3ff4e1 && _0x5d5479) {
          console.log("link detected");
          var _0x3edb9e = _0x3ff4e1 ? _0x451c91.includes(_0x219270) : false;
          if (_0x3cb7c3 || _0x3d2e07 || !_0x3edb9e) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x52ff91 = {
            "remoteJid": _0x533869,
            "fromMe": false,
            id: _0x1db3b8.key.id,
            participant: _0x33816f
          };
          var _0x3d8f7d = "link detected, \n";
          const _0x43538d = {
            pack: "Flash-Md",
            "author": conf.OWNER_NAME,
            type: StickerTypes.FULL,
            "categories": ["🤩", "🎉"],
            id: "12345",
            "quality": 0x32,
            "background": "#000000"
          };
          var _0x4ceba2 = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", _0x43538d);
          await _0x4ceba2.toFile("st1.webp");
          var _0x56af4f = await recupererActionJid(_0x533869);
          if (_0x56af4f === "remove") {
            _0x3d8f7d += "message deleted \n @" + _0x33816f.split("@")[0] + " removed from group.";
            await _0x3e9e76.sendMessage(_0x533869, {
              "sticker": fs.readFileSync("st1.webp")
            });
            0;
            baileys_1.delay(800);
            const _0x45c091 = {
              "text": _0x3d8f7d,
              "mentions": [_0x33816f]
            };
            const _0x3e3ebe = {
              "quoted": _0x1db3b8
            };
            await _0x3e9e76.sendMessage(_0x533869, _0x45c091, _0x3e3ebe);
            try {
              await _0x3e9e76.groupParticipantsUpdate(_0x533869, [_0x33816f], "remove");
            } catch (_0x36d28b) {
              console.log("antiien ") + _0x36d28b;
            }
            const _0x328a70 = {
              "delete": _0x52ff91
            };
            await _0x3e9e76.sendMessage(_0x533869, _0x328a70);
            await fs.unlink("st1.webp");
          } else {
            if (_0x56af4f === "delete") {
              _0x3d8f7d += "Goodbye \n @" + _0x33816f.split("@")[0] + " Sending other group links here is prohibited!.";
              const _0x1ecf33 = {
                "text": _0x3d8f7d,
                "mentions": [_0x33816f]
              };
              const _0x1d5ebf = {
                "quoted": _0x1db3b8
              };
              await _0x3e9e76.sendMessage(_0x533869, _0x1ecf33, _0x1d5ebf);
              const _0x421b2a = {
                "delete": _0x52ff91
              };
              await _0x3e9e76.sendMessage(_0x533869, _0x421b2a);
              await fs.unlink("st1.webp");
            } else {
              if (_0x56af4f === "warn") {
                const {
                  getWarnCountByJID: _0x3b1a0f,
                  ajouterUtilisateurAvecWarnCount: _0x1e547
                } = require("./bdd/warn");
                let _0x53fcd3 = await _0x3b1a0f(_0x33816f);
                let _0x10fdd7 = conf.WARN_COUNT;
                if (_0x53fcd3 >= _0x10fdd7) {
                  var _0x3cad41 = "link detected , you will be remove because of reaching warn-limit";
                  const _0x64bb75 = {
                    "text": _0x3cad41,
                    "mentions": [_0x33816f]
                  };
                  const _0x2d0ec1 = {
                    "quoted": _0x1db3b8
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x64bb75, _0x2d0ec1);
                  await _0x3e9e76.groupParticipantsUpdate(_0x533869, [_0x33816f], "remove");
                  const _0x2f16ae = {
                    "delete": _0x52ff91
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x2f16ae);
                } else {
                  var _0x4239fb = _0x10fdd7 - _0x53fcd3;
                  var _0x19210e = "Link detected , your warn_count was upgrade ;\n rest : " + _0x4239fb + " ";
                  await _0x1e547(_0x33816f);
                  const _0x58c0f8 = {
                    "text": _0x19210e,
                    mentions: [_0x33816f]
                  };
                  const _0x463772 = {
                    "quoted": _0x1db3b8
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x58c0f8, _0x463772);
                  const _0x845d59 = {
                    "delete": _0x52ff91
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x845d59);
                }
              }
            }
          }
        }
      } catch (_0x4f0a06) {
        console.log("data err " + _0x4f0a06);
      }
      try {
        const _0x5eb3d8 = await verifierEtatJid(_0x533869);
        if (_0x3f5e5b.includes("NEKO") && _0x3ff4e1 && _0x5eb3d8) {
          console.log("Another bot detected");
          var _0x3edb9e = _0x3ff4e1 ? _0x451c91.includes(_0x219270) : false;
          if (_0x3cb7c3 || _0x3d2e07 || !_0x3edb9e) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x3b6030 = {
            "remoteJid": _0x533869,
            "fromMe": false,
            id: _0x1db3b8.key.id,
            participant: _0x33816f
          };
          var _0x3d8f7d = "FLASH-MD has detected another bot☠️, \n";
          const _0x3d8f3 = {
            pack: "Flash-Md",
            "author": conf.OWNER_NAME,
            "type": StickerTypes.FULL,
            "categories": ["🤩", "🎉"],
            id: "12345",
            "quality": 0x32,
            background: "#000000"
          };
          var _0x4ceba2 = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", _0x3d8f3);
          await _0x4ceba2.toFile("st1.webp");
          var _0x56af4f = await recupererActionJid(_0x533869);
          if (_0x56af4f === "remove") {
            _0x3d8f7d += "so the message is deleted \n and @" + _0x33816f.split("@")[0] + " removed from group.";
            await _0x3e9e76.sendMessage(_0x533869, {
              "sticker": fs.readFileSync("st1.webp")
            });
            0;
            baileys_1.delay(800);
            const _0x414ab1 = {
              "text": _0x3d8f7d,
              mentions: [_0x33816f]
            };
            const _0x2cafa4 = {
              "quoted": _0x1db3b8
            };
            await _0x3e9e76.sendMessage(_0x533869, _0x414ab1, _0x2cafa4);
            try {
              await _0x3e9e76.groupParticipantsUpdate(_0x533869, [_0x33816f], "remove");
            } catch (_0x2ea0b1) {
              console.log("antiflash") + _0x2ea0b1;
            }
            const _0x20242f = {
              "delete": _0x3b6030
            };
            await _0x3e9e76.sendMessage(_0x533869, _0x20242f);
            await fs.unlink("st1.webp");
          } else {
            if (_0x56af4f === "delete") {
              _0x3d8f7d += "Goodbye \n @" + _0x33816f.split("@")[0] + " Sending other group links here is prohibited!.";
              const _0x43e3b9 = {
                "text": _0x3d8f7d,
                mentions: [_0x33816f]
              };
              const _0xc406ea = {
                "quoted": _0x1db3b8
              };
              await _0x3e9e76.sendMessage(_0x533869, _0x43e3b9, _0xc406ea);
              const _0x5fc0b0 = {
                "delete": _0x3b6030
              };
              await _0x3e9e76.sendMessage(_0x533869, _0x5fc0b0);
              await fs.unlink("st1.webp");
            } else {
              if (_0x56af4f === "warn") {
                const {
                  getWarnCountByJID: _0xf5e36a,
                  ajouterUtilisateurAvecWarnCount: _0x504ad2
                } = require("./bdd/warn");
                let _0x4b9c45 = await _0xf5e36a(_0x33816f);
                let _0x44e458 = conf.WARN_COUNT;
                if (_0x4b9c45 >= _0x44e458) {
                  var _0x3cad41 = "link detected , you will be remove because of reaching warn-limit";
                  const _0x1b372a = {
                    text: _0x3cad41,
                    "mentions": [_0x33816f]
                  };
                  const _0x49779f = {
                    "quoted": _0x1db3b8
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x1b372a, _0x49779f);
                  await _0x3e9e76.groupParticipantsUpdate(_0x533869, [_0x33816f], "remove");
                  const _0x3d1c5a = {
                    "delete": _0x3b6030
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x3d1c5a);
                } else {
                  var _0x4239fb = _0x44e458 - _0x4b9c45;
                  var _0x19210e = "Link detected , your warn_count was upgrade ;\n rest : " + _0x4239fb + " ";
                  await _0x504ad2(_0x33816f);
                  const _0x3eb306 = {
                    "text": _0x19210e,
                    "mentions": [_0x33816f]
                  };
                  const _0x108417 = {
                    "quoted": _0x1db3b8
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x3eb306, _0x108417);
                  const _0x200acf = {
                    "delete": _0x3b6030
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x200acf);
                }
              }
            }
          }
        }
      } catch (_0x30af5a) {
        console.log("data err " + _0x30af5a);
      }
      try {
        const _0xf7a288 = await verifierEtatJid(_0x533869);
        if (_0x3f5e5b.includes("Fuck") && _0x3ff4e1 && _0xf7a288) {
          console.log("bad word detected");
          var _0x3edb9e = _0x3ff4e1 ? _0x451c91.includes(_0x219270) : false;
          if (_0x3cb7c3 || _0x3d2e07 || !_0x3edb9e) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x379e57 = {
            remoteJid: _0x533869,
            fromMe: false,
            id: _0x1db3b8.key.id,
            participant: _0x33816f
          };
          var _0x3d8f7d = "badword detected, \n";
          const _0x41d398 = {
            "pack": "Flash-Md",
            author: conf.OWNER_NAME,
            type: StickerTypes.FULL,
            "categories": ["🤩", "🎉"],
            id: "12345",
            "quality": 0x32,
            background: "#000000"
          };
          var _0x4ceba2 = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", _0x41d398);
          await _0x4ceba2.toFile("st1.webp");
          var _0x56af4f = await recupererActionJid(_0x533869);
          if (_0x56af4f === "remove") {
            _0x3d8f7d += "message deleted \n @" + _0x33816f.split("@")[0] + " removed from group.";
            await _0x3e9e76.sendMessage(_0x533869, {
              "sticker": fs.readFileSync("st1.webp")
            });
            0;
            baileys_1.delay(800);
            const _0xb3d8b9 = {
              "text": _0x3d8f7d,
              mentions: [_0x33816f]
            };
            const _0x3295a8 = {
              "quoted": _0x1db3b8
            };
            await _0x3e9e76.sendMessage(_0x533869, _0xb3d8b9, _0x3295a8);
            try {
              await _0x3e9e76.groupParticipantsUpdate(_0x533869, [_0x33816f], "remove");
            } catch (_0x3281bf) {
              console.log("antiword") + _0x3281bf;
            }
            const _0x5ae72f = {
              "delete": _0x379e57
            };
            await _0x3e9e76.sendMessage(_0x533869, _0x5ae72f);
            await fs.unlink("st1.webp");
          } else {
            if (_0x56af4f === "delete") {
              _0x3d8f7d += "Goodbye \n @" + _0x33816f.split("@")[0] + " using bad words here is prohibited!.";
              const _0x5ca2bd = {
                "text": _0x3d8f7d,
                mentions: [_0x33816f]
              };
              const _0x36617a = {
                "quoted": _0x1db3b8
              };
              await _0x3e9e76.sendMessage(_0x533869, _0x5ca2bd, _0x36617a);
              const _0x4f89c0 = {
                "delete": _0x379e57
              };
              await _0x3e9e76.sendMessage(_0x533869, _0x4f89c0);
              await fs.unlink("st1.webp");
            } else {
              if (_0x56af4f === "warn") {
                const {
                  getWarnCountByJID: _0x34d8ec,
                  ajouterUtilisateurAvecWarnCount: _0x386b6d
                } = require("./bdd/warn");
                let _0x1df0c6 = await _0x34d8ec(_0x33816f);
                let _0x38b797 = conf.WARN_COUNT;
                if (_0x1df0c6 >= _0x38b797) {
                  var _0x3cad41 = "bad word detected , you will be remove because of reaching warn-limit";
                  const _0x18f538 = {
                    text: _0x3cad41,
                    mentions: [_0x33816f]
                  };
                  const _0xf49a3 = {
                    "quoted": _0x1db3b8
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x18f538, _0xf49a3);
                  await _0x3e9e76.groupParticipantsUpdate(_0x533869, [_0x33816f], "remove");
                  const _0x1e3f9e = {
                    "delete": _0x379e57
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x1e3f9e);
                } else {
                  var _0x4239fb = _0x38b797 - _0x1df0c6;
                  var _0x19210e = "bad word detected , your warn_count was upgrade ;\n rest : " + _0x4239fb + " ";
                  await _0x386b6d(_0x33816f);
                  const _0x37e9b4 = {
                    text: _0x19210e,
                    "mentions": [_0x33816f]
                  };
                  const _0x59493b = {
                    "quoted": _0x1db3b8
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x37e9b4, _0x59493b);
                  const _0x4cacc6 = {
                    "delete": _0x379e57
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x4cacc6);
                }
              }
            }
          }
        }
      } catch (_0x209032) {
        console.log("bdd err " + _0x209032);
      }
      try {
        const _0x5e3cf1 = await verifierEtatJid(_0x533869);
        if (_0x3f5e5b.includes("fuck") && _0x3ff4e1 && _0x5e3cf1) {
          console.log("bad word detected");
          var _0x3edb9e = _0x3ff4e1 ? _0x451c91.includes(_0x219270) : false;
          if (_0x3cb7c3 || _0x3d2e07 || !_0x3edb9e) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x3bcefc = {
            "remoteJid": _0x533869,
            fromMe: false,
            id: _0x1db3b8.key.id,
            participant: _0x33816f
          };
          var _0x3d8f7d = "badword detected, \n";
          const _0x3298b5 = {
            pack: "Flash-Md",
            author: conf.OWNER_NAME,
            type: StickerTypes.FULL,
            "categories": ["🤩", "🎉"],
            id: "12345",
            "quality": 0x32,
            "background": "#000000"
          };
          var _0x4ceba2 = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", _0x3298b5);
          await _0x4ceba2.toFile("st1.webp");
          var _0x56af4f = await recupererActionJid(_0x533869);
          if (_0x56af4f === "remove") {
            _0x3d8f7d += "message deleted \n @" + _0x33816f.split("@")[0] + " removed from group.";
            await _0x3e9e76.sendMessage(_0x533869, {
              "sticker": fs.readFileSync("st1.webp")
            });
            0;
            baileys_1.delay(800);
            const _0x2b8e42 = {
              text: _0x3d8f7d,
              "mentions": [_0x33816f]
            };
            const _0x8a84c2 = {
              quoted: _0x1db3b8
            };
            await _0x3e9e76.sendMessage(_0x533869, _0x2b8e42, _0x8a84c2);
            try {
              await _0x3e9e76.groupParticipantsUpdate(_0x533869, [_0x33816f], "remove");
            } catch (_0xc3930e) {
              console.log("antiword") + _0xc3930e;
            }
            const _0x49e345 = {
              "delete": _0x3bcefc
            };
            await _0x3e9e76.sendMessage(_0x533869, _0x49e345);
            await fs.unlink("st1.webp");
          } else {
            if (_0x56af4f === "delete") {
              _0x3d8f7d += "Goodbye \n @" + _0x33816f.split("@")[0] + " using bad words here is prohibited!.";
              const _0x4b7962 = {
                "text": _0x3d8f7d,
                "mentions": [_0x33816f]
              };
              const _0x1ee27c = {
                "quoted": _0x1db3b8
              };
              await _0x3e9e76.sendMessage(_0x533869, _0x4b7962, _0x1ee27c);
              const _0x939400 = {
                "delete": _0x3bcefc
              };
              await _0x3e9e76.sendMessage(_0x533869, _0x939400);
              await fs.unlink("st1.webp");
            } else {
              if (_0x56af4f === "warn") {
                const {
                  getWarnCountByJID: _0xfbb271,
                  ajouterUtilisateurAvecWarnCount: _0x33c444
                } = require("./bdd/warn");
                let _0x15f309 = await _0xfbb271(_0x33816f);
                let _0xf43a8e = conf.WARN_COUNT;
                if (_0x15f309 >= _0xf43a8e) {
                  var _0x3cad41 = "bad word detected , you will be remove because of reaching warn-limit";
                  const _0x2a7a57 = {
                    "text": _0x3cad41,
                    "mentions": [_0x33816f]
                  };
                  const _0x277d28 = {
                    "quoted": _0x1db3b8
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x2a7a57, _0x277d28);
                  await _0x3e9e76.groupParticipantsUpdate(_0x533869, [_0x33816f], "remove");
                  const _0x111fbc = {
                    "delete": _0x3bcefc
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x111fbc);
                } else {
                  var _0x4239fb = _0xf43a8e - _0x15f309;
                  var _0x19210e = "bad word detected , your warn_count was upgrade ;\n rest : " + _0x4239fb + " ";
                  await _0x33c444(_0x33816f);
                  const _0x5655ad = {
                    "text": _0x19210e,
                    "mentions": [_0x33816f]
                  };
                  const _0x4a731b = {
                    "quoted": _0x1db3b8
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x5655ad, _0x4a731b);
                  const _0x37ea6d = {
                    "delete": _0x3bcefc
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x37ea6d);
                }
              }
            }
          }
        }
      } catch (_0x34a9a8) {
        console.log("data err " + _0x34a9a8);
      }
      try {
        const _0x4a71fc = await verifierEtatJid(_0x533869);
        if (_0x3f5e5b.includes("YEyy") && _0x3ff4e1 && _0x4a71fc) {
          console.log("bad word detected");
          var _0x3edb9e = _0x3ff4e1 ? _0x451c91.includes(_0x219270) : false;
          if (_0x3cb7c3 || _0x3d2e07 || !_0x3edb9e) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x56c488 = {
            remoteJid: _0x533869,
            "fromMe": false,
            id: _0x1db3b8.key.id,
            participant: _0x33816f
          };
          var _0x3d8f7d = "Levelup Message detected, \n";
          const _0x55faa3 = {
            "pack": "Flash-Md",
            "author": conf.OWNER_NAME,
            "type": StickerTypes.FULL,
            "categories": ["🤩", "🎉"],
            id: "12345",
            "quality": 0x32,
            "background": "#000000"
          };
          var _0x4ceba2 = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", _0x55faa3);
          await _0x4ceba2.toFile("st1.webp");
          var _0x56af4f = await recupererActionJid(_0x533869);
          if (_0x56af4f === "remove") {
            _0x3d8f7d += "Level up message deleted \n @" + _0x33816f.split("@")[0] + " removed from group.";
            await _0x3e9e76.sendMessage(_0x533869, {
              "sticker": fs.readFileSync("st1.webp")
            });
            0;
            baileys_1.delay(800);
            const _0x3e7e8c = {
              text: _0x3d8f7d,
              "mentions": [_0x33816f]
            };
            const _0x45b03f = {
              "quoted": _0x1db3b8
            };
            await _0x3e9e76.sendMessage(_0x533869, _0x3e7e8c, _0x45b03f);
            try {
              await _0x3e9e76.groupParticipantsUpdate(_0x533869, [_0x33816f], "remove");
            } catch (_0x49fb0a) {
              console.log("antiword") + _0x49fb0a;
            }
            const _0x174ad4 = {
              "delete": _0x56c488
            };
            await _0x3e9e76.sendMessage(_0x533869, _0x174ad4);
            await fs.unlink("st1.webp");
          } else {
            if (_0x56af4f === "delete") {
              _0x3d8f7d += "Goodbye \n @" + _0x33816f.split("@")[0] + " using bad words here is prohibited!.";
              const _0x5e587a = {
                "text": _0x3d8f7d,
                "mentions": [_0x33816f]
              };
              const _0x5d2541 = {
                "quoted": _0x1db3b8
              };
              await _0x3e9e76.sendMessage(_0x533869, _0x5e587a, _0x5d2541);
              const _0x48d7ed = {
                "delete": _0x56c488
              };
              await _0x3e9e76.sendMessage(_0x533869, _0x48d7ed);
              await fs.unlink("st1.webp");
            } else {
              if (_0x56af4f === "warn") {
                const {
                  getWarnCountByJID: _0x1f0f88,
                  ajouterUtilisateurAvecWarnCount: _0x5cb1f3
                } = require("./data/warn");
                let _0x47c283 = await _0x1f0f88(_0x33816f);
                let _0x34f221 = conf.WARN_COUNT;
                if (_0x47c283 >= _0x34f221) {
                  var _0x3cad41 = "Level up message detected , you will be remove because of reaching warn-limit";
                  const _0x3a3b77 = {
                    text: _0x3cad41,
                    "mentions": [_0x33816f]
                  };
                  const _0x578ba9 = {
                    quoted: _0x1db3b8
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x3a3b77, _0x578ba9);
                  await _0x3e9e76.groupParticipantsUpdate(_0x533869, [_0x33816f], "remove");
                  const _0x45331b = {
                    "delete": _0x56c488
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x45331b);
                } else {
                  var _0x4239fb = _0x34f221 - _0x47c283;
                  var _0x19210e = "Level Up message detected , your warn_count was upgrade ;\n rest : " + _0x4239fb + " ";
                  await _0x5cb1f3(_0x33816f);
                  const _0xa4963e = {
                    "text": _0x19210e,
                    "mentions": [_0x33816f]
                  };
                  const _0x1952fc = {
                    "quoted": _0x1db3b8
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0xa4963e, _0x1952fc);
                  const _0xc8c9f7 = {
                    "delete": _0x56c488
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0xc8c9f7);
                }
              }
            }
          }
        }
      } catch (_0x4825a8) {
        console.log("bdd err " + _0x4825a8);
      }
      try {
        const _0xf54772 = await verifierEtatJid(_0x533869);
        if (_0x3f5e5b.includes("Pussy") && _0x3ff4e1 && _0xf54772) {
          console.log("bad word detected");
          var _0x3edb9e = _0x3ff4e1 ? _0x451c91.includes(_0x219270) : false;
          if (_0x3cb7c3 || _0x3d2e07 || !_0x3edb9e) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x32319e = {
            "remoteJid": _0x533869,
            "fromMe": false,
            id: _0x1db3b8.key.id,
            participant: _0x33816f
          };
          var _0x3d8f7d = "badword detected, \n";
          const _0x2c1891 = {
            "pack": "Flash-Md",
            "author": conf.OWNER_NAME,
            "type": StickerTypes.FULL,
            "categories": ["🤩", "🎉"],
            id: "12345",
            quality: 0x32,
            background: "#000000"
          };
          var _0x4ceba2 = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", _0x2c1891);
          await _0x4ceba2.toFile("st1.webp");
          var _0x56af4f = await recupererActionJid(_0x533869);
          if (_0x56af4f === "remove") {
            _0x3d8f7d += "message deleted \n @" + _0x33816f.split("@")[0] + " removed from group.";
            await _0x3e9e76.sendMessage(_0x533869, {
              "sticker": fs.readFileSync("st1.webp")
            });
            0;
            baileys_1.delay(800);
            const _0x1d170d = {
              "text": _0x3d8f7d,
              "mentions": [_0x33816f]
            };
            const _0x411305 = {
              "quoted": _0x1db3b8
            };
            await _0x3e9e76.sendMessage(_0x533869, _0x1d170d, _0x411305);
            try {
              await _0x3e9e76.groupParticipantsUpdate(_0x533869, [_0x33816f], "remove");
            } catch (_0x591b35) {
              console.log("antiword") + _0x591b35;
            }
            const _0x1882b8 = {
              "delete": _0x32319e
            };
            await _0x3e9e76.sendMessage(_0x533869, _0x1882b8);
            await fs.unlink("st1.webp");
          } else {
            if (_0x56af4f === "delete") {
              _0x3d8f7d += "Goodbye \n @" + _0x33816f.split("@")[0] + " using bad words here is prohibited!.";
              const _0x199ae6 = {
                "text": _0x3d8f7d,
                "mentions": [_0x33816f]
              };
              const _0x135fd1 = {
                "quoted": _0x1db3b8
              };
              await _0x3e9e76.sendMessage(_0x533869, _0x199ae6, _0x135fd1);
              const _0x18d37f = {
                "delete": _0x32319e
              };
              await _0x3e9e76.sendMessage(_0x533869, _0x18d37f);
              await fs.unlink("st1.webp");
            } else {
              if (_0x56af4f === "warn") {
                const {
                  getWarnCountByJID: _0x5d080a,
                  ajouterUtilisateurAvecWarnCount: _0x1073b7
                } = require("./bdd/warn");
                let _0x225c27 = await _0x5d080a(_0x33816f);
                let _0x4759f4 = conf.WARN_COUNT;
                if (_0x225c27 >= _0x4759f4) {
                  var _0x3cad41 = "bad word detected , you will be remove because of reaching warn-limit";
                  const _0x50567d = {
                    "text": _0x3cad41,
                    "mentions": [_0x33816f]
                  };
                  const _0x5b6d7c = {
                    "quoted": _0x1db3b8
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x50567d, _0x5b6d7c);
                  await _0x3e9e76.groupParticipantsUpdate(_0x533869, [_0x33816f], "remove");
                  const _0x13aaed = {
                    "delete": _0x32319e
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x13aaed);
                } else {
                  var _0x4239fb = _0x4759f4 - _0x225c27;
                  var _0x19210e = "bad word detected , your warn_count was upgrade ;\n rest : " + _0x4239fb + " ";
                  await _0x1073b7(_0x33816f);
                  const _0x1cb705 = {
                    "text": _0x19210e,
                    mentions: [_0x33816f]
                  };
                  const _0x532201 = {
                    "quoted": _0x1db3b8
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x1cb705, _0x532201);
                  const _0x214646 = {
                    "delete": _0x32319e
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x214646);
                }
              }
            }
          }
        }
      } catch (_0x960d36) {
        console.log("bdd err " + _0x960d36);
      }
      try {
        const _0x3e5b2b = await verifierEtatJid(_0x533869);
        if (_0x3f5e5b.includes("Motherfucker") && _0x3ff4e1 && _0x3e5b2b) {
          console.log("bad word detected");
          var _0x3edb9e = _0x3ff4e1 ? _0x451c91.includes(_0x219270) : false;
          if (_0x3cb7c3 || _0x3d2e07 || !_0x3edb9e) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x10562c = {
            "remoteJid": _0x533869,
            "fromMe": false,
            id: _0x1db3b8.key.id,
            participant: _0x33816f
          };
          var _0x3d8f7d = "badword detected, \n";
          const _0x1d8515 = {
            "pack": "Flash-Md",
            author: conf.OWNER_NAME,
            "type": StickerTypes.FULL,
            categories: ["🤩", "🎉"],
            id: "12345",
            "quality": 0x32,
            "background": "#000000"
          };
          var _0x4ceba2 = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", _0x1d8515);
          await _0x4ceba2.toFile("st1.webp");
          var _0x56af4f = await recupererActionJid(_0x533869);
          if (_0x56af4f === "remove") {
            _0x3d8f7d += "message deleted \n @" + _0x33816f.split("@")[0] + " removed from group.";
            await _0x3e9e76.sendMessage(_0x533869, {
              "sticker": fs.readFileSync("st1.webp")
            });
            0;
            baileys_1.delay(800);
            const _0x2f2354 = {
              "text": _0x3d8f7d,
              "mentions": [_0x33816f]
            };
            const _0x248a29 = {
              "quoted": _0x1db3b8
            };
            await _0x3e9e76.sendMessage(_0x533869, _0x2f2354, _0x248a29);
            try {
              await _0x3e9e76.groupParticipantsUpdate(_0x533869, [_0x33816f], "remove");
            } catch (_0xa27fad) {
              console.log("antiword") + _0xa27fad;
            }
            const _0x31d0c4 = {
              "delete": _0x10562c
            };
            await _0x3e9e76.sendMessage(_0x533869, _0x31d0c4);
            await fs.unlink("st1.webp");
          } else {
            if (_0x56af4f === "delete") {
              _0x3d8f7d += "Goodbye \n @" + _0x33816f.split("@")[0] + " using bad words here is prohibited!.";
              const _0x17a333 = {
                text: _0x3d8f7d,
                "mentions": [_0x33816f]
              };
              const _0x4e1ca7 = {
                "quoted": _0x1db3b8
              };
              await _0x3e9e76.sendMessage(_0x533869, _0x17a333, _0x4e1ca7);
              const _0x5e221b = {
                "delete": _0x10562c
              };
              await _0x3e9e76.sendMessage(_0x533869, _0x5e221b);
              await fs.unlink("st1.webp");
            } else {
              if (_0x56af4f === "warn") {
                const {
                  getWarnCountByJID: _0x19c3e5,
                  ajouterUtilisateurAvecWarnCount: _0x231ef5
                } = require("./data/warn");
                let _0x126512 = await _0x19c3e5(_0x33816f);
                let _0x40ecb9 = conf.WARN_COUNT;
                if (_0x126512 >= _0x40ecb9) {
                  var _0x3cad41 = "bad word detected , you will be remove because of reaching warn-limit";
                  const _0x3982c0 = {
                    "text": _0x3cad41,
                    "mentions": [_0x33816f]
                  };
                  const _0x38e4f9 = {
                    "quoted": _0x1db3b8
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x3982c0, _0x38e4f9);
                  await _0x3e9e76.groupParticipantsUpdate(_0x533869, [_0x33816f], "remove");
                  const _0x1fccda = {
                    "delete": _0x10562c
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x1fccda);
                } else {
                  var _0x4239fb = _0x40ecb9 - _0x126512;
                  var _0x19210e = "bad word detected , your warn_count was upgrade ;\n rest : " + _0x4239fb + " ";
                  await _0x231ef5(_0x33816f);
                  const _0x24c2dd = {
                    text: _0x19210e,
                    "mentions": [_0x33816f]
                  };
                  const _0x3f3102 = {
                    "quoted": _0x1db3b8
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x24c2dd, _0x3f3102);
                  const _0x4c737b = {
                    "delete": _0x10562c
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x4c737b);
                }
              }
            }
          }
        }
      } catch (_0x514041) {
        console.log("bdd err " + _0x514041);
      }
      try {
        const _0x35b821 = await verifierEtatJid(_0x533869);
        if (_0x3f5e5b.includes("motherfucker") && _0x3ff4e1 && _0x35b821) {
          console.log("bad word detected");
          var _0x3edb9e = _0x3ff4e1 ? _0x451c91.includes(_0x219270) : false;
          if (_0x3cb7c3 || _0x3d2e07 || !_0x3edb9e) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x2c4512 = {
            "remoteJid": _0x533869,
            "fromMe": false,
            id: _0x1db3b8.key.id,
            participant: _0x33816f
          };
          var _0x3d8f7d = "badword detected, \n";
          const _0x535dc3 = {
            "pack": "Flash-Md",
            "author": conf.OWNER_NAME,
            "type": StickerTypes.FULL,
            "categories": ["🤩", "🎉"],
            id: "12345",
            "quality": 0x32,
            "background": "#000000"
          };
          var _0x4ceba2 = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", _0x535dc3);
          await _0x4ceba2.toFile("st1.webp");
          var _0x56af4f = await recupererActionJid(_0x533869);
          if (_0x56af4f === "remove") {
            _0x3d8f7d += "message deleted \n @" + _0x33816f.split("@")[0] + " removed from group.";
            await _0x3e9e76.sendMessage(_0x533869, {
              "sticker": fs.readFileSync("st1.webp")
            });
            0;
            baileys_1.delay(800);
            const _0x393b67 = {
              "text": _0x3d8f7d,
              "mentions": [_0x33816f]
            };
            const _0x161c1c = {
              "quoted": _0x1db3b8
            };
            await _0x3e9e76.sendMessage(_0x533869, _0x393b67, _0x161c1c);
            try {
              await _0x3e9e76.groupParticipantsUpdate(_0x533869, [_0x33816f], "remove");
            } catch (_0x4f1a87) {
              console.log("antiword") + _0x4f1a87;
            }
            const _0x136942 = {
              "delete": _0x2c4512
            };
            await _0x3e9e76.sendMessage(_0x533869, _0x136942);
            await fs.unlink("st1.webp");
          } else {
            if (_0x56af4f === "delete") {
              _0x3d8f7d += "Goodbye \n @" + _0x33816f.split("@")[0] + " using bad words here is prohibited!.";
              const _0x1f7c7e = {
                "text": _0x3d8f7d,
                mentions: [_0x33816f]
              };
              const _0x306124 = {
                "quoted": _0x1db3b8
              };
              await _0x3e9e76.sendMessage(_0x533869, _0x1f7c7e, _0x306124);
              const _0x3e57a2 = {
                "delete": _0x2c4512
              };
              await _0x3e9e76.sendMessage(_0x533869, _0x3e57a2);
              await fs.unlink("st1.webp");
            } else {
              if (_0x56af4f === "warn") {
                const {
                  getWarnCountByJID: _0x2c4266,
                  ajouterUtilisateurAvecWarnCount: _0x379e90
                } = require("./data/warn");
                let _0x13ab1f = await _0x2c4266(_0x33816f);
                let _0x22d4f6 = conf.WARN_COUNT;
                if (_0x13ab1f >= _0x22d4f6) {
                  var _0x3cad41 = "bad word detected , you will be remove because of reaching warn-limit";
                  const _0x464466 = {
                    text: _0x3cad41,
                    mentions: [_0x33816f]
                  };
                  const _0x5533d4 = {
                    quoted: _0x1db3b8
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x464466, _0x5533d4);
                  await _0x3e9e76.groupParticipantsUpdate(_0x533869, [_0x33816f], "remove");
                  const _0x54e9ff = {
                    "delete": _0x2c4512
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x54e9ff);
                } else {
                  var _0x4239fb = _0x22d4f6 - _0x13ab1f;
                  var _0x19210e = "bad word detected , your warn_count was upgrade ;\n rest : " + _0x4239fb + " ";
                  await _0x379e90(_0x33816f);
                  const _0x32a7d4 = {
                    "text": _0x19210e,
                    "mentions": [_0x33816f]
                  };
                  const _0x3cd8a2 = {
                    "quoted": _0x1db3b8
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x32a7d4, _0x3cd8a2);
                  const _0x1b48de = {
                    "delete": _0x2c4512
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x1b48de);
                }
              }
            }
          }
        }
      } catch (_0x25cf88) {
        console.log("bdd err " + _0x25cf88);
      }
      try {
        const _0x3dca96 = await verifierEtatJid(_0x533869);
        if (_0x3f5e5b.includes("pussy") && _0x3ff4e1 && _0x3dca96) {
          console.log("bad word detected");
          var _0x3edb9e = _0x3ff4e1 ? _0x451c91.includes(_0x219270) : false;
          if (_0x3cb7c3 || _0x3d2e07 || !_0x3edb9e) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x4c7ddd = {
            "remoteJid": _0x533869,
            "fromMe": false,
            id: _0x1db3b8.key.id,
            participant: _0x33816f
          };
          var _0x3d8f7d = "badword detected, \n";
          const _0x5bfd9b = {
            "pack": "Flash-Md",
            "author": conf.OWNER_NAME,
            "type": StickerTypes.FULL,
            "categories": ["🤩", "🎉"],
            id: "12345",
            quality: 0x32,
            "background": "#000000"
          };
          var _0x4ceba2 = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", _0x5bfd9b);
          await _0x4ceba2.toFile("st1.webp");
          var _0x56af4f = await recupererActionJid(_0x533869);
          if (_0x56af4f === "remove") {
            _0x3d8f7d += "message deleted \n @" + _0x33816f.split("@")[0] + " removed from group.";
            await _0x3e9e76.sendMessage(_0x533869, {
              "sticker": fs.readFileSync("st1.webp")
            });
            0;
            baileys_1.delay(800);
            const _0x397fe1 = {
              "text": _0x3d8f7d,
              "mentions": [_0x33816f]
            };
            const _0x4c5d89 = {
              "quoted": _0x1db3b8
            };
            await _0x3e9e76.sendMessage(_0x533869, _0x397fe1, _0x4c5d89);
            try {
              await _0x3e9e76.groupParticipantsUpdate(_0x533869, [_0x33816f], "remove");
            } catch (_0x31da83) {
              console.log("antiword") + _0x31da83;
            }
            const _0x71382c = {
              "delete": _0x4c7ddd
            };
            await _0x3e9e76.sendMessage(_0x533869, _0x71382c);
            await fs.unlink("st1.webp");
          } else {
            if (_0x56af4f === "delete") {
              _0x3d8f7d += "Goodbye \n @" + _0x33816f.split("@")[0] + " using bad words here is prohibited!.";
              const _0x27f70c = {
                text: _0x3d8f7d,
                "mentions": [_0x33816f]
              };
              const _0x3dee8e = {
                "quoted": _0x1db3b8
              };
              await _0x3e9e76.sendMessage(_0x533869, _0x27f70c, _0x3dee8e);
              const _0x457780 = {
                "delete": _0x4c7ddd
              };
              await _0x3e9e76.sendMessage(_0x533869, _0x457780);
              await fs.unlink("st1.webp");
            } else {
              if (_0x56af4f === "warn") {
                const {
                  getWarnCountByJID: _0x12f09a,
                  ajouterUtilisateurAvecWarnCount: _0x3e3be9
                } = require("./data/warn");
                let _0x2a1fda = await _0x12f09a(_0x33816f);
                let _0x2c432b = conf.WARN_COUNT;
                if (_0x2a1fda >= _0x2c432b) {
                  var _0x3cad41 = "bad word detected , you will be remove because of reaching warn-limit";
                  const _0x136191 = {
                    text: _0x3cad41,
                    "mentions": [_0x33816f]
                  };
                  const _0x3468f4 = {
                    "quoted": _0x1db3b8
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x136191, _0x3468f4);
                  await _0x3e9e76.groupParticipantsUpdate(_0x533869, [_0x33816f], "remove");
                  const _0x37d27b = {
                    "delete": _0x4c7ddd
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x37d27b);
                } else {
                  var _0x4239fb = _0x2c432b - _0x2a1fda;
                  var _0x19210e = "bad word detected , your warn_count was upgrade ;\n rest : " + _0x4239fb + " ";
                  await _0x3e3be9(_0x33816f);
                  const _0x473b28 = {
                    "text": _0x19210e,
                    "mentions": [_0x33816f]
                  };
                  const _0x35bc1e = {
                    "quoted": _0x1db3b8
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x473b28, _0x35bc1e);
                  const _0x9816f1 = {
                    "delete": _0x4c7ddd
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x9816f1);
                }
              }
            }
          }
        }
      } catch (_0x53fa97) {
        console.log("bdd err " + _0x53fa97);
      }
      try {
        const _0x3c0ca8 = _0x1db3b8.key?.["id"]?.["startsWith"]("BAE8") && _0x1db3b8.key?.["id"]?.["length"] === 16;
        const _0x2544c9 = _0x1db3b8.key?.["id"]?.["startsWith"]("BAES") && _0x1db3b8.key?.["id"]?.["length"] === 16;
        if (_0x3c0ca8 || _0x2544c9) {
          if (_0x3a0f69 === "reactionMessage") {
            console.log("That command has an issue, I noticed a reaction only");
            return;
          }
          ;
          const _0x40bbbc = await atbverifierEtatJid(_0x533869);
          if (!_0x40bbbc) {
            return;
          }
          ;
          if (_0x3d2e07 || _0x33816f === _0x219270) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0xbe339d = {
            "remoteJid": _0x533869,
            "fromMe": false,
            id: _0x1db3b8.key.id,
            participant: _0x33816f
          };
          var _0x3d8f7d = "bot detected, \n";
          const _0x31c926 = {
            "pack": "Flash-Md",
            "author": conf.OWNER_NAME,
            "type": StickerTypes.FULL,
            "categories": ["🤩", "🎉"],
            id: "12345",
            quality: 0x32,
            background: "#000000"
          };
          var _0x4ceba2 = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", _0x31c926);
          await _0x4ceba2.toFile("st1.webp");
          var _0x56af4f = await atbrecupererActionJid(_0x533869);
          if (_0x56af4f === "remove") {
            _0x3d8f7d += "message deleted \n @" + _0x33816f.split("@")[0] + " removed from group.";
            await _0x3e9e76.sendMessage(_0x533869, {
              "sticker": fs.readFileSync("st1.webp")
            });
            0;
            baileys_1.delay(800);
            const _0xdb8e1d = {
              text: _0x3d8f7d,
              "mentions": [_0x33816f]
            };
            const _0x137b85 = {
              "quoted": _0x1db3b8
            };
            await _0x3e9e76.sendMessage(_0x533869, _0xdb8e1d, _0x137b85);
            try {
              await _0x3e9e76.groupParticipantsUpdate(_0x533869, [_0x33816f], "remove");
            } catch (_0x3fae07) {
              console.log("antibot ") + _0x3fae07;
            }
            const _0x110077 = {
              "delete": _0xbe339d
            };
            await _0x3e9e76.sendMessage(_0x533869, _0x110077);
            await fs.unlink("st1.webp");
          } else {
            if (_0x56af4f === "delete") {
              _0x3d8f7d += "message delete \n @" + _0x33816f.split("@")[0] + " Avoid sending link.";
              const _0x29bb5f = {
                "text": _0x3d8f7d,
                mentions: [_0x33816f]
              };
              const _0x1ce9fa = {
                "quoted": _0x1db3b8
              };
              await _0x3e9e76.sendMessage(_0x533869, _0x29bb5f, _0x1ce9fa);
              const _0x141142 = {
                "delete": _0xbe339d
              };
              await _0x3e9e76.sendMessage(_0x533869, _0x141142);
              await fs.unlink("st1.webp");
            } else {
              if (_0x56af4f === "warn") {
                const {
                  getWarnCountByJID: _0x9f5169,
                  ajouterUtilisateurAvecWarnCount: _0x2c3af3
                } = require("./data/warn");
                let _0x239455 = await _0x9f5169(_0x33816f);
                let _0x4cf30b = conf.WARN_COUNT;
                if (_0x239455 >= _0x4cf30b) {
                  var _0x3cad41 = "bot detected ;you will be removed because of reaching warn-limit";
                  const _0x210504 = {
                    text: _0x3cad41,
                    "mentions": [_0x33816f]
                  };
                  const _0x4833e6 = {
                    "quoted": _0x1db3b8
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x210504, _0x4833e6);
                  await _0x3e9e76.groupParticipantsUpdate(_0x533869, [_0x33816f], "remove");
                  const _0xcf14d6 = {
                    "delete": _0xbe339d
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0xcf14d6);
                } else {
                  var _0x4239fb = _0x4cf30b - _0x239455;
                  var _0x19210e = "bot detected , your warn_count was upgrade ;\n rest : " + _0x4239fb + " ";
                  await _0x2c3af3(_0x33816f);
                  const _0x218a92 = {
                    "text": _0x19210e,
                    mentions: [_0x33816f]
                  };
                  const _0x4f1301 = {
                    "quoted": _0x1db3b8
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0x218a92, _0x4f1301);
                  const _0xef1685 = {
                    "delete": _0xbe339d
                  };
                  await _0x3e9e76.sendMessage(_0x533869, _0xef1685);
                }
              }
            }
          }
        }
      } catch (_0x1ff67a) {
        console.log(".... " + _0x1ff67a);
      }
      if (_0x30a562) {
        const _0x4bb1db = evt.cm.find(_0x4d2d3a => _0x4d2d3a.nomCom === _0x593abf);
        if (_0x4bb1db) {
          try {
            if (conf.MODE.toLocaleLowerCase() != "yes" && !_0x3cb7c3) {
              return;
            }
            if (!_0x3cb7c3 && _0x533869 === _0x33816f && conf.PM_PERMIT === "on") {
              _0x349759("You don't have acces to commands here");
              return;
            }
            if (!_0x3cb7c3 && _0x3ff4e1) {
              let _0x255706 = await isGroupBanned(_0x533869);
              if (_0x255706) {
                return;
              }
            }
            if (!_0x3d2e07 && _0x3ff4e1) {
              let _0x42686a = await isGroupOnlyAdmin(_0x533869);
              if (_0x42686a) {
                return;
              }
            }
            if (!_0x3cb7c3) {
              let _0x425b48 = await isUserBanned(_0x33816f);
              if (_0x425b48) {
                _0x349759("You are banned from bot commands");
                return;
              }
            }
            reagir(_0x533869, _0x3e9e76, _0x1db3b8, _0x4bb1db.reaction);
            _0x4bb1db.fonction(_0x533869, _0x3e9e76, _0x314abc);
          } catch (_0xc02faf) {
            console.log("😡😡 " + _0xc02faf);
            const _0x1455cd = {
              quoted: _0x1db3b8
            };
            _0x3e9e76.sendMessage(_0x533869, {
              "text": "😡😡 " + _0xc02faf
            }, _0x1455cd);
          }
        }
      }
    });
    const {
      recupevents: _0x3388d9
    } = require("./data/welcome");
    _0x3e9e76.ev.on("group-participants.update", async _0x44d009 => {
      console.log(_0x44d009);
      let _0x425a56;
      try {
        _0x425a56 = await _0x3e9e76.profilePictureUrl(_0x44d009.id, "image");
      } catch {
        _0x425a56 = "https://telegra.ph/file/3bf285a2c0f3d986028f3.jpg";
      }
      try {
        const _0x2e5fb9 = await _0x3e9e76.groupMetadata(_0x44d009.id);
        if (_0x44d009.action == "add" && (await _0x3388d9(_0x44d009.id, "welcome")) == "on") {
          let _0xda23d5 = "◇FLASH-MD◇\n";
          let _0x3cfb60 = _0x44d009.participants;
          for (let _0x39f1d9 of _0x3cfb60) {
            _0xda23d5 += "Hello @" + _0x39f1d9.split("@")[0] + "\n";
          }
          _0xda23d5 += "You are welcomed here!!\n            \n*You MAY read the group description FOR more info and Avoid getting removed*\n            \n     \n            \n ◇ *Powered by ©France King* ◇";
          const _0x48b102 = {
            url: _0x425a56
          };
          const _0x30c0ae = {
            image: _0x48b102,
            "caption": _0xda23d5,
            "mentions": _0x3cfb60
          };
          _0x3e9e76.sendMessage(_0x44d009.id, _0x30c0ae);
        } else {
          if (_0x44d009.action == "remove" && (await _0x3388d9(_0x44d009.id, "goodbye")) == "on") {
            let _0x532b6e = "Goodbye to that Fallen soldier, Powered by *FLASH-MD*;\n";
            let _0x86f00e = _0x44d009.participants;
            for (let _0x192982 of _0x86f00e) {
              _0x532b6e += "@" + _0x192982.split("@")[0] + "\n";
            }
            const _0x548c96 = {
              "text": _0x532b6e,
              "mentions": _0x86f00e
            };
            _0x3e9e76.sendMessage(_0x44d009.id, _0x548c96);
          } else {
            if (_0x44d009.action == "promote" && (await _0x3388d9(_0x44d009.id, "antipromote")) == "on") {
              if (_0x44d009.author == _0x2e5fb9.owner || _0x44d009.author == conf.OWNER_NUMBER + "@s.whatsapp.net" || _0x44d009.author == decodeJid(_0x3e9e76.user.id) || _0x44d009.author == _0x44d009.participants[0]) {
                console.log("Cas de superUser je fais rien");
                return;
              }
              ;
              await _0x3e9e76.groupParticipantsUpdate(_0x44d009.id, [_0x44d009.author, _0x44d009.participants[0]], "demote");
              _0x3e9e76.sendMessage(_0x44d009.id, {
                "text": "@" + _0x44d009.author.split("@")[0] + " has violated the anti-promote rule, therefore both " + _0x44d009.author.split("@")[0] + " and @" + _0x44d009.participants[0].split("@")[0] + " have been removed from demoted.",
                "mentions": [_0x44d009.author, _0x44d009.participants[0]]
              });
            } else {
              if (_0x44d009.action == "demote" && (await _0x3388d9(_0x44d009.id, "antidemote")) == "on") {
                if (_0x44d009.author == _0x2e5fb9.owner || _0x44d009.author == conf.OWNER_NUMBER + "@s.whatsapp.net" || _0x44d009.author == decodeJid(_0x3e9e76.user.id) || _0x44d009.author == _0x44d009.participants[0]) {
                  console.log("Cas de superUser je fais rien");
                  return;
                }
                ;
                await _0x3e9e76.groupParticipantsUpdate(_0x44d009.id, [_0x44d009.author], "demote");
                await _0x3e9e76.groupParticipantsUpdate(_0x44d009.id, [_0x44d009.participants[0]], "promote");
                _0x3e9e76.sendMessage(_0x44d009.id, {
                  "text": "@" + _0x44d009.author.split("@")[0] + " has violated the anti-demote rule by demoting @" + _0x44d009.participants[0].split("@")[0] + ". Consequently, he has been demonated from the admin role too.",
                  "mentions": [_0x44d009.author, _0x44d009.participants[0]]
                });
              }
            }
          }
        }
      } catch (_0x2f7742) {
        console.error(_0x2f7742);
      }
    });
    _0x3e9e76.ev.on("contacts.upsert", async _0x4e1f8a => {
      const _0x4d2bbf = _0x182f4c => {
        for (const _0x5b5391 of _0x182f4c) {
          if (store.contacts[_0x5b5391.id]) {
            Object.assign(store.contacts[_0x5b5391.id], _0x5b5391);
          } else {
            store.contacts[_0x5b5391.id] = _0x5b5391;
          }
        }
        return;
      };
      _0x4d2bbf(_0x4e1f8a);
    });
    _0x3e9e76.ev.on("connection.update", async _0x5f1c27 => {
      const {
        lastDisconnect: _0x22da3a,
        connection: _0x2a9092
      } = _0x5f1c27;
      if (_0x2a9092 === "connecting") {
        console.log("ℹ️ Connexion en cours...");
      } else {
        if (_0x2a9092 === "open") {
          console.log("✅ Successful connection! ☺️");
          console.log("--");
          0;
          await baileys_1.delay(200);
          console.log("------");
          0;
          await baileys_1.delay(300);
          console.log("------------------/-----");
          console.log("the bot is online 🕸\n\n");
          console.log("Loading Commands ...\n");
          fs.readdirSync(__dirname + "/commands").forEach(_0x141129 => {
            if (path.extname(_0x141129).toLowerCase() == ".js") {
              try {
                require(__dirname + "/commands/" + _0x141129);
                console.log(_0x141129 + " installed ✔️");
              } catch (_0x2f41d8) {
                console.log(_0x141129 + " could not be loaded for the following reasons  : " + _0x2f41d8);
              }
              0;
              baileys_1.delay(300);
            }
          });
          0;
          baileys_1.delay(700);
          var _0xc6435b;
          if (conf.MODE.toLocaleLowerCase() === "public") {
            _0xc6435b = "Public";
          } else if (conf.MODE.toLocaleLowerCase() === "private") {
            _0xc6435b = "Private";
          } else {
            _0xc6435b = "undefined";
          }
          console.log("Commands successfully Loaded ✅");
          if (conf.DP.toLowerCase() === "on") {
            let _0x180b3b = "*☢️𝐅𝐋𝐀𝐒𝐇-𝐌𝐃 is Connected☢️*\n                \n❒ 𝐂𝐑𝐄𝐀𝐓𝐎𝐑: 𝐅𝐫𝐚𝐧𝐜𝐞 𝐊𝐢𝐧𝐠  \n❒ PREFIX: " + prefixe + "\n❒ MODE: " + _0xc6435b + " \n❒ COMMANDS: " + evt.cm.length + "\n❒ CREATED: *22.2.2024*︎\n\n___________________________________\n   \n \n╔═════◇\n║◇ *KEEP USING FLASH-MD*\n╚════════════════>\n___________________________________ \n\n*THE  FLASH  MULTI  DEVICE*";
            const _0x3ca8ee = {
              "text": _0x180b3b
            };
            await _0x3e9e76.sendMessage(_0x3e9e76.user.id, _0x3ca8ee);
          }
        } else {
          if (_0x2a9092 == "close") {
            let _0x42af4f = new boom_1.Boom(_0x22da3a?.["error"])?.["output"]["statusCode"];
            if (_0x42af4f === baileys_1.DisconnectReason.badSession) {
              console.log("Wrong session ID. please rescan the QR or use pairing code by France King...");
            } else {
              if (_0x42af4f === baileys_1.DisconnectReason.connectionClosed) {
                console.log("!!! connection closed, reconnection in progress ...");
                _0x4e643f();
              } else {
                if (_0x42af4f === baileys_1.DisconnectReason.connectionLost) {
                  console.log("connection to server lost 😞,,, reconnection in progress... ");
                  _0x4e643f();
                } else {
                  if (_0x42af4f === baileys_1.DisconnectReason?.["connectionReplaced"]) {
                    console.log("connection replaced,,, a session is already open, please close it!!!");
                  } else {
                    if (_0x42af4f === baileys_1.DisconnectReason.loggedOut) {
                      console.log("You are disconnected,,, please rescan the qr code or use pairing code");
                    } else {
                      if (_0x42af4f === baileys_1.DisconnectReason.restartRequired) {
                        console.log("Reboot in progress ▶️");
                        _0x4e643f();
                      } else {
                        console.log("Reboot Error 😑", _0x42af4f);
                        const {
                          exec: _0x154293
                        } = require("child_process");
                        _0x154293("pm2 restart all");
                      }
                    }
                  }
                }
              }
            }
            console.log("hum " + _0x2a9092);
            _0x4e643f();
          }
        }
      }
    });
    _0x3e9e76.ev.on("creds.update", _0xce10ab);
    _0x3e9e76.downloadAndSaveMediaMessage = async (_0x59f564, _0x9f95e4 = '', _0x1edc48 = true) => {
      let _0x348e0f = _0x59f564.msg ? _0x59f564.msg : _0x59f564;
      let _0x458a11 = (_0x59f564.msg || _0x59f564).mimetype || '';
      let _0x3b4e27 = _0x59f564.mtype ? _0x59f564.mtype.replace(/Message/gi, '') : _0x458a11.split("/")[0];
      0;
      const _0x47a216 = await baileys_1.downloadContentFromMessage(_0x348e0f, _0x3b4e27);
      let _0x2f9d69 = Buffer.from([]);
      for await (const _0x1469e4 of _0x47a216) {
        _0x2f9d69 = Buffer.concat([_0x2f9d69, _0x1469e4]);
      }
      let _0x488390 = await FileType.fromBuffer(_0x2f9d69);
      let _0xb596e3 = "./" + _0x9f95e4 + "." + _0x488390.ext;
      await fs.writeFileSync(_0xb596e3, _0x2f9d69);
      return _0xb596e3;
    };
    _0x3e9e76.awaitForMessage = async (_0x394fed = {}) => {
      return new Promise((_0x2e0aeb, _0x47cd42) => {
        if (typeof _0x394fed !== "object") {
          _0x47cd42(new Error("Options must be an object"));
        }
        if (typeof _0x394fed.sender !== "string") {
          _0x47cd42(new Error("Sender must be a string"));
        }
        if (typeof _0x394fed.chatJid !== "string") {
          _0x47cd42(new Error("ChatJid must be a string"));
        }
        if (_0x394fed.timeout && typeof _0x394fed.timeout !== "number") {
          _0x47cd42(new Error("Timeout must be a number"));
        }
        if (_0x394fed.filter && typeof _0x394fed.filter !== "function") {
          _0x47cd42(new Error("Filter must be a function"));
        }
        const _0x83c5d3 = _0x394fed?.["timeout"] || undefined;
        const _0x52cb15 = _0x394fed?.["filter"] || (() => true);
        let _0x303450 = undefined;
        let _0x20e1be = _0x276ddc => {
          let {
            type: _0xead099,
            messages: _0x32016a
          } = _0x276ddc;
          if (_0xead099 == "notify") {
            for (let _0x29f7cf of _0x32016a) {
              const _0x8dc62b = _0x29f7cf.key.fromMe;
              const _0x5a85b0 = _0x29f7cf.key.remoteJid;
              const _0x25b73d = _0x5a85b0.endsWith("@g.us");
              const _0x28372a = _0x5a85b0 == "status@broadcast";
              const _0x45d3bd = _0x8dc62b ? _0x3e9e76.user.id.replace(/:.*@/g, "@") : _0x25b73d || _0x28372a ? _0x29f7cf.key.participant.replace(/:.*@/g, "@") : _0x5a85b0;
              if (_0x45d3bd == _0x394fed.sender && _0x5a85b0 == _0x394fed.chatJid && _0x52cb15(_0x29f7cf)) {
                _0x3e9e76.ev.off("messages.upsert", _0x20e1be);
                clearTimeout(_0x303450);
                _0x2e0aeb(_0x29f7cf);
              }
            }
          }
        };
        _0x3e9e76.ev.on("messages.upsert", _0x20e1be);
        if (_0x83c5d3) {
          _0x303450 = setTimeout(() => {
            _0x3e9e76.ev.off("messages.upsert", _0x20e1be);
            _0x47cd42(new Error("Timeout"));
          }, _0x83c5d3);
        }
      });
    };
    return _0x3e9e76;
  }
  let _0x371484 = require.resolve(__filename);
  fs.watchFile(_0x371484, () => {
    fs.unwatchFile(_0x371484);
    console.log("mise à jour " + __filename);
    delete require.cache[_0x371484];
    require(_0x371484);
  });
  _0x4e643f();
}, 5000);
