/**************************************************************************
* SOUNDMANAGER CONFIG
***************************************************************************/
soundManager.useFlashBlock = false;
soundManager.bgColor = '#ffffff';
soundManager.debugMode = false;
soundManager.url = '/assets/js/soundmanager/swf/';
soundManager.wmode = 'transparent'; // hide initial flash of white on everything except firefox/win32
soundManager.allowScriptAccess = 'always';
soundManager.useFastPolling = true;
soundManager.flashVersion = 9;
soundManager.flashLoadTimeout = 3000;
soundManager.useHTML5Audio = true;
 
// -- when ready, preload sounds
soundManager.onready(function() {
 
    // -- Click
    soundManager.createSound({
      id: 'bounce',
      url: '/s/bounce.mp3',
      autoLoad: true,
      autoPlay: false,
      multiShot: false,
      volume: 50
    });
 
});
 
soundManager.ontimeout(function() {
    var smLoadFailWarning = 'Oh snap! : ' + (soundManager.hasHTML5 ? 'The flash portion of ' : '') + 'SoundManager 2 was unable to start. ';
    _log(smLoadFailWarning) ;
});