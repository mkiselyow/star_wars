(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(36)},,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(11),c=a.n(s),i=a(1),l=a(2),o=a(4),u=a(3),m=a(5),p=a(6),d=a.n(p),h=a(9),f=function(){function e(){Object(i.a)(this,e),this._url="https://swapi.co/api"}return Object(l.a)(e,[{key:"getResource",value:function(){var e=Object(h.a)(d.a.mark(function e(){var t,a,n,r,s=this,c=arguments;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"people",a=c.length>1?c[1]:void 0,n="".concat(this._url,"/").concat(t,"/").concat(a||""),e.next=5,fetch(n);case 5:return r=e.sent,e.next=8,r.json().then(function(){var e=Object(h.a)(d.a.mark(function e(c){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r.ok){e.next=2;break}throw new Error("Could not fetch ".concat(n,", \nstatus is ").concat(r.status));case 2:if(!a){e.next=7;break}return e.next=5,s.imageExists(t,a);case 5:return c.imageExists=e.sent,e.abrupt("return",s.Decorator(t,c));case 7:return e.abrupt("return",c.results.map(function(e){return s.Decorator(t,e)}));case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){throw console.log(e.message),e});case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"imageExists",value:function(){var e=Object(h.a)(d.a.mark(function e(t,a){var n,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://starwars-visualguide.com/assets/img/".concat(t,"/").concat(a,".jpg"),e.next=3,fetch(n);case 3:return r=e.sent.status,e.abrupt("return",!!r&&404!==r);case 5:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"getId",value:function(e){return e.url.match(/\/([0-9]*)\/$/)[1]}},{key:"Decorator",value:function(e,t){switch(e){case"planets":return{id:this.getId(t),name:t.name,population:t.population,rotationPeriod:t.rotation_period,diameter:t.diameter,imageExists:t.imageExists,typeOfItem:"planets"};case"starships":return{id:this.getId(t),name:t.name,cargo_capacity:t.cargo_capacity,passengers:t.passengers,imageExists:t.imageExists,typeOfItem:"starships"};case"people":return{id:this.getId(t),name:t.name,gender:t.gender,mass:t.mass,imageExists:t.imageExists,typeOfItem:"people"};default:return t}}}]),e}(),v=(a(20),function(){function e(){Object(i.a)(this,e)}return Object(l.a)(e,[{key:"start",value:function(e){var t=document.getElementById(e),a=t.innerHTML;t.innerHTML=a.split("").map(function(e){return"<div class='char-item'>".concat(e,"</div>")}).join("\n"),t.classList.add("word-wrapper");for(var n=document.querySelector(".word-wrapper").children,r=function(e,t){if(" "!==a.charAt(e)){setTimeout(function t(){n[e].classList.add("char-active"),setTimeout(function(){return n[e].classList.remove("char-active")},1e3),setTimeout(t,1e3*a.replace(/ /g,"").length)},1e3+1e3*t),t<a.replace(/ /g,"").length&&t++}c=t},s=0,c=0;s<a.length;s++)r(s,c)}}]),e}()),g=(a(22),function(e){var t=e.href,a=e.title;return r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link nav-list-item",href:t},a))}),E=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("ul",{className:"nav nav-list-item-container"},r.a.createElement(g,{href:"#",title:"People"}),r.a.createElement(g,{href:"#",title:"Planets"}),r.a.createElement(g,{href:"#",title:"Ships"})))},y=a(7),b=a(8),j=(a(24),function(){return r.a.createElement("div",{className:"lds-css ng-scope mt-3"},r.a.createElement("div",{className:"lds-spinner",style:{width:"100%",height:"100%"}},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),O=(a(26),function(e){var t=e.type,a=e.id,n="https://starwars-visualguide.com/assets/img/".concat(t,"/").concat(a,".jpg");return r.a.createElement("div",{className:"col-12 col-sm-6 d-flex justify-content-center align-items-center"},r.a.createElement("img",{className:"rounded my-2 random-planet-img",src:n,alt:""}))}),w=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"mapPropertiesNames",value:function(e){return"people"===e.typeOfItem?[["Gender",e.gender],["Mass",e.mass],["Mass",e.mass]]:"planets"===e.typeOfItem?[["Population",e.population],["Rotation Period",e.rotationPeriod],["Diameter",e.diameter]]:"starships"===e.typeOfItem?[["Cargo Capacity",e.cargo_capacity],["Passengers",e.passengers],["Passengers",e.passengers]]:void 0}},{key:"render",value:function(){var e=this.props.item,t=e.id,a=e.name,n=Object(y.a)(e,["id","name"]),s=this.props.imageExists;return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(O,{type:n.typeOfItem,id:t}):null,r.a.createElement("div",{className:"col-12 col-sm-6 d-flex flex-column justify-content-center align-content-middle"},r.a.createElement("header",{className:"my-3"},r.a.createElement("span",null,a)),r.a.createElement("table",{className:"table table-hover"},r.a.createElement("tbody",null,r.a.createElement("tr",{className:"table-active"},r.a.createElement("th",{scope:"row"},this.mapPropertiesNames(n)[0][0]),r.a.createElement("td",null,this.mapPropertiesNames(n)[0][1])),r.a.createElement("tr",{className:"table-active"},r.a.createElement("th",{scope:"row"},this.mapPropertiesNames(n)[1][0]),r.a.createElement("td",null,this.mapPropertiesNames(n)[1][1])),r.a.createElement("tr",{className:"table-active"},r.a.createElement("th",{scope:"row"},this.mapPropertiesNames(n)[2][0]),r.a.createElement("td",null,this.mapPropertiesNames(n)[2][1]))))))}}]),t}(n.Component),N=function(){return r.a.createElement("div",{className:"my-2 alert alert-dismissible alert-danger text-center"},"Something went wrong!")},x=(a(28),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).swapiService=new f,a.state={id:null,name:null,typeOfItem:null,error:!1,imageExists:!1},a.onError=function(e){console.log(e),a.setState({error:!0})},a.onNoError=function(){a.setState({error:!1})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updatePlanet(),this.interval=setInterval(this.updatePlanet.bind(this),5e3)}},{key:"componentWillUnmount",value:function(){this.interval=null}},{key:"updatePlanet",value:function(){var e=this,t=Math.floor(25*Math.random())+2;this.swapiService.getResource("planets",t).then(function(t){e.setState(Object(b.a)({},t)),e.state.error&&e.onNoError()}).catch(function(t){return e.onError(t)})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.imageExists,n=Object(y.a)(e,["error","imageExists"]),s=!!Object.values(n).join(""),c=t,i=s?r.a.createElement(w,{imageExists:a,item:Object(b.a)({},n)}):null,l=s||c?null:r.a.createElement(j,null),o=c?r.a.createElement(N,null):null;return r.a.createElement("article",{className:"random-planet-content container bg-gray rounded"},r.a.createElement("div",{className:"row d-flex justify-content-center align-items-center"},l,i,o))}}]),t}(n.Component)),k=(a(30),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).swapiService=new f,a.state={peopleList:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.swapiService.getResource("people").then(function(t){e.setState({peopleList:t})}).catch(this.onError)}},{key:"prepareList",value:function(){var e=this;if(this.state.peopleList)return this.state.peopleList.map(function(t){return r.a.createElement(P,{key:t.id,href:"#",title:t.name,id:t.id,onClick:function(){return e.props.onItemSelected(t.id)}})})}},{key:"render",value:function(){var e=this.state.peopleList,t=e?this.prepareList():null,a=e?null:r.a.createElement(j,null);return r.a.createElement("article",{className:"itemList my-2"},r.a.createElement("ul",{className:"list-group"},a,t))}}]),t}(n.Component)),P=function(e){var t=e.title,a=e.onClick;return r.a.createElement("li",{onClick:a,className:"list-group-item d-flex justify-content-between align-items-center hover-color"},r.a.createElement("div",{className:"item-list-item-link"},t))},I=(a(32),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).swapiService=new f,a.state={id:null,name:null,typeOfItem:null,error:!1,imageExists:!1},a.onError=function(e){console.log(e),a.setState({error:!0})},a.onNoError=function(){a.setState({error:!1})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.id!==e.id&&this.fetchPerson()}},{key:"fetchPerson",value:function(){var e=this,t=this.props.id;this.swapiService.getResource("people",t).then(function(t){e.setState(Object(b.a)({},t)),e.state.error&&e.onNoError()}).catch(function(t){return e.onError(t)})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.imageExists,n=Object(y.a)(e,["error","imageExists"]),s=!!Object.values(n).join(""),c=t,i=this.props.id,l=s?r.a.createElement(w,{imageExists:a,item:Object(b.a)({},n)}):null,o=s||c||!i?null:r.a.createElement(j,null),u=c?r.a.createElement("div",null,"An error occurred"):null;return r.a.createElement("article",{className:"person-details container bg-gray rounded"},r.a.createElement("div",{className:"my-2 row d-flex justify-content-center align-items-center"},o,l,u))}}]),t}(n.Component)),S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedPerson:null,hasError:!1},a.onPersonSelected=function(e){a.setState({selectedPerson:e})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(N,null):r.a.createElement("div",{className:"row mb2"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(k,{onItemSelected:this.onPersonSelected})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(I,{id:this.state.selectedPerson})))}}]),t}(n.Component),C=(a(34),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).isFetchInProgress=!1,a.changeProgress=function(e){a.isFetchInProgress=e,document.getElementById("progress")&&(document.getElementById("progress").style.visibility=a.isFetchInProgress?"visible":"hidden")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){v.prototype.start("dynamicText")}},{key:"render",value:function(){var e=this;return this.changeProgress(!0),(new f).getResource("planets").then(function(t){e.changeProgress(!1),console.log(t)}).catch(function(t){console.log(t.message),e.changeProgress(!1)}),r.a.createElement("div",{className:"app container"},r.a.createElement("article",{id:"dynamicText",className:"my-3"},"Star Wars Database"),r.a.createElement(E,null),r.a.createElement("div",{className:"d-flex justify-content-center align-items-center m-3"},r.a.createElement("div",{className:"progress",style:{width:"35%"},id:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100",style:{width:"100%"}}," "))),r.a.createElement(x,null),r.a.createElement(S,null))}}]),t}(n.Component));c.a.render(r.a.createElement(C,null),document.getElementById("root"))}],[[12,2,1]]]);
//# sourceMappingURL=main.e406d61e.chunk.js.map