/// Music (ToneJS)

var synth = new Tone.PluckSynth().toMaster();

// this function is called right before the scheduled time - this comment mnay be false
function triggerSynth(time) {
    synth.triggerAttackRelease('D2', '16n', time);
}

function music(time) {
    synth.triggerAttackRelease('C4', '4n', time);
    synth.triggerAttackRelease('E4', '8n', time);
    synth.triggerAttackRelease('G4', '16n', time);
    synth.triggerAttackRelease('B4', '16n', time);
    synth.triggerAttackRelease('G4', '16',time);
    synth.triggerAttackRelease('E4', '2n', time);
    synth.triggerAttackRelease('C4', '4n', time);
    synth.triggerAttackRelease('D4', '8n', time);
    synth.triggerAttackRelease('B4', '16n', time);
    synth.triggerAttackRelease('B4', '16n', time);
    synth.triggerAttackRelease('E4', '16', time);
    synth.triggerAttackRelease('E4', '2n', time);
}

// schedule a few notes
Tone.Transport.schedule(triggerSynth, 0);
Tone.Transport.schedule(triggerSynth, '0:2');
Tone.Transport.schedule(music, '0:2:2.8');

// set the transport to repeat
Tone.Transport.loopEnd = '1m';
Tone.Transport.loop = true;

//start the transport
Tone.Transport.start('+0.1');
//Tone.Transport.stop();
