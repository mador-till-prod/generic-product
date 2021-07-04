const termList = [
    {
        term: "שם המושג 1",
        explain: "הסבר על המושג 1"
    },
    {
        term: "שם המושג 2",
        explain: "הסבר על המושג 2"
    },{
        term: "שם המושג 3",
        explain: "הסבר על המושג 3"
    },{
        term: "שם המושג 4",
        explain: "הסבר על המושג 4"
    },{
        term: "שם המושג 5",
        explain: "הסבר על המושג 5"
    },{
        term: "שם המושג 6",
        explain: "הסבר על המושג 6"
    },{
        term: "שם המושג 7",
        explain: "הסבר על המושג 7"
    },{
        term: "שם המושג 8",
        explain: "הסבר על המושג 8"
    },{
        term: "שם המושג 9",
        explain: "הסבר על המושג 9"
    },{
        term: "שם המושג 10",
        explain: "הסבר על המושג 10"
    },
];

var currTerm = 0;
var currTermTest = 0;
var worngsListTest = [];
var currectAnsArrTry = [];
var arrShaffelCard = [];

window.onload = () => {
    document.querySelector(".card-button").addEventListener("click", onClickCardButton);
    document.querySelector(".test-button").addEventListener("click", onClickTestButton);
    document.querySelector(".try-button").addEventListener("click", onClickTryButton);
    document.querySelector(".game-button").addEventListener("click", onClickGameButton);
};

function slot(name, styleName, ...contents) {
    var slot = document.createElement("span");
    slot.slot = name;
    slot.classList.add(styleName);
    slot.append(...contents);
    return slot;
}

eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('r a(n,3){b 0=1.c("d");0.2(6("5","7-e-5",n),6("9","7-9-8",3));0.g({f:\'h\'}).2(1.4(".8-i").j.k(l));1.4(".m-o-p-q").2(0)}',28,28,'el|document|append|t|querySelector|number|slot|worng|term|text|createTermChoice|var|createElement|div|counter|mode|attachShadow|closed|choice|content|cloneNode|true|space||of|adding|terms|function'.split('|'),0,{}))

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('4 N(n,t){q 3=0.r("s");3.6(b("e","c-u-e",n),b("d","c-d-h",t));3.z({A:\'p\'}).6(0.1(".h-B").D.E(F));0.1(".G-H-I-J").6(3)}4 M(){j();0.1(".f-g").2.a("5")}4 i(){0.1(".f-g").2.8("5");0.1(".o").2.a("5");0.1("k").2.a("l-m")}4 j(){0.1(".o").2.8("5");0.1("k").2.8("l-m");L();0.1(".K").9("7",C);0.1(".y").9("7",x);0.1(".w-v").9("7",i)}',50,50,'document|querySelector|classList|el|function|inactive|append|click|remove|addEventListener|add|slot|worng|text|number|home|page|term|onClickBackButton|onLoadCards|header|in|menu||cards|closed|var|createElement|div||counter|again|choose|onClickLeftArrow|leftArrow|attachShadow|mode|choice|onClickRightArrow|content|cloneNode|true|space|of|adding|terms|rightArrow|displayTerm|onClickCardButton|removTermChoice'.split('|'),0,{}))

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('b 1b(e){B(+1)}b 11(e){B(-1)}b W(){3.n("i-c").j=9[g].i;3.n("i-p-c").j=9[g].p;3.n("E-i").j=`${g+1}/${9.h}`;3.5(".12>.17").18=V}b B(u){3.5(".v").6.a(`q-${(g%4)+1}`);g=(g+u)%9.h;C(g===-1)g=9.h-1;3.5(".v").6.m(`q-${(g%4)+1}`);W()}b 13(){T();3.5(".K-N").6.m("l");D w=3.5(".19-w");D f=3.5("#z>.f-t");w.d.16=`${f.15}H`;w.d.14=`10(${f.Z}H-1a/2-1c)`}b T(){7=0;3.5(".8").6.a("l");3.5("M").6.a("Y-Q");A();3.5(".1q").s("r",F);3.5(".O").s("r",G);3.5(".8 .1p-1o").s("r",P);3.5(".L-f").s("r",1n);3.5(".J-S-c").s("r",1m)}b x(u){3.5(".8").6.a(`q-${(7%4)+1}`);7=(7+u)%9.h;C(7===-1)7=9.h-1;3.5(".8").6.m(`q-${(7%4)+1}`);A()}b G(e){C(7==9.h-1){3.5(".8").6.m("l");3.5(".8-f").6.a("l");3.5("#1l-c").j=`הצלחתב-${9.h-X.h}שאלות`;1j()}1d{3.5(".8").6.a(`y-z`);x(+1)}}b F(e){x(-1)}b A(){3.n("i-c-8").j=9[7].p;3.n("i-p-c").j=9[7].p;3.n("E-i-8").j=`${7+1}/${9.h}`;3.5(".8").6.a("y-1i");3.5(".I .v").6.a("U");3.5(".I .v").6.a("1h");3.5(".O").d.k="o";3.5(".f-t t").1g=V;3.5(".U-c").d.k="o";3.5(".1f-c").d.k="o";3.5(".J-S-c").d.k="R";3.5(".L-f").d.k="R";3.5("#1e").d.k="o";3.5("#1r").d.k="o";3.5(".f-t t").1k=""}b P(){3.5(".K-N").6.a("l");3.5(".8").6.m("l");3.5("M").6.m("Y-Q");3.5(".8").6.a(`q-${(7%4)+1}`);3.5(".8").6.a(`y-z`);X=[];7=0}',62,90,'|||document||querySelector|classList|currTermTest|test|termList|remove|function|text|style||ans|currTerm|length|term|innerHTML|visibility|inactive|add|getElementById|hidden|explain|num|click|addEventListener|input|move|appearence|signs|changeTape|bad|answer|displayTermTest|changeCard|if|var|current|onClickLeftArrowTest|onClickRightArrowTest|px|note|dont|home|check|header|page|leftArrowTest|onClickBackButtonTest|menu|visible|know|onLoadTest|currect|false|displayTerm|worngsListTest|in|offsetLeft|calc|onClickRightArrow|card|onClickTestButton|left|offsetTop|top|hitbox|checked|result|15vw|onClickLeftArrow|3vw|else|greenV|worng|disabled|wrong|asnwer|onLoadTestAns|value|score|onClickDontKnow|checkSpelling|again|choose|rightArrowTest|redX'.split('|'),0,{}))

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('e 1T(){s(5.6(".n-l l").1c==b[x].q){5.6(".L .J").7.d("1f");5.6(".L .J").7.j("v");5.6(".v-m").g.h="o";5.6("#1G").g.h="o"}1F{5.6(".L .J").7.d("v");5.6(".L .J").7.j("1f");N.1r(b[x].q);5.6(".1g-m").1k=`טעית!התשובההנכונה:${b[x].q}`;5.6(".1g-m").g.h="o";5.6("#1C").g.h="o"}5.6(".r").7.j("W-8");5.6(".18").g.h="o";5.6(".19-1d-m").g.h="M";5.6(".9-n").g.h="M";5.6(".n-l l").17=V}e 1B(){5.6(".n-l l").1c=b[x].q;5.6(".r").7.j("W-8");5.6(".18").g.h="o";5.6(".19-1d-m").g.h="M";5.6(".9-n").g.h="M";5.6(".n-l l").17=V}e 1z(){5.6(".r-n .1i-1j").I("O",1e);5.6(".r").7.d(`1y-${(x%4)+1}`);5.6(".r").7.d(`W-8`);14(f i=0;i<N.H;i++){1w((i+1),(N[i]))}N=[];x=0}e 1e(){5.6(".13-X").7.d("u");5.6(".r-n").7.j("u");5.6("15").7.j("Y-12");f 8=5.6(".D-B-y-1I");U(8.Z)8.Z.d()}e k(16,S,...1h){f p=5.1a("1b");p.p=16;p.7.j(S);p.10(...1h);s(S=="9-z"){p.I("O",20)}1l p}e 1q(t,Q,...a){f C=5.1a("1b");C.10(k("q-m-c","q-m-c",t),k("9-1X","9-z"),k("1W","c-8",b[(a[0])].K),k("9-1V","9-z"),k("1U","c-8",b[(a[1])].K),k("9-1K","9-z"),k("1S","c-8",b[a[2]].K),k("9-1Q","9-z"),k("1N","c-8",b[a[3]].K));C.1L({1J:\'1x\'}).10(5.6(".c-A").1M.1O(V));5.6(".D-B-y-A").1P(C);C.Q=Q}e 1Y(){1n();5.6(".13-X").7.j("u")}e 1n(){5.6(".c").7.d("u");5.6("15").7.d("Y-12");5.6(".D-B-y-A").1Z();1s();5.6(".c .1i-1j").I("O",1m);5.6(".9-s-v-1R").g.h="o";5.6(".c .9-s-v").I("O",1A)}e 1m(){5.6(".13-X").7.d("u");5.6(".c").7.j("u");5.6("15").7.j("Y-12");f 8=5.6(".D-B-y-A");5.6(".D-B-y-A").7.d("1t");U(8.1u!=8.1v)8.Z.d();5.6(".9-s-v-m").1k="לבדיקה"}e 1s(){f 11=[];f F=0;14(f i=0;i<b.H;i++){F=w.T(w.R()*4);1H.1r(F);11=1p(i,F);1q(b[i].q,F,...11)}}e 1p(1o,P){f E=[];E[P]=1o;f G=0;14(f i=0;i<4;i++){s(i===P){1D}G=w.T(w.R()*(b.H));U(E.1E(G)){G=w.T(w.R()*(b.H))}E[i]=G}1l E}',62,125,'|||||document|querySelector|classList|answer|check||termList|try|remove|function|var|style|visibility||add|slotTry|input|text|ans|visible|slot|term|test|if||inactive|currect|Math|currTermTest|adding|box|quess|of|el|space|arr|curretAns|temp|length|addEventListener|appearence|explain|note|hidden|worngsListTest|click|number|correct|random|styleName|floor|while|true|bad|page|in|firstChild|append|randArr|menu|home|for|header|name|disabled|leftArrowTest|dont|createElement|div|value|know|onClickBackButtonTestAns|wrong|worng|contents|choose|again|innerHTML|return|onClickBackButtonTry|onLoadTry|placeInXml|randArray|createTryQuess|push|showQuess|disable|firstElementChild|lastElementChild|createTermChoice|closed|num|onLoadTestAns|onClickCheckTry|onClickDontKnow|redX|continue|includes|else|greenV|currectAnsArrTry|terms|mode|box3|attachShadow|content|ans4|cloneNode|prepend|box4|img|ans3|checkSpelling|ans2|box2|ans1|box1|onClickTryButton|scrollIntoView|onClickNewChoice'.split('|'),0,{}))

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('m C(e){5(e.g.p.2(".3")!=x){e.g.p.2(".3").7.u("3")}e.g.7.8("3")}m z(){b f=0;a.2(".t-q-o-n").7.8("A");w(b i=l.k-1;i>-1;i--){b 6=a.v(".t-q-o-n>y")[i];b 4=6.2(".3");5(4){4=/[1-9]+/.E(4.s)}r{4="-1"}5(F(4)===6.d+1){6.2(".3").7.8("d");f++}r{5(4!=-1){6.2(".3").7.8("G")}6.2(`[s=c-H${6.d+1}]`).7.8("J")}a.2(".c-5-h-j").L=`הצלחת<M>${f}מתוך${l.k}שאלות`;a.2(".c-5-h-N").D.K="I";a.2(".c-5-h-j").B()}}',50,50,'||querySelector|checked|number|if|question|classList|add||document|var|check|correct||cunterCorrectAns|target|currect||text|length|termList|function|quess|adding|parentElement|of|else|slot|space|remove|querySelectorAll|for|null|div|onClickCheckTry|disable|scrollIntoView|onClickNewChoice|style|exec|Number|mistake|box|hidden|right|visibility|innerHTML|br|img'.split('|'),0,{}))

