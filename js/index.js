function generate() {
    var exec = "echo Loading vic0s & pablit0s generated autoexec.cfg\n";
    var from = document.forms[0];
    console.log(form)
    exec += "volume " + (from["master-vol-val"].value / 100).toString() + "\n" ;
    exec += "snd_musicvolume_multiplier_inoverlay " + (from["music-in-steam-overlay-val"].value / 100).toString() + "\n";
    exec += "voice_caster_scale " + (from["gotv-caster-vol-val"].value / 100).toString() + "\n";
    console.log(exec)
}