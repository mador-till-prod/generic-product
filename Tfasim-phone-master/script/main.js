if('serviceWorker' in navigator && location.hostname !== 'localhost'){
    let location = "../"
    navigator.serviceWorker.register(location + 'sw.js');
}

// on load page
window.onload = () => {
    customElements.define("note-section", Note);
    customElements.define("scrolling-title", ScrollingTitle);

    // setBurgerNav();

    createScrollListeners();
    createNavListeners();
    createAnimListeners();
    creatSlideOutListeners();

    if (document.getElementsByTagName("title")[0].innerHTML == "מחלות כרוניות") {
        setBMI();
    }
};

// define scrolling note title
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('i G j k{l(){m();2 f=6.5("e");2 c=6.5("e");2 g=6.5("e");2 h=6.5("e");2 1="x";u(0.p("1")){1=0.q("1")}f.3.8("y");c.3.8("z");c.3.8(1);c.4=0.4;f.7(c);g.3.8("w-B");h.4=0.4.C("<D>","");g.7(h);0.4="";0.7(f);0.7(g)}}i E j k{l(){m();2 b=6.5("e");2 a=6.5("n");2 9=6.5("n");2 1="A";u(0.p("1")){1=0.q("1")}b.3.8(1);b.3.8("d");b.3.8("F");b.4=0.4;0.4="";a.r="s/t/o/d-a-"+1+".v";a.3="d-a";9.r="s/t/o/d-9-"+1+".v";9.3="d-9";0.7(a);0.7(b);0.7(9)}}',43,43,'this|color|var|classList|innerHTML|createElement|document|appendChild|add|bottom|top|main|regularTitle|note|div|regularWrapper|scrolledWrapper|scrolledTitle|class|extends|HTMLElement|constructor|super|img|generic|hasAttribute|getAttribute|src|assests|images|if|svg|title|green|center|highlight|blue|wrapper|replace|br|Note|section|ScrollingTitle'.split('|'),0,{}))

// add listeners for typing in bmi calculator
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('a 9(){8.7(".6 .5 2")[0].4("2",3);8.7(".6 .5 2")[1].4("2",3)}',11,11,'||input|onType|addEventListener|calc|bmi|querySelectorAll|document|setBMI|function'.split('|'),0,{}))


// on typing in weight or height in bmi calculator
// if both have value calc bmi
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('m g(){a 6=4.b(".3 .c f")[0].8;a 5=4.b(".3 .c f")[1].8;i(6!=""&&5!=""){4.9(".3 .e").7=(d(6)/(j.h(d(5),2))).k(1)}l{4.9(".3 .e").7="הכניסו נתונים"}}',23,23,'|||bmi|document|height|weight|innerHTML|value|querySelector|let|querySelectorAll|calc|Number|ans|input|onType|pow|if|Math|toFixed|else|function'.split('|'),0,{}))

// creat listener for scrolling => 
// update progress bar 
// creat lisners for entering a subject =>
// highlights subject name in navigation bar
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('d D(){h.2("g",s);r(h);3 9=7.8(".9");5(3 i=0;i<9.c;i++){b 1=9[i];1.2("k",6);1.2("o",6)}m.2("k",6);m.2("o",6)}d p(){3 a=7.8("t a");5(3 i=0;i<a.c;i++){b 1=a[i];1.2("v",w)}}d x(){3 4=7.8(".4");5(3 i=0;i<4.c;i++){b 1=4[i];1.f.j("g-n");1.f.y("4");1.2("l",z);1.2("u",A)}3 e=7.8(".B-C");5(3 i=0;i<e.c;i++){b 1=e[i];1.f.j("g-n");1.2("l",q)}}',40,40,'|element|addEventListener|let|toAnimate|for|subjectIn|document|querySelectorAll|subject|li|const|length|function|imgDiv|classList|scroll|window||add|viewtop|viewenter|about|point|viewbottom|createNavListeners|switchImgTimer|setupScroll|onScroll|nav|viewout|click|onClickNav|createAnimListeners|remove|animate|resetAnimation|switch|img|createScrollListeners'.split('|'),0,{}))


/**
 * on switching image div enter screen
 * start timer to switch img
 * @param {Event} event 
 */
 eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('9 n(7){8 2=m.l.k.j(7.h.2);g(8 i=0;i<2.a;i++){f(6,e*i,2,i)}}9 6(2,i){2[i].3.4="c";b(i>0){2[i-1].3.4="5"}d{2[2.a-1].3.4="5"}}',24,24,'||children|style|display|none|switchImg|event|let|function|length|if|block|else|500|setTimeout|for|currentTarget||call|slice|prototype|Array|switchImgTimer'.split('|'),0,{}))


/**
 * on animated div enter screen
 * starts animation
 * @param {Event} event 
 */
 eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('a 7(1){1.c.6.d("e");1.8.6.g("7");9 3=1.8.l(".m-4");n(9 i=0;i<3.p;i++){k 2=3[i];2.j("b",h);2.4=2.4.f("-o.5",".5")}}',26,26,'|event|element|switchSrc|src|svg|classList|animate|target|let|function|transitionend|currentTarget|remove|reverse|replace|add|onTransitionEnd||addEventListener|const|querySelectorAll|switch|for|animated|length'.split('|'),0,{}))


/**
 * on the end of animation transition 
 * switch image src 
 * @param {Event} event 
 */
function onTransitionEnd(event) {
    event.currentTarget.removeEventListener("transitionend", onTransitionEnd);
    event.currentTarget.src = event.currentTarget.src.replace(".svg", "-animated.svg");
}

/**
 * on animation div exit screen
 * reset animation
 * @param {Event} event 
 */
 eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('4 l(0){0.3.1.d("f");0.3.1.b("g")}4 e(0){5(0.3)}4 i(0){7 c=0.3;7 2=8.9(`[j="#${c.k}"]`).h;5(2)}4 5(2){7 a=8.9(".6");a.1.d("6");2.1.b("6")}',22,22,'event|classList|li|currentTarget|function|updateNav|current|let|document|querySelector|currrent|add|subject|remove|onClickNav|animate|reverse|parentElement|subjectIn|href|id|resetAnimation'.split('|'),0,{}))

/**
 * on scroll
 * updates progress bar
 * @param {Event} event 
 */
 eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('6 s(5){m.q.r=(7.c.o/(7.c.n-7.c.l))*f+"k"}6 j(){2 a=7.p(".t-u .3");v(2 i=0;i<a.w;i++){x 1=a[i];1.b("4",8)}}6 8(5){2 3=5.e;2 1=3.y;1.d.z("g");3.h("4",8);A(()=>{1.b("4",9)},f)}6 9(5){2 1=5.e;1.d.B("g");1.C(".3").b("4",8);1.h("4",9)}',39,39,'|element|let|tab|click|event|function|document|openSlideOut|closeSlideOut|slideOut|addEventListener|documentElement|classList|currentTarget|100|open|removeEventListener||creatSlideOutListeners|vw|clientHeight|progBar|scrollHeight|scrollTop|querySelectorAll|style|width|onScroll|slide|out|for|length|const|parentElement|add|setTimeout|remove|querySelector'.split('|'),0,{}))

