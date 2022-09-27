(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e,n,o){var r=e.name,i=e.link,c=n.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=r,this._link=i,this._templateSelector=o,this._handleCardClick=c,this._element=this._getTemplate(),this._photo=this._element.querySelector(".card__photo")}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._photo.setAttribute("src",this._link),this._photo.setAttribute("alt","изображение ".concat(this._name)),this._element.querySelector(".card__place-name").textContent=this._name,this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this,t=this._element.querySelector(".card__like"),n=this._element.querySelector(".card__trash"),o=this._element.querySelector(".card__photo");t.addEventListener("click",(function(){t.classList.toggle("card__like_active")})),n.addEventListener("click",(function(){e._element.remove()})),o.addEventListener("click",(function(){e._handleCardClick(e.getObjectData())}))}},{key:"getObjectData",value:function(){var e={};return e.img=this._link,e.name=this._name,e}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._submitButton=this._formElement.querySelector(this._config.submitButtonSelector)}var t,o;return t=e,o=[{key:"_showError",value:function(e,t){e.classList.add(this._config.inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._config.errorClass)}},{key:"_hideError",value:function(e,t){e.classList.remove(this._config.inputErrorClass),t.textContent=e.validationMessage,t.classList.remove(this._config.errorClass)}},{key:"_checkInputValidity",value:function(e,t){e.validity.valid?this._hideError(e,t):this._showError(e,t)}},{key:"_toggleButtonState",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e?(this._submitButton.classList.remove(this._config.inactiveButtonClass),this._submitButton.disabled=!1):(this._submitButton.classList.add(this._config.inactiveButtonClass),this._submitButton.disabled="disabled")}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(this._formElement.checkValidity()),this._inputList.forEach((function(t){t.addEventListener("input",(function(){var n=e._formElement.querySelector(".".concat(t.id,"-error"));e._checkInputValidity(t,n),e._toggleButtonState(e._formElement.checkValidity())}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"deactivateButton",value:function(){this._submitButton.classList.add(this._config.inactiveButtonClass),this._submitButton.disabled="disabled"}}],o&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=function(){function e(t,n){var o=t.items,r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=o,this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var a=function(){function e(t){var n=t.profileName,o=t.profileDescription;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(n),this._profileDescription=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={};return e.name=this._profileName.textContent,e.job=this._profileDescription.textContent,e}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.name,this._profileDescription.textContent=e.job}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__button-close")&&e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=d(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},f.apply(this,arguments)}function d(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function h(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(c,e);var t,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(o);if(r){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._popupPhoto=t._popupElement.querySelector(".popup__photo"),t._popupPhotoDescription=t._popupElement.querySelector(".popup__photo-description"),t}return t=c,(n=[{key:"open",value:function(e){var t=e.img,n=e.name;this._popupPhoto.src=t,this._popupPhoto.alt=n,this._popupPhotoDescription.textContent=n,f(_(c.prototype),"open",this).call(this)}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(s);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=k(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},g.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function E(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(c,e);var t,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(o);if(r){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function c(e,t,n){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(o=i.call(this,e))._form=o._popupElement.querySelector(t),o._submitHandler=n,o._inputElements=o._form.querySelectorAll(".popup__input"),o}return t=c,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputElements.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._getInputValues()),e.close()})),g(O(c.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),g(O(c.prototype),"close",this).call(this)}},{key:"clearInputs",value:function(){this._form.reset()}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(s),j=(document.querySelector(".popup-view-photo"),document.querySelector(".popup__photo"),document.querySelector(".popup__photo-description"),document.querySelector(".foto-flow"),document.querySelector(".profile__button-edit")),C=document.querySelector(".popup-profile-form"),P=C.querySelector(".popup__input_type_name"),L=C.querySelector(".popup__input_type_job"),q=document.querySelector(".popup-card-form"),B=document.querySelector(".profile__button-add"),x={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_inactive",inputErrorClass:"popup__input_style_error",errorClass:"popup__text-error_active"};function R(e,n,o){return new t({name:e.name,link:e.link},n,o).generateCard()}var I=new i({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=R(e,{handleCardClick:function(e){var t=e.img,n=e.name;D.open({img:t,name:n})}},"#card");I.addItem(t)}},".foto-flow");I.renderItems();var D=new m(".popup-view-photo");D.setEventListeners();var T=new S(".popup-edit-place-card",".popup-card-form",(function(e){var t=R({name:e.name,link:e.link},{handleCardClick:function(e){var t=e.img,n=e.name;D.open({img:t,name:n})}},"#card");I.addItem(t)}));T.setEventListeners(),B.addEventListener("click",(function(){T.open(),T.clearInputs()}));var V=new S(".profile-popup",".popup-profile-form",(function(e){N.setUserInfo(e)}));V.setEventListeners();var N=new a({profileName:".profile__name",profileDescription:".profile__description"});j.addEventListener("click",(function(){var e=N.getUserInfo();P.value=e.name,L.value=e.job,V.open()})),new o(x,C).enableValidation(),new o(x,q).enableValidation()})();