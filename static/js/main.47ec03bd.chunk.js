(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(36)},,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(11),i=a.n(s),c=a(1),l=a(2),o=a(4),u=a(3),m=a(5),p=a(7),h=a.n(p),d=a(9),v=function(){function e(){Object(c.a)(this,e),this._url="https://swapi.co/api"}return Object(l.a)(e,[{key:"getAllResources",value:function(){var e=Object(d.a)(h.a.mark(function e(){var t,a,n,r=this,s=arguments;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"people",a="".concat(this._url,"/").concat(t,"/"),e.next=4,fetch(a);case 4:return e.next=6,e.sent.json();case 6:return n=e.sent,e.abrupt("return",n.results.map(function(e){return r.decorate(t,e)}));case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getResourceById",value:function(){var e=Object(d.a)(h.a.mark(function e(){var t,a,n,r,s,i=arguments;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"people",a=i.length>1?i[1]:void 0,n="".concat(this._url,"/").concat(t,"/").concat(a),e.next=5,fetch(n);case 5:return e.next=7,e.sent.json();case 7:return r=e.sent,e.next=10,this.imageExists(t,a);case 10:return s=e.sent,e.abrupt("return",this.decorate(t,r,s));case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"imageExists",value:function(){var e=Object(d.a)(h.a.mark(function e(t,a){var n,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://starwars-visualguide.com/assets/img/".concat(t,"/").concat(a,".jpg"),e.next=3,fetch(n);case 3:return r=e.sent,e.abrupt("return",404!==r.status);case 5:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"getId",value:function(e){return e.url.match(/\/([0-9]*)\/$/)[1]}},{key:"decorate",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];switch(e){case"planets":return{id:this.getId(t),name:t.name,population:t.population,rotationPeriod:t.rotation_period,diameter:t.diameter,imageExists:a,typeOfItem:"planets"};case"starships":return{id:this.getId(t),name:t.name,cargo_capacity:t.cargo_capacity,passengers:t.passengers,imageExists:a,typeOfItem:"starships"};case"people":return{id:this.getId(t),name:t.name,gender:t.gender,mass:t.mass,imageExists:a,typeOfItem:"people"};default:return t}}}]),e}(),f=a(6),g=(a(20),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).activeLetterClass="char-active",a.state={text:"Star Wars Database",activeLetter:0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){setTimeout(this.nextActiveLetter.bind(this),1e3)}},{key:"componentDidUpdate",value:function(e){e.activeLetter!==this.state.activeLetter&&setTimeout(this.nextActiveLetter.bind(this),1e3)}},{key:"nextActiveLetter",value:function(){this.setState(function(e){var t=e.text,a=e.activeLetter;return{activeLetter:t.length>a?++a:0}})}},{key:"wrapLetters",value:function(){var e=this,t=Object(f.a)({},this.state),a=t.text,n=t.activeLetter,s=0;return a.split("").map(function(t,a){var i=null;return" "!==t&&(i=n===s?e.activeLetterClass:null,s++),r.a.createElement("div",{key:a,className:"char-item ".concat(i)},t)})}},{key:"render",value:function(){var e=this.wrapLetters();return r.a.createElement("article",{id:"dynamicText",className:"my-3 word-wrapper"},e)}}]),t}(n.Component)),E=(a(22),function(e){var t=e.href,a=e.title;return r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link nav-list-item",href:t},a))}),y=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("ul",{className:"nav nav-list-item-container"},r.a.createElement(E,{href:"#",title:"People"}),r.a.createElement(E,{href:"#",title:"Planets"}),r.a.createElement(E,{href:"#",title:"Ships"})))},b=a(8),O=(a(24),function(){return r.a.createElement("div",{className:"lds-css ng-scope mt-3"},r.a.createElement("div",{className:"lds-spinner",style:{width:"100%",height:"100%"}},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),j=(a(26),function(e){var t=e.type,a=e.id,n="https://starwars-visualguide.com/assets/img/".concat(t,"/").concat(a,".jpg");return r.a.createElement("div",{className:"col-12 col-sm-6 d-flex justify-content-center align-items-center"},r.a.createElement("img",{className:"rounded my-2 random-planet-img",src:n,alt:""}))}),N=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"mapPropertiesNames",value:function(e){return"people"===e.typeOfItem?[["Gender",e.gender],["Mass",e.mass],["Mass",e.mass]]:"planets"===e.typeOfItem?[["Population",e.population],["Rotation Period",e.rotationPeriod],["Diameter",e.diameter]]:"starships"===e.typeOfItem?[["Cargo Capacity",e.cargo_capacity],["Passengers",e.passengers],["Passengers",e.passengers]]:void 0}},{key:"render",value:function(){var e=this.props.item,t=e.id,a=e.name,n=Object(b.a)(e,["id","name"]),s=this.props.imageExists;return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(j,{type:n.typeOfItem,id:t}):null,r.a.createElement("div",{className:"col-12 col-sm-6 d-flex flex-column justify-content-center align-content-middle"},r.a.createElement("header",{className:"my-3"},r.a.createElement("span",null,a)),r.a.createElement("table",{className:"table table-hover"},r.a.createElement("tbody",null,r.a.createElement("tr",{className:"table-active"},r.a.createElement("th",{scope:"row"},this.mapPropertiesNames(n)[0][0]),r.a.createElement("td",null,this.mapPropertiesNames(n)[0][1])),r.a.createElement("tr",{className:"table-active"},r.a.createElement("th",{scope:"row"},this.mapPropertiesNames(n)[1][0]),r.a.createElement("td",null,this.mapPropertiesNames(n)[1][1])),r.a.createElement("tr",{className:"table-active"},r.a.createElement("th",{scope:"row"},this.mapPropertiesNames(n)[2][0]),r.a.createElement("td",null,this.mapPropertiesNames(n)[2][1]))))))}}]),t}(n.Component),w=function(){return r.a.createElement("div",{className:"my-2 alert alert-dismissible alert-danger text-center"},"Something went wrong!")},x=(a(28),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).swapiService=new v,a.state={id:null,name:null,typeOfItem:null,error:!1,imageExists:!1},a.onError=function(e){console.log(e+" === in random planet"),a.setState({error:!0}),a.interval=null},a.onNoError=function(){a.setState({error:!1})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updatePlanet(),this.interval=setInterval(this.updatePlanet.bind(this),5e3)}},{key:"componentWillUnmount",value:function(){this.interval=null}},{key:"updatePlanet",value:function(){var e=this,t=Math.floor(25*Math.random())+2;this.swapiService.getResourceById("planets",t).then(function(t){e.setState(Object(f.a)({},t)),e.state.error&&e.onNoError()}).catch(function(t){return e.onError(t)})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.imageExists,n=Object(b.a)(e,["error","imageExists"]),s=!!Object.values(n).join(""),i=t,c=s?r.a.createElement(N,{imageExists:a,item:Object(f.a)({},n)}):null,l=s||i?null:r.a.createElement(O,null),o=i?r.a.createElement(w,null):null;return r.a.createElement("article",{className:"random-planet-content container bg-gray rounded"},r.a.createElement("div",{className:"row d-flex justify-content-center align-items-center"},l,c,o))}}]),t}(n.Component)),k=(a(30),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).swapiService=new v,a.state={peopleList:null},a.onError=function(){a.setState({error:!0}),a.props.pageOnError()},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.swapiService.getAllResources("people").then(function(t){e.setState({peopleList:t})}).catch(this.onError)}},{key:"prepareList",value:function(){var e=this;if(this.state.peopleList)return this.state.peopleList.map(function(t){return r.a.createElement(P,{key:t.id,href:"#",title:t.name,id:t.id,onClick:function(){return e.props.onItemSelected(t.id)}})})}},{key:"render",value:function(){var e=this.state.peopleList,t=e?this.prepareList():null,a=e?null:r.a.createElement(O,null);return r.a.createElement("article",{className:"itemList my-2"},r.a.createElement("ul",{className:"list-group"},a,t))}}]),t}(n.Component)),P=function(e){var t=e.title,a=e.onClick;return r.a.createElement("li",{onClick:a,className:"list-group-item d-flex justify-content-between align-items-center hover-color"},r.a.createElement("div",{className:"item-list-item-link"},t))},S=(a(32),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).swapiService=new v,a.state={id:null,name:null,typeOfItem:null,error:!1,imageExists:!1,fetchingNextObj:!0},a.onError=function(){a.setState({error:!0}),a.props.pageOnError()},a.onNoError=function(){a.setState({error:!1})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.id!==e.id&&(this.fetchingNextObj(!0),this.fetchPerson())}},{key:"fetchingNextObj",value:function(e){this.setState({fetchingNextObj:e})}},{key:"fetchPerson",value:function(){var e=this,t=this.props.id;this.swapiService.getResourceById("people",t).then(function(t){e.setState(Object(f.a)({},t)),e.fetchingNextObj(!1),e.state.error&&e.onNoError()}).catch(function(t){return e.onError(t)})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.imageExists,n=e.fetchingNextObj,s=Object(b.a)(e,["error","imageExists","fetchingNextObj"]),i=!n&&!!Object.values(s).join(""),c=t,l=this.props.id,o=i?r.a.createElement(N,{imageExists:a,item:Object(f.a)({},s)}):null,u=i||c||!l?null:r.a.createElement(O,null),m=c?r.a.createElement("div",null,"An error occurred"):null;return r.a.createElement("article",{className:"person-details container bg-gray rounded"},r.a.createElement("div",{className:"my-2 row d-flex justify-content-center align-items-center"},u,o,m))}}]),t}(n.Component)),I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedPerson:null,hasError:!1},a.onPersonSelected=function(e){a.setState({selectedPerson:e})},a.onError=function(){a.setState({hasError:!0})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(w,null):r.a.createElement("div",{className:"row mb2"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(k,{onItemSelected:this.onPersonSelected,pageOnError:this.onError})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(S,{id:this.state.selectedPerson,pageOnError:this.onError})))}}]),t}(n.Component),L=(a(34),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).isFetchInProgress=!1,a.changeProgress=function(e){a.isFetchInProgress=e,document.getElementById("progress")&&(document.getElementById("progress").style.visibility=a.isFetchInProgress?"visible":"hidden")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.changeProgress(!0),(new v).getAllResources("planets").then(function(t){e.changeProgress(!1),console.log(t)}).catch(function(t){console.log(t.message),e.changeProgress(!1)}),r.a.createElement("div",{className:"app container"},r.a.createElement(g,null),r.a.createElement(y,null),r.a.createElement("div",{className:"d-flex justify-content-center align-items-center m-3"},r.a.createElement("div",{className:"progress",style:{width:"35%"},id:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100",style:{width:"100%"}}," "))),r.a.createElement(x,null),r.a.createElement(I,null))}}]),t}(n.Component));i.a.render(r.a.createElement(L,null),document.getElementById("root"))}],[[12,2,1]]]);
//# sourceMappingURL=main.47ec03bd.chunk.js.map