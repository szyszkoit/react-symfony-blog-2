webpackHotUpdate(0,{119:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),l=(r=o)&&r.__esModule?r:{default:r},u=n(64);var c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={redirectToReferrer:!1},e.handleLogin=e.handleLogin.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"handleLogin",value:function(e){var t=new FormData(e.target);$.ajax({type:"POST",url:setData,dataType:"json",data:{_username:t.get("username"),_password:t.get("password")},success:function(e){console.log(e)},error:function(e){console.log(e)}})}},{key:"render",value:function(){var e=this;return l.default.createElement(u.Row,null,l.default.createElement(u.Col,{xs:3}),l.default.createElement(u.Col,{xs:6},l.default.createElement(u.Panel,null,l.default.createElement(u.Panel.Heading,null,"Zaloguj się"),l.default.createElement(u.Panel.Body,null,l.default.createElement(u.Form,{onSubmit:function(t){t.preventDefault(),e.handleLogin(t)}},l.default.createElement(u.ControlLabel,null,"Login"),l.default.createElement(u.FormControl,{id:"username",name:"username",type:"text",placeholder:""}),l.default.createElement(u.ControlLabel,null,"Hasło"),l.default.createElement(u.FormControl,{id:"password",name:"password",type:"password",placeholder:""}),l.default.createElement(u.Col,{className:"text-center",xs:12},l.default.createElement(u.Button,{type:"submit"},"Zaloguj")))))),l.default.createElement(u.Col,{xs:3}))}}]),t}();t.default=c}});