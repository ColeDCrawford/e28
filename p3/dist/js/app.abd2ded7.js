(function(t){function e(e){for(var o,n,a=e[0],l=e[1],u=e[2],f=0,d=[];f<a.length;f++)n=a[f],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);c&&c(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],o=!0,a=1;a<s.length;a++){var l=s[a];0!==i[l]&&(o=!1)}o&&(r.splice(e--,1),t=n(n.s=s[0]))}return t}var o={},i={app:0},r=[];function n(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=o,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(s,o,function(e){return t[e]}.bind(null,o));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var c=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0f86":function(t,e,s){},1593:function(t,e,s){"use strict";s("b993")},"3d01":function(t,e,s){"use strict";s("6b43")},"43fa":function(t,e,s){},4816:function(t,e,s){"use strict";s("e84e")},4944:function(t,e,s){"use strict";s("ec34")},"4ab9":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var o=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"navbar navbar-light bg-light navbar-expand-lg"},[t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[s("div",{staticClass:"navbar-nav mr-auto"},t._l(t.links,(function(e){return s("router-link",{key:e,staticClass:"nav-link",attrs:{to:t.paths[e],exact:""}},[t._v(t._s(e))])})),1)])]),s("router-view",{attrs:{profiles:t.profiles,areas:t.areas,ticks:t.ticks,follows:t.follows},on:{"update-follows":function(e){return t.updateFollows()}}})],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],n=s("bc3a").create({baseURL:"https://e28-api.coledcrawford.me",responseType:"json",withCredentials:!0}),a={name:"App",components:{},data:function(){return{links:["Home","Routes","Profiles","Feed","Account"],paths:{Home:"/",Routes:"/routes",Profiles:"/profiles",Feed:"/feed",Account:"/account"},profiles:[],areas:[],ticks:[],follows:[]}},mounted:function(){var t=this;this.$store.dispatch("fetchTicks"),this.$store.dispatch("fetchProfiles"),this.$store.dispatch("fetchRoutes"),this.$store.dispatch("fetchAreas"),this.$store.dispatch("fetchFollows"),this.$store.dispatch("authUser"),n.get("profile").then((function(e){t.profiles=e.data.profile})),n.get("area").then((function(e){t.areas=e.data.area})),n.get("tick").then((function(e){t.ticks=e.data.tick})),this.updateFollows()},methods:{updateFollows:function(){var t=this;n.get("follow").then((function(e){t.follows=e.data.follow}))}}},l=a,u=(s("5c0b"),s("2877")),c=Object(u["a"])(l,i,r,!1,null,null,null),f=c.exports,d=s("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[t._m(0),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h2",[t._v("Featured Routes")]),s("div",[s("router-link",{attrs:{to:"/routes/"}},[t._v("See all climbs")])],1),s("div",{staticClass:"card-columns"},t._l(t.featuredRoutes,(function(t){return s("router-link",{key:t.id,attrs:{to:"/routes/"+t.id,exact:""}},[s("show-route",{attrs:{route:t,individual:!1}})],1)})),1)]),s("div",{staticClass:"col"},[s("h2",[t._v("Recent Following Ticks")]),s("div",[s("router-link",{attrs:{to:"/feed/"}},[t._v("See full feed")])],1),s("div",[s("router-link",{attrs:{to:"/profiles/"}},[t._v("Follow / unfollow profiles")])],1),s("show-feed",{attrs:{limit:10,ticks:t.ticks,routes:t.routes,follows:t.follows}})],1)])])},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("h1",{staticClass:"title"},[t._v("Weekend Warrior")])])}],h=(s("4de4"),s("caad"),s("d81d"),s("fb6a"),s("2532"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"ticks"}},[t.limit<0?s("h1",[t._v("Following Tick Feed")]):t._e(),t._l(t.followingTicks,(function(e){return s("show-tick",{key:e.id,attrs:{tick:e,routes:t.routes,follows:t.follows,displayProfile:!0}})}))],2)}),m=[],_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tick container"},[s("router-link",{key:t.tick.mp_user_id,attrs:{to:"/profiles/"+t.tick.mp_user_id,exact:""}},[t.displayProfile?s("h6",{staticClass:"tick-owner"},[t._v(t._s(t.tick.mp_name))]):t._e()]),t.displayRouteInfo?s("div",{staticClass:"route-info row"},[s("span",{staticClass:"route-name"},[s("router-link",{key:t.route.id,attrs:{to:"/routes/"+t.route.id,exact:""}},[t._v(t._s(t.route.name)+" ")])],1),s("div",{staticClass:"route-info-details"},[s("span",{staticClass:"route-grade"},[t._v(t._s(t.route.rating))]),s("span",{staticClass:"route-type"},[t._v(t._s(t.route.type))]),t.route.pitches>1?s("span",{staticClass:"route-pitches"},[t._v(t._s(t.route.pitches)+" pitches")]):t._e(),s("span",{staticClass:"route-location"},[t._v(t._s(t.route.location))]),s("span",{staticClass:"stars"},[s("star-rating",{attrs:{"max-rating":4,increment:.1,"read-only":!0,inline:!0,"star-size":25,"show-rating":!1},model:{value:t.route.stars,callback:function(e){t.$set(t.route,"stars",e)},expression:"route.stars"}}),t._v("("+t._s(t.route.star_votes)+")")],1)])]):t._e(),t.displayTickInfo?s("div",{staticClass:"tick-info row"},[s("span",{staticClass:"tick-date"},[t._v(t._s(t.tick.date))]),s("span",{staticClass:"tick-style"},[t._v(t._s(t.tick.style))]),t.tick.lead_style?s("span",{staticClass:"lead-style"},[t._v("/ "+t._s(t.tick.lead_style))]):t._e(),t.tick.pitches>1?s("span",{staticClass:"pitches"},[t._v(t._s(t.tick.pitches)+" pitches")]):t._e(),s("span",{staticClass:"notes"},[t._v(t._s(t.tick.notes))])]):t._e()],1)},w=[],g=s("5b3d"),k=s.n(g),b={name:"show-tick",components:{StarRating:k.a},props:{tick:{},displayProfile:{default:!1},displayRouteInfo:{default:!0},displayTickInfo:{default:!0}},data:function(){return{}},computed:{route:function(){return this.$store.getters.getRouteById(this.tick.route_id)}}},y=b,C=(s("d06d"),Object(u["a"])(y,_,w,!1,null,"48d2c0d7",null)),$=C.exports,x={name:"show-feed",props:{ticks:{},routes:{},follows:{},limit:{default:-1}},components:{"show-tick":$},data:function(){return{}},computed:{followingTicks:function(){var t=this.follows.map((function(t){return t.profile_id})),e=this.ticks.filter((function(e){var s=e.user_id;return t.includes(s)}));return e=e.sort((function(t,e){return Date.parse(e.date)-Date.parse(t.date)})),this.limit<0?e:e.slice(0,this.limit)}}},F=x,T=Object(u["a"])(F,h,m,!1,null,"3e1f3c11",null),P=T.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.individual?s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("h3",[t._v(" "+t._s(t.route.name)+" ")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"stars"},[s("star-rating",{attrs:{"max-rating":4,increment:.1,"read-only":!0,inline:!0,"star-size":25,"show-rating":!1},model:{value:t.route.stars,callback:function(e){t.$set(t.route,"stars",e)},expression:"route.stars"}}),t._v("("+t._s(t.route.star_votes)+")")],1),s("span",{staticClass:"rating"},[t._v(t._s(t.route.rating))]),t._v(" : "),t._l(t.types,(function(e,o){return s("span",{key:o},[t._v(t._s(e))])}))],2),s("div",{staticClass:"row route-image"},[s("img",{attrs:{src:t.route.img_medium}})]),s("div",{staticClass:"row location"},[t._v(" "+t._s(t.route.location)+" ")]),t._m(0),s("div",{staticClass:"row ticks"},t._l(t.ticks,(function(e){return s("show-tick",{key:e.id,attrs:{tick:e,follows:t.follows,displayRouteInfo:!1,displayProfile:!0}})})),1)]):s("div",{staticClass:"card"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.route.img_medium,expression:"route.img_medium"}],staticClass:"card-img-top"}),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(" "+t._s(t.route.name)+" "),s("span",{staticClass:"rating"},[t._v(t._s(t.route.rating))]),t._v(" - "),t._l(t.types,(function(e,o){return s("span",{key:o},[t._v(t._s(e))])}))],2),s("div",{staticClass:"card-text"},[s("div",{staticClass:"stars"},[s("star-rating",{attrs:{"max-rating":4,increment:.1,"read-only":!0,inline:!0,"star-size":25,"show-rating":!1},model:{value:t.route.stars,callback:function(e){t.$set(t.route,"stars",e)},expression:"route.stars"}}),t._v("("+t._s(t.route.star_votes)+")")],1),s("div",{staticClass:"location"},[t._v(t._s(t.route.location))])])])])},O=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("h4",[t._v("Ticks")])])}],j=(s("ac1f"),s("1276"),s("498a"),{name:"show-route",props:["route","individual","id"],data:function(){return{}},components:{StarRating:k.a,ShowTick:$},computed:{types:function(){var t=this.route.type.split(",").map((function(t){return t.trim()}));return t},ticks:function(){return this.$store.getters.getTicksByRouteId(this.id)}},methods:{}}),E=j,I=(s("3d01"),Object(u["a"])(E,R,O,!1,null,null,null)),S=I.exports,B={name:"App",props:["ticks","follows"],components:{ShowFeed:P,ShowRoute:S},computed:{featuredRoutes:function(){for(var t=[],e=0;e<8;e++)t.push(this.routes[Math.floor(Math.random()*this.routes.length)]);return t},recentFollowingTicks:function(){var t=this.follows.map((function(t){return t.profile_id})),e=this.ticks.filter((function(e){var s=e.user_id;return t.includes(s)}));return e=e.sort((function(t,e){return Date.parse(e.date)-Date.parse(t.date)})),e.slice(0,20)},tickss:function(){return this.$store.state.ticks},routes:function(){return this.$store.state.routes}}},N=B,U=(s("6cf6"),Object(u["a"])(N,p,v,!1,null,null,null)),A=U.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"route-page"}},[s("show-route",{attrs:{route:t.route,id:t.id,individual:!0}})],1)},D=[],z={props:["id"],components:{"show-route":S},data:function(){return{}},computed:{route:function(){return this.$store.getters.getRouteById(this.id)}}},L=z,H=(s("1593"),Object(u["a"])(L,M,D,!1,null,null,null)),J=H.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"routes"}},[s("h1",[t._v("Routes")]),s("div",{staticClass:"card-columns"},t._l(t.routes,(function(t){return s("router-link",{key:t.id,attrs:{to:"/routes/"+t.id,exact:""}},[s("show-route",{attrs:{id:t.id,route:t,individual:!1}})],1)})),1)])},Y=[],q={name:"",components:{"show-route":S},props:[],data:function(){return{}},computed:{routes:function(){return this.$store.state.routes}}},G=q,K=(s("4944"),Object(u["a"])(G,W,Y,!1,null,null,null)),Q=K.exports,V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",attrs:{id:"profile-page"}},[t.profile?s("div",[s("show-profile",{attrs:{profile:t.profile,follows:t.follows,id:t.id},on:{"update-follows":t.updateFollows}}),t._l(t.userTicks,(function(t){return s("show-tick",{key:t.id,attrs:{tick:t}})}))],2):t._e(),t.profileNotFound?s("div",[s("p",[t._v("Profile "+t._s(t.id)+" not found.")])]):t._e()])},X=[],Z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"profile card"},[t.following?o("h5",{staticClass:"card-header"},[t._v("Following")]):t._e(),o("router-link",{key:t.profile.id,attrs:{to:"/profiles/"+t.profile.id,exact:""}},[t.profilePicNotFound?o("div",{staticClass:"card-img-top"},[o("img",{staticClass:"profile-avatar-img",attrs:{src:s("936e")}})]):o("div",{staticClass:"card-img-top"},[o("img",{staticClass:"profile-avatar-img",attrs:{src:t.profile.avatar}})]),o("h5",{staticClass:"card-title profile-name"},[t._v(t._s(t.profile.name))])]),o("div",{staticClass:"card-body"},[o("div",{staticClass:"card-text"},[t._v(t._s(t.profile.location))]),o("div",{staticClass:"card-text"},[t._v("Most Recent Tick: "+t._s(t.mostRecentTick))]),t.user?o("div",{staticClass:"card-text"},[t.following?o("button",{staticClass:"btn",class:{"btn-outline-success":t.following},attrs:{type:"button"},on:{click:t.followUser}},[t._v("Following "+t._s(t.profile.name))]):o("button",{staticClass:"btn",class:{"btn-outline-primary":!t.following},attrs:{type:"button"},on:{click:t.followUser}},[t._v("Follow "+t._s(t.profile.name))])]):t._e()])],1)},tt=[],et={name:"show-profile",props:["profile","id"],data:function(){return{}},computed:{user:function(){return this.$store.state.user},profilePicNotFound:function(){return"/img/user/missing2.svg"==this.profile.avatar||null==this.profile.avatar},following:function(){var t=this,e=this.follows.filter((function(e){return e.profile_id==t.id}),this.id)[0];return null!=e},mostRecentTick:function(){var t=this.sortedTicks();return t[0].date},userTicks:function(){return this.$store.getters.getTicksByProfileId(this.id)},follows:function(){return this.$store.state.follows}},methods:{sortedTicks:function(){var t=this.userTicks.sort((function(t,e){return Date.parse(e.date)-Date.parse(t.date)}));return t},followUser:function(){var t=this,e=this.follows.filter((function(e){return e.profile_id==t.id}),this.profile.id)[0];if(null==this.following){var s={user_id:this.user.id,profile_id:this.profile.id};n.post("/follow",s).then((function(e){e.data.errors?t.errors=e.data.errors:t.$emit("update-follows")}))}else n.delete("/follow/".concat(e.id)).then((function(e){e.data.errors?t.errors=e.data.errors:t.$emit("update-follows")}))}}},st=et,ot=(s("a795"),Object(u["a"])(st,Z,tt,!1,null,null,null)),it=ot.exports,rt={name:"",props:["id","follows"],components:{"show-profile":it,"show-tick":$},data:function(){return{}},computed:{profile:function(){return this.$store.getters.getProfileById(this.id)},profileNotFound:function(){return null==this.profile},userTicks:function(){return this.$store.getters.getTicksByProfileId(this.id)}},methods:{updateFollows:function(){this.$emit("update-follows")}}},nt=rt,at=Object(u["a"])(nt,V,X,!1,null,null,null),lt=at.exports,ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"profiles"}},[s("h1",[t._v("Profiles")]),s("div",{staticClass:"card-columns"},t._l(t.profiles,(function(e){return s("show-profile",{key:e.id,attrs:{id:e.id,profile:e,follows:t.follows},on:{"update-follows":t.updateFollows}})})),1)])},ct=[],ft={name:"",components:{"show-profile":it},props:["ticks"],data:function(){return{}},methods:{updateFollows:function(){this.$emit("update-follows")}},computed:{profiles:function(){return this.$store.state.profiles},follows:function(){return this.$store.state.follows}}},dt=ft,pt=(s("4816"),Object(u["a"])(dt,ut,ct,!1,null,null,null)),vt=pt.exports,ht=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"account-page"}},[t.user?s("div",[s("h2",{attrs:{"data-test":"welcome-message"}},[t._v("Hi, "+t._s(t.user.name)+"!")]),s("div",{attrs:{id:"following"}},[s("strong",[t._v("Your Follows")]),t.follows&&0==t.follows.length?s("p",[t._v(" No follows yet. ")]):t._e(),t._l(t.follow,(function(e,o){return s("li",{key:o},[t._v(" "+t._s(e.name)+" ")])}))],2),s("button",{attrs:{"data-test":"logout-button"},on:{click:t.logout}},[t._v("Logout")])]):s("div",{attrs:{id:"loginForm"}},[s("h2",[t._v("Login")]),s("small",[t._v("(Form is prefilled for demonstration purposes; remove in final application)")]),s("div",[s("label",[t._v("Email: "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.data.email,expression:"data.email"}],attrs:{type:"text","data-test":"email-input"},domProps:{value:t.data.email},on:{input:function(e){e.target.composing||t.$set(t.data,"email",e.target.value)}}})])]),s("div",[s("label",[t._v("Password: "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.data.password,expression:"data.password"}],attrs:{type:"password","data-test":"password-input"},domProps:{value:t.data.password},on:{input:function(e){e.target.composing||t.$set(t.data,"password",e.target.value)}}})])]),s("button",{attrs:{"data-test":"login-button"},on:{click:t.login}},[t._v("Login")]),t.errors?s("ul",t._l(t.errors,(function(e,o){return s("li",{key:o,staticClass:"error"},[t._v(" "+t._s(e)+" ")])})),0):t._e()])])},mt=[],_t={data:function(){return{data:{email:"cole_crawford@fas.harvard.edu",password:"12345"},errors:null,follows:[]}},computed:{user:function(){return this.$store.state.user}},methods:{loadFollows:function(){var t=this;this.user&&n.get("follows").then((function(e){t.follows=e.data.follow.map((function(e){return t.$store.getters.getProfileById(e.profile_id)}))}))},login:function(){var t=this;n.post("login",this.data).then((function(e){e.data.authenticated?t.$store.commit("setUser",e.data.user):t.errors=e.data.errors}))},logout:function(){var t=this;n.post("logout").then((function(e){e.data.success&&t.$store.commit("setUser",null)}))}},watch:{},mounted:function(){this.loadFollows()}},wt=_t,gt=Object(u["a"])(wt,ht,mt,!1,null,null,null),kt=gt.exports,bt=(s("ab8b"),s("9537"),s("3e48"),s("caf9")),yt=(s("4160"),s("d3b7"),s("2f62"));o["a"].use(yt["a"]);var Ct=new yt["a"].Store({state:{routes:[],profiles:[],areas:[],ticks:[],follows:[],user:null},mutations:{setRoutes:function(t,e){t.routes=e},setAreas:function(t,e){t.areas=e},setTicks:function(t,e){t.ticks=e},setFollows:function(t,e){t.follows=e},setProfiles:function(t,e){t.profiles=e},setUser:function(t,e){t.user=e}},actions:{fetchRoutes:function(t){n.get("route").then((function(e){var s=["latitude","longitude","pitches","stars","star_votes"],o=e.data.route.map((function(t){var e=t;return s.forEach((function(s){return e[s]=parseFloat(t[s])})),e}));console.log(o),t.commit("setRoutes",o)}))},fetchProfiles:function(t){n.get("profile").then((function(e){t.commit("setProfiles",e.data.profile)}))},fetchAreas:function(t){n.get("area").then((function(e){t.commit("setAreas",e.data.area)}))},fetchTicks:function(t){n.get("tick").then((function(e){t.commit("setTicks",e.data.tick)}))},fetchFollows:function(t){n.get("follow").then((function(e){t.commit("setFollows",e.data.follow)}))},authUser:function(t){return new Promise((function(e){n.post("auth").then((function(s){s.data.authenticated?t.commit("setUser",s.data.user):t.commit("setUser",!1),e()}))}))}},getters:{getRouteById:function(t){return function(e){return t.routes.filter((function(t){return t.id==e}),this.id)[0]}},getTicksByRouteId:function(t){return function(e){return t.ticks.filter((function(t){return t.route_id==e}),this.routeid)}},getTicksByProfileId:function(t){return function(e){return t.ticks.filter((function(t){return t.mp_user_id==e}),this.id)}},getProfileById:function(t){return function(e){return t.profiles.filter((function(t){return t.id==e}),this.id)[0]}}}});o["a"].config.productionTip=!1,o["a"].config.devtools=!0,o["a"].use(d["a"]);var $t=new d["a"]({mode:"history",routes:[{path:"/",component:A},{path:"/routes/:id",component:J,props:!0},{path:"/routes",component:Q,props:!0},{path:"/profiles/:id",component:lt,props:!0},{path:"/profiles",component:vt,props:!0},{path:"/feed",component:P,props:!0},{path:"/account",component:kt,props:!0}],linkActiveClass:"active"});o["a"].use(bt["a"]),new o["a"]({store:Ct,router:$t,render:function(t){return t(f)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"6b43":function(t,e,s){},"6cf6":function(t,e,s){"use strict";s("0f86")},"936e":function(t,e,s){t.exports=s.p+"img/missing2.ec29e676.svg"},"9c0c":function(t,e,s){},a795:function(t,e,s){"use strict";s("4ab9")},b993:function(t,e,s){},d06d:function(t,e,s){"use strict";s("43fa")},e84e:function(t,e,s){},ec34:function(t,e,s){}});
//# sourceMappingURL=app.abd2ded7.js.map