/************************* 
//game
**************************/
function onClickGameButton() {
    onLoadGame();
    document.querySelector(".home-page").classList.add("inactive");
}

function onLoadGame() {
    document.querySelector(".game").classList.remove("inactive");
    document.querySelector("header").classList.remove("in-menu");

    document.querySelector(".game .choose-again").addEventListener("click", onClickBackButtonGame);
    document.querySelector(".match-button").addEventListener("click", onClickMatchButton)
    counterCorrectAns = 0;
    document.querySelector(".match-button").style.visibility = "visible";
    showGameCard();
}
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('u j(){2.1(".i-h").3.4("d");2.1(".5").3.c("d");2.1("f").3.c("k-e");g(2.1(".b-a-7-8").9)2.1(".b-a-7-8").9.4();2.1(".l-m").3.4("n");o=[];p(q);r=0;2.1("#s").6="";2.1(".5 #t-5").6=""}',31,31,'|querySelector|document|classList|remove|game|innerHTML|adding|cards|firstChild|of|space|add|inactive|menu|header|while|page|home|onClickBackButtonGame|in|match|button|disable|arrShaffelCard|clearInterval|counterSec|totalSec|congrats|finish|function'.split('|'),0,{}))

function slotGame(name, styleName, index, ...contents) {
    var slot = document.createElement("div");
    slot.slot = name;
    slot.classList.add(styleName);
    slot.append(...contents);
    slot.index = index;
    if (styleName == "term-explain-card-game") {
        slot.addEventListener("click", onClickExplainCard);
    }
    else {
        slot.addEventListener("click", onClickTermCard);
    }
    return slot;
}

