import{S as we,i as Ae,s as ke,F as ne,e as v,k as S,c as d,a as p,d as o,m as L,K as Me,b as m,f as be,g as N,J as r,G as re,H as oe,I as ce,r as U,p as F,x as _e,y as fe,z as ue,C as he,t as w,h as A,j as V,n as ye,L as Je,l as Ve,M as Ke,N as Be,O as Qe}from"./index-6d9ba400.js";const Re=l=>({}),Ce=l=>({}),We=l=>({}),Te=l=>({}),Xe=l=>({}),ze=l=>({}),Ye=l=>({}),Ge=l=>({});function Ze(l){let e,s,a,t,i,_,f,u,n,c,b,I,H,T,g;const G=l[5].name,D=ne(G,l,l[4],Ge),K=l[5].bread,P=ne(K,l,l[4],ze),J=l[5].price,k=ne(J,l,l[4],Te),B=l[5].bottom,j=ne(B,l,l[4],Ce);return{c(){e=v("main"),s=v("div"),a=v("div"),t=v("img"),_=S(),f=v("h1"),D&&D.c(),u=S(),P&&P.c(),n=S(),c=v("div"),b=v("h2"),k&&k.c(),I=S(),H=v("div"),j&&j.c(),this.h()},l(h){e=d(h,"MAIN",{style:!0,class:!0});var $=p(e);s=d($,"DIV",{class:!0});var O=p(s);a=d(O,"DIV",{class:!0});var Q=p(a);t=d(Q,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),Q.forEach(o),_=L(O),f=d(O,"H1",{class:!0});var R=p(f);D&&D.l(R),R.forEach(o),u=L(O),P&&P.l(O),O.forEach(o),n=L($),c=d($,"DIV",{class:!0});var M=p(c);b=d(M,"H2",{class:!0});var x=p(b);k&&k.l(x),x.forEach(o),M.forEach(o),I=L($),H=d($,"DIV",{class:!0});var W=p(H);j&&j.l(W),W.forEach(o),$.forEach(o),this.h()},h(){Me(t.src,i=l[0])||m(t,"src",i),m(t,"width","100%"),m(t,"height","auto"),m(t,"alt",l[1]),m(t,"class","svelte-19wx610"),m(a,"class","image-container svelte-19wx610"),m(f,"class","svelte-19wx610"),m(s,"class","pad svelte-19wx610"),m(b,"class","svelte-19wx610"),m(c,"class","price svelte-19wx610"),m(H,"class",T="bottom "+l[2]+" svelte-19wx610"),be(e,"--offset",l[3]*50),m(e,"class","svelte-19wx610")},m(h,$){N(h,e,$),r(e,s),r(s,a),r(a,t),r(s,_),r(s,f),D&&D.m(f,null),r(s,u),P&&P.m(s,null),r(e,n),r(e,c),r(c,b),k&&k.m(b,null),r(e,I),r(e,H),j&&j.m(H,null),g=!0},p(h,[$]){(!g||$&1&&!Me(t.src,i=h[0]))&&m(t,"src",i),(!g||$&2)&&m(t,"alt",h[1]),D&&D.p&&(!g||$&16)&&re(D,G,h,h[4],g?ce(G,h[4],$,Ye):oe(h[4]),Ge),P&&P.p&&(!g||$&16)&&re(P,K,h,h[4],g?ce(K,h[4],$,Xe):oe(h[4]),ze),k&&k.p&&(!g||$&16)&&re(k,J,h,h[4],g?ce(J,h[4],$,We):oe(h[4]),Te),j&&j.p&&(!g||$&16)&&re(j,B,h,h[4],g?ce(B,h[4],$,Re):oe(h[4]),Ce),(!g||$&4&&T!==(T="bottom "+h[2]+" svelte-19wx610"))&&m(H,"class",T),(!g||$&8)&&be(e,"--offset",h[3]*50)},i(h){g||(U(D,h),U(P,h),U(k,h),U(j,h),g=!0)},o(h){F(D,h),F(P,h),F(k,h),F(j,h),g=!1},d(h){h&&o(e),D&&D.d(h),P&&P.d(h),k&&k.d(h),j&&j.d(h)}}}function xe(l,e,s){let{$$slots:a={},$$scope:t}=e,{img_src:i}=e,{img_alt:_}=e,{bottom_class:f="ok"}=e,{index:u=0}=e;return l.$$set=n=>{"img_src"in n&&s(0,i=n.img_src),"img_alt"in n&&s(1,_=n.img_alt),"bottom_class"in n&&s(2,f=n.bottom_class),"index"in n&&s(3,u=n.index),"$$scope"in n&&s(4,t=n.$$scope)},[i,_,f,u,t,a]}class Ee extends we{constructor(e){super(),Ae(this,e,xe,Ze,ke,{img_src:0,img_alt:1,bottom_class:2,index:3})}}function et(l){let e,s=l[0].tiersimple+"",a;return{c(){e=v("span"),a=w(s),this.h()},l(t){e=d(t,"SPAN",{slot:!0});var i=p(e);a=A(i,s),i.forEach(o),this.h()},h(){m(e,"slot","name")},m(t,i){N(t,e,i),r(e,a)},p(t,i){i&1&&s!==(s=t[0].tiersimple+"")&&V(a,s)},d(t){t&&o(e)}}}function tt(l){let e,s;return{c(){e=v("span"),s=w("48\u20AC"),this.h()},l(a){e=d(a,"SPAN",{slot:!0});var t=p(e);s=A(t,"48\u20AC"),t.forEach(o),this.h()},h(){m(e,"slot","price")},m(a,t){N(a,e,t),r(e,s)},p:ye,d(a){a&&o(e)}}}function st(l){let e,s,a=l[0].static+"",t,i,_,f=l[0].pagesone+"",u;return{c(){e=v("ul"),s=v("li"),t=w(a),i=S(),_=v("li"),u=w(f),this.h()},l(n){e=d(n,"UL",{slot:!0,class:!0});var c=p(e);s=d(c,"LI",{});var b=p(s);t=A(b,a),b.forEach(o),i=L(c),_=d(c,"LI",{});var I=p(_);u=A(I,f),I.forEach(o),c.forEach(o),this.h()},h(){m(e,"slot","bread"),m(e,"class","svelte-3qsiem")},m(n,c){N(n,e,c),r(e,s),r(s,t),r(e,i),r(e,_),r(_,u)},p(n,c){c&1&&a!==(a=n[0].static+"")&&V(t,a),c&1&&f!==(f=n[0].pagesone+"")&&V(u,f)},d(n){n&&o(e)}}}function at(l){let e,s=l[0].hostingfree+"",a;return{c(){e=v("span"),a=w(s),this.h()},l(t){e=d(t,"SPAN",{slot:!0});var i=p(e);a=A(i,s),i.forEach(o),this.h()},h(){m(e,"slot","bottom")},m(t,i){N(t,e,i),r(e,a)},p(t,i){i&1&&s!==(s=t[0].hostingfree+"")&&V(a,s)},d(t){t&&o(e)}}}function lt(l){let e,s=l[0].tierstatic+"",a;return{c(){e=v("span"),a=w(s),this.h()},l(t){e=d(t,"SPAN",{slot:!0});var i=p(e);a=A(i,s),i.forEach(o),this.h()},h(){m(e,"slot","name")},m(t,i){N(t,e,i),r(e,a)},p(t,i){i&1&&s!==(s=t[0].tierstatic+"")&&V(a,s)},d(t){t&&o(e)}}}function it(l){let e,s;return{c(){e=v("span"),s=w("128\u20AC"),this.h()},l(a){e=d(a,"SPAN",{slot:!0});var t=p(e);s=A(t,"128\u20AC"),t.forEach(o),this.h()},h(){m(e,"slot","price")},m(a,t){N(a,e,t),r(e,s)},p:ye,d(a){a&&o(e)}}}function nt(l){let e,s,a=l[0].static+"",t,i,_,f=l[0].pagestwo+"",u,n;return{c(){e=v("ul"),s=v("li"),t=w(a),i=S(),_=v("li"),u=w(f),n=w(" (max ~50)"),this.h()},l(c){e=d(c,"UL",{slot:!0,class:!0});var b=p(e);s=d(b,"LI",{});var I=p(s);t=A(I,a),I.forEach(o),i=L(b),_=d(b,"LI",{});var H=p(_);u=A(H,f),n=A(H," (max ~50)"),H.forEach(o),b.forEach(o),this.h()},h(){m(e,"slot","bread"),m(e,"class","svelte-3qsiem")},m(c,b){N(c,e,b),r(e,s),r(s,t),r(e,i),r(e,_),r(_,u),r(_,n)},p(c,b){b&1&&a!==(a=c[0].static+"")&&V(t,a),b&1&&f!==(f=c[0].pagestwo+"")&&V(u,f)},d(c){c&&o(e)}}}function rt(l){let e,s=l[0].hostingfree+"",a;return{c(){e=v("span"),a=w(s),this.h()},l(t){e=d(t,"SPAN",{slot:!0});var i=p(e);a=A(i,s),i.forEach(o),this.h()},h(){m(e,"slot","bottom")},m(t,i){N(t,e,i),r(e,a)},p(t,i){i&1&&s!==(s=t[0].hostingfree+"")&&V(a,s)},d(t){t&&o(e)}}}function ot(l){let e,s=l[0].tierdynamic+"",a;return{c(){e=v("span"),a=w(s),this.h()},l(t){e=d(t,"SPAN",{slot:!0});var i=p(e);a=A(i,s),i.forEach(o),this.h()},h(){m(e,"slot","name")},m(t,i){N(t,e,i),r(e,a)},p(t,i){i&1&&s!==(s=t[0].tierdynamic+"")&&V(a,s)},d(t){t&&o(e)}}}function ct(l){let e,s;return{c(){e=v("span"),s=w("256\u20AC+"),this.h()},l(a){e=d(a,"SPAN",{slot:!0});var t=p(e);s=A(t,"256\u20AC+"),t.forEach(o),this.h()},h(){m(e,"slot","price")},m(a,t){N(a,e,t),r(e,s)},p:ye,d(a){a&&o(e)}}}function _t(l){let e,s,a=l[0].dynamic+"",t,i,_,f=l[0].pagesthree+"",u;return{c(){e=v("ul"),s=v("li"),t=w(a),i=S(),_=v("li"),u=w(f),this.h()},l(n){e=d(n,"UL",{slot:!0,class:!0});var c=p(e);s=d(c,"LI",{});var b=p(s);t=A(b,a),b.forEach(o),i=L(c),_=d(c,"LI",{});var I=p(_);u=A(I,f),I.forEach(o),c.forEach(o),this.h()},h(){m(e,"slot","bread"),m(e,"class","svelte-3qsiem")},m(n,c){N(n,e,c),r(e,s),r(s,t),r(e,i),r(e,_),r(_,u)},p(n,c){c&1&&a!==(a=n[0].dynamic+"")&&V(t,a),c&1&&f!==(f=n[0].pagesthree+"")&&V(u,f)},d(n){n&&o(e)}}}function ft(l){let e,s=l[0].hostingstatic+"",a;return{c(){e=v("span"),a=w(s),this.h()},l(t){e=d(t,"SPAN",{slot:!0});var i=p(e);a=A(i,s),i.forEach(o),this.h()},h(){m(e,"slot","bottom")},m(t,i){N(t,e,i),r(e,a)},p(t,i){i&1&&s!==(s=t[0].hostingstatic+"")&&V(a,s)},d(t){t&&o(e)}}}function ut(l){let e,s,a,t,i,_,f;return s=new Ee({props:{img_src:"/services/icons/landingpage.svg",img_alt:"A single page",index:0,$$slots:{bottom:[at],bread:[st],price:[tt],name:[et]},$$scope:{ctx:l}}}),t=new Ee({props:{img_src:"/services/icons/static_site.svg",img_alt:"Multiple pages",index:1,$$slots:{bottom:[rt],bread:[nt],price:[it],name:[lt]},$$scope:{ctx:l}}}),_=new Ee({props:{img_src:"/services/icons/static_site.svg",img_alt:"Multiple pages with dynamic content",bottom_class:"warn",index:2,$$slots:{bottom:[ft],bread:[_t],price:[ct],name:[ot]},$$scope:{ctx:l}}}),{c(){e=v("div"),_e(s.$$.fragment),a=S(),_e(t.$$.fragment),i=S(),_e(_.$$.fragment),this.h()},l(u){e=d(u,"DIV",{class:!0});var n=p(e);fe(s.$$.fragment,n),a=L(n),fe(t.$$.fragment,n),i=L(n),fe(_.$$.fragment,n),n.forEach(o),this.h()},h(){m(e,"class","tier-container svelte-3qsiem")},m(u,n){N(u,e,n),ue(s,e,null),r(e,a),ue(t,e,null),r(e,i),ue(_,e,null),f=!0},p(u,[n]){const c={};n&3&&(c.$$scope={dirty:n,ctx:u}),s.$set(c);const b={};n&3&&(b.$$scope={dirty:n,ctx:u}),t.$set(b);const I={};n&3&&(I.$$scope={dirty:n,ctx:u}),_.$set(I)},i(u){f||(U(s.$$.fragment,u),U(t.$$.fragment,u),U(_.$$.fragment,u),f=!0)},o(u){F(s.$$.fragment,u),F(t.$$.fragment,u),F(_.$$.fragment,u),f=!1},d(u){u&&o(e),he(s),he(t),he(_)}}}function ht(l,e,s){let{t:a}=e;return l.$$set=t=>{"t"in t&&s(0,a=t.t)},[a]}class mt extends we{constructor(e){super(),Ae(this,e,ht,ut,ke,{t:0})}}let $e={en:{Services:"Services",title:"Need a website?",subtitle:"Let's get started.",description:"Get professional and optimized websites for a reasonable cost",tiersimple:"A Landing Page",tierstatic:"A Static Site",tierdynamic:"A Dynamic Site",static:"static",dynamic:"dynamic",pagesone:"a page or two",pagestwo:"plenty of pages",pagesthree:"unlimited pages",hostingfree:"free hosting",hostingstatic:"free hosting for static content",pricenotice:"Actual pricing varies on time needed for the project. These are estimates, my current rate is about 10\u20AC / h.",contact_start:"Hit me up on",contact:"websites@eliaseskelinen.fi",contact_end:"if you are interested or have <i>any</i> questions."},fi:{Services:"Palvelut",title:"Nettisivut hakusessa?",subtitle:"Aloitetaas.",description:"Hanki ammattimaiset ja optimoidut nettisivut j\xE4rkev\xE4\xE4n hintaan ",tiersimple:"Aloitussivu",tierstatic:"Staattinen sivusto",tierdynamic:"Dynaaminen sivusto",static:"staattinen",dynamic:"dynaaminen",pagesone:"muutama sivu",pagestwo:"useampia sivuja",pagesthree:"rajaton m\xE4\xE4r\xE4 sivuja",hostingfree:"ilmainen yll\xE4pito",hostingstatic:"ilmainen yll\xE4pito staattiselle sis\xE4ll\xF6lle",pricenotice:"Todellinen hinta vaihtelee projektiin tarvitun ajan mukaan. N\xE4m\xE4 ovat arvioita, hintani on toistaiseksi noin 10\u20AC / h.",contact_start:"Laita viesti\xE4 osoitteeseen",contact:"verkkosivut@eliaseskelinen.fi",contact_end:"jos olet kiinnostunut tai sinulla on <i>mit\xE4\xE4n</i> kysytt\xE4v\xE4\xE4."}};function Oe(l,e,s){const a=l.slice();return a[4]=e[s],a}function Ue(l){let e,s=$e[l[4]].title+"",a,t,i=l[2][l[4]][0]+"",_,f,u;return{c(){e=v("a"),a=w(s),t=w(" \u2013 "),_=w(i),this.h()},l(n){e=d(n,"A",{href:!0,hreflang:!0,"sveltekit:reload":!0});var c=p(e);a=A(c,s),t=A(c," \u2013 "),_=A(c,i),c.forEach(o),this.h()},h(){m(e,"href",f=l[2][l[4]][1]),m(e,"hreflang",u=l[4]),m(e,"sveltekit:reload","")},m(n,c){N(n,e,c),r(e,a),r(e,t),r(e,_)},p(n,c){c&1&&s!==(s=$e[n[4]].title+"")&&V(a,s),c&1&&i!==(i=n[2][n[4]][0]+"")&&V(_,i),c&1&&f!==(f=n[2][n[4]][1])&&m(e,"href",f),c&1&&u!==(u=n[4])&&m(e,"hreflang",u)},d(n){n&&o(e)}}}function vt(l){let e,s,a,t,i,_,f,u,n,c,b=l[1].Services+"",I,H,T,g,G,D=l[1].title+"",K,P,J,k,B,j,h,$,O=l[1].pricenotice+"",Q,R,M,x=l[1].contact_start+"",W,me,X,Se=l[1].contact+"",ve,de,se,Fe=l[1].contact_end+"",pe,ae,le,ee;document.title=e=l[1].title;let Y=Object.keys(l[2]).filter(l[3]),q=[];for(let E=0;E<Y.length;E+=1)q[E]=Ue(Oe(l,Y,E));k=new mt({props:{t:l[1]}});let Le=!1;return{c(){s=v("meta"),a=S(),t=v("main"),i=v("div"),_=v("p"),f=v("a"),u=w("Elias Eskelinen"),n=w(" / "),c=v("span"),I=w(b),H=S(),T=v("div"),g=v("div"),G=v("h2"),K=w(D),P=S();for(let E=0;E<q.length;E+=1)q[E].c();J=S(),_e(k.$$.fragment),B=S(),j=S(),h=v("p"),$=v("small"),Q=w(O),R=S(),M=v("p"),W=w(x),me=S(),X=v("a"),ve=w(Se),de=S(),se=new Je(!1),pe=S(),ae=S(),le=Ve(),this.h()},l(E){const z=Ke('[data-svelte="svelte-133ud1z"]',document.head);s=d(z,"META",{name:!0,content:!0}),z.forEach(o),a=L(E),t=d(E,"MAIN",{class:!0});var y=p(t);i=d(y,"DIV",{class:!0});var te=p(i);_=d(te,"P",{class:!0});var ie=p(_);f=d(ie,"A",{href:!0});var Ie=p(f);u=A(Ie,"Elias Eskelinen"),Ie.forEach(o),n=A(ie," / "),c=d(ie,"SPAN",{class:!0});var Ne=p(c);I=A(Ne,b),Ne.forEach(o),ie.forEach(o),te.forEach(o),H=L(y),T=d(y,"DIV",{class:!0});var Pe=p(T);g=d(Pe,"DIV",{});var C=p(g);G=d(C,"H2",{});var je=p(G);K=A(je,D),je.forEach(o),P=L(C);for(let ge=0;ge<q.length;ge+=1)q[ge].l(C);J=L(C),fe(k.$$.fragment,C),B=L(C),j=L(C),h=d(C,"P",{class:!0});var De=p(h);$=d(De,"SMALL",{});var qe=p($);Q=A(qe,O),qe.forEach(o),De.forEach(o),R=L(C),M=d(C,"P",{class:!0,style:!0});var Z=p(M);W=A(Z,x),me=L(Z),X=d(Z,"A",{href:!0});var He=p(X);ve=A(He,Se),He.forEach(o),de=L(Z),se=Be(Z,!1),Z.forEach(o),pe=L(C),C.forEach(o),Pe.forEach(o),y.forEach(o),ae=L(E),le=Ve(),this.h()},h(){m(s,"name","description"),m(s,"content",l[1].description),m(f,"href","/"),m(c,"class","capitalize svelte-vu613"),m(_,"class","svelte-vu613"),m(i,"class","topbar svelte-vu613"),m(h,"class","svelte-vu613"),m(X,"href","mailto:"+l[1].contact),se.a=null,m(M,"class","max-w-ch svelte-vu613"),be(M,"min-height","3em"),m(T,"class","center svelte-vu613"),m(t,"class","svelte-vu613")},m(E,z){r(document.head,s),N(E,a,z),N(E,t,z),r(t,i),r(i,_),r(_,f),r(f,u),r(_,n),r(_,c),r(c,I),r(t,H),r(t,T),r(T,g),r(g,G),r(G,K),r(g,P);for(let y=0;y<q.length;y+=1)q[y].m(g,null);r(g,J),ue(k,g,null),r(g,B),r(g,j),r(g,h),r(h,$),r($,Q),r(g,R),r(g,M),r(M,W),r(M,me),r(M,X),r(X,ve),r(M,de),se.m(Fe,M),r(g,pe),N(E,ae,z),N(E,le,z),ee=!0},p(E,[z]){if((!ee||z&2)&&e!==(e=E[1].title)&&(document.title=e),z&5){Y=Object.keys(E[2]).filter(E[3]);let y;for(y=0;y<Y.length;y+=1){const te=Oe(E,Y,y);q[y]?q[y].p(te,z):(q[y]=Ue(te),q[y].c(),q[y].m(g,J))}for(;y<q.length;y+=1)q[y].d(1);q.length=Y.length}},i(E){ee||(U(k.$$.fragment,E),U(Le),ee=!0)},o(E){F(k.$$.fragment,E),F(Le),ee=!1},d(E){o(s),E&&o(a),E&&o(t),Qe(q,E),he(k),E&&o(ae),E&&o(le)}}}function dt(l,e,s){let{selectedLang:a="en"}=e,t=$e[a],i={en:["in English","/services/en"],fi:["Suomeksi","/services/"]};const _=f=>f!==a;return l.$$set=f=>{"selectedLang"in f&&s(0,a=f.selectedLang)},[a,t,i,_]}class gt extends we{constructor(e){super(),Ae(this,e,dt,vt,ke,{selectedLang:0})}}export{gt as C};
