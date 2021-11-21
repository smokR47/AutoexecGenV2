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
    var surrSndVal = form["surround-sound-val"].value;
    console.log(surrSndVal)
    var surroundSoundVal = "-1"
    switch (surrSndVal) {
        case "1":
            surroundSoundVal = "1";
            break;
        case "2":
            surroundSoundVal = "2";
            break;
        case "3":
            surroundSoundVal = "4";
            break;
        case "4":
            surroundSoundVal = "5";
            break;
        default:
            break;
    }
    exec += "snd_surround_speakers " + surroundSoundVal + "\n";
    exec += "voice_scale " + (form["voip-vol-val"].value / 100).toString() + "\n";
    if (form["voip-positional-val"].value === "yes") {
        exec += "voice_positional 1\n";
    } else {
        exec += "voice_positional 0\n";
    }
    if (form["audio-in-background-val"].value === "yes") {
        exec += "snd_mute_losefocus 1\n";
    } else {
        exec += "snd_mute_losefocus 0\n";
    }
    
    exec += "snd_menumusic_volume " + (form["main-menu-vol-val"].value / 100).toString() + "\n";
    exec += "snd_roundstart_volume " + (form["round-start-vol-val"].value / 100).toString() + "\n";
    exec += "snd_roundend_volume " + (form["round-end-vol-val"].value / 100).toString() + "\n";
    exec += "snd_mapobjective_volume " + (form["bomb-vol-val"].value / 100).toString() + "\n";
    exec += "snd_tensecondwarning_volume " + (form["ten-sec-warning-val"].value / 100).toString() + "\n";
    exec += "snd_deathcamera_volume " + (form["death-cam-val"].value / 100).toString() + "\n";
    exec += "snd_mvp_volume " + (form["mvp-vol-val"].value / 100).toString() + "\n";
    if (form["play-mvp-when-both-teams-alive-val"].value === "yes") {
        exec += "snd_mute_mvp_music_live_players 1\n";
    } else {
        exec += "snd_mute_mvp_music_live_players 0\n";
    }
    exec += "snd_dzmusic_volume " + (form["dz-music-vol-val"].value / 100).toString() + "\n";
    
    console.log(exec)
}