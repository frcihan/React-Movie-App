(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(0),i=c(1),n=c.n(i),r=c(4),s=c.n(r),o=(c(11),c(5)),j=c(3),h=function(e){var t,c=e.title,i=e.poster_path,n=e.overview,r=e.vote_average;return Object(a.jsxs)("div",{className:"movie",children:[Object(a.jsx)("img",{src:i?"https://image.tmdb.org/t/p/w1280"+i:"https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",alt:c}),Object(a.jsxs)("div",{className:"movie-info",children:[Object(a.jsx)("h3",{children:c}),Object(a.jsx)("span",{className:"tag ".concat((t=r,t>=8?"green":t>=6?"orange":"red")),children:r})]}),Object(a.jsxs)("div",{className:"movie-over",children:[Object(a.jsx)("h2",{children:"Overview:"}),Object(a.jsx)("p",{children:n})]})]})};var b=function(){var e=Object(i.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(i.useState)(""),s=Object(j.a)(r,2),b=s[0],p=s[1];Object(i.useEffect)((function(){d("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1")}),[]);var d=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){n(e.results)}))};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("header",{children:Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),b&&(d("https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="+b),p(""))},children:Object(a.jsx)("input",{className:"search",type:"search",placeholder:"Search Movie",value:b,onChange:function(e){p(e.target.value)}})})}),Object(a.jsx)("div",{className:"movie-container",children:c.length>0&&c.map((function(e){return Object(a.jsx)(h,Object(o.a)({},e),e.id)}))})]})};s.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.d0a8dfae.chunk.js.map