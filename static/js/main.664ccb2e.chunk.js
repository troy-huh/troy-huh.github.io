(this["webpackJsonptroy-huh.github.io"]=this["webpackJsonptroy-huh.github.io"]||[]).push([[0],{14:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n(1),c=n.n(i),r=n(8),s=n.n(r),u=(n(14),n(3)),h=n(4),l=n(2),o=n(6),j=n(5),p=(n(15),n(18),n(19),function(t){Object(o.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={inp:"",startTime:0},a.changeGuideText=a.changeGuideText.bind(Object(l.a)(a)),a.getGuideText=a.getGuideText.bind(Object(l.a)(a)),a.getInpText=a.getInpText.bind(Object(l.a)(a)),a}return Object(h.a)(n,[{key:"changeGuideText",value:function(t){this.setState({inp:t.length<=65?t:""}),1==this.state.inp&&this.setState({startTime:Date.now()});var e=(Date.now()-this.state.startTime)/6e4;this.props.calculateWPM(t,e)}},{key:"getGuideText",value:function(){var t=this,e="nigger".repeat(11);return Object(a.jsxs)("div",{id:"wrapper",children:[e.slice(0,this.state.inp.length).split("").map((function(e,n){return Object(a.jsx)("span",{style:{color:t.state.inp.charAt(n)==e?"green":"red"},id:"wrapItem",children:"".concat(e)})})),e.slice(this.state.inp.length).split("").map((function(t){return Object(a.jsx)("span",{style:{color:"black"},id:"wrapItem",children:"".concat(t)})}))]})}},{key:"getInpText",value:function(){return this.state.inp}},{key:"render",value:function(){var t=this;return Object(a.jsx)("a",{children:Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{type:"text",value:this.getInpText(),className:"question",onChange:function(e){return t.changeGuideText(e.target.value)}}),Object(a.jsx)("label",{for:"nme",children:Object(a.jsx)("span",{children:this.getGuideText()})})]})})}}]),n}(c.a.Component)),b=(n(20),function(t){Object(o.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("h1",{className:"WPM",id:"wrapper",children:[Object(a.jsx)("a",{style:{color:this.props.WPM>150?"green":"red"},id:"left",children:Math.round(this.props.WPM)}),Object(a.jsx)("a",{id:"right",children:" NPM"})]})}}]),n}(c.a.Component)),d=function(t){Object(o.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).calculateWPM=a.calculateWPM.bind(Object(l.a)(a)),a.state={WPM:0},a}return Object(h.a)(n,[{key:"calculateWPM",value:function(t,e){for(var n="nigger".repeat(11),a=t.length/6,i=0;i<t.length;i++)t.charAt(i)!=n.charAt(i)&&(a-=1/6);this.setState({WPM:a/e})}},{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)(b,{WPM:this.state.WPM}),Object(a.jsx)(p,{calculateWPM:function(e,n){return t.calculateWPM(e,n)}})]})}}]),n}(c.a.Component);s.a.render(Object(a.jsx)(d,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.664ccb2e.chunk.js.map