(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{39:function(e,a,t){e.exports=t(70)},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},68:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(33),l=t.n(r),i=(t(44),t(8)),o=(t(45),t(14)),s=t(3),m=(t(46),t(34)),u=t.n(m),d=t(35),p=t.n(d),g=Object(n.createContext)(),_=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(g.Provider,{value:Object(n.useReducer)(a,t)},r)},E=function(){return Object(n.useContext)(g)},h=t(25),v=t.n(h),b=(v.a.initializeApp({apiKey:"AIzaSyAmwZsOXNjHAxEBgwrtziXqXyCrKuFoMj4",authDomain:"clone-app-17aa0.firebaseapp.com",databaseURL:"https://clone-app-17aa0.firebaseio.com",projectId:"clone-app-17aa0",storageBucket:"clone-app-17aa0.appspot.com",messagingSenderId:"1056240998744",appId:"1:1056240998744:web:0beeb3d7427f844445ed2d"}).firestore(),v.a.auth());var f=function(){var e=E(),a=Object(i.a)(e,1)[0],t=a.basket,n=a.user;return console.log(t),c.a.createElement("nav",{className:"header"},c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""})),c.a.createElement("div",{className:"header__search"},c.a.createElement("input",{type:"text",className:"header__searchInput"}),c.a.createElement(u.a,{className:"header__searchIcon"})),c.a.createElement("div",{className:"header__nav"},c.a.createElement(o.b,{to:!n&&"/login",className:"header__link"},c.a.createElement("div",{onClick:function(){n&&b.signOut()},className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Hello ",null===n||void 0===n?void 0:n.email),c.a.createElement("span",{className:"header__optionLineTwo"},n?"Sign out":"Sign in"))),c.a.createElement(o.b,{to:"/",className:"header__link"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Returns"),c.a.createElement("span",{className:"header__optionLineTwo"},"& Orders"))),c.a.createElement(o.b,{to:"/",className:"header__link"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Your"),c.a.createElement("span",{className:"header__optionLineTwo"},"Prime"))),c.a.createElement(o.b,{to:"/checkout",className:"header__link"},c.a.createElement("div",{className:"header__optionBasket"},c.a.createElement(p.a,null),c.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===t||void 0===t?void 0:t.length)))))},k=(t(62),t(36));t(63);var N=function(e){var a=e.id,t=e.rating,n=e.image,r=e.title,l=e.price,o=E(),s=Object(i.a)(o,2);Object(k.a)(s[0]);var m=s[1];return c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product__info"},c.a.createElement("p",null,r),c.a.createElement("p",{className:"product__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,l)),c.a.createElement("div",{className:"product__rating"},Array(t).fill().map((function(e){return c.a.createElement("p",null,"\u2b50")})))),c.a.createElement("img",{src:n,alt:""}),c.a.createElement("button",{onClick:function(){m({type:"ADD_TO_BASKET",item:{id:a,title:r,rating:t,image:n,price:l}})}},"Add to basket"))};var O=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),c.a.createElement("div",{className:"home__row"},c.a.createElement(N,{id:"123221321",title:"Blink XT2 Outdoor/Indoor Smart Security Camera with cloud storage included, 2-way audio, 2-year battery life \u2013 5 camera kit",price:379.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/31wnX0mTN7L._AC_US218_.jpg"}),c.a.createElement(N,{id:"12321341",title:"The lean startup: How constant innovation creates radically successful businesses paperback",price:11.99,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"})),c.a.createElement("div",{className:"home__row"},c.a.createElement(N,{id:"1264321341",title:"Ring Solar Panel White - Compatible with Ring Spotlight Cam Battery and Stick Up Cam Battery",price:49.99,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51QzQADXNFL._AC_US218_.jpg"}),c.a.createElement(N,{id:"12321558341",title:"Ring Access Controller Pro Cellular with Stick Up Cam Battery - Professional installation required",price:399.99,rating:5,image:"https://m.media-amazon.com/images/I/51fSkMJ1haL._AC_UY218_.jpg"}),c.a.createElement(N,{id:"12454321341",title:"Ring Peephole Cam with Rechargeable Battery Pack and Echo Show 5",price:499.99,rating:3,image:"https://m.media-amazon.com/images/I/51xe08zvyFL._AC_UY218_.jpg"})),c.a.createElement("div",{className:"home__row"},c.a.createElement(N,{id:"123889+21341",title:"Roccat Khan Aimo - Wired Headset - Full Size - Black",price:119.99,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/310u77o3efL._AC_US218_.jpg"})))};t(64),t(65);var S=function(e){var a=e.id,t=e.title,n=e.image,r=e.price,l=e.rating,o=E(),s=Object(i.a)(o,2),m=(s[0].basket,s[1]);return c.a.createElement("div",{className:"checkoutProduct"},c.a.createElement("img",{className:"checkoutProduct__image",src:n,alt:""}),c.a.createElement("div",{className:"checkoutProduct__info"},c.a.createElement("p",{className:"checkoutProduct__title"},t),c.a.createElement("p",{className:"checkoutProduct__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"checkoutProduct__rating"},Array(l).fill().map((function(e){return c.a.createElement("p",null,"\u2b50")}))),c.a.createElement("button",{onClick:function(){m({type:"REMOVE_FROM_BASKET",id:a})}},"Remove from basket")))},y=(t(66),t(37)),C=t.n(y),j=t(28),w=t(18),A=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return a.price+e}),0)},z=function(e,a){switch(console.log(a),a.type){case"SET_USER":return Object(w.a)(Object(w.a)({},e),{},{user:a.user});case"ADD_TO_BASKET":return Object(w.a)(Object(w.a)({},e),{},{basket:[].concat(Object(j.a)(e.basket),[a.item])});case"REMOVE_FROM_BASKET":var t=Object(j.a)(e.basket),n=e.basket.findIndex((function(e){return e.id===a.id}));return n>=0?t.splice(n,1):console.warn("Cant remove product (id: ".concat(a.id,") as its not in basket")),Object(w.a)(Object(w.a)({},e),{},{basket:t});default:return e}};var B=function(){var e=E(),a=Object(i.a)(e,1)[0].basket;return c.a.createElement("div",{className:"subtotal"},c.a.createElement(C.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal(",a.length," items): ",c.a.createElement("strong",null,"".concat(e))),c.a.createElement("small",{className:"subtotal__gift"},c.a.createElement("input",{type:"checkbox"})," This order contains a gift"))},decimalScale:2,value:A(a),displayType:"text",thousandSeparator:!0,prefix:"$"}),c.a.createElement("button",null,"Proceed to checkout"))};var P=function(){var e=E(),a=Object(i.a)(e,1)[0].basket;return c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout__left"},c.a.createElement("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),0===(null===a||void 0===a?void 0:a.length)?c.a.createElement("div",null,c.a.createElement("h2",null,"Your shopping basket is empty"),".",c.a.createElement("p",null,"You have no items in your basket. To buy one or more items, click 'Add to basket' next to the item.")):c.a.createElement("div",null,c.a.createElement("h2",{className:"checkout__title"},"Your shopping basket:"),a.map((function(e){return c.a.createElement(S,{id:e.id,title:e.title,rating:e.rating,image:e.image,price:e.price})})))),a.length>0&&c.a.createElement("div",{className:"checkout__right"},c.a.createElement(B,null)))};t(68);var T=function(){var e=Object(s.f)(),a=Object(n.useState)(""),t=Object(i.a)(a,2),r=t[0],l=t[1],m=Object(n.useState)(""),u=Object(i.a)(m,2),d=u[0],p=u[1];return c.a.createElement("div",{className:"login"},c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})),c.a.createElement("div",{className:"login__container"},c.a.createElement("h1",null,"Sign in"),c.a.createElement("form",null,c.a.createElement("h5",null,"Email"),c.a.createElement("input",{value:r,onChange:function(e){return l(e.target.value)},type:"text"}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{value:d,onChange:function(e){return p(e.target.value)},type:"password"}),c.a.createElement("button",{onClick:function(a){a.preventDefault(),b.signInWithEmailAndPassword(r,d).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))},type:"submit",className:"login__signInButton"},"Sign in")),c.a.createElement("p",null,"By signing-in you agree to Amazon's Conditions of Use and Sale. Please see our privacy notice, out cookies notice and our interest-based ads notice."),c.a.createElement("button",{onClick:function(a){a.preventDefault(),b.createUserWithEmailAndPassword(r,d).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"},"Create your Amazon Account")))};var I=function(){var e=E(),a=Object(i.a)(e,2),t=a[0].user,r=a[1];return Object(n.useEffect)((function(){var e=b.onAuthStateChanged((function(e){r(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}));return function(){e()}}),[]),console.log(t),c.a.createElement(o.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/checkout"},c.a.createElement(f,null),c.a.createElement(P,null)),c.a.createElement(s.a,{path:"/login"},c.a.createElement(T,null)),c.a.createElement(s.a,{path:"/"},c.a.createElement(f,null),c.a.createElement(O,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,{reducer:z,initialState:{basket:[],user:null}},c.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.26351dad.chunk.js.map