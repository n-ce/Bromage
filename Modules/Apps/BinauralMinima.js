var ctx = new AudioContext();

var osc = ctx.createOscillator();

var gain = ctx.createGain();

function start(){

osc.connect(gain);

gain.connect(ctx.destination);

gain.gain.value=0;

osc.start(0);

}

var f = document.querySelector("#bmInput");

f.addEventListener("input",(event)=>{

    osc.frequency.value=event.target.value;
    if (document.querySelector("input.checkbox").checked == true) {
        gain.gain.value = 1;
    }
    else {
        gain.gain.value = 0;

};
document.querySelector("#bmH3").innerHTML = f.value + "hz"});
document.getElementsByClassName('bm')[0].addEventListenter('click',function(){gain.gain.value = 0;})
