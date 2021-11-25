function copyToClipboard(id) {
    /* Get the text field */
    var copyText = document.getElementById(id);
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    alert("successful copied text to clipboard!");
  }

function switchGenGif() {
    var newGif;
    var oldGif = document.getElementById('gen-gif')
    var gif = oldGif.getAttribute('src')
    if (gif.endsWith('first.gif')) {
        newGif = './imgs/second.gif'
    }
    if (gif.endsWith('second.gif')) {
        newGif = './imgs/third.gif'
    }
    if (gif.endsWith('third.gif')) {
        newGif = './imgs/first.gif'
    }
    oldGif.src = newGif
}

document.getElementById('nav__cont').addEventListener('mouseover', function() {
    document.getElementById('main-div').style.marginLeft = '15rem';
})
document.getElementById('nav__cont').addEventListener('mouseleave', function() {
    document.getElementById('main-div').style.marginLeft = '7.5rem';
})

function generate() {
    var exec = "echo Loading vic0s & pablit0s generated autoexec.cfg\n";
    var form = document.forms[0]; // select the exec form
    console.log(form)
    /*
        Music & Sound
    */
    exec += "volume " + (form["master-vol-val"].value / 100).toString() + "\n" ;
    exec += "snd_musicvolume_multiplier_inoverlay " + (form["music-in-steam-overlay-val"].value / 100).toString() + "\n";
    exec += "voice_caster_scale " + (form["gotv-caster-vol-val"].value / 100).toString() + "\n";
    /*
    ### Missing Advanced 3D Audio Processing ###

    if (form["adv-audio-processing"].value === "yes") {

    }
    */
    var surrSndVal = form["surround-sound-val"].value;
    var surroundSoundVal = "-1"
    switch (surrSndVal) {
        case "0":
            surroundSoundVal = "-1";
            break;
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
    /*
        Game & Visuals
    */
    if (form["game-instructor-val"].value === "yes") {
        exec += "gameinstructor_enable 1\n";
    } else {
        exec += "gameinstructor_enable 0\n";
    }
    exec += "mm_dedicated_search_maxping " + form["max-ping-val"].value + "\n"
    var rate = "0"
    switch (form["max-bandwidth-val"].value) {
        case "1":
            rate = "24576";
            break;
        case "2":
            rate = "49152";
            break;
        case "3":
            rate = "65536";
            break;
        case "4":
            rate = "98304";
            break;
        case "5":
            rate = "131072";
            break;
        case "6":
            rate = "196608";
            break;
        case "7":
            rate = "262144";
            break;
        case "8":
            rate = "327680";
            break;
        case "9":
            rate = "393216";
            break;
        case "10":
            rate = "524288";
            break;
        case "11":
            rate = "786432";
            break;
        default:
            break;
    }
    exec += "rate " + rate + "\n";
    exec += "ui_steam_overlay_notification_position " + form["notification-loc-val"].value + "\n";
    if (form["enable-console-val"].value === "yes") {
        exec += "con_enable 1\n";
    } else {
        exec += "con_enable 0\n";
    }
    exec += "cl_crosshair_friendly_warning " + form["friendly-warning-val"].value + "\n"
    exec += "hud_scaling " + form["hud-scale-val"].value + "\n";
    exec += "cl_hud_color " + form["hud-color-val"].value + "\n";
    exec += "cl_hud_background_alpha " + form["hud-alpha-val"].value + "\n";
    exec += "cl_hud_healthammo_style " + form["ammo-style-val"].value + "\n";
    exec += "cl_hud_bomb_under_radar " + form["bomb-pos-val"].value + "\n";
    exec += "cl_hud_playercount_pos " + form["mini-sc-pos-val"].value + "\n";
    exec += "cl_hud_playercount_showcount " + form["mini-sc-style-val"].value + "\n";




    // fill textarea with the exec and select it
    document.getElementById("exec-output").value = exec;
    document.getElementById("exec-output").select()

    //show textare
    var genGif = document.getElementById('gen-gif');
    var execText = document.getElementById('exec-output');
    genGif.setAttribute("style","opacity:0; -moz-opacity:0;")
    execText.setAttribute("style","opacity:1; -moz-opacity:1;")
    return exec;
}