(function(t){function e(e){for(var r,a,n=e[0],l=e[1],u=e[2],f=0,d=[];f<n.length;f++)a=n[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],r=!0,n=1;n<s.length;n++){var l=s[n];0!==o[l]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=s[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=r,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(s,r,function(e){return t[e]}.bind(null,r));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var u=0;u<n.length;u++)e(n[u]);var c=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0cad":function(t,e,s){"use strict";s("3e4e")},"0f86":function(t,e,s){},1593:function(t,e,s){"use strict";s("b993")},"3d01":function(t,e,s){"use strict";s("6b43")},"3e4e":function(t,e,s){},4816:function(t,e,s){"use strict";s("e84e")},4944:function(t,e,s){"use strict";s("ec34")},"4ab9":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"navbar navbar-light bg-light navbar-expand-lg"},[t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[s("div",{staticClass:"navbar-nav mr-auto"},t._l(t.links,(function(e){return s("router-link",{key:e,staticClass:"nav-link",attrs:{to:t.paths[e],exact:""}},[t._v(t._s(e))])})),1)])]),s("router-view",{attrs:{routes:t.routes,profiles:t.profiles,areas:t.areas,ticks:t.ticks,follows:t.follows},on:{"update-follows":function(e){return t.updateFollows()}}})],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],a=s("bc3a").create({baseURL:"https://e28-api.coledcrawford.me",responseType:"json"}),n={name:"App",components:{},data:function(){return{links:["Home","Routes","Profiles","Feed"],paths:{Home:"/",Routes:"/routes",Profiles:"/profiles",Feed:"/feed"},routes:[],profiles:[],areas:[],ticks:[],follows:[]}},mounted:function(){var t=this;a.get("route").then((function(e){t.routes=e.data.route})),a.get("profile").then((function(e){t.profiles=e.data.profile})),a.get("area").then((function(e){t.areas=e.data.area})),a.get("tick").then((function(e){t.ticks=e.data.tick})),this.updateFollows()},methods:{updateFollows:function(){var t=this;a.get("follow").then((function(e){t.follows=e.data.follow}))}}},l=n,u=(s("5c0b"),s("2877")),c=Object(u["a"])(l,o,i,!1,null,null,null),f=c.exports,d=s("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[t._m(0),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h2",[t._v("Featured Routes")]),s("div",[s("router-link",{attrs:{to:"/routes/"}},[t._v("See all climbs")])],1),s("div",{staticClass:"card-columns"},t._l(t.featuredRoutes,(function(t){return s("router-link",{key:t.id,attrs:{to:"/routes/"+t.id,exact:""}},[s("show-route",{attrs:{route:t,individual:!1}})],1)})),1)]),s("div",{staticClass:"col"},[s("h2",[t._v("Recent Following Ticks")]),s("div",[s("router-link",{attrs:{to:"/feed/"}},[t._v("See full feed")])],1),s("div",[s("router-link",{attrs:{to:"/profiles/"}},[t._v("Follow / unfollow profiles")])],1),s("show-feed",{attrs:{limit:10,ticks:t.ticks,routes:t.routes,follows:t.follows}})],1)])])},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("h1",{staticClass:"title"},[t._v("Weekend Warrior")])])}],_=(s("4de4"),s("caad"),s("d81d"),s("fb6a"),s("2532"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"ticks"}},[t.limit<0?s("h1",[t._v("Following Tick Feed")]):t._e(),t._l(t.followingTicks,(function(e){return s("show-tick",{key:e.id,attrs:{tick:e,routes:t.routes,follows:t.follows,displayProfile:!0}})}))],2)}),h=[],m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tick container"},[s("router-link",{key:t.tick.mp_user_id,attrs:{to:"/profiles/"+t.tick.mp_user_id,exact:""}},[t.displayProfile?s("h6",{staticClass:"tick-owner"},[t._v(t._s(t.tick.mp_name))]):t._e()]),t.displayRouteInfo?s("div",{staticClass:"route-info row"},[s("span",{staticClass:"route-name"},[s("router-link",{key:t.route.id,attrs:{to:"/routes/"+t.route.id,exact:""}},[t._v(t._s(t.route.name)+" ")])],1),s("div",{staticClass:"route-info-details"},[s("span",{staticClass:"route-grade"},[t._v(t._s(t.route.rating))]),s("span",{staticClass:"route-type"},[t._v(t._s(t.route.type))]),t.route.pitches>1?s("span",{staticClass:"route-pitches"},[t._v(t._s(t.route.pitches)+" pitches")]):t._e(),s("span",{staticClass:"route-location"},[t._v(t._s(t.route.location))]),s("span",{staticClass:"stars"},[s("star-rating",{attrs:{"max-rating":4,increment:.1,"read-only":!0,inline:!0,"star-size":25,"show-rating":!1},model:{value:t.route.stars,callback:function(e){t.$set(t.route,"stars",e)},expression:"route.stars"}}),t._v("("+t._s(t.route.star_votes)+")")],1)])]):t._e(),t.displayTickInfo?s("div",{staticClass:"tick-info row"},[s("span",{staticClass:"tick-date"},[t._v(t._s(t.tick.date))]),s("span",{staticClass:"tick-style"},[t._v(t._s(t.tick.style))]),t.tick.lead_style?s("span",{staticClass:"lead-style"},[t._v("/ "+t._s(t.tick.lead_style))]):t._e(),t.tick.pitches>1?s("span",{staticClass:"pitches"},[t._v(t._s(t.tick.pitches)+" pitches")]):t._e(),s("span",{staticClass:"notes"},[t._v(t._s(t.tick.notes))])]):t._e()],1)},w=[],k=s("5b3d"),g=s.n(k),b={name:"show-tick",components:{StarRating:g.a},props:{tick:{},routes:{},displayProfile:{default:!1},displayRouteInfo:{default:!0},displayTickInfo:{default:!0}},data:function(){return{}},computed:{route:function(){var t=this;return this.routes.filter((function(e){return e.id==t.tick.route_id}),this.id)[0]}}},C=b,y=(s("0cad"),Object(u["a"])(C,m,w,!1,null,"2e15bd0d",null)),x=y.exports,F={name:"show-feed",props:{ticks:{},routes:{},follows:{},limit:{default:-1}},components:{"show-tick":x},data:function(){return{}},computed:{followingTicks:function(){var t=this.follows.map((function(t){return t.follow_mp_user_id})),e=this.ticks.filter((function(e){var s=e.mp_user_id;return t.includes(s)}));return e=e.sort((function(t,e){return Date.parse(e.date)-Date.parse(t.date)})),this.limit<0?e:e.slice(0,this.limit)}}},T=F,O=Object(u["a"])(T,_,h,!1,null,"678de88a",null),$=O.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.individual?s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("h3",[t._v(" "+t._s(t.route.name)+" ")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"stars"},[s("star-rating",{attrs:{"max-rating":4,increment:.1,"read-only":!0,inline:!0,"star-size":25,"show-rating":!1},model:{value:t.route.stars,callback:function(e){t.$set(t.route,"stars",e)},expression:"route.stars"}}),t._v("("+t._s(t.route.star_votes)+")")],1),s("span",{staticClass:"rating"},[t._v(t._s(t.route.rating))]),t._v(" : "),t._l(t.types,(function(e,r){return s("span",{key:r},[t._v(t._s(e))])}))],2),s("div",{staticClass:"row route-image"},[s("img",{attrs:{src:t.route.img_medium}})]),s("div",{staticClass:"row location"},[t._v(" "+t._s(t.route.location)+" ")]),t._m(0),s("div",{staticClass:"row ticks"},t._l(t.routeTicks,(function(e){return s("show-tick",{key:e.id,attrs:{tick:e,routes:t.routes,follows:t.follows,displayRouteInfo:!1,displayProfile:!0}})})),1)]):s("div",{staticClass:"card"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.route.img_medium,expression:"route.img_medium"}],staticClass:"card-img-top"}),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(" "+t._s(t.route.name)+" "),s("span",{staticClass:"rating"},[t._v(t._s(t.route.rating))]),t._v(" - "),t._l(t.types,(function(e,r){return s("span",{key:r},[t._v(t._s(e))])}))],2),s("div",{staticClass:"card-text"},[s("div",{staticClass:"stars"},[s("star-rating",{attrs:{"max-rating":4,increment:.1,"read-only":!0,inline:!0,"star-size":25,"show-rating":!1},model:{value:t.route.stars,callback:function(e){t.$set(t.route,"stars",e)},expression:"route.stars"}}),t._v("("+t._s(t.route.star_votes)+")")],1),s("div",{staticClass:"location"},[t._v(t._s(t.route.location))])])])])},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("h4",[t._v("Ticks")])])}],R=(s("ac1f"),s("1276"),s("498a"),{name:"show-route",props:["route","individual","ticks","routes"],data:function(){return{}},components:{StarRating:g.a,ShowTick:x},computed:{types:function(){var t=this.route.type.split(",").map((function(t){return t.trim()}));return t},routeTicks:function(){var t=this,e=this.ticks.slice(0).filter((function(e){return e.route_id==t.route.id}));return e.sort((function(t,e){return Date.parse(e.date)-Date.parse(t.date)}))}}}),E=R,S=(s("3d01"),Object(u["a"])(E,j,P,!1,null,null,null)),D=S.exports,N={name:"App",props:["routes","ticks","follows"],components:{ShowFeed:$,ShowRoute:D},computed:{featuredRoutes:function(){for(var t=[],e=0;e<8;e++)t.push(this.routes[Math.floor(Math.random()*this.routes.length)]);return t},recentFollowingTicks:function(){var t=this.follows.map((function(t){return t.follow_mp_user_id})),e=this.ticks.filter((function(e){var s=e.mp_user_id;return t.includes(s)}));return e=e.sort((function(t,e){return Date.parse(e.date)-Date.parse(t.date)})),e.slice(0,20)}}},M=N,z=(s("6cf6"),Object(u["a"])(M,p,v,!1,null,null,null)),I=z.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"route-page"}},[s("show-route",{attrs:{route:t.route,individual:!0,ticks:t.ticks,routes:t.routes}})],1)},A=[],H={props:["id","routes","ticks"],components:{"show-route":D},data:function(){return{}},computed:{route:function(){var t=this;return this.routes.filter((function(e){return e.id==t.id}),this.id)[0]}}},J=H,W=(s("1593"),Object(u["a"])(J,U,A,!1,null,null,null)),L=W.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"routes"}},[s("h1",[t._v("Routes")]),s("div",{staticClass:"card-columns"},t._l(t.routes,(function(t){return s("router-link",{key:t.id,attrs:{to:"/routes/"+t.id,exact:""}},[s("show-route",{attrs:{route:t,individual:!1}})],1)})),1)])},B=[],G={name:"",components:{"show-route":D},props:["routes"],data:function(){return{}}},K=G,Q=(s("4944"),Object(u["a"])(K,q,B,!1,null,null,null)),V=Q.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",attrs:{id:"profile-page"}},[t.profile?s("div",[s("show-profile",{attrs:{profile:t.profile,follows:t.follows,ticks:t.ticks},on:{"update-follows":t.updateFollows}}),t._l(t.userTicks,(function(e){return s("show-tick",{key:e.id,attrs:{tick:e,routes:t.routes}})}))],2):t._e(),t.profileNotFound?s("div",[s("p",[t._v("Profile "+t._s(t.id)+" not found.")])]):t._e()])},Y=[],Z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"profile card"},[t.following?r("h5",{staticClass:"card-header"},[t._v("Following")]):t._e(),r("router-link",{key:t.profile.id,attrs:{to:"/profiles/"+t.profile.id,exact:""}},[t.profilePicNotFound?r("div",{staticClass:"card-img-top"},[r("img",{staticClass:"profile-avatar-img",attrs:{src:s("936e")}})]):r("div",{staticClass:"card-img-top"},[r("img",{staticClass:"profile-avatar-img",attrs:{src:t.profile.avatar}})]),r("h5",{staticClass:"card-title profile-name"},[t._v(t._s(t.profile.name))])]),r("div",{staticClass:"card-body"},[r("div",{staticClass:"card-text"},[t._v(t._s(t.profile.location))]),r("div",{staticClass:"card-text"},[t._v("Most Recent Tick: "+t._s(t.mostRecentTick))]),r("div",{staticClass:"card-text"},[t.following?r("button",{staticClass:"btn",class:{"btn-outline-success":t.following},attrs:{type:"button"},on:{click:t.followUser}},[t._v("Following "+t._s(t.profile.name))]):r("button",{staticClass:"btn",class:{"btn-outline-primary":!t.following},attrs:{type:"button"},on:{click:t.followUser}},[t._v("Follow "+t._s(t.profile.name))])])])],1)},tt=[],et={name:"show-profile",props:["profile","follows","ticks"],data:function(){return{}},computed:{profilePicNotFound:function(){return"/img/user/missing2.svg"==this.profile.avatar||null==this.profile.avatar},following:function(){var t=this,e=this.follows.filter((function(e){return e.follow_mp_user_id==t.profile.id}),this.profile.id)[0];return null!=e},mostRecentTick:function(){var t=this,e=this.ticks.slice(0).filter((function(e){return e.mp_user_id==t.profile.id}));return e=e.sort((function(t,e){return Date.parse(e.date)-Date.parse(t.date)})),e[0].date},userTicks:function(){var t=this;return this.ticks.filter((function(e){return e.mp_user_id==t.id}))}},methods:{followUser:function(){var t=this,e=this.follows.filter((function(e){return e.follow_mp_user_id==t.profile.id}),this.profile.id)[0];if(null==e){var s={mp_user_id:200157044,follow_mp_user_id:this.profile.id};a.post("/follow",s).then((function(e){e.data.errors?t.errors=e.data.errors:t.$emit("update-follows")}))}else a.delete("/follow/".concat(e.id)).then((function(e){e.data.errors?t.errors=e.data.errors:t.$emit("update-follows")}))}}},st=et,rt=(s("a795"),Object(u["a"])(st,Z,tt,!1,null,null,null)),ot=rt.exports,it={name:"",props:["id","profiles","ticks","routes","follows"],components:{"show-profile":ot,"show-tick":x},data:function(){return{}},computed:{profile:function(){var t=this;return this.profiles.filter((function(e){return e.id==t.id}),this.id)[0]},profileNotFound:function(){return null==this.profile},userTicks:function(){var t=this,e=this.ticks.filter((function(e){return e.mp_user_id==t.id}));return e.sort((function(t,e){return Date.parse(e.date)-Date.parse(t.date)}))}},methods:{updateFollows:function(){this.$emit("update-follows")}}},at=it,nt=Object(u["a"])(at,X,Y,!1,null,null,null),lt=nt.exports,ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"profiles"}},[s("h1",[t._v("Profiles")]),s("div",{staticClass:"card-columns"},t._l(t.profiles,(function(e){return s("show-profile",{key:e.id,attrs:{profile:e,follows:t.follows,ticks:t.ticks},on:{"update-follows":t.updateFollows}})})),1)])},ct=[],ft={name:"",components:{"show-profile":ot},props:["profiles","follows","ticks"],data:function(){return{}},methods:{updateFollows:function(){this.$emit("update-follows")}}},dt=ft,pt=(s("4816"),Object(u["a"])(dt,ut,ct,!1,null,null,null)),vt=pt.exports,_t=(s("ab8b"),s("9537"),s("3e48"),s("caf9"));r["a"].config.productionTip=!1,r["a"].use(d["a"]);var ht=new d["a"]({mode:"history",routes:[{path:"/",component:I},{path:"/routes/:id",component:L,props:!0},{path:"/routes",component:V,props:!0},{path:"/profiles/:id",component:lt,props:!0},{path:"/profiles",component:vt,props:!0},{path:"/feed",component:$,props:!0}],linkActiveClass:"active"});r["a"].use(_t["a"]),new r["a"]({router:ht,render:function(t){return t(f)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"6b43":function(t,e,s){},"6cf6":function(t,e,s){"use strict";s("0f86")},"936e":function(t,e,s){t.exports=s.p+"img/missing2.ec29e676.svg"},"9c0c":function(t,e,s){},a795:function(t,e,s){"use strict";s("4ab9")},b993:function(t,e,s){},e84e:function(t,e,s){},ec34:function(t,e,s){}});
//# sourceMappingURL=app.39eb26b6.js.map