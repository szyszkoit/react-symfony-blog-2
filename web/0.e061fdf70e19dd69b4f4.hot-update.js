webpackHotUpdate(0,{211:function(e,t,n){"use strict";var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=i(n(116)),o=i(n(115)),r=n(1),u=i(r),c=(n(10),n(88)),f=n(64);function i(e){return e&&e.__esModule?e:{default:e}}!function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(t,r.Component),a(t,[{key:"render",value:function(){return u.default.createElement(c.BrowserRouter,null,u.default.createElement(f.Grid,null,u.default.createElement(f.Row,null,u.default.createElement(f.Navbar,{inverse:!0,collapseOnSelect:!0},u.default.createElement(f.Navbar.Header,null,u.default.createElement(f.Navbar.Brand,null,u.default.createElement(c.Link,{to:"/"},"Brand")),u.default.createElement(f.Navbar.Toggle,null)),u.default.createElement(f.Navbar.Collapse,null,u.default.createElement(f.Nav,null,u.default.createElement(f.NavItem,{eventKey:1,href:"#"},u.default.createElement(c.Link,{to:"/about"},"About")),u.default.createElement(f.NavItem,{eventKey:2,href:"#"},u.default.createElement(c.Link,{to:"/contact"},"Contact"))),u.default.createElement(f.Nav,{pullRight:!0},u.default.createElement(f.NavItem,{eventKey:1,href:"#"},this.state.authenticated?u.default.createElement(c.Link,{to:"/logout"},"Logout"):u.default.createElement(c.Link,{to:"/login"},"Login")))))),u.default.createElement(c.Route,{exact:!0,path:"/",render:function(){return u.default.createElement(Home,{posts:posts})}}),u.default.createElement(c.Route,{path:"/post/:id",component:MyPostPage}),u.default.createElement(c.Route,{path:"/about",component:l.default}),u.default.createElement(c.Route,{path:"/login",component:MyLoginPage}),u.default.createElement(c.Route,{path:"/contact",component:o.default})))}}])}()}});