function createGameCards(n, ...a) {
    var el = document.createElement("div");
    if (arrShaffelCard[n] >= termList.length) {

        if (termList[arrShaffelCard[n] - termList.length].explain.length > 30) {
            var tempSlot = slotGame("explain", "term-explain-card-game", arrShaffelCard[n] - termList.length, `${(termList[arrShaffelCard[n] - termList.length].explain.slice(0, 30))}...`)
            tempSlot.addEventListener("touchend", function () {
                clearTimeout(tempSlot.pressTimer);
                // Clear timeout
                return false;
            });
            tempSlot.addEventListener("touchstart", function () {
                // Set timeout
                tempSlot.pressTimer = window.setTimeout(function () {
                    document.querySelector(".big-explain").style.visibility = "visible";
                    document.querySelector(".space-of-adding-cards").classList.add("disable");
                    document.getElementById("big-explain-img").addEventListener("click", afterClickXExplain);
                    document.querySelector(".big-explain-text").innerHTML = termList[arrShaffelCard[n] - termList.length].explain;
                }, 500);
                return false;
            });


            el.append(tempSlot);
        }
        else {
            el.append(slotGame("explain", "term-explain-card-game", arrShaffelCard[n] - termList.length, termList[arrShaffelCard[n] - termList.length].explain));
        }
    }
    else {
        el.append(slotGame("term", "term-card-game", arrShaffelCard[n], termList[arrShaffelCard[n]].term));
    }

    if (arrShaffelCard[n + 1] >= termList.length) {
        if (termList[arrShaffelCard[n + 1] - termList.length].explain.length > 30) {
            var tempSlot = slotGame("explain", "term-explain-card-game", arrShaffelCard[n + 1] - termList.length, `${(termList[arrShaffelCard[n + 1] - termList.length].explain.slice(0, 30))}...`)
            tempSlot.addEventListener("touchend", function () {
                clearTimeout(tempSlot.pressTimer);
                // Clear timeout
                return false;
            });
            tempSlot.addEventListener("touchstart", function () {
                // Set timeout
                tempSlot.pressTimer = window.setTimeout(function () {
                    document.querySelector(".big-explain").style.visibility = "visible";
                    document.querySelector(".space-of-adding-cards").classList.add("disable");
                    document.getElementById("big-explain-img").addEventListener("click", afterClickXExplain);
                    document.querySelector(".big-explain-text").innerHTML = termList[arrShaffelCard[n + 1] - termList.length].explain;
                }, 500);
                return false;
            });


            el.append(tempSlot);
        }
        else {
            el.append(slotGame("explain", "term-explain-card-game", arrShaffelCard[n + 1] - termList.length, termList[arrShaffelCard[n + 1] - termList.length].explain));
        }

    }
    else {
        el.append(slotGame("term", "term-card-game", arrShaffelCard[n + 1], termList[arrShaffelCard[n + 1]].term));
    }

    el.attachShadow({ mode: 'closed' }).append(document.querySelector(".term-card").content.cloneNode(true));
    document.querySelector(".space-of-adding-cards").append(el);
}

eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('d y(){8 n=[];8 q=0;l(8 i=0;i<f.g;i++){a.h(i);a.h(i+f.g)}a=p(a);l(8 i=0;i<f.g*2;i+=2){s(i,...n)}t=u(v,r)}d w(e){j(e.6.5.5.b(".3-1-4-c")!=o){e.6.5.5.b(".3-1-4-c").9.k("3-1-4-c")}e.6.9.m("3-1-4-c")}d x(e){j(e.6.5.5.b(".3-1-4-7")!=o){e.6.5.5.b(".3-1-4-7").9.k("3-1-4-7")}e.6.9.m("3-1-4-7")}',35,35,'|curr||game|choose|parentElement|target|term|var|classList|arrShaffelCard|querySelector|explain|function||termList|length|push||if|remove|for|add|randArr|null|shuffle|curretAns|1000|createGameCards|counterSec|setInterval|setTime|onClickExplainCard|onClickTermCard|showGameCard'.split('|'),0,{}))


