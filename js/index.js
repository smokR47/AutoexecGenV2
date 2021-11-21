function generate() {
    var exec = "echo Loading vic0s & pablit0s generated autoexec.cfg\n";
    var form = document.forms[0]; // select the exec form
    console.log(form)
    exec += "volume " + (form["master-vol-val"].value / 100).toString() + "\n" ;
    exec += "snd_musicvolume_multiplier_inoverlay " + (form["music-in-steam-overlay-val"].value / 100).toString() + "\n";
    exec += "voice_caster_scale " + (form["gotv-caster-vol-val"].value / 100).toString() + "\n";
    /*
    ### Missing Advanced 3D Audio Processing ###

    if (form["adv-audio-processing"].value === "yes") {

    }
    */
    exec += "voice_scale " + (form["voip-vol-val"].value / 100).toString() + "\n";
    console.log(exec)
}