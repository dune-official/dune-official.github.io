(function(){"use strict";var t={2298:function(t,e,n){var o=n(5130),r=n(6768);function i(t,e){const n=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.Wv)(n)}var s=n(1241);const c={},a=(0,s.A)(c,[["render",i]]);var d=a,u=n(1387),l=n(4232);const v={id:"body"},h={id:"title"},f={id:"total"},p={id:"days"},m={id:"hours"},g={id:"minutes"},b={id:"seconds"},w={id:"bots"};function k(t,e,n,o,i,s){const c=(0,r.g2)("total"),a=(0,r.g2)("countdown"),d=(0,r.g2)("been-on-the-site");return(0,r.uX)(),(0,r.CE)("div",v,[(0,r.Lk)("div",h,[(0,r.Lk)("h1",null,(0,l.v_)(this.$store.state.heading),1)]),(0,r.Lk)("div",f,[(0,r.bF)(c,{msec:this.totalSeconds},null,8,["msec"])]),(0,r.Lk)("div",p,[(0,r.bF)(a,{cur:this.days,until:356,title:"days",mode:null},null,8,["cur"])]),(0,r.Lk)("div",m,[(0,r.bF)(a,{cur:this.hours,until:24,title:"hours",mode:null},null,8,["cur"])]),(0,r.Lk)("div",g,[(0,r.bF)(a,{cur:this.minutes,until:60,title:"minutes",mode:null},null,8,["cur"])]),(0,r.Lk)("div",b,[(0,r.bF)(a,{cur:this.seconds,until:60,title:"seconds",mode:null},null,8,["cur"])]),(0,r.Lk)("div",w,[(0,r.bF)(d)])])}const y={key:0,id:"percentage"},S={key:1,id:"percentage"},_={id:"title"};function L(t,e,n,o,i,s){const c=(0,r.g2)("circular-loading-bar");return(0,r.uX)(),(0,r.CE)("div",{id:"countdown",onClick:e[0]||(e[0]=t=>i.showBar=!i.showBar)},[i.showBar?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("div",y,(0,l.v_)(s.percentage)+" % ",1)),i.showBar?((0,r.uX)(),(0,r.CE)("div",S,[(0,r.bF)(c,{percentage:s.percentage},null,8,["percentage"])])):(0,r.Q3)("",!0),(0,r.Lk)("div",_,(0,l.v_)(this.cur)+" "+(0,l.v_)(this.title),1)])}const O=t=>((0,r.Qi)("data-v-650f9107"),t=t(),(0,r.jt)(),t),E={id:"progress"},j=O((()=>(0,r.Lk)("div",{id:"barOverflow"},[(0,r.Lk)("div",{id:"bar"})],-1))),C=[j];function I(t,e,n,o,i,s){return(0,r.uX)(),(0,r.CE)("div",E,C)}const B={props:["percentage"],name:"circularLoadingBar",data(){return{}},computed:{calculatedPercentage(){return`rotate(${45+1.8*this.percentage}deg)`}},methods:{},watch:{}},F=()=>{(0,o.$9)((t=>({"21736dc2":t.calculatedPercentage})))},T=B.setup;B.setup=T?(t,e)=>(F(),T(t,e)):F;var X=B;const A=(0,s.A)(X,[["render",I],["__scopeId","data-v-650f9107"]]);var P=A,M={props:["cur","until","title","mode"],name:"countdown",components:{circularLoadingBar:P},data(){return{showBar:!0}},computed:{percentage(){let t;return t=null===this.cur?0:this.cur,Math.floor(t/this.until*100)}},methods:{},watch:{}};const Q=(0,s.A)(M,[["render",L],["__scopeId","data-v-2a8f582c"]]);var $=Q;const x=t=>((0,r.Qi)("data-v-59951b88"),t=t(),(0,r.jt)(),t),D={id:"countdown"},H={id:"percentage"},W=x((()=>(0,r.Lk)("div",{id:"title"}," seconds ",-1)));function Y(t,e,n,o,i,s){return(0,r.uX)(),(0,r.CE)("div",D,[(0,r.Lk)("div",H,(0,l.v_)(s.tts),1),W])}var q={props:["msec"],name:"total",data(){return{}},computed:{tts(){let t=(this.msec/1e3).toString();if(t.includes(".")){let e=t.split("."),n=e[1].padEnd(3,"0");return e[0]+"."+n}return t}},methods:{},watch:{}};const z=(0,s.A)(q,[["render",Y],["__scopeId","data-v-59951b88"]]);var G=z;const J=t=>((0,r.Qi)("data-v-02d0c728"),t=t(),(0,r.jt)(),t),K={id:"countdown"},N={id:"percentage"},R=J((()=>(0,r.Lk)("div",{id:"title"}," total seconds on this site ",-1)));function U(t,e,n,o,i,s){return(0,r.uX)(),(0,r.CE)("div",K,[(0,r.Lk)("div",N,(0,l.v_)(i.seconds),1),R])}var V={props:[],name:"beenOnTheSite",components:{circularLoadingBar:P},data(){return{seconds:0}},computed:{},methods:{},mounted(){window.addEventListener("beforeunload",(()=>{localStorage.setItem("secondsOnTheSite",this.seconds)}));let t=localStorage.getItem("secondsOnTheSite");this.seconds=t||0;setInterval((()=>{this.seconds++}),1e3)}};const Z=(0,s.A)(V,[["render",U],["__scopeId","data-v-02d0c728"]]);var tt=Z,et={name:"WelcomeScreen",components:{Total:G,countdown:$,beenOnTheSite:tt},data(){return{totalSeconds:0}},computed:{days(){return Math.floor(this.totalSeconds/864e5)},hours(){return this.diff.getHours()-1>0?this.diff.getHours()-1:23},minutes(){return this.diff.getMinutes()},seconds(){return this.diff.getSeconds()},diff(){return new Date(this.totalSeconds)}},mounted(){setInterval((()=>{let t=Date.now();this.totalSeconds=this.$store.state.finalDate-t}),100)}};const nt=(0,s.A)(et,[["render",k],["__scopeId","data-v-0733b9d0"]]);var ot=nt,rt={__name:"notification",setup(t){const e=(0,u.lq)();return(0,r.wB)((()=>e.params.id),((t,e)=>{console.log("Hehe")})),(t,e)=>null}};const it=rt;var st=it;const ct=[{path:"/",name:"welcome",component:ot},{path:"/subscription",component:st},{path:"/subscription/:id",component:st}],at=(0,u.aE)({history:(0,u.Bt)(),routes:ct});var dt=at,ut=n(782),lt=(0,ut.y$)({state(){return{finalDate:17144388e5,heading:"meeting her 💜"}},getters:{},mutations:{},actions:{},modules:{}}),vt=n(8950),ht=n(92),ft=n(2353),pt=n(292);n(1942);vt.Yv.add(ht.C91),vt.Yv.add(ft.X7I);const mt=(0,o.Ef)(d);mt.component("FontAwesomeIcon",pt.gc),mt.use(lt).use(dt).mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var s=1/0;for(u=0;u<t.length;u++){o=t[u][0],r=t[u][1],i=t[u][2];for(var c=!0,a=0;a<o.length;a++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[a])}))?o.splice(a--,1):(c=!1,i<s&&(s=i));if(c){t.splice(u--,1);var d=r();void 0!==d&&(e=d)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[o,r,i]}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,s=o[0],c=o[1],a=o[2],d=0;if(s.some((function(e){return 0!==t[e]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(a)var u=a(n)}for(e&&e(o);d<s.length;d++)i=s[d],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},o=self["webpackChunkStone"]=self["webpackChunkStone"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(2298)}));o=n.O(o)})();
//# sourceMappingURL=app.b5731ea6.js.map