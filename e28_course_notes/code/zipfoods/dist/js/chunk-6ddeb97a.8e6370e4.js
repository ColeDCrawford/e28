(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ddeb97a"],{"8fdc":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"account-page"}},[t.user?e("div",[e("h2",{attrs:{"data-test":"welcome-message"}},[t._v("Hi, "+t._s(t.user.name)+"!")]),e("div",{attrs:{id:"favorites"}},[e("strong",[t._v("Your Favorites")]),t.favorites&&0==t.favorites.length?e("p",[t._v("No favorites yet.")]):t._e(),t._l(t.favorites,(function(a,o){return e("li",{key:o},[t._v(t._s(a.name))])}))],2),e("button",{attrs:{"data-test":"logout-button"},on:{click:t.logout}},[t._v("Logout")])]):e("div",{attrs:{id:"loginForm"}},[e("h2",[t._v("Login")]),e("small",[t._v(" (Form is prefilled for demonstration purposes; remove in final application) ")]),e("div",[e("label",[t._v(" Email: "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.email,expression:"data.email"}],attrs:{type:"text","data-test":"email-input"},domProps:{value:t.data.email},on:{input:function(a){a.target.composing||t.$set(t.data,"email",a.target.value)}}})])]),e("div",[e("label",[t._v(" Password: "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.password,expression:"data.password"}],attrs:{type:"password","data-test":"password-input"},domProps:{value:t.data.password},on:{input:function(a){a.target.composing||t.$set(t.data,"password",a.target.value)}}})])]),e("button",{attrs:{"data-test":"login-button"},on:{click:t.login}},[t._v("Login")]),t.errors?e("ul",t._l(t.errors,(function(a,o){return e("li",{key:o,staticClass:"error"},[t._v(t._s(a))])})),0):t._e()])])},r=[],s=(e("d81d"),e("0091")),i={data:function(){return{data:{email:"jill@harvard.edu",password:"asdfasdf"},errors:null,favorites:[]}},computed:{user:function(){return this.$store.state.user},products:function(){return this.$store.state.products}},methods:{loadFavorites:function(){var t=this;this.user&&s["a"].get("favorite").then((function(a){t.favorites=a.data.favorite.map((function(a){return t.$store.getters.getProductById(a.product_id)}))}))},login:function(){var t=this;s["a"].post("login",this.data).then((function(a){a.data.authenticated?t.$store.commit("setUser",a.data.user):t.errors=a.data.errors}))},logout:function(){var t=this;s["a"].post("logout").then((function(a){a.data.success&&t.$store.commit("setUser",null)}))}},watch:{user:function(){this.loadFavorites()}},mounted:function(){this.loadFavorites()}},n=i,d=e("2877"),u=Object(d["a"])(n,o,r,!1,null,null,null);a["default"]=u.exports},d81d:function(t,a,e){"use strict";var o=e("23e7"),r=e("b727").map,s=e("1dde"),i=e("ae40"),n=s("map"),d=i("map");o({target:"Array",proto:!0,forced:!n||!d},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-6ddeb97a.8e6370e4.js.map