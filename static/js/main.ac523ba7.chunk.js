(this["webpackJsonpbootcamp-m4-starter"]=this["webpackJsonpbootcamp-m4-starter"]||[]).push([[0],{20:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACLklEQVRoge3Yz0sVURTA8Y/yyCKrTZsoF2Il/gVGtGkbLoP+hlpV/iFB60CxlSG4iFaSVhQ8iqBoEwi1iaKoQCXKhb4Wb0Z9781cx/cmn4/uFw5c5px7fsydM/fOEIlEusUQ5rCayDxGu5pRGwzhB2pN8jPR9QxzWotI5UEX89ozq/ILWfkXASttzDmKfqy1GbMW0PXjXDJexmabMYKcxULivIbnGMuxnZe/IrM5c67i0w67z7hWUu5bjMl+XL7gVIb9qHpjN9t/x5kM+wlsZNhv4EqJdbifESSVOzlzhtQbeyWRWdlFwLuA/7elVJDwPhDoVYe+TwR8p3JsNyf9BYP9CegGC/rII+25PGoKNH3RQl4EdAsFfeSxhpcBfRW/OoyxxWl81brkyzhZgv9LWM/wv46LJfhv4Dweqd+db7iL4yX6v4zXtot4k1zrWQYVaO7IQaev2wkUYATjybiKD3uZXMEklrCI29o7YHbCEczY3mfS/WQ60e1KBc+0vgqf2N9iZjJySGWqiIPJgINb5eebyYjGlWiWTQzvnJC1s08EAoR0ZTIu3L99uLDzQlYhoXPPgSWrkIcB+5CuTKrCN3QzsQlSwVOtz+WS/W326YwcUrlX1ElFvbEX8Rg3def1O6Wx6TfUizjcbNwLG+Kw7cau4mMXc4lEIiUykEhPc0P9O309GfckAxp/QPy2h5Up+jtov2g+lvTkuY/GR+t6l3PpmEOJRCKRSCQS+W/5C7KBzW/gNpThAAAAAElFTkSuQmCC"},24:function(e,t,a){e.exports=a(43)},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(19),r=a.n(c),l=a(11),s=a(3),o=a(4),m=a(6),u=a(5),d=a(1),h=(a(29),a(30),a(20)),p=a.n(h),f=a(23),b=a(7),v=a(14),_={film:[],addListFilm:[],idListFilm:[],moviesListPage:[],titleListPage:"",flag:!1,Link:!1,ID:""};var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FILM":var a=t.payload.res,n=t.payload.load,i=[].concat(Object(v.a)(e.film),[a]);return Object(b.a)(Object(b.a)({},e),{},{newCart:i,flag:n});case"ADD_List_FILM":var c=t.payload.imdbID,r=t.payload.load;if(e.addListFilm.find((function(e){return e.imdbID===c.imdbID})))return Object(b.a)(Object(b.a)({},e),{},{flag:r});var l=e.addListFilm.push(c);return Object(b.a)(Object(b.a)({},e),{},{NewAddListFilm:l,flag:r});case"ADD_List_FILM_ID":var s=t.payload.idFilm.id,o=t.payload.link,m=t.payload.idFilm,u=t.payload.load,d=[].concat(Object(v.a)(e.idListFilm),[m]);return Object(b.a)(Object(b.a)({},e),{},{newIdlistFilm:d,flag:u,Link:o,ID:s});case"FILM_LIST_PAGE":var h=t.payload.movies.movies,p=t.payload.movies.title,f=t.payload.load,L=[].concat(Object(v.a)(e.moviesListPage),[h]);return Object(b.a)(Object(b.a)({},e),{},{newListListPage:L,titleListPage:p,flag:f,addListFilm:[],Link:!1});case"REMOVE_FILM":var y=t.payload.id,E=Object(v.a)(e.addListFilm).filter((function(e){return e.imdbID!==y}));return Object(b.a)(Object(b.a)({},e),{},{addListFilm:E});case"LOADING_STATUS":var g=t.payload.load;return Object(b.a)(Object(b.a)({},e),{},{flag:g});default:return e}},y=Object(f.a)(L),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={Loading:!1,idLink:":id"},e.componentDidMount=function(){y.subscribe((function(){var t=y.getState();e.setState({Loading:t.flag,idLink:t.ID})}))},e}return Object(o.a)(a,[{key:"render",value:function(){return""===this.state.idLink&&this.setState({idLink:":id"}),i.a.createElement("header",{className:"header"},i.a.createElement("h1",{className:"header__title"},"MustSee"),i.a.createElement("div",{className:this.state.Loading?"load__container":"not-load__container"},i.a.createElement("img",{src:p.a,className:"load__img",alt:"logo"})),i.a.createElement("ul",{className:"header__list"},i.a.createElement("li",{className:"header__list-item"},i.a.createElement(l.b,{className:"header__list-link",to:"/"},"\u041f\u043e\u0438\u0441\u043a")),i.a.createElement("li",{className:"header__list-item"},i.a.createElement(l.b,{className:"header__list-link",to:"/list/".concat(this.state.idLink)},"\u041c\u043e\u0439 \u0441\u043f\u0438\u0441\u043e\u043a"))))}}]),a}(n.Component);a(36);function g(e){var t="http://www.omdbapi.com/?s=".concat(e,"&apikey=").concat("c16ec1a3");fetch(t).then((function(e){return e.json()})).then((function(e){y.dispatch({type:"ADD_FILM",payload:{res:e.Search,load:!1}})})).catch((function(e){console.error("Error:",e)}))}function O(e){var t="http://www.omdbapi.com/?i=".concat(e,"&apikey=").concat("c16ec1a3");fetch(t).then((function(e){return e.json()})).then((function(e){y.dispatch({type:"ADD_List_FILM",payload:{imdbID:e,load:!1}})})).catch((function(e){console.error("Error:",e)}))}function j(e){fetch("https://acb-api.algoritmika.org/api/movies/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){y.dispatch({type:"ADD_List_FILM_ID",payload:{idFilm:e,load:!1,link:!0}})})).catch((function(e){console.error("Error:",e)}))}function A(e){var t="https://acb-api.algoritmika.org/api/movies/list/".concat(e);fetch(t).then((function(e){return e.json()})).then((function(e){y.dispatch({type:"FILM_LIST_PAGE",payload:{movies:e,load:!1}})})).catch((function(e){console.error("Error:",e)}))}var k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={searchLine:""},e.searchLineChangeHandler=function(t){e.setState({searchLine:t.target.value})},e.searchBoxSubmitHandler=function(t){t.preventDefault(),e.LoadStart()},e.LoadStart=function(e){y.dispatch({type:"LOADING_STATUS",payload:{load:!0}})},e.clickButtonSearch=function(t){g(e.state.searchLine)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.searchLine;return i.a.createElement("div",{className:"search-box"},i.a.createElement("form",{className:"search-box__form",onSubmit:this.searchBoxSubmitHandler},i.a.createElement("label",{className:"search-box__form-label"},"\u0418\u0441\u043a\u0430\u0442\u044c \u0444\u0438\u043b\u044c\u043c \u043f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e:",i.a.createElement("input",{value:e,type:"text",className:"search-box__form-input",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, Shawshank Redemption",onChange:this.searchLineChangeHandler})),i.a.createElement("button",{type:"submit",className:"search-box__form-submit",disabled:!e,onClick:this.clickButtonSearch},"\u0418\u0441\u043a\u0430\u0442\u044c")))}}]),a}(n.Component),N=(a(37),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).LoadStart=function(e){y.dispatch({type:"LOADING_STATUS",payload:{load:!0}})},e.clickButtonAddList=function(t){e.LoadStart(),O(t.imdbID)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.Title,n=t.Year,c=t.Poster,r=t.imdbID;return i.a.createElement("article",{className:"movie-item"},i.a.createElement("img",{className:"movie-item__poster",src:c,alt:a}),i.a.createElement("div",{className:"movie-item__info"},i.a.createElement("h3",{className:"movie-item__title"},a,"\xa0",n),i.a.createElement("button",{onClick:function(){return e.clickButtonAddList({imdbID:r})},type:"button",className:"movie-item__add-button"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043e\u043a")))}}]),a}(n.Component)),S=(a(38),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={data:[]},e.componentDidMount=function(){y.subscribe((function(){var t=y.getState();t.newCart&&e.setState({data:t.newCart[0]})}))},e}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("ul",{className:"movies"},this.state.data&&this.state.data.map((function(e){return i.a.createElement("li",{className:"movies__item",key:e.imdbID},i.a.createElement(N,e))})))}}]),a}(n.Component)),I=(a(39),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={title:"",movies:[],link:!1,idFilmList:""},e.newListChangeHandler=function(t){e.setState({title:t.target.value})},e.LoadStart=function(e){y.dispatch({type:"LOADING_STATUS",payload:{load:!0}})},e.clickSave=function(){e.LoadStart(),j(e.state)},e.clickDel=function(e){y.dispatch({type:"REMOVE_FILM",payload:{id:e}})},e.componentDidMount=function(){y.subscribe((function(){var t=y.getState();e.setState({movies:t.addListFilm,link:t.Link,idFilmList:t.ID})}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;if(this.state)return i.a.createElement("div",{className:"favorites"},i.a.createElement("input",{onChange:this.newListChangeHandler,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430",className:"favorites__name"}),i.a.createElement("ul",{className:"favorites__list"},this.state.movies&&this.state.movies.map((function(t){return i.a.createElement("li",{className:"favorites__element",key:t.imdbID},t.Title," (",t.Year,")",i.a.createElement("button",{onClick:function(){return e.clickDel(t.imdbID)},className:"favorites__del"},"X"))}))),!0===this.state.link?i.a.createElement(l.b,{to:"/list/".concat(this.state.idFilmList),className:"favorites__link"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0441\u043f\u0438\u0441\u043a\u0443"):i.a.createElement("button",{onClick:this.clickSave,disabled:""===this.state.title||0===+this.state.movies.length,type:"button",className:""===this.state.title||0===+this.state.movies.length?"favorites__save-disabled":"favorites__save"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a"))}}]),a}(n.Component)),D=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={result:""},e}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"main-page"},i.a.createElement(E,null),i.a.createElement("main",{className:"main-page__content"},i.a.createElement("section",{className:"main-page__main-section"},i.a.createElement("div",{className:"main-page__search-box"},i.a.createElement(k,{searchRes:this.state.searchLine})),i.a.createElement("div",{className:"main-page__movies"},i.a.createElement(S,null))),i.a.createElement("aside",{className:"main-page__favorites"},i.a.createElement(I,null))))}}]),a}(n.Component),w=(a(40),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={movies:[],title:""},e.LoadStart=function(e){y.dispatch({type:"LOADING_STATUS",payload:{load:!0}})},e.componentDidMount=function(){e.LoadStart(),A(e.props.match.params.id),y.subscribe((function(){var t=y.getState();t.newListListPage&&e.setState({movies:t.newListListPage[0],title:t.titleListPage})}))},e}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"main-page"},i.a.createElement(E,null)),i.a.createElement("div",{className:"list-page"},i.a.createElement("h1",{className:"list-page__title"},"\u041c\u043e\u0439 \u0441\u043f\u0438\u0441\u043e\u043a"),i.a.createElement("div",{className:"list-page__container"},i.a.createElement("h2",{className:"list-page__container-title"},this.state.title),i.a.createElement("ul",null,this.state.movies&&this.state.movies.map((function(e){return i.a.createElement("li",{key:e.imdbID},i.a.createElement("a",{href:"https://www.imdb.com/title/".concat(e.imdbID,"/"),target:"_blank"},e.Title," (",e.Year,")"))}))))))}}]),a}(n.Component)),C=(a(41),a(42),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"app"},i.a.createElement(d.a,{path:"/",exact:!0,component:D}),i.a.createElement(d.a,{path:"/list/:id",exact:!0,component:w}))}}]),a}(i.a.Component));r.a.render(i.a.createElement(l.a,null,i.a.createElement(C,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.ac523ba7.chunk.js.map