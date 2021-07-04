const termList = [
    /* an example for question template 
    {
    //     quess: "שאלה",
    //     ans0: "תשובה נכונה",
    //     ans1: "תשובה 1",
    //     ans2: "תשובה 2",
    //     ans3: "תשובה 3",
    //     img: "URL של התמונה"
    //      if there are no url put "#"" insted
     }*/

    {
        quess: 'שאלה ראשונה',
        ans0: "תשובה נכונה",
        ans1: "תשובה לא נכונה",
        ans2: "תשובה לא נכונה",
        ans3: "תשובה לא נכונה",
        img: "#"
    },
    {
        quess: 'שאלה שנייה',
        ans0: "תשובה נכונה",
        ans1: "תשובה לא נכונה",
        ans2: "תשובה לא נכונה",
        ans3: "תשובה לא נכונה",
        img: "#"
    },
    {
        quess: 'שאלה שלישית',
        ans0: "תשובה נכונה",
        ans1: "תשובה לא נכונה",
        ans2: "תשובה לא נכונה",
        ans3: "תשובה לא נכונה",
        img: "#"
    },
    {
        quess: 'שאלה רביעית',
        ans0: "תשובה נכונה",
        ans1: "תשובה לא נכונה",
        ans2: "תשובה לא נכונה",
        ans3: "תשובה לא נכונה",
        img: "#"
    },
    {
        quess: 'שאלה חמישית',
        ans0: "תשובה נכונה",
        ans1: "תשובה לא נכונה",
        ans2: "תשובה לא נכונה",
        ans3: "תשובה לא נכונה",
        img: "#"
    }
];

//value of the questions
const quesValue = ["0","100", "1000", "10,000", "100,000","100,000", "1,000,000"];

var quessOrder = [];
var ansArr = [0, 1, 2, 3];
var currQues = 0;
var life = 0;
var timer;

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('b(\'1x\'1e 1g&&1a.1i!==\'1j\'){1h 1a="../"}1k.1m=()=>{Z()};g Z(){K=[];r=[0,1,2,3];9=0;v=0;b(4.f(".q.7")[0]){4.6(".q.7").k.n="H";4.6(".q.7").5.8("7")}b(4.f(".q.7")[1]){4.6(".q.7").k.n="H";4.6(".q.7").5.8("7")}4.f(".q")[0].J("I",V);4.f(".q")[1].J("I",V);M()}g M(){b(j[9].13!="#"){4.u("E-16").k.1d=`1l("${j[9].13}")`}4.u("E-1f").y=U[9+1];4.u("1c-18").y=U[9];4.u("E-16").y=j[9].E;r=T(r);c a=4.f(".l");s(c i=0;i<r.o;i++){a[i].y=j[9][`l${r[i]}`];a[i].J("I",15)}4.u("E-1p").y=`${9+1}/${j.o}`}g 15(e){9++;b(9==j.o){b(e.h.G==j[9-1].z){e.h.5.d("m")}O{4.f(".Q")[v].k.n="F";v++;e.h.5.d("B");c a=4.f(".l");s(c i=0;i<r.o;i++){b(a[i].G==j[9-1].z){a[i].5.d("m")}}}N=P(10,R,e.h,4.6(".m"))}O{b(e.h.G==j[9-1].z){e.h.5.d("m");N=P(11,R,e.h)}O{4.f(".Q")[v].k.n="F";v++;e.h.5.d("B");c a=4.f(".l");s(c i=0;i<r.o;i++){b(a[i].G==j[9-1].z){a[i].5.d("m");N=P(12,R,e.h,a[i])}}b(v==3){N=P(14,R,e.h,4.6(".m"))}}}4.6(".D-C").5.d("7")}g 11(p){4.6(".D-C").5.8("7");p.5.8("m");M();b(4.6(".l.7")){S()}}g 12(p,x){4.6(".D-C").5.8("7");p.5.8("B");x.5.8("m");M();b(4.6(".l.7")){S()}}g 14(p,x){4.6(".X").5.d("t");4.6(".17-W").5.8("t");4.6(".D-C").5.8("7");p.5.8("B");x.5.8("m");4.6(".1r-1o").J("I",19);9=0}g 10(p,x){4.6(".X").5.d("t");4.u("1c-18").y=U[9+1];4.6(".1s-W").5.8("t");4.6(".D-C").5.8("7");p.5.8("B");x.5.8("m");9=0}g V(e){c a=4.f(".l");s(c i=0;i<2;i++){b(a[i].G==j[9].z){a[i+2].k.n="F";a[i+2].5.d("7")}O{a[i].k.n="F";a[i].5.d("7")}}e.h.5.d("7");e.h.k.n="F"}g 1w(){s(c i=0;i<j.o;i++){K.1n(i)}K=T(K)}g 19(){4.6(".X").5.8("t");4.6(".17-W").5.d("t");s(c i=0;i<4.f(".Q").o;i++){4.f(".Q")[i].k.n="H"}Z()}g S(){4.6(".l.7").k.n="H";4.6(".l.7").5.8("7");4.6(".l.7").k.n="H";4.6(".l.7").5.8("7")}g T(A){c w=A.Y();s(c i=0;i<A.o;i++){c L=1b.1u(1b.1t()*w.o);A[i]=w[L];w=w.Y(0,L).1q(w.Y(L+1))}1v A}',62,96,'||||document|classList|querySelector|disable|remove|currQues|allNotes|if|var|add||querySelectorAll|function|currentTarget||termList|style|ans|correct|visibility|length|userAnswer|help|ansArr|for|inactive|getElementById|life|tmp|correctAnswer|innerHTML|ans0|arr|worng|place|answer|quess|hidden|textContent|visible|click|addEventListener|quessOrder|index|enterText|timer|else|setTimeout|heart|2500|showHiddenAnswer|shuffle|quesValue|onClickHelp|page|game|slice|startGame|winMessege|nextQuestionRight|nextQuestionWorng|img|loseMessege|cheack|card|lose|bank|backToGame|location|Math|money|backgroundImage|in|value|navigator|let|hostname|localhost|window|url|onload|push|again|count|concat|try|win|random|floor|return|createQuessOrder|serviceWorker'.split('|'),0,{}))