/**
 * 
 * @param {Array} arr 
 */
 eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('g f(3){7 2=3.6();e(7 4=0;4<3.8;4++){7 5=9.d(9.c()*2.8);3[4]=2[5];2=2.6(0,5).a(2.6(5+1))}b 3}',17,17,'||tmp|arr|i|index|slice|var|length|Math|concat|return|random|floor|for|shuffle|function'.split('|'),0,{}))

var changColor;
var counterCorrectAns = 0;
var totalSec = 0;
var counterSec;

eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('u m(e){c(j<n.o-1){c(4.5(".2-0-3-7")!=k&&4.5(".2-0-3-6")!=k){c(4.5(".2-0-3-7").l==4.5(".2-0-3-6").l){4.5(".2-0-3-6").8.a("2-0-b-6");4.5(".2-0-3-7").8.a("2-0-b-7");4.5(".2-0-3-6").8.9("2-0-3-6");4.5(".2-0-3-7").8.9("2-0-3-7");d=f(q,g);j++}h{4.5(".2-0-3-6").8.a("2-0-i-6");4.5(".2-0-3-7").8.a("2-0-i-7");4.5(".2-0-3-6").8.9("2-0-3-6");4.5(".2-0-3-7").8.9("2-0-3-7");d=f(r,g)}}}h{4.5(".2-0-3-6").8.a("2-0-b-6");4.5(".2-0-3-7").8.a("2-0-b-7");4.5(".2-0-3-6").8.9("2-0-3-6");4.5(".2-0-3-7").8.9("2-0-3-7");d=f(t,g);s(p)}}',31,31,'curr||game|choose|document|querySelector|explain|term|classList|remove|add|correct|if|changColor||setInterval|1000|else|worng|counterCorrectAns|null|index|onClickMatchButton|termList|length|counterSec|disaperGameCard|returnTermCard|clearInterval|disaperLastGameCard|function'.split('|'),0,{}))

eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('f w(){3.2(".0-1-e-7").5.8("0-1-e-7");3.2(".0-1-e-6").5.8("0-1-e-6");g(j)}f v(){3.2(".0-1-4-7").5.d("c");3.2(".0-1-4-6").5.d("c");3.2(".0-1-4-7").9.a="b";3.2(".0-1-4-6").9.a="b";3.2(".0-1-4-7").5.8("0-1-4-7");3.2(".0-1-4-6").5.8("0-1-4-6");g(j)}f u(){3.2(".0-1-4-7").5.d("c");3.2(".0-1-4-6").5.d("c");3.2(".0-1-4-7").9.a="b";3.2(".0-1-4-6").9.a="b";3.2(".0-1-4-7").5.8("0-1-4-7");3.2(".0-1-4-6").5.8("0-1-4-6");g(j);3.2(".l-m").5.d("c");3.2(".l-m").9.a="b";3.2("#o").h="כל הכבוד!";3.2(".0 #p-0").h="סיימת את המשחק"}f q(){++i;3.2(".r-s").h=`${n(t(i/k))}:${n(i%k)}`}',33,33,'game|curr|querySelector|document|correct|classList|term|explain|remove|style|visibility|hidden|disable|add|worng|function|clearInterval|innerHTML|totalSec|changColor|60|match|button|pad|congrats|finish|setTime|time|title|parseInt|disaperLastGameCard|disaperGameCard|returnTermCard'.split('|'),0,{}))

function pad(val) {
    var valString = val + ""
    if (valString.length < 2) {
        return `0${valString}`;
    }
    else {
        return valString;
    }
}
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('i 5;0 6(){}0 7(){2.1(".8-9").4.b="a";2.1(".d-e-f-g").h.c("3")}',19,19,'function|querySelector|document|disable|style|pressTimer|longPress|afterClickXExplain|big|explain|hidden|visibility|remove|space|of|adding|cards|classList|var'.split('|'),0,{}))



