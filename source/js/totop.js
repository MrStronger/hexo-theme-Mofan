function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}
function addClass(obj, cls) {
    if (!hasClass(obj, cls)) obj.className += " " + cls;
}
function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s+|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}
window.onscroll = function() {
  var totop = document.getElementById('totop');
  var scroll = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY;
  var logoImg = document.getElementsByClassName("logoImg")[0]
  var name = document.getElementById('hidden')
  var list = document.getElementById("nav-menu")
  var header = document.getElementById("header")
  var clientWidth = document.body.clientWidth
 
  if (clientWidth < 500 && scroll > 10) {
    logoImg.style.transform = 'translate(' + -(clientWidth/2 - 35) + 'px,0)'
    name.style.transform = 'translate(' + -(clientWidth/2 - 95) + 'px,' + '-47px)'
    name.style.fontSize = '30px'
    list.style.transform = 'translate(0px,' + '-200px)'
    list.style.transition = 'opacity .5s'
    list.style.opacity = 0
    header.style.height = '80px'
  } else if (clientWidth < 500 && scroll < 10) {
    logoImg.style.transform = 'translate(0,0)'
    name.style.transform = 'translate(0,0)'
    header.style.height = '194px'
    name.style.fontSize = '40px'
    list.style.transform = 'translate(0,0)'
    list.style.transition = 'opacity 2s'
    list.style.opacity = 1
    
  }
  if (scroll >= 300) {
    addClass(totop,"show");
    //totop.classList.add("show");
  } else {
    removeClass(totop,"show");
    removeClass(totop,"launch");
    //totop.classList.remove("show", "launch");
  }
};
function gotoTop(aSpeed, time) {
  aSpeed = aSpeed || 0.1;
  time = time || 10;
  var totop = document.getElementById('totop');
  var scroll = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY || 0;
  var speeding = 1 + aSpeed;
  window.scrollTo(0, Math.floor(scroll / speeding));
  if (scroll > 0) {
    var run = "gotoTop(" + aSpeed + ", " + time + ")";
    window.setTimeout(run, time);
  }
}
totop.onclick = function() {
  var totop = document.getElementById('totop');
  gotoTop(0.1, 20);
  addClass(totop,"launch");
  //totop.classList.add('launch');
  return false;
};

(function(){
  var name = document.getElementById('hidden');
  var opacity = 1;
  var sign = true;
  var holdOn = setInterval(function(){
      if(opacity>0.98){
        sign = true;
        
      } else if(opacity<0.65)
        sign = false
      sign ? opacity -= 0.0266667 : opacity += 0.0266667;
      name.style.opacity = opacity;
      name.style.textShadow = '0px 0px ' + Math.pow(20,opacity) + 'px #fff';
  },100)
})();