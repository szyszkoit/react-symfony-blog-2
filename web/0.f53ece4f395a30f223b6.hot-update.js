webpackHotUpdate(0,{209:function(e,t,n){"use strict";var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=u(n(1)),a=n(10),l=(n(88),n(64),u(n(119)),u(n(118)),u(n(211)));u(n(116)),u(n(115)),u(n(114));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),o(t,[{key:"render",value:function(){return r.default.createElement(l.default,null)}}]),t}();(0,a.render)(r.default.createElement(c,null),document.getElementById("app"))},211:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=m(n(119)),l=m(n(118)),u=m(n(116)),c=m(n(115)),f=m(n(114)),i=n(1),p=m(i),s=(n(10),n(88)),d=n(64);function m(e){return e&&e.__esModule?e:{default:e}}var b=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={authenticated:!1},e.onLogin=e.onLogin.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),r(t,[{key:"ComponentWillReceiveProps",value:function(e){console.log(e),$.ajax({type:"POST",url:loginCheck,dataType:"json",success:function(e){console.log(e)},error:function(e){e.responseJSON?console.log(e.responseJSON):console.log(e)}})}},{key:"onLogin",value:function(e){this.setState({authenticated:e})}},{key:"render",value:function(){var e=this;return p.default.createElement(s.BrowserRouter,null,p.default.createElement(d.Grid,null,p.default.createElement(d.Row,null,p.default.createElement(d.Navbar,{inverse:!0,collapseOnSelect:!0},p.default.createElement(d.Navbar.Header,null,p.default.createElement(d.Navbar.Brand,null,p.default.createElement(s.Link,{to:"/"},"Brand")),p.default.createElement(d.Navbar.Toggle,null)),p.default.createElement(d.Navbar.Collapse,null,p.default.createElement(d.Nav,null,p.default.createElement(d.NavItem,{eventKey:1,href:"#"},p.default.createElement(s.Link,{to:"/about"},"About")),p.default.createElement(d.NavItem,{eventKey:2,href:"#"},p.default.createElement(s.Link,{to:"/contact"},"Contact"))),p.default.createElement(d.Nav,{pullRight:!0},p.default.createElement(d.NavItem,{eventKey:1,href:"#"},p.default.createElement(s.Link,{to:"/login"},"Login")))))),p.default.createElement(s.Route,{exact:!0,path:"/",render:function(){return p.default.createElement(l.default,{posts:posts})}}),p.default.createElement(s.Route,{path:"/post/:id",component:function(e){return p.default.createElement(f.default,o({posts:posts},e))}}),p.default.createElement(s.Route,{path:"/about",component:u.default}),p.default.createElement(s.Route,{path:"/login",component:function(t){return p.default.createElement(a.default,o({onLogin:e.onLogin},t))}}),p.default.createElement(s.Route,{path:"/contact",component:c.default})))}}]),t}();t.default=b}});