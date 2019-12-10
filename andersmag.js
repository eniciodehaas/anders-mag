const svg = document.getElementById('andersMag');
const vierkantGroot = document.querySelector('.vierkant-groot');
const vierkantKlein = document.querySelector('.vierkant-klein');
const magM = document.querySelector('.ma-m');
const magA = document.querySelector('.ma-a');
const magG = document.querySelector('.ma-g');
const a = document.querySelector('.anders-a');
const n = document.querySelector('.anders-n');
const d = document.querySelector('.anders-d');
const e = document.querySelector('.anders-e');
const r = document.querySelector('.anders-r');
const s = document.querySelector('.anders-s');
const hart = document.querySelector('.hart');

const anders = [a,n,d,e,r,s];

const tlm = new TimelineMax({ repeat: 1, yoyo: true, delay: 1});
const tlm2 = new TimelineMax({repeat: 1, yoyo: true, delay: 1});
const tlm3 = new TimelineMax({repeat: 1, yoyo: true, delay: 1});
const tlm4 = new TimelineMax({repeat: 1, yoyo: true, repeatDelay: 8});
const tlm5 = new TimelineMax({delay: 9});



tlm.staggerTo(anders, 0.6, {translateX: -200, rotation: 360, transformOrigin: "50% 50%"}, 0.6);

tlm2.to(hart, 0.5, {fill: "red", translateX: -100, transformOrigin: "50% 50%"})
.to(hart, 0.5, {fill: "orange", translateX: 100})
.to(hart, 0.5, {fill: "yellow", translateX: 0})
.to(hart, 0.5, {fill: "green", rotation: 180})
.to(hart, 0.5, {fill: "blue", scale: 1.5, ease: Back.easeInOut})
.to(hart, 0.5, {fill: "purple", rotation: 0})
.to(hart, 0.5, {fill: "black", scale: 1});

tlm3.to(vierkantGroot, 0.3, {rotation: 30, transformOrigin: "50% 50%"}, "+=0.3")
.to(vierkantGroot, 0.3, {rotation: 60}, "+=0.3")
.to(vierkantGroot, 0.3, {rotation: 90}, "+=0.3")
.to(vierkantGroot, 0.3, {rotation: 120}, "+=0.3")
.to(vierkantGroot, 0.3, {rotation: 150}, "+=0.3")
.to(vierkantGroot, 0.3, {rotation: 180}, "+=0.3");

tlm4.to(vierkantKlein, 1, {translateX: 650, ease: "back.in(2)"},0)
.to(magM, 1, {translateX: 650, ease: "back.in(2)"},0)
.to(magA, 1, {translateX: 650, ease: "back.in(2)"},0)
.to(magG, 1, {translateX: 650, ease: "back.in(2)"},0);


tlm5.to(a, 0.2, {fill: getRandomColor()})
.to(n, 0.2, {fill: getRandomColor()})
.to(d, 0.2, {fill: getRandomColor()})
.to(e, 0.2, {fill: getRandomColor()})
.to(r, 0.2, {fill: getRandomColor()})
.to(s, 0.2, {fill: getRandomColor()});


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    color.toString();
    return color;
  }

setTimeout(function() {
  svg.addEventListener('click', () => {
    location.reload();
});
}, 9000);