(this["webpackJsonptroy-huh.github.io"]=this["webpackJsonptroy-huh.github.io"]||[]).push([[0],{14:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n(1),a=n.n(s),r=n(8),c=n.n(r),u=(n(14),n(3)),o=n(4),h=n(2),d=n(6),l=n(5),p=(n(15),n(18),n(19),function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var i;Object(u.a)(this,n);var s=["nigger","kaleb","max","arveen","joon","brian"];return(i=e.call(this,t)).state={possibleGuideWords:s,possibleEasterEggTriggers:s.map((function(t){return t.slice(0,t.length-1)})),inp:"",startTime:0,guideWord:"nigger"},i.changeGuideText=i.changeGuideText.bind(Object(h.a)(i)),i.getGuideText=i.getGuideText.bind(Object(h.a)(i)),i.getInpText=i.getInpText.bind(Object(h.a)(i)),i.escEvent=i.escEvent.bind(Object(h.a)(i)),i}return Object(o.a)(n,[{key:"escEvent",value:function(t){27===t.keyCode&&this.setState({inp:""}),this.props.calculateWPM(this.state.guideWord,this.state.inp,1)}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.escEvent,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.escEvent,!1)}},{key:"changeGuideText",value:function(t){this.setState({inp:t.length<66-66%this.state.guideWord.length?t:""}),0!=this.state.inp.length&&1!=this.state.inp.length||this.setState({startTime:Date.now(),easterEgg:""}),this.state.possibleEasterEggTriggers.includes(this.state.inp)&&this.setState({guideWord:this.state.possibleGuideWords[this.state.possibleEasterEggTriggers.indexOf(this.state.inp)]});var e=(Date.now()-this.state.startTime)/6e4;this.props.calculateWPM(this.state.guideWord,this.state.inp,e)}},{key:"getGuideText",value:function(){var t=this,e=this.state.guideWord.repeat(Math.round(66/this.state.guideWord.length));return Object(i.jsxs)("div",{id:"wrapper",children:[e.slice(0,this.state.inp.length).split("").map((function(e,n){return Object(i.jsx)("span",{style:{color:t.state.inp.charAt(n)==e?"green":"red"},id:"wrapItem",children:"".concat(e)})})),e.slice(this.state.inp.length).split("").map((function(t){return Object(i.jsx)("span",{style:{color:"black"},id:"wrapItem",children:"".concat(t)})}))]})}},{key:"getInpText",value:function(){return this.state.inp}},{key:"render",value:function(){var t=this;return Object(i.jsx)("a",{children:Object(i.jsxs)("form",{children:[Object(i.jsx)("input",{type:"text",value:this.getInpText(),className:"question",onChange:function(e){return t.changeGuideText(e.target.value)}}),Object(i.jsx)("label",{for:"nme",children:Object(i.jsx)("span",{children:this.getGuideText()})})]})})}}]),n}(a.a.Component)),g=(n(20),function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("h1",{className:"WPM",id:"wrapper",children:[Object(i.jsx)("a",{style:{color:this.props.WPM>150?"green":"red"},id:"left",children:Math.round(this.props.WPM)}),Object(i.jsxs)("a",{id:"right",children:[" ","".concat(this.props.guideWord.charAt(0).toUpperCase(),"PM")]})]})}}]),n}(a.a.Component)),b=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var i;return Object(u.a)(this,n),(i=e.call(this,t)).calculateWPM=i.calculateWPM.bind(Object(h.a)(i)),i.state={WPM:0,guideWord:""},i}return Object(o.a)(n,[{key:"calculateWPM",value:function(t,e,n){this.setState({guideWord:t});for(var i=this.state.guideWord.length,s=this.state.guideWord.repeat(13),a=e.length/i,r=0;r<e.length;r++)e.charAt(r)!=s.charAt(r)&&(a-=1/i);this.setState({WPM:a/n})}},{key:"render",value:function(){var t=this;return Object(i.jsxs)("div",{children:[Object(i.jsx)(g,{WPM:this.state.WPM,guideWord:this.state.guideWord}),Object(i.jsx)(p,{calculateWPM:function(e,n,i){return t.calculateWPM(e,n,i)}})]})}}]),n}(a.a.Component);c.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.75d93be6.chunk.js.map