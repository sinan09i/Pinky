/* Copyright (C) 2020 Yusuf Usta.
PINKY V2
re edited by afnanplk
*/

// Komutları burada tutacağız.
var _0x134930=_0x345f;function _0x345f(_0x3b2351,_0xb5f9df){var _0x5d2288=_0x5d22();return _0x345f=function(_0x345f9a,_0x840caf){_0x345f9a=_0x345f9a-0xe6;var _0x2596e1=_0x5d2288[_0x345f9a];return _0x2596e1;},_0x345f(_0x3b2351,_0xb5f9df);}(function(_0x5b0a41,_0x3e7acf){var _0x296e57=_0x345f,_0x58a299=_0x5b0a41();while(!![]){try{var _0x4f4699=-parseInt(_0x296e57(0xfe))/0x1*(parseInt(_0x296e57(0xfc))/0x2)+parseInt(_0x296e57(0xee))/0x3*(-parseInt(_0x296e57(0x102))/0x4)+-parseInt(_0x296e57(0xf9))/0x5+parseInt(_0x296e57(0xf8))/0x6*(-parseInt(_0x296e57(0xec))/0x7)+-parseInt(_0x296e57(0xea))/0x8+parseInt(_0x296e57(0xff))/0x9*(parseInt(_0x296e57(0xf4))/0xa)+parseInt(_0x296e57(0x101))/0xb*(parseInt(_0x296e57(0xe8))/0xc);if(_0x4f4699===_0x3e7acf)break;else _0x58a299['push'](_0x58a299['shift']());}catch(_0x6e9e7d){_0x58a299['push'](_0x58a299['shift']());}}}(_0x5d22,0xc6f8f));var pinky=require(_0x134930(0xe7)),config=require('./config'),Commands=[],wk='';function _0x5d22(){var _0x3ffa6c=['flags','3DXHEZr','usage','photo','image','fromMe','dontAddCom','21620FZwUNN','HANDLERS','and','includes','1866bFcYON','7857600GnUlOc','onlyPinned','handler','1064272CPIIEh','mandList','3cpoGDz','3069TRMOFS','plkadmin','30217XbCzxO','5402064AfnZYB','warn','desc','message','./pinky','28572dOkwBi','pattern','5954120hUUfAg','deleteComm','27013jLtAKX'];_0x5d22=function(){return _0x3ffa6c;};return _0x5d22();}pinky['CODDED_BY']=='afnanplk'?wk=config['PREFIX']=='false'?'^[.,]*':'^['+config[_0x134930(0xf5)]+']':wk=config[_0x134930(0xf5)];function addCommand(_0x4d93ee,_0x4c1661){var _0x1216b7=_0x134930,_0x432190=[_0x1216b7(0xf0),_0x1216b7(0xf1),'text',_0x1216b7(0xe6)],_0x347717={'fromMe':_0x4d93ee[_0x1216b7(0xf2)]===undefined?!![]:_0x4d93ee[_0x1216b7(0xf2)],'onlyGroup':_0x4d93ee['onlyGroup']===undefined?![]:_0x4d93ee['onlyGroup'],'onlyPinned':_0x4d93ee[_0x1216b7(0xfa)]===undefined?![]:_0x4d93ee['onlyPinned'],'onlyPm':_0x4d93ee['onlyPm']===undefined?![]:_0x4d93ee['onlyPm'],'deleteCommand':_0x4d93ee[_0x1216b7(0xeb)+_0x1216b7(0xf6)]===undefined?!![]:_0x4d93ee[_0x1216b7(0xeb)+_0x1216b7(0xf6)],'desc':_0x4d93ee['desc']===undefined?'':_0x4d93ee[_0x1216b7(0x104)],'plkadmin':_0x4d93ee['plkadmin']===undefined?![]:_0x4d93ee[_0x1216b7(0x100)],'usage':_0x4d93ee[_0x1216b7(0xef)]===undefined?'':_0x4d93ee['usage'],'dontAddCommandList':_0x4d93ee[_0x1216b7(0xf3)+'mandList']===undefined?![]:_0x4d93ee[_0x1216b7(0xf3)+_0x1216b7(0xfd)],'warn':_0x4d93ee[_0x1216b7(0x103)]===undefined?'':_0x4d93ee[_0x1216b7(0x103)],'function':_0x4c1661};if(_0x4d93ee['on']===undefined&&_0x4d93ee[_0x1216b7(0xe9)]===undefined)_0x347717['on']=_0x1216b7(0xe6),_0x347717[_0x1216b7(0xf2)]=![];else _0x4d93ee['on']!==undefined&&_0x432190[_0x1216b7(0xf7)](_0x4d93ee['on'])?(_0x347717['on']=_0x4d93ee['on'],_0x4d93ee['pattern']!==undefined&&(_0x347717['pattern']=new RegExp((_0x4d93ee['handler']===undefined||_0x4d93ee[_0x1216b7(0xfb)]===!![]?wk:'')+_0x4d93ee[_0x1216b7(0xe9)],_0x4d93ee[_0x1216b7(0xed)]!==undefined?_0x4d93ee[_0x1216b7(0xed)]:''))):_0x347717[_0x1216b7(0xe9)]=new RegExp((_0x4d93ee['handler']===undefined||_0x4d93ee['handler']===!![]?wk:'')+_0x4d93ee[_0x1216b7(0xe9)],_0x4d93ee[_0x1216b7(0xed)]!==undefined?_0x4d93ee[_0x1216b7(0xed)]:'');return Commands['push'](_0x347717),_0x347717;}

module.exports = {
    addCommand: addCommand,
    commands: Commands
}
