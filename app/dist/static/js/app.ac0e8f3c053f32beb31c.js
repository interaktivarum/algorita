webpackJsonp([1],{"+ud7":function(t,e){},"1iyQ":function(t,e){},"2xsn":function(t,e){},"3Rng":function(t,e){},"6SR+":function(t,e){},"7a/R":function(t,e){},B1By:function(t,e){},CEuu:function(t,e){},"K2+q":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s=n("NYxO");a.a.use(s.a);var r=new s.a.Store({state:{crafts:""},mutations:{setCrafts:function(t,e){t.crafts=e}},getters:{getCraftByRoute:function(t){return function(e){return t.crafts?t.crafts.find(function(t){return t.route===e}):""}}}}),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component"},[e("div",{staticClass:"component-content"},[e("router-link",{attrs:{to:{name:"Landing",params:{}}}},[e("h2",{staticClass:"header"},[this._v("\n    Algorita\n    ")])])],1)])},staticRenderFns:[]};var o=n("VU/8")({name:"PmaHeader",components:{},data:function(){return{}},computed:{},methods:{}},i,!1,function(t){n("yWof")},"data-v-20cb56a6",null).exports,l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component"},[e("div",{staticClass:"component-content"},[this._v("\n\n    Algorita är en del av "),e("a",{staticClass:"contrast",attrs:{href:"https://www.mikoteket.se",target:"_blank"}},[this._v("Mikoteket")]),this._v(" skapad av "),e("a",{staticClass:"contrast",attrs:{href:"http://www.interaktivarum.se",target:"_blank"}},[this._v("Interaktiva rum")])])])}]};var c=n("VU/8")({name:"PmaFooter",components:{},data:function(){return{}},computed:{},methods:{}},l,!1,function(t){n("CEuu")},"data-v-9ee8b4fc",null).exports,m=n("fZjL"),p=n.n(m),u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component"},[e("span",{staticClass:"emoji",domProps:{innerHTML:this._s(this.print)}})])},staticRenderFns:[]};var d=n("VU/8")({name:"Emoji",data:function(){return{}},props:{cp:""},computed:{print:function(){return"&#x"+this.cp.substr(2)+";"}},mounted:function(){}},u,!1,function(t){n("1iyQ")},"data-v-dd797954",null).exports,v={name:"Step",components:{Emoji:d},data:function(){return{}},props:{instruction:"",note:"",example:"",showExample:{type:Boolean,default:!0},showInput:{type:Boolean,default:!0},first:{type:Boolean,default:!1},last:{type:Boolean,default:!1}},computed:{hasSlots:function(){return 0!==p()(this.$slots).length}},mounted:function(){}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"component-content",class:{first:t.first,last:t.last}},[n("div",{staticClass:"grid"},[n("div",{staticClass:"instruction"},[t._v("\n          "+t._s(t.instruction)+"\n        ")]),t._v(" "),t.note?n("div",{staticClass:"note",class:{hidden:!t.note}},[t._v("\n          "+t._s(t.note)+"\n        ")]):t._e()]),t._v(" "),t.hasSlots?n("div",{staticClass:"slot"},[t._t("default")],2):t._e(),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.showExample?n("div",{staticClass:"example",class:{hidden:!t.example}},[t._v("\n        "+t._s(t.example)+"\n      ")]):t._e()]),t._v(" "),t.showInput?n("div",{staticClass:"user"},[n("input",{staticClass:"noBorder",attrs:{placeholder:"Ange värde",pattern:"a*"}})]):t._e()],1)])},staticRenderFns:[]};var h=n("VU/8")(v,f,!1,function(t){n("gpHG")},"data-v-0b48656e",null).exports,g={name:"MappedArray",data:function(){return{}},props:{array:"",key1:"",key2:"",col1:"",col2:{type:String,default:"Tal"}},computed:{arr:function(){for(var t=[],e=0;e<this.array.length;e++)this.key1&&this.key2?t.push({from:this.array[e][this.key1],to:this.array[e][this.key2]}):t.push({from:this.array[e],to:e+1});return t}},mounted:function(){}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"component-content"},t._l(t.arr,function(e,a){return n("div",{staticClass:"pair"},[n("div",{staticClass:"key"},[t._v("\n        "+t._s(e.from)+"\n      ")]),t._v(" "),n("div",{staticClass:"value"},[t._v("\n        "+t._s(e.to)+"\n      ")])])}))])},staticRenderFns:[]};var k=n("VU/8")(g,_,!1,function(t){n("uiU+")},"data-v-a35ac418",null).exports,b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"component-content center-col"},[t._v("\n\n    Med denna algoritm kan du i 7 steg beräkna vilken färg du är, utifrån ditt namn och din ålder.\n\n    "),n("h3",[t._v("Innehåll")]),t._v(" "),n("div",{staticClass:"content"},[n("ul",[n("li",[t._v("\n          Vokaler och konsonanter\n        ")]),t._v(" "),n("li",[t._v("\n          Addition och subtraktion\n        ")]),t._v(" "),n("li",[t._v("\n          Variabler\n        ")])])])])])}]};var C=n("VU/8")({name:"Instructions",components:{},data:function(){return{}},props:{data:""},computed:{},methods:{}},b,!1,function(t){n("bjTP")},"data-v-39eeb808",null).exports,x={name:"Instructions",components:{StepInstructions:h,MappedArray:k},data:function(){return{showExample:!1,letters:["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Z"],color:{name:"",css:"white"}}},props:{data:""},computed:{},methods:{print:function(){window.print()},setColor:function(t){this.color=t}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"component-content center-col"},[n("div",{staticClass:"settings"},[n("label",{staticClass:"labelExample hideInPrint"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.showExample,expression:"showExample"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.showExample)?t._i(t.showExample,null)>-1:t.showExample},on:{change:function(e){var n=t.showExample,a=e.target,s=!!a.checked;if(Array.isArray(n)){var r=t._i(n,null);a.checked?r<0&&(t.showExample=n.concat([null])):r>-1&&(t.showExample=n.slice(0,r).concat(n.slice(r+1)))}else t.showExample=s}}}),t._v("\n        Visa exempel\n      ")]),t._v(" "),n("button",{staticClass:"print hideInPrint",on:{click:function(e){t.print()}}},[t._v("\n        Skriv ut\n      ")])]),t._v(" "),n("step-instructions",{staticClass:"step",attrs:{instruction:"Ange ditt namn och din ålder.",note:"Detta är algoritmens indata.",example:"Algot, 13","show-example":t.showExample,first:!0}}),t._v(" "),n("step-instructions",{staticClass:"step",attrs:{instruction:"Hitta alla konsonanter i ditt namn.",example:"L G T","show-example":t.showExample}}),t._v(" "),n("step-instructions",{staticClass:"step",attrs:{instruction:"Översätt varje bokstav till motsvarande tal.",example:"9 5 16","show-example":t.showExample,note:"Varje bokstav är en variabel som motsvarar ett tal"}},[n("mapped-array",{attrs:{array:t.letters,col1:"Konsonant"}})],1),t._v(" "),n("step-instructions",{staticClass:"step",attrs:{instruction:"Summera alla tal.",example:"9 + 5 + 16 = 30","show-example":t.showExample}}),t._v(" "),n("step-instructions",{staticClass:"step",attrs:{instruction:"Subtrahera din ålder.",example:"30 - 13 = 17","show-example":t.showExample}}),t._v(" "),n("step-instructions",{staticClass:"step",attrs:{instruction:"Summera alla siffror i det nya talet.",example:"1 + 7 = 8","show-example":t.showExample,note:"Detta kan behöva göras flera gånger tills det endast är en siffra kvar."}}),t._v(" "),n("step-instructions",{staticClass:"step",attrs:{instruction:"Börja på Start och gå lika många steg som det tal du har fått fram.",note:"Efter den sista färgen hoppar du tillbaka till den första färgen.",example:"Börja på Start och gå 8 steg. Efter 7 steg hoppar vi tillbaka till den första färgen, och slutar efter 8 steg på färgen röd.","show-example":t.showExample,"show-input":!1}},[n("div",{staticClass:"miniColors"},[t._v("\n        Start:\n        "),t._l(t.data.colors,function(e,a){return n("div",{staticClass:"colorMini pointer",style:{background:e.css,"border-color":e.css},on:{click:function(n){t.setColor(e)}}})})],2)]),t._v(" "),n("step-instructions",{staticClass:"step",attrs:{instruction:"Den färg som du landar på är din färg som har beräknats utifrån ditt namn och din ålder med en algoritm!",example:"Färgen för Algot, 13 är orange!","show-example":t.showExample,"show-input":!1,note:"Detta är algoritmens resultat!",last:!0}},[n("div",{staticClass:"colorMini",style:{background:t.color.css,"border-color":t.color.css}})])],1)])},staticRenderFns:[]};var y=n("VU/8")(x,w,!1,function(t){n("mMwa")},"data-v-65f03396",null).exports,E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"component-content"},[n("hr"),t._v(" "),t.active?t._e():n("a",{on:{click:function(e){t.toggle()}}},[t._v("Visa algoritmens steg")]),t._v(" "),t.active?n("a",{on:{click:function(e){t.toggle()}}},[t._v("Dölj steg")]):t._e(),t._v(" "),n("br"),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.active?n("div",{staticClass:"steps"},[t._t("default")],2):t._e()]),t._v(" "),t.active?n("a",{on:{click:function(e){t.toggle()}}},[t._v("Dölj steg")]):t._e()],1)])},staticRenderFns:[]};var S=n("VU/8")({name:"Steps",components:{},data:function(){return{step:0,active:!1}},props:{},computed:{},methods:{toggle:function(){this.active=!this.active},setStep:function(t){this.step=t},colorByStep:function(){for(var t=this.$el.getElementsByClassName("steppable"),e=0;e<t.length;e++)e>this.step&&t[e].classList.add("inactive")}},mounted:function(){}},E,!1,function(t){n("WIUd")},"data-v-663103e1",null).exports,A={name:"Step",components:{Emoji:d},data:function(){return{}},props:{description:"",active:"",enabled:{type:Boolean,default:!0},emoji:"",dir:{type:String,default:"down"},first:{type:Boolean,default:!1},last:{type:Boolean,default:!1}},computed:{cp:function(){return this.emoji?this.emoji:"down"==this.dir?"U+1F447":"up"==this.dir?"U+1F446":void 0}},mounted:function(){}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[t.enabled?n("div",{staticClass:"component-content",class:{active:t.active,first:t.first,last:t.last}},[n("div",{staticClass:"description"},[t._v("\n      "+t._s(t.description)+"\n    ")]),t._v(" "),n("div",{staticClass:"output"},[t._t("default")],2)]):t._e()])},staticRenderFns:[]};var F=n("VU/8")(A,I,!1,function(t){n("6SR+")},"data-v-1920580c",null).exports,U={name:"NameToColor",components:{Steps:S,Step:F,Emoji:d},data:function(){return{step:0,name:"",age:"",colors:[{name:"röd",css:"red"},{name:"orange",css:"orange"},{name:"gul",css:"yellow"},{name:"grön",css:"green"},{name:"blå",css:"blue"},{name:"lila",css:"purple"},{name:"rosa",css:"hotpink"}],alphabet:"BCDFGHJKLMNPQRSTVWXZ"}},computed:{okInput:function(){return this.name.length>0&&this.age>0},uc:function(){return this.name.toUpperCase()},split:function(){return this.uc.split("")},splitConsonants:function(){for(var t=[],e=0;e<this.split.length;e++)-1!=this.alphabet.indexOf(this.split[e])&&t.push(this.split[e]);return t},splitNumbers:function(){for(var t=this.splitConsonants.slice(),e=0;e<this.splitConsonants.length;e++)t[e]=this.alphabet.indexOf(this.splitConsonants[e])+1;return t},sumName:function(){for(var t=0,e=0;e<this.splitNumbers.length;e++)t+=this.splitNumbers[e];return t},final:function(){return this.sumName-this.age},sumDigits:function(){for(var t=Math.abs(this.final);t>9;){var e=(t+"").split("");t=0;for(var n=0;n<e.length;n++)t+=parseInt(e[n])}return t},color:function(){return this.colors[Math.abs(this.sumDigits-1)%this.colors.length]}},methods:{nextStep:function(){step++}}},V={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"component-content center-col"},[n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{placeholder:"Ditt namn"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),n("br"),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.age,expression:"age"}],attrs:{type:"number",min:"1",placeholder:"Din ålder"},domProps:{value:t.age},on:{input:function(e){e.target.composing||(t.age=e.target.value)}}})]),t._v(" "),t.okInput?n("div",[n("div",{staticClass:"color",style:{background:t.color.css}},[n("span",{staticClass:"colorFinal"},[t._v("Din färg är "+t._s(t.color.name)+"!")])]),t._v(" "),n("steps",{staticClass:"steps"},[n("step",{attrs:{description:"Ditt namn och din ålder",first:!0}},[n("span",{staticClass:"camel"},[t._v(t._s(t.name))]),t._v(", "+t._s(t.age)+"\n      ")]),t._v(" "),n("step",{staticClass:"steppable",attrs:{description:"Ditt namn innehåller följande konsonanter"}},t._l(t.splitConsonants,function(e,a){return n("span",[t._v("\n          "+t._s(e)+"\n        ")])})),t._v(" "),n("step",{staticClass:"steppable",attrs:{description:"Översätt bokstäverna till siffor och tal"}},t._l(t.splitNumbers,function(e,a){return n("span",[t._v("\n          "+t._s(e)+"\n        ")])})),t._v(" "),n("step",{staticClass:"steppable",attrs:{description:"Summera alla tal"}},[t._l(t.splitNumbers,function(e,a){return n("span",[t._v("\n          "+t._s(e)+"\n          "),a<t.splitNumbers.length-1?n("span",[t._v("+")]):t._e()])}),t._v("\n        = "+t._s(t.sumName)+"\n      ")],2),t._v(" "),n("step",{staticClass:"steppable",attrs:{description:"Subtrahera din ålder"}},[t._v("\n        "+t._s(t.sumName)+" - "+t._s(t.age)+" = "+t._s(t.final)+"\n      ")]),t._v(" "),n("step",{staticClass:"steppable",attrs:{description:"Summera alla siffror i talet "+t.final}},[t._v("\n        "+t._s(t.sumDigits)+"\n      ")]),t._v(" "),n("step",{staticClass:"steppable",attrs:{description:"Börja på Start och gå "+t.sumDigits+" steg"}},[n("div",{staticClass:"miniColors"},[t._v("\n          Start:\n          "),t._l(t.colors,function(t){return n("div",{staticClass:"colorMini",style:{background:t.css}})})],2)]),t._v(" "),n("step",{staticClass:"steppable",attrs:{description:"Du landar på färgen "+t.color.name+"!",last:!0}},[n("div",{staticClass:"colorMini",style:{background:t.color.css}})])],1)],1):t._e(),t._v(" "),t.okInput?t._e():n("div",{staticClass:"instructions"},[n("emoji",{attrs:{cp:"U+1F446"}}),t._v("\n      Fyll i ditt namn och din ålder\n  ")],1)])])},staticRenderFns:[]};var R={name:"NameToColor",components:{Description:C,Instructions:y,Algorithm:n("VU/8")(U,V,!1,function(t){n("2xsn")},"data-v-3b8e83a3",null).exports},readable:"Vilken färg är du?",description:"Ange ditt namn och din ålder och få reda på vilken färg du är!",data:function(){return{colors:[{name:"röd",css:"red"},{name:"orange",css:"orange"},{name:"gul",css:"yellow"},{name:"grön",css:"green"},{name:"blå",css:"blue"},{name:"lila",css:"purple"},{name:"rosa",css:"hotpink"}]}},computed:{},methods:{}},j={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"component"},[this._t("default")],2)},staticRenderFns:[]};var P=n("VU/8")(R,j,!1,function(t){n("B1By")},null,null).exports,D={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component"},[e("div",{staticClass:"component-content center-col"},[this._v("\n\n    I denna övning anger du ditt namn och får olika hälsningar tillbaka beroende på tiden på dygnet. Algoritmen består bland annat av att titta på vad klockan är, samt att avgöra vilket intervall detta klockslag tillhör, för att därefter bestämma vilken hälsningsfras som ska användas. Ungefär som i verkliga livet!\n\n    "),e("h3",[this._v("Innehåll")]),this._v(" "),e("div",{staticClass:"content"},[e("ul",[e("li",[this._v("\n          Klockan\n        ")]),this._v(" "),e("li",[this._v("\n          Intervall\n        ")])])])])])}]};var $={name:"Instructions",components:{StepInstructions:h,MappedArray:k},data:function(){return{showExample:!1,letters:["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Z"],color:{name:"",css:"white"}}},props:{data:""},computed:{},methods:{print:function(){window.print()},setColor:function(t){this.color=t}}},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"component-content center-col"},[n("div",{staticClass:"settings"},[n("label",{staticClass:"labelExample hideInPrint"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.showExample,expression:"showExample"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.showExample)?t._i(t.showExample,null)>-1:t.showExample},on:{change:function(e){var n=t.showExample,a=e.target,s=!!a.checked;if(Array.isArray(n)){var r=t._i(n,null);a.checked?r<0&&(t.showExample=n.concat([null])):r>-1&&(t.showExample=n.slice(0,r).concat(n.slice(r+1)))}else t.showExample=s}}}),t._v("\n        Visa exempel\n      ")]),t._v(" "),n("button",{staticClass:"print hideInPrint",on:{click:function(e){t.print()}}},[t._v("\n        Skriv ut\n      ")])]),t._v(" "),n("step-instructions",{staticClass:"step",attrs:{instruction:"Ange ditt namn.",note:"Detta är indata till algoritmen.",example:"Algot","show-example":t.showExample,first:!0}}),t._v(" "),n("step-instructions",{staticClass:"step",attrs:{instruction:"Kolla vad klockan är just nu.",note:"Detta är också indata till algoritmen.",example:"13:04","show-example":t.showExample}}),t._v(" "),n("step-instructions",{staticClass:"step",attrs:{instruction:"Hitta det intervall som klockslaget tillhör samt motsvarande hälsningsfras.",note:"Klockslagen anger den tid man börjar använda hälsningsfrasen.",example:"13:04 ligger i intervallet 10:00-14:00, och hälsningsfrasen blir Hej","show-example":t.showExample}},[n("mapped-array",{attrs:{array:t.data.greetings,key2:"greeting",key1:"fromString"}})],1),t._v(" "),n("step-instructions",{staticClass:"step",attrs:{instruction:"Sätt ihop hälsningsfrasen med ditt namn.",example:"Hej Algot!","show-example":t.showExample,note:"Detta är algoritmens resultat!",last:!0}})],1)])},staticRenderFns:[]};var T={name:"NameToColor",components:{Steps:S,Step:F,Emoji:d,MappedArray:k},data:function(){return{name:"",date:""}},props:{data:""},computed:{okInput:function(){return this.name.length},hour:function(){return this.date.getHours()%24},before:function(){var t=this,e=this.data.greetings.filter(function(e){return e.from<=t.hour});return e[e.length-1]},after:function(){var t=this,e=this.data.greetings.filter(function(e){return e.from<=t.hour});return this.data.greetings[e.length%this.data.greetings.length]},greeting:function(){return this.before.greeting}},methods:{updateTime:function(){var t=this;setInterval(function(){t.date=new Date},1e3)}},mounted:function(){this.updateTime()}},B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"component-content center-col"},[n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{placeholder:"Ditt namn"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),t.okInput?t._e():n("div",{staticClass:"instructions"},[n("emoji",{attrs:{cp:"U+1F446"}}),t._v("\n        Fyll i ditt namn\n    ")],1),t._v(" "),t.okInput?n("div",[n("h1",[t._v("\n        "+t._s(t.greeting)+" "),n("span",{staticClass:"camel"},[t._v(t._s(t.name)+"!")])]),t._v(" "),n("steps",{staticClass:"steps"},[n("step",{attrs:{description:"Ditt namn",first:!0}},[n("span",{staticClass:"camel"},[t._v(t._s(t.name))])]),t._v(" "),n("step",{attrs:{description:"Klockan är just nu"}},[t._v("\n          "+t._s(t.date.toLocaleTimeString())+"\n        ")]),t._v(" "),n("step",{attrs:{description:"Översätt klockslaget till motsvarande hälsning"}},[n("mapped-array",{attrs:{array:t.data.greetings,key2:"greeting",key1:"fromString"}})],1),t._v(" "),n("step",{attrs:{description:"Klockslaget "+t.date.toLocaleTimeString()+" ligger i intervallet "+t.before.fromString+"-"+t.after.fromString+", och hälsningen blir "+t.before.greeting,last:!0}},[t._v("\n          "+t._s(t.before.greeting)+" "),n("span",{staticClass:"camel"},[t._v(t._s(t.name))]),t._v("!\n        ")])],1)],1):t._e()])])},staticRenderFns:[]};var G={name:"Greeting",components:{Description:n("VU/8")({name:"Instructions",components:{},data:function(){return{}},props:{data:""},computed:{},methods:{}},D,!1,function(t){n("QQ4k")},"data-v-63f98ac4",null).exports,Instructions:n("VU/8")($,N,!1,function(t){n("+ud7")},"data-v-2e88cb2e",null).exports,Algorithm:n("VU/8")(T,B,!1,function(t){n("TLOf")},"data-v-18f96012",null).exports},readable:"Godmorgon, godnatt!",description:"Ange ditt namn och få olika hälsningar beroende på klockslaget.",data:function(){return{greetings:[{greeting:"Zzzz",from:0,fromString:"00:00"},{greeting:"Godmorgon",from:6,fromString:"06:00"},{greeting:"Hej",from:10,fromString:"10:00"},{greeting:"God eftermiddag",from:14,fromString:"14:00"},{greeting:"Godkväll",from:18,fromString:"18:00"},{greeting:"Godnatt",from:21,fromString:"21:00"}]}},computed:{},methods:{}},M={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"component"},[this._t("default")],2)},staticRenderFns:[]};var L=n("VU/8")(G,M,!1,function(t){n("K2+q")},null,null).exports,H={name:"CraftsRoutes",components:{NameToColor:P},routes:[{route:"vilken-farg-ar-du",component:P},{route:"godmorgon-godnatt",component:L}]},K=n("VU/8")(H,null,!1,null,null,null).exports,Q={name:"App",components:{PmaHeader:o,PmaFooter:c},data:function(){return{}},methods:{},mounted:function(){r.commit("setCrafts",K.routes)}},O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("pma-header",{staticClass:"hideInPrint",attrs:{id:"headerview"}}),this._v(" "),e("router-view",{attrs:{id:"routerview"}}),this._v(" "),e("pma-footer",{staticClass:"hideInPrint",attrs:{id:"footerview"}})],1)},staticRenderFns:[]};var W=n("VU/8")(Q,O,!1,function(t){n("SnxQ")},null,null).exports,Z=n("/ocq"),z={name:"Crafts",data:function(){return{}},computed:{crafts:function(){return r.state.crafts}}},J={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"component-content center-col"},t._l(t.crafts,function(e){return n("div",{staticClass:"craft"},[n("router-link",{attrs:{to:{name:"Craft",params:{craft:e.route}}}},[t._v("\n        "+t._s(e.component.readable)+"\n      ")]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"description"},[t._v("\n        "+t._s(e.component.description)+"\n      ")])],1)}))])},staticRenderFns:[]};var Y=n("VU/8")(z,J,!1,function(t){n("3Rng")},"data-v-edbdc406",null).exports,q={name:"Landing",components:{Emoji:d,CraftsList:Y},data:function(){return{Greeting:L}},computed:{crafts:function(){return r.state.crafts}}},X={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"component-content center-col"},[n("h1",[t._v("\n      Välkommen till Algorita!\n    ")]),t._v(" "),n("iframe",{staticStyle:{border:"none",overflow:"hidden"},attrs:{src:"https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Falgorita.se%2F&width=96&layout=button&action=like&size=small&show_faces=false&share=true&height=65",width:"112",height:"30",scrolling:"no",frameborder:"0",allowTransparency:"true",allow:"encrypted-media"}}),t._v(" "),n("h3",[t._v("Rita och pyssla med algoritmer")]),t._v("\n\n    Algorita är en webbplats som lär ut om algoritmer genom pyssel och lek.\n\n    "),n("h3",[t._v("Vad är en algoritm?")]),t._v(" "),n("p",[t._v("\n      En algoritm är en uppsättning instruktioner som ska utföras i en särskild ordning. Ungefär som ett recept, när du lagar mat. I själva verket kan algoritmer användas för att beskriva en stor del av vår vardag. "),n("router-link",{attrs:{to:{name:"Algorithms",params:{}}}},[t._v("Läs mer om algoritmer")])],1),t._v(" "),n("h4",[t._v("Exempel: "+t._s(t.Greeting.readable))]),t._v(" "),n("p",[t._v("\n      I "),n("router-link",{attrs:{to:{name:"Craft",params:{craft:"godmorgon-godnatt"}}}},[t._v(t._s(t.Greeting.readable))]),t._v(" anger du ditt namn och får olika hälsningar tillbaka beroende på tiden på dygnet. Här består algoritmen bland annat av att titta på vad klockan är samt att avgöra i vilket intervall klockslaget befinner sig, för att därefter bestämma vilken hälsningsfras som ska användas. Ungefär som i verkliga livet!\n    ")],1),t._v(" "),n(t.Greeting.components.Algorithm,{tag:"component",staticClass:"example",attrs:{data:t.Greeting.data()}}),t._v(" "),n("h3",[t._v("Pyssel och övningar")]),t._v(" "),n("crafts-list")],1)])},staticRenderFns:[]};var tt=n("VU/8")(q,X,!1,function(t){n("b/M8")},"data-v-32ae8484",null).exports,et={name:"Landing",components:{CraftsList:Y},data:function(){return{Greeting:L}},computed:{crafts:function(){return r.state.crafts}}},nt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"component-content center-col"},[n("h1",[t._v("Vad är en algoritm?")]),t._v(" "),n("p",[t._v("\n      En algoritm är en uppsättning instruktioner som ska utföras i en särskild ordning. Ungefär som ett recept, när du lagar mat. I själva verket kan algoritmer användas för att beskriva en stor del av vår vardag.\n    ")]),t._v(" "),n("h3",[t._v("Var finns algoritmerna?")]),t._v(" "),n("p",[t._v("\n      Alla program i våra telefoner och datorer styrs av algoritmer. De ser till att telefonens väckarklocka ringer på morgonen, lägger på filter på dina Instagram- eller Snapchatbilder, rekommenderar nya YouTubers att följa, visar personligt anpassad reklam på olika webbplatser, samt håller reda på dina koordinater via GPS.\n    ")]),t._v(" "),n("p",[t._v("\n      Algoritmerna i vår digitala teknik är programmerade av människor med programkod, men det går även utmärkt att beskriva algoritmer med papper och penna eller utföra instruktionerna som lekfulla övningar. Precis som pyssel!\n    ")]),t._v(" "),n("h3",[t._v("Exempel: "+t._s(t.Greeting.readable))]),t._v(" "),n("p",[t._v("\n      I "),n("router-link",{attrs:{to:{name:"Craft",params:{craft:"godmorgon-godnatt"}}}},[t._v(t._s(t.Greeting.readable))]),t._v(" anger du ditt namn och får olika hälsningar tillbaka beroende på tiden på dygnet. Här består algoritmen bland annat av att titta på vad klockan är samt att avgöra i vilket intervall klockslaget befinner sig, för att därefter bestämma vilken hälsningsfras som ska användas. Ungefär som i verkliga livet!\n    ")],1),t._v(" "),n(t.Greeting.components.Algorithm,{tag:"component",staticClass:"example",attrs:{data:t.Greeting.data()}}),t._v(" "),n("br"),t._v(" "),n("h3",[t._v("Viktiga begrepp")]),t._v(" "),t._m(0)],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n      Algoritmernas instruktioner utförs utifrån givna "),n("strong",[t._v("starttillstånd")]),t._v(". Dessa kan vara "),n("strong",[t._v("indata")]),t._v(" av användaren (i exemplet ovan: användarens namn) eller värden som bestäms automatiskt (i exemplet ovan: nuvarande klockslag). Olika "),n("strong",[t._v("villkor")]),t._v(" avgör vilken väg algoritmen ska ta (i exemplet ovan: vilket intervall klockslaget tillhör) och vad det slutgilta "),n("strong",[t._v("resultatet")]),t._v(" eller "),n("strong",[t._v("utdatan")]),t._v(" blir (i exemplet ovan: en fullständig hälsningsfras).\n    ")])}]};var at=n("VU/8")(et,nt,!1,function(t){n("OMcS")},"data-v-2548bae7",null).exports,st={name:"Crafts",components:{CraftsList:Y},data:function(){return{}},computed:{crafts:function(){return r.state.crafts}}},rt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"component-content center-col"},[e("h3",[this._v("\n      Pyssel och övningar\n    ")]),this._v(" "),e("crafts-list")],1)])},staticRenderFns:[]};var it=n("VU/8")(st,rt,!1,function(t){n("bHsw")},"data-v-4705469a",null).exports,ot={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"component-content"},[n("div",{staticClass:"tabs hideInPrint"},t._l(t.tabs,function(e,a){return n("div",{staticClass:"tab",class:{activeTab:a==t.tabActive},on:{click:function(e){t.setActiveTab(a)}}},[t._v("\n        "+t._s(e.data.attrs.name)+"\n      ")])})),t._v(" "),n("hr"),t._v(" "),t._t("default")],2)])},staticRenderFns:[]};var lt={name:"Craft",components:{Tabs:n("VU/8")({name:"Tabs",components:{},data:function(){return{tabs:"",tabActive:0}},props:{},computed:{},methods:{updateActive:function(){for(var t=0;t<this.tabs.length;t++)t==this.tabActive?this.tabs[t].elm.classList.add("activePage"):this.tabs[t].elm.classList.remove("activePage")},setActiveTab:function(t){this.tabActive=t,this.updateActive()}},mounted:function(){this.tabs=this.$slots.default.filter(function(t){return t.tag});for(var t=0;t<this.tabs.length;t++)this.tabs[t].elm.classList.add("tabPage");this.updateActive()}},ot,!1,function(t){n("YB/h")},"data-v-394c84e0",null).exports,Emoji:d},data:function(){return{}},computed:{routes:function(){return r.state.craftRoutes},crafts:function(){return r.state.crafts},route:function(){return this.$route.params.craft},craftName:function(){return this.routes[this.route]},craft:function(){return r.getters.getCraftByRoute(this.route)}},methods:{print:function(){window.print()}}},ct={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[t.craft?n("div",{staticClass:"component-content center-col"},[n("div",{staticClass:"back hideInPrint"},[n("emoji",{attrs:{cp:"U+1F448"}}),t._v(" "),n("router-link",{attrs:{to:{name:"Crafts",params:{}}}},[t._v("\n        Alla pyssel och övningar\n      ")])],1),t._v(" "),n("div",{staticClass:"header"},[n("h1",[t._v("\n        "+t._s(t.craft.component.readable)+"\n      ")]),t._v(" "),n("div",{staticClass:"showInPrint"},[t._v("\n        Ett algoritmpyssel från Algorita.se\n      ")])]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.craft.component.description)+"\n    ")]),t._v(" "),n(t.craft.component,{tag:"component"},[n("tabs",[n("div",{attrs:{name:"Beskrivning"}},[n(t.craft.component.components.Description,{tag:"component"})],1),t._v(" "),n("div",{attrs:{name:"Pyssla"}},[n(t.craft.component.components.Instructions,{tag:"component",attrs:{data:t.craft.component.data()}})],1),t._v(" "),n("div",{attrs:{name:"Kör"}},[n(t.craft.component.components.Algorithm,{tag:"component",attrs:{data:t.craft.component.data()}})],1)])],1)],1):t._e()])},staticRenderFns:[]};var mt=n("VU/8")(lt,ct,!1,function(t){n("7a/R")},"data-v-39e63652",null).exports;a.a.use(Z.a);var pt=new Z.a({mode:"history",routes:[{path:"/",name:"Landing",component:tt},{path:"/algoritmer",name:"Algorithms",component:at},{path:"/pyssel",name:"Crafts",component:it},{path:"/pyssel/:craft",name:"Craft",component:mt},{path:"/farg",name:"NameToColor",component:P}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:pt,components:{App:W},template:"<App/>"})},OMcS:function(t,e){},QQ4k:function(t,e){},SnxQ:function(t,e){},TLOf:function(t,e){},WIUd:function(t,e){},"YB/h":function(t,e){},"b/M8":function(t,e){},bHsw:function(t,e){},bjTP:function(t,e){},gpHG:function(t,e){},mMwa:function(t,e){},"uiU+":function(t,e){},yWof:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ac0e8f3c053f32beb31c.js.map