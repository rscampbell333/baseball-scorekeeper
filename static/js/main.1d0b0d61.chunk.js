(window["webpackJsonpbaseball-scorekeeper"]=window["webpackJsonpbaseball-scorekeeper"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){},,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABH0lEQVRoge2ZPQ7CMAxGP5A4DT0OiAHu0ZGO3BlEWeolSqo2/omD/CQGGOzvJWrrFCAIgqAHzj33nAB8ADykCm7gCuAN4MUtNAGYl4+VBIWnvtUSQ1JoXr7f+BmL3Ao9h9qCl0xBrZ1IV5563bmFLSTUwhOaEurhCQ0Js/CEpIR5eEJColl4giPRPDxRI+EmPLFHwl14YouE2/DEmoT78ERpjrGep1jkdsL9yqfkdkJt5Y/SBQF8C78fAJwU+omSu2AtRnERur6I126VloeiKrbc591K7HlIuZOoecK6keCMB80lJGabZhKSg5m5hMZUaSahORKrS1jM82oSlocRcYm/eLk7Qn/lU9KdeHILjrA/SZEEOzzR9V9MQRAEevwAP81TZMDoVoUAAAAASUVORK5CYII="},function(e,t,a){e.exports=a.p+"static/media/icons8-plus.23acaf4b.svg"},,function(e,t,a){e.exports=a(38)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),o=a.n(s),c=a(1),l=(a(21),a(6)),i=a.n(l),u=a(8),m=a(12),p=a(2),d=a(4),h=a(3),f=a(5);a(23);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var g=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this))).componentDidUpdate=function(e,t){t.editable&&!a.state.editable&&a.props.onChange&&(2===a.props.onChange.length?a.props.onChange(a.state.textValue,a.props.id):a.props.onChange(a.state.textValue))},a.onChange=function(e){var t=e.target.value;a.setState({textValue:t})},a.toggleEditable=function(e){a.setState(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach(function(t){Object(m.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{editable:!e.editable})})},a.onEnter=function(e){13===e.keyCode&&a.toggleEditable(e)},a.render=function(){var e;return e=a.state.editable?r.a.createElement("input",{type:"text",name:"result",onBlur:a.toggleEditable,value:a.state.textValue,onChange:a.onChange,onSubmit:a.toggleEditable,onKeyUp:a.onEnter,autoFocus:!0}):r.a.createElement("div",{className:"notEditable ".concat(""===a.state.textValue?a.props.noValueClassName:"")},a.state.textValue),r.a.createElement("div",{className:"editableText",onClick:a.toggleEditable},r.a.createElement("div",{className:"stretch"},e))},a.state={editable:!1,textValue:e.value?e.value:""},a}return Object(f.a)(t,e),t}(n.PureComponent);g.defaultProps={noValueClassName:"noValue"};var v=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={value:a.props.value?a.props.value:a.props.options[0]},a.handleChange=function(e){a.setState({value:e.target.value}),a.props.onChange&&a.props.onChange(e.target.value)},a.render=function(){return r.a.createElement("div",{className:"select"},r.a.createElement("select",{className:a.props.className,value:a.state.value,onChange:a.handleChange},a.props.options.map(function(e,t){return r.a.createElement("option",{value:e,key:t.toString()},e)})))},a}return Object(f.a)(t,e),t}(n.Component),y=a(7),E=(a(24),function(e){function t(e){var a;if(Object(p.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).componentDidUpdate=function(){if(a.props.onChange){var e=t.months.findIndex(function(e){return e.name===a.state.month}),n=new Date(a.state.year,e,a.state.day);a.props.onChange(n.toISOString())}},a.render=function(){return r.a.createElement("div",{className:"date-picker"},r.a.createElement(v,{className:"date-dropdown",options:t.months.map(function(e){return e.name}),onChange:function(e){return a.setState({month:e})},value:a.state.month}),r.a.createElement(v,{className:"date-dropdown",options:a.state&&a.state.month?Object(y.a)(Array(t.months.find(function(e){return e.name===a.state.month}).days).keys()).map(function(e,t){return t+1}):Object(y.a)(Array(31).keys()).map(function(e,t){return t+1}),onChange:function(e){return a.setState({day:e})},value:a.state.day}),r.a.createElement(v,{className:"date-dropdown year",options:Object(y.a)(Array(30).keys()).map(function(e,t){return t+2019}),onChange:function(e){return a.setState({year:e})},value:a.state.year}))},e.date){var n=new Date(e.date);a.state={month:t.months[n.getMonth()].name,day:n.getDate(),year:n.getFullYear()}}else a.state={month:"Jan",day:1,year:2019};return a}return Object(f.a)(t,e),t}(n.Component));E.months=[{name:"Jan",days:31},{name:"Feb",days:29},{name:"Mar",days:31},{name:"Apr",days:30},{name:"May",days:31},{name:"Jun",days:30},{name:"Jul",days:31},{name:"Aug",days:31},{name:"Sep",days:30},{name:"Oct",days:31},{name:"Nov",days:30},{name:"Dec",days:31}];a(25);var O=function(e){var t=e.onSave,a=e.onReload;return r.a.createElement("div",{className:"controls"},r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:t},"Save"),r.a.createElement("button",{onClick:a},"Load")))},j=function(e){var t=e.labels;return r.a.createElement("div",{className:"table-header table-row"},t.map(function(e,t){return r.a.createElement("div",{key:t.toString(),className:"table-column"},e)}))},C=a(13),k=a.n(C),S=(a(26),function(){return r.a.createElement("div",{className:"skeleton-wrapper"},r.a.createElement("div",{className:"skeleton"}))}),N=function(e){var t=e.id,a=e.loading,n=e.columns,s=e.onSelect,o=e.onDelete;return r.a.createElement("div",{className:"table-row",onClick:function(){s&&s(t)}},!a&&n.map(function(e,t){return r.a.createElement("div",{key:t.toString(),className:"table-column"},e)}),!a&&o&&r.a.createElement("img",{className:"delete-icon",src:k.a,onClick:function(e){e.stopPropagation(),o(t)},alt:"delete"}),a&&Array.from({length:2},function(e,t){return r.a.createElement(S,{key:t.toString()})}))},w=(a(27),function(e){var t=e.headers,a=e.rows,n=e.onSelect,s=e.onDelete,o=e.loading;return r.a.createElement("div",{className:"table"},r.a.createElement(j,{labels:t}),r.a.createElement("div",{className:"data"},!o&&a.map(function(e){return r.a.createElement(N,{id:e.id,key:e.id,columns:e.data,onSelect:n,onDelete:s})}),o&&Array.from({length:3},function(e,t){return r.a.createElement(N,{key:t.toString(),loading:!0})})))}),x=(a(28),function(e){var t=e.title,a=e.text,n=e.onSubmit,o=e.onCancel,c=e.submitLabel,l=e.cancelLabel,i=e.error;return Object(s.createPortal)(r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-box ".concat(i?"error":"")},r.a.createElement("div",{className:"title"},t),r.a.createElement("div",{className:"text"},a),r.a.createElement("div",{className:"buttons"},o&&r.a.createElement("button",{className:"cancel-button",onClick:o},l||"Cancel"),r.a.createElement("button",{className:"submit-button",onClick:n},c||"Submit")))),document.body)}),A=(a(29),a(14)),P=a.n(A),U=function(e){var t=e.initMetadata,a=e.onChange,s=e.addInning,o=t||{},l=o.teamName,i=o.date,u=Object(n.useState)(l),m=Object(c.a)(u,2),p=m[0],d=m[1],h=Object(n.useState)(i),f=Object(c.a)(h,2),b=f[0],v=f[1];return Object(n.useEffect)(function(){a&&a({teamName:p,date:b})},[p,b,a]),r.a.createElement("div",{className:"game-metadata"},r.a.createElement("div",{className:"team-name-wrapper metadata-wrapper"},r.a.createElement("div",{className:"team-name"},r.a.createElement(g,{value:p,onChange:d}))),r.a.createElement("div",{className:"game-date-wrapper metadata-wrapper"},r.a.createElement("div",{className:"game-date"},r.a.createElement(E,{date:i,onChange:v}))),r.a.createElement("div",{className:"add-inning metadata-wrapper",onClick:s},r.a.createElement("img",{src:P.a,alt:"Add inning"})))},D=a(15),B=(a(11),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).toggleReached=function(e){var t=!a.state.reached;a.setState({reached:t}),a.props.updateCount(t)},a.render=function(){var e="pitchBox ".concat(a.state.reached?"reached":"");return r.a.createElement("div",{className:e,onClick:a.toggleReached})},a.state={reached:a.props.reached},a}return Object(f.a)(t,e),t}(n.Component));B.defaultProps={reached:!1};var R=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).generatePitches=function(e,t){for(var n=[],s=0;s<e;s++)n.push(r.a.createElement(B,{key:s,updateCount:t(s),reached:a.state.balls[s]}));return n},a.updatePitch=function(e,t){return function(n){var r=a.state[e];r[t]=n;var s={};s[e]=r,a.setState(s),a.props.onChange&&a.props.onChange(a.getCount())}},a.updateBalls=function(e){return a.updatePitch("balls",e)},a.updateStrikes=function(e){return a.updatePitch("strikes",e)},a.getCount=function(){return{balls:a.state.balls.filter(function(e){return e}).length,strikes:a.state.strikes.filter(function(e){return e}).length}},a.render=function(){return r.a.createElement("div",{className:"pitchCount"},r.a.createElement("div",{className:"balls flexbox"},a.generatePitches(3,a.updateBalls)),r.a.createElement("div",{className:"strikes flexbox"},a.generatePitches(2,a.updateStrikes)))},a.state={balls:[!1,!1,!1].fill(!0,0,a.props.balls),strikes:[!1,!1].fill(!0,0,a.props.strikes)},a}return Object(f.a)(t,e),t}(n.Component);R.defaultProps={balls:0,strikes:0};a(30);var I=function(e){function t(e){var a;if(Object(p.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=function(){return a.setState({svgHeight:a.svgRef.clientHeight})},a.componentDidUpdate=function(e,t){t.bases===a.state.bases&&t.result===a.state.result&&t.count===a.state.count||a.props.onChange&&a.props.onChange(a.getStats())},a.baseClicked=function(e){var t=Object(y.a)(a.state.bases),n=e.target.id-1;if(t[n].reached)for(;n<t.length;n++)t[n].reached=!1;else for(;n>=0;n--)t[n].reached=!0;a.setState({bases:t})},a.handleCountChange=function(e){return a.setState({count:e})},a.handleResultChange=function(e){return a.setState({result:e})},a.getBaseClass=function(e){return e?"base reached":"base"},a.getStats=function(){var e={inning:a.props.inning,result:a.state.result};if(a.state.result&&""!==a.state.result){for(var t,n=3;n>=0;n--)if(a.state.bases[n].reached){t=a.state.bases[n].name;break}e.farthestBase=t||"none",e.count=a.state.count}return console.log(e),e},a.props.result){var n=a.props.result;if(n.bases=JSON.parse(JSON.stringify(a.props.bases)),n.farthestBase&&"none"!==n.farthestBase){var r=!0,s=!1,o=void 0;try{for(var c,l=n.bases[Symbol.iterator]();!(r=(c=l.next()).done);r=!0){var i=c.value;if(i.reached=!0,i.name===n.farthestBase)break}}catch(u){s=!0,o=u}finally{try{r||null==l.return||l.return()}finally{if(s)throw o}}}a.state=n}else a.state={bases:JSON.parse(JSON.stringify(a.props.bases))};return a}return Object(f.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"field"},r.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 230 180",ref:function(t){return e.svgRef=t}},r.a.createElement("g",{className:"infield",transform:"matrix(-0.7,-0.7,0.7,-0.7,115,180)"},r.a.createElement("path",{d:"M 0 0 L 160 0 A 160 140 45 0 1 0 160 L 0 0",fill:"sienna"}),r.a.createElement("g",{className:"bases"},r.a.createElement("rect",{y:"0",width:"100px",height:"100px",fill:"green",x:"0"}),this.state.bases[0].reached&&r.a.createElement("line",{x1:"2",y1:"18",x2:"2",y2:"80",style:{stroke:"yellow",strokeWidth:4}}),this.state.bases[1].reached&&r.a.createElement("line",{x1:"20",y1:"98",x2:"80",y2:"98",style:{stroke:"yellow",strokeWidth:4}}),this.state.bases[2].reached&&r.a.createElement("line",{x1:"98",y1:"18",x2:"98",y2:"80",style:{stroke:"yellow",strokeWidth:4}}),this.state.bases[3].reached&&r.a.createElement("line",{x1:"80",y1:"2",x2:"18",y2:"2",style:{stroke:"yellow",strokeWidth:4}}),r.a.createElement("rect",{id:"1",name:this.state.bases[0].name,className:this.getBaseClass(this.state.bases[0].reached),x:"0",y:"80",width:"20px",height:"20px",fill:"white",onClick:this.baseClicked}),r.a.createElement("rect",{id:"2",name:this.state.bases[1].name,className:this.getBaseClass(this.state.bases[1].reached),x:"80",y:"80",width:"20px",height:"20px",fill:"white",onClick:this.baseClicked}),r.a.createElement("rect",{id:"3",name:this.state.bases[2].name,className:this.getBaseClass(this.state.bases[2].reached),x:"80",y:"0",width:"20px",height:"20px",fill:"white",onClick:this.baseClicked}),r.a.createElement("polygon",{id:"4",name:this.state.bases[3].name,className:this.getBaseClass(this.state.bases[3].reached),points:"0,0 18,0 26,8 8,26 0,18 0,0",fill:"white",onClick:this.baseClicked})))),r.a.createElement("div",{className:"count",style:{height:"".concat(this.state.svgHeight,"px")}},r.a.createElement(R,Object.assign({onChange:this.handleCountChange},this.state.count)))),r.a.createElement("div",{className:"result"},r.a.createElement(g,{onChange:this.handleResultChange,noValueClassName:"dotted-border-top",value:this.state.result})))}}]),t}(n.PureComponent);I.defaultProps={bases:[{name:"first",reached:!1},{name:"second",reached:!1},{name:"third",reached:!1},{name:"home",reached:!1}],result:{count:{balls:0,strikes:0}}};a(31);var V=function(e){var t=e.initName,a=e.onChange,s=e.showInningSelection,o=e.id,l=Object(n.useState)(t),i=Object(c.a)(l,2),u=i[0],m=i[1],p=Object(n.useState)(1),d=Object(c.a)(p,2),h=d[0],f=d[1];return Object(n.useEffect)(function(){a&&a({name:u,since:h},o)},[u,h,a,o]),r.a.createElement("div",{className:"player dotted-border-bottom"},r.a.createElement(g,{value:u,onChange:m,noValueClassName:""}),s&&r.a.createElement(v,{onChange:f,options:Array.from({length:9},function(e,t){return t+1})}))},J=(a(32),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={players:a.props.players?a.props.players:[]},a.handlePlayerUpdate=function(e,t){if(e.name&&""!==e.name&&(t===a.state.players.length||e.name!==a.state.players[t].name)){var n=[].concat(Object(y.a)(a.state.players),[{name:e.name,since:0}]);a.setState({players:n}),a.props.onChange&&a.props.onChange(n)}},a.buildPlayerComponents=function(){var e=a.state.players.map(function(e,t){return r.a.createElement(V,{initName:e.name,showInningSelection:t>0,id:t,key:t.toString(),onChange:a.handlePlayerUpdate})});return e.push(r.a.createElement(V,{id:a.state.players.length,showInningSelection:a.state.players.length>0,key:a.state.players.length.toString(),onChange:a.handlePlayerUpdate})),e},a.render=function(){return r.a.createElement("div",{className:"player-names"},a.buildPlayerComponents())},a}return Object(f.a)(t,e),t}(n.Component)),L=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleResultUpdate=function(e){console.log(a.results),a.results[e.inning-1]=e,console.log(a.results),a.props.onUpdate&&a.props.onUpdate({position:a.props.number,results:a.results,players:a.players})},a.handlePlayerUpdate=function(e){a.players=e,a.props.onUpdate&&a.props.onUpdate({position:a.props.number,results:a.results,players:a.players})},a.render=function(){var e=a.props.innings?a.props.innings:9,t=Array.from({length:e},function(e,t){return r.a.createElement("div",{key:"".concat(a.props.number,"-").concat(t),className:"inning"},r.a.createElement(I,{inning:t+1,onChange:a.handleResultUpdate,result:a.props.stats&&a.props.stats.results?a.props.stats.results[t]:void 0}))});return r.a.createElement("div",{className:"position"},r.a.createElement("div",{className:"players left-column"},r.a.createElement(J,{onChange:a.handlePlayerUpdate,players:a.props.stats?a.props.stats.players:void 0})),r.a.createElement("div",{className:"results"},t))},a.props.stats&&(a.props.stats.players&&(a.players=a.props.stats.players),a.props.stats.results?a.results=a.props.stats.results:a.results=[]),a}return Object(f.a)(t,e),t}(n.Component),M=(a(33),a(34),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).render=function(){var e=a.props.innings?a.props.innings:9;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"left-column"},"Players"),r.a.createElement("div",{className:"innings"},Array.from({length:e},function(e,t){return r.a.createElement("div",{key:t.toString(),className:"inning inning-header"},t+1)}),r.a.createElement("div",{className:"end inning"})))},a}return Object(f.a)(t,e),t}(n.Component)),G=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).componentDidUpdate=function(e){e.innings!==a.props.innings&&window.scroll(a.ref.clientWidth,0),a.props.onChange&&a.props.onChange(a.state.stats)},a.render=function(){var e;return e=a.state.stats?a.state.stats.map(function(e,t){return r.a.createElement(L,{number:t+1,innings:a.props.innings,key:t,stats:e,onUpdate:a.onPositionUpdate})}):Array.from({length:9},function(e,t){return r.a.createElement(L,{number:t+1,innings:a.props.innings,key:t,onUpdate:a.onPositionUpdate})}),r.a.createElement("div",{className:"innings-grid",ref:function(e){return a.ref=e}},r.a.createElement(M,{innings:a.props.innings}),r.a.createElement("div",{className:"grid"},e))},a.onPositionUpdate=function(e){var t=a.state.stats?Object(y.a)(a.state.stats):[];t[e.position-1]=e,a.setState({stats:t})},a.state={stats:e.initStats||Array.from({length:9},function(e,t){return{}})},a}return Object(f.a)(t,e),t}(n.Component),H=function(e){var t=e.gameId,a=e.onReload,s=Object(n.useState)(t),o=Object(c.a)(s,2),l=o[0],m=o[1],p=Object(n.useState)(!0),d=Object(c.a)(p,2),h=d[0],f=d[1],b=Object(n.useState)(),g=Object(c.a)(b,2),v=g[0],y=g[1],E=Object(n.useState)(),j=Object(c.a)(E,2),C=j[0],k=j[1],S=Object(n.useState)(9),N=Object(c.a)(S,2),w=N[0],A=N[1],P=Object(n.useState)({show:!1}),D=Object(c.a)(P,2),B=D[0],R=D[1],I=function(){var e=Object(u.a)(i.a.mark(function e(){var t,a,n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=l?"put":"post",e.next=3,fetch("".concat("https://baseball-scorekeeper.herokuapp.com","/scorekeeper/").concat(l||""),{method:t,headers:{"content-type":"application/json"},body:JSON.stringify({metadata:v,innings:C})});case 3:a=e.sent,l||(console.log(a.headers),n=a.headers.get("location"),r=n.substring(n.lastIndexOf("/")+1),m(r)),a.ok?R({show:!0,title:"Game saved successfully!"}):R({show:!0,title:"Error saving game",error:!0});case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){(function(){var e=Object(u.a)(i.a.mark(function e(){var t,a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!l){e.next=11;break}return e.next=3,fetch("".concat("https://baseball-scorekeeper.herokuapp.com","/scorekeeper/").concat(l));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,y(a.metadata),k(a.innings),n=a.innings&&a.innings[0]&&a.innings[0].results.length>=9?a.innings[0].results.length:9,A(n);case 11:f(!1);case 12:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[l]),!h&&r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{onSave:I,onReload:a}),r.a.createElement(U,{initMetadata:v,onChange:y,addInning:function(){A(w+1)}}),r.a.createElement(G,{innings:w,initStats:C,onChange:k}),B.show&&r.a.createElement(x,{onSubmit:function(){return R({show:!1})},text:B.text,title:B.title,submitLabel:"OK",error:B.error}))},K=(a(35),function(e){var t=e.onSelect,a=Object(n.useState)(!0),s=Object(c.a)(a,2),o=s[0],l=s[1],m=Object(n.useState)(),p=Object(c.a)(m,2),d=p[0],h=p[1],f=Object(n.useState)(!1),b=Object(c.a)(f,2),g=b[0],v=b[1],y=Object(n.useState)(),E=Object(c.a)(y,2),O=E[0],j=E[1],C=function(){var e=Object(u.a)(i.a.mark(function e(){var t,a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://baseball-scorekeeper.herokuapp.com","/scorekeeper"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=a.map(function(e){return{id:e.id,data:[e.metadata.teamName,new Date(e.metadata.date).toLocaleDateString(void 0,{month:"long",year:"numeric",day:"numeric"})]}}),h(n),l(!1);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){C()},[]);var k=function(){var e=Object(u.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:j(t),v(!0);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://baseball-scorekeeper.herokuapp.com","/scorekeeper/").concat(O),{method:"delete"});case 2:C(),v(!1);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"game-selector"},r.a.createElement("div",{className:"new-game"},r.a.createElement("a",{href:"#",onClick:function(){t&&t(null)}},"New game")," or load existing game:"),r.a.createElement(w,{headers:["Team","Date"],loading:o,rows:d,onSelect:t,onDelete:k}),g&&r.a.createElement(x,{onCancel:function(){return v(!1)},onSubmit:S,title:"Delete Game",text:"Do you really want to delete the game?",submitLabel:"Yes",cancelLabel:"No"}))}),Q=function(){var e=Object(n.useState)(),t=Object(c.a)(e,2),a=t[0],s=t[1],o=Object(n.useState)(!0),l=Object(c.a)(o,2),i=l[0],u=l[1];return i?r.a.createElement(K,{onSelect:function(e){s(e),u(!1)}}):r.a.createElement(H,{gameId:a,onReload:function(){return u(!0)}})};a(36),a(37);o.a.render(r.a.createElement(Q,null),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.1d0b0d61.chunk.js.map