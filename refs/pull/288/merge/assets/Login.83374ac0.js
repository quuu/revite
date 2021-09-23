var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,s=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&i(e,n,t[n]);if(r)for(var n of r(t))a.call(t,n)&&i(e,n,t[n]);return e},c=(e,r)=>t(e,n(r));import{b as l,ac as u,F as p,y as d,T as h,l as f,i as m,aF as v,f as y,aG as g,aH as b,u as w,m as O,aA as _,g as S,ao as k,ap as R}from"./vendor.182b0579.js";import{c as j,e as A,d as C,B as P,O as x,T as W}from"./Radio.cb2de5b8.js";import{A as N,P as E,F as T,w as I,t as B,O as M}from"./main.10b8a2b2.js";import{C as z}from"./ComboBox.ad5d9601.js";import{A as $,T as L}from"./version.e2e2960b.js";var q="_login_18qft_1",D="_content_18qft_13",V="_attribution_18qft_18",U="_modal_18qft_27",K="_bg_18qft_32",F="_form_18qft_36",G="_create_18qft_56",X="_success_18qft_64",Y="_note_18qft_69",H="_mailProvider_18qft_72",J="_footer_18qft_85";var Q=j((function(e){return l(z,{value:e.locale,onChange:e=>C({type:"SET_LOCALE",locale:e.currentTarget.value})},Object.keys(A).map((e=>{const t=A[e];return l("option",{value:e,key:e},t.emoji," ",t.display)})))}),(e=>({locale:e.locale})));function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ee(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ee(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function te(e){return(te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){oe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ae(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ie(e,t){return(ie=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function se(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=ue(e);if(t){var o=ue(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ce(this,n)}}function ce(e,t){return!t||"object"!==te(t)&&"function"!=typeof t?le(e):t}function le(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ue(e){return(ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var pe=function(e){return Object.entries(e).filter((function(e){var t=Z(e,2);t[0];var n=t[1];return n||!1===n})).map((function(e){var t=Z(e,2),n=t[0],r=t[1];return"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(r))})).join("&")},de=[],he=!1,fe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ie(e,t)}(a,u.Component);var t,n,r,o=se(a);function a(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=o.call(this,e)).renderCaptcha=t.renderCaptcha.bind(le(t)),t.resetCaptcha=t.resetCaptcha.bind(le(t)),t.removeCaptcha=t.removeCaptcha.bind(le(t)),t.handleOnLoad=t.handleOnLoad.bind(le(t)),t.handleSubmit=t.handleSubmit.bind(le(t)),t.handleExpire=t.handleExpire.bind(le(t)),t.handleError=t.handleError.bind(le(t));var n="undefined"!=typeof hcaptcha;return t.ref=u.createRef(),t.state={isApiReady:n,isRemoved:!1,elementId:e.id,captchaId:""},t}return t=a,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.apihost,n=e.assethost,r=e.endpoint,o=e.host,a=e.imghost,i=e.languageOverride,s=e.reCaptchaCompat,c=e.reportapi,l=e.sentry,u=e.custom;this.state.isApiReady?this.renderCaptcha():(he||function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};he=!0,window.hcaptchaOnLoad=function(){de=de.filter((function(e){return e(),!1}))};var t=e.apihost||"https://hcaptcha.com";delete e.apihost;var n=document.createElement("script");n.src="".concat(t,"/1/api.js?render=explicit&onload=hcaptchaOnLoad"),n.async=!0;var r=pe(e);n.src+=""!==r?"&".concat(r):"",document.head.appendChild(n)}({apihost:t,assethost:n,endpoint:r,hl:i,host:o,imghost:a,recaptchacompat:!1===s?"off":null,reportapi:c,sentry:l,custom:u}),de.push(this.handleOnLoad))}},{key:"componentWillUnmount",value:function(){var e=this.state,t=e.isApiReady,n=e.isRemoved,r=e.captchaId;t&&!n&&(hcaptcha.reset(r),hcaptcha.remove(r))}},{key:"shouldComponentUpdate",value:function(e,t){return this.state.isApiReady===t.isApiReady&&this.state.isRemoved===t.isRemoved}},{key:"componentDidUpdate",value:function(e){var t=this;["sitekey","size","theme","tabindex","languageOverride","endpoint"].every((function(n){return e[n]===t.props[n]}))||this.removeCaptcha((function(){t.renderCaptcha()}))}},{key:"renderCaptcha",value:function(){if(this.state.isApiReady){var e=hcaptcha.render(this.ref.current,re(re({},this.props),{},{"error-callback":this.handleError,"expired-callback":this.handleExpire,callback:this.handleSubmit}));this.setState({isRemoved:!1,captchaId:e})}}},{key:"resetCaptcha",value:function(){var e=this.state,t=e.isApiReady,n=e.isRemoved,r=e.captchaId;t&&!n&&hcaptcha.reset(r)}},{key:"removeCaptcha",value:function(e){var t=this.state,n=t.isApiReady,r=t.isRemoved,o=t.captchaId;n&&!r&&this.setState({isRemoved:!0},(function(){hcaptcha.remove(o),e&&e()}))}},{key:"handleOnLoad",value:function(){var e=this;this.setState({isApiReady:!0},(function(){var t=e.props.onLoad;t&&t(),e.renderCaptcha()}))}},{key:"handleSubmit",value:function(e){var t=this.props.onVerify,n=this.state,r=n.isRemoved,o=n.captchaId;"undefined"==typeof hcaptcha||r||t(hcaptcha.getResponse(o),hcaptcha.getRespKey(o))}},{key:"handleExpire",value:function(){var e=this.props.onExpire,t=this.state,n=t.isApiReady,r=t.isRemoved,o=t.captchaId;n&&!r&&(hcaptcha.reset(o),e&&e())}},{key:"handleError",value:function(e){var t=this.props.onError,n=this.state,r=n.isApiReady,o=n.isRemoved,a=n.captchaId;r&&!o&&(hcaptcha.reset(a),t&&t(e))}},{key:"execute",value:function(){var e=this.state,t=e.isApiReady,n=e.isRemoved,r=e.captchaId;t&&!n&&hcaptcha.execute(r)}},{key:"render",value:function(){var e=this.state.elementId;return u.createElement("div",{ref:this.ref,id:e})}}])&&ae(t.prototype,n),r&&ae(t,r),a}();function me(e){var t,n;const r=p(N);return d((()=>{var t;(null==(t=r.configuration)?void 0:t.features.captcha.enabled)||e.onSuccess()}),[null==(t=r.configuration)?void 0:t.features.captcha.enabled,e]),(null==(n=r.configuration)?void 0:n.features.captcha.enabled)?l("div",null,l(fe,{sitekey:r.configuration.features.captcha.key,onVerify:t=>e.onSuccess(t)}),l("div",{className:J},l("a",{onClick:e.onCancel},l(h,{id:"login.cancel"})))):l(E,{type:"spinner"})}function ve(){return l("span",{className:J},l("a",{href:"https://revolt.chat/about",target:"_blank",rel:"noreferrer"},l(h,{id:"general.about"})),"·",l("a",{href:"https://revolt.chat/terms",target:"_blank",rel:"noreferrer"},l(h,{id:"general.tos"})),"·",l("a",{href:"https://revolt.chat/privacy",target:"_blank",rel:"noreferrer"},l(h,{id:"general.privacy"})))}function ye({email:e}){const t=function(e){if(!e)return;const t=/@(.+)/.exec(e);if(null===t)return;const n=t[1];switch(n){case"gmail.com":case"googlemail.com":return["Gmail","https://gmail.com"];case"tuta.io":return["Tutanota","https://mail.tutanota.com"];case"outlook.com":case"hotmail.com":return["Outlook","https://outlook.live.com"];case"yahoo.com":return["Yahoo","https://mail.yahoo.com"];case"wp.pl":return["WP Poczta","https://poczta.wp.pl"];case"protonmail.com":case"protonmail.ch":case"pm.me":return["ProtonMail","https://mail.protonmail.com"];case"seznam.cz":case"email.cz":case"post.cz":return["Seznam","https://email.seznam.cz"];case"zoho.com":return["Zoho Mail","https://mail.zoho.com/zm/"];case"aol.com":case"aim.com":return["AOL Mail","https://mail.aol.com/"];case"icloud.com":return["iCloud Mail","https://mail.aol.com/"];case"mail.com":case"email.com":return["mail.com","https://www.mail.com/mail/"];case"yandex.com":return["Yandex Mail","https://mail.yandex.com/"];default:return[n,`https://${n}`]}}(e);return t?l("div",{className:H},l("a",{href:t[1],target:"_blank",rel:"noreferrer"},l(P,null,l(h,{id:"login.open_mail_provider",fields:{provider:t[0]}})))):null}function ge(){if("undefined"==typeof window)return"";const e=new URLSearchParams(window.location.search).get("code");return null!=e?e:""}function be({page:e,callback:t}){var n,r,o,a,i;const u=p(N),[d,w]=f(!1),[O,_]=f(void 0),[S,k]=f(void 0),[R,j]=f(void 0),{handleSubmit:A,register:C,errors:W,setError:M}=m({defaultValues:{email:"",password:"",invite:ge()}});return void 0!==O?l("div",{className:X},(null==(n=u.configuration)?void 0:n.features.email)?l(y,null,l(g,{size:72}),l("h2",null,l(h,{id:"login.check_mail"})),l("p",{className:Y},l(h,{id:"login.email_delay"})),l(ye,{email:O})):l(y,null,l(b,{size:72}),l("h1",null,l(h,{id:"login.successful_registration"}))),l("span",{className:J},l(v,{to:"/login"},l("a",null,l(h,{id:"login.remembered"}))))):R?l(me,s({},R)):d?l(E,{type:"spinner"}):l("div",{className:F},l("img",{src:I}),l("form",{onSubmit:A((async function(n){var r;function o(e){w(!1);const t=B(e);switch(t){case"email_in_use":case"unknown_user":return M("email",{type:"",message:t});case"invalid_invite":return M("invite",{type:"",message:t})}k(t)}k(void 0),w(!0);try{(null==(r=u.configuration)?void 0:r.features.captcha.enabled)&&"reset"!==e?j({onSuccess:async e=>{j(void 0);try{await t(c(s({},n),{captcha:e})),_(n.email)}catch(r){o(r)}},onCancel:()=>{j(void 0),w(!1)}}):(await t(n),_(n.email))}catch(a){o(a)}}))},"reset"!==e&&l(T,{type:"email",register:C,showOverline:!0,error:null==(r=W.email)?void 0:r.message}),("login"===e||"create"===e||"reset"===e)&&l(T,{type:"password",register:C,showOverline:!0,error:null==(o=W.password)?void 0:o.message}),(null==(a=u.configuration)?void 0:a.features.invite_only)&&"create"===e&&l(T,{type:"invite",register:C,showOverline:!0,error:null==(i=W.invite)?void 0:i.message}),S&&l(x,{type:"error",error:S},l(h,{id:`login.error.${e}`})),l(P,null,l(h,{id:"create"===e?"login.register":"login"===e?"login.title":"reset"===e?"login.set_password":"resend"===e?"login.resend":"login.reset"}))),"create"===e&&l(y,null,l("span",{className:G},l(h,{id:"login.existing"}),l(v,{to:"/login"},l(h,{id:"login.title"}))),l("span",{className:G},l(h,{id:"login.missing_verification"}),l(v,{to:"/login/resend"},l(h,{id:"login.resend"})))),"login"===e&&l(y,null,l("span",{className:G},l(h,{id:"login.new"}),l(v,{to:"/login/create"},l(h,{id:"login.create"}))),l("span",{className:G},l(h,{id:"login.forgot"}),l(v,{to:"/login/reset"},l(h,{id:"login.reset"})))),("reset"===e||"resend"===e||"send_reset"===e)&&l(y,null,l("span",{className:G},l(v,{to:"/login"},l(h,{id:"login.remembered"})))),l(ve,null))}function we(){const e=p(N);return l(be,{page:"create",callback:t=>e.register(t)})}var Oe=function(e,t,n){this.name=e,this.version=t,this.os=n,this.type="browser"},_e=function(e){this.version=e,this.type="node",this.name="node",this.os=process.platform},Se=function(e,t,n,r){this.name=e,this.version=t,this.os=n,this.bot=r,this.type="bot-device"},ke=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},Re=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},je=/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,Ae=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],Ce=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function Pe(e){return e?xe(e):"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new Re:"undefined"!=typeof navigator?xe(navigator.userAgent):"undefined"!=typeof process&&process.version?new _e(process.version.slice(1)):null}function xe(e){var t=function(e){return""!==e&&Ae.reduce((function(t,n){var r=n[0],o=n[1];if(t)return t;var a=o.exec(e);return!!a&&[r,a]}),!1)}(e);if(!t)return null;var n=t[0],r=t[1];if("searchbot"===n)return new ke;var o=r[1]&&r[1].split(/[._]/).slice(0,3);o?o.length<3&&(o=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],i=0,s=a.length;i<s;i++,o++)r[o]=a[i];return r}(o,function(e){for(var t=[],n=0;n<e;n++)t.push("0");return t}(3-o.length))):o=[];var a=o.join("."),i=function(e){for(var t=0,n=Ce.length;t<n;t++){var r=Ce[t],o=r[0];if(r[1].exec(e))return o}return null}(e),s=je.exec(e);return s&&s[1]?new Se(n,a,i,s[1]):new Oe(n,a,i)}function We(){const{login:e}=p(M),t=w();return l(be,{page:"login",callback:async n=>{const r=Pe();let o;if(r){let{name:e}=r;const{os:t}=r;window.isNative?o=`Revolt Desktop on ${t}`:("ios"===e?e="safari":"fxios"===e&&(e="firefox"),o=`${e} on ${t}`)}else o="Unknown Device";await e(c(s({},n),{friendly_name:o})),t.push("/")}})}function Ne(){const e=p(N);return l(be,{page:"send_reset",callback:async t=>{await e.req("POST","/auth/account/reset_password",t)}})}function Ee(){const{token:e}=O(),t=p(N),n=w();return l(be,{page:"reset",callback:async r=>{await t.req("PATCH","/auth/account/reset_password",s({token:e},r)),n.push("/login")}})}function Te(){const e=p(N);return l(be,{page:"resend",callback:async t=>{await e.req("POST","/auth/account/reverify",t)}})}function Ie(){const[e,t]=f(void 0),{token:n}=O(),r=p(N),o=w();return d((()=>{r.req("POST",`/auth/account/verify/${n}`).then((()=>o.push("/login"))).catch((e=>t(B(e))))}),[]),e?l(x,{type:"error",error:e}):l(E,{type:"ring"})}function Be(){var e,t;const n=p(W),r=p(N);return l(y,null,window.isNative&&!window.native.getConfig().frame&&l(L,null),l("div",{className:q},l(_,null,l("meta",{name:"theme-color",content:n.background})),l("div",{className:D},l("div",{className:V},l("span",null,"API:"," ",l("code",null,null!=(t=null==(e=r.configuration)?void 0:e.revolt)?t:"???")," ","· revolt.js: ",l("code",null,S.LIBRARY_VERSION)," ","· App: ",l("code",null,$)),l("span",null,l(Q,null))),l("div",{className:U},l(k,null,l(R,{path:"/login/create"},l(we,null)),l(R,{path:"/login/resend"},l(Te,null)),l(R,{path:"/login/verify/:token"},l(Ie,null)),l(R,{path:"/login/reset/:token"},l(Ee,null)),l(R,{path:"/login/reset"},l(Ne,null)),l(R,{path:"/"},l(We,null)))),l("div",{className:V},l("span",null,l(h,{id:"general.image_by"})," ‎@lorenzoherrera ‏· unsplash.com"))),l("div",{className:K,style:{background:"url('/revite/refs/pull/288/merge/assets/background.38ab3fd6.jpg')"}})))}export{Be as default};
//# sourceMappingURL=Login.83374ac0.js.map
