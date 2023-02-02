!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=56)}([function(t,e,r){var n=r(9)(Object,"create");t.exports=n},function(t,e,r){var n=r(41);t.exports=function(t,e){for(var r=t.length;r--;)if(n(t[r][0],e))return r;return-1}},function(t,e,r){var n=r(47);t.exports=function(t,e){var r=t.__data__;return n(e)?r["string"==typeof e?"string":"hash"]:r.map}},function(t,e){var r=Array.isArray;t.exports=r},function(t,e,r){var n=r(8),o=r(20);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==n(t)}},function(t,e,r){var n=r(6).Symbol;t.exports=n},function(t,e,r){var n=r(16),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();t.exports=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(11),o=r(55);function i(t,e,r){if(void 0===r&&(r={}),!0===r.final)return function(t,e){var r=i(e,t);return r=(r+180)%360}(t,e);var a=o.getCoord(t),s=o.getCoord(e),p=n.degreesToRadians(a[0]),h=n.degreesToRadians(s[0]),u=n.degreesToRadians(a[1]),m=n.degreesToRadians(s[1]),l=Math.sin(h-p)*Math.cos(m),c=Math.cos(u)*Math.sin(m)-Math.sin(u)*Math.cos(m)*Math.cos(h-p);return n.radiansToDegrees(Math.atan2(l,c))}e.default=i},function(t,e,r){var n=r(5),o=r(18),i=r(19),a=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?o(t):i(t)}},function(t,e,r){var n=r(28),o=r(33);t.exports=function(t,e){var r=o(t,e);return n(r)?r:void 0}},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,r){"use strict";function n(t,e,r){void 0===r&&(r={});var n={type:"Feature"};return(0===r.id||r.id)&&(n.id=r.id),r.bbox&&(n.bbox=r.bbox),n.properties=e||{},n.geometry=t,n}function o(t,e,r){return void 0===r&&(r={}),n({type:"Point",coordinates:t},e,r)}function i(t,e,r){void 0===r&&(r={});for(var o=0,i=t;o<i.length;o++){var a=i[o];if(a.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var s=0;s<a[a.length-1].length;s++)if(a[a.length-1][s]!==a[0][s])throw new Error("First and last Position are not equivalent.")}return n({type:"Polygon",coordinates:t},e,r)}function a(t,e,r){if(void 0===r&&(r={}),t.length<2)throw new Error("coordinates must be an array of two or more positions");return n({type:"LineString",coordinates:t},e,r)}function s(t,e){void 0===e&&(e={});var r={type:"FeatureCollection"};return e.id&&(r.id=e.id),e.bbox&&(r.bbox=e.bbox),r.features=t,r}function p(t,e,r){return void 0===r&&(r={}),n({type:"MultiLineString",coordinates:t},e,r)}function h(t,e,r){return void 0===r&&(r={}),n({type:"MultiPoint",coordinates:t},e,r)}function u(t,e,r){return void 0===r&&(r={}),n({type:"MultiPolygon",coordinates:t},e,r)}function m(t,r){void 0===r&&(r="kilometers");var n=e.factors[r];if(!n)throw new Error(r+" units is invalid");return t*n}function l(t,r){void 0===r&&(r="kilometers");var n=e.factors[r];if(!n)throw new Error(r+" units is invalid");return t/n}function c(t){return 180*(t%(2*Math.PI))/Math.PI}function f(t){return!isNaN(t)&&null!==t&&!Array.isArray(t)&&!/^\s*$/.test(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.earthRadius=6371008.8,e.factors={centimeters:100*e.earthRadius,centimetres:100*e.earthRadius,degrees:e.earthRadius/111325,feet:3.28084*e.earthRadius,inches:39.37*e.earthRadius,kilometers:e.earthRadius/1e3,kilometres:e.earthRadius/1e3,meters:e.earthRadius,metres:e.earthRadius,miles:e.earthRadius/1609.344,millimeters:1e3*e.earthRadius,millimetres:1e3*e.earthRadius,nauticalmiles:e.earthRadius/1852,radians:1,yards:e.earthRadius/1.0936},e.unitsFactors={centimeters:100,centimetres:100,degrees:1/111325,feet:3.28084,inches:39.37,kilometers:.001,kilometres:.001,meters:1,metres:1,miles:1/1609.344,millimeters:1e3,millimetres:1e3,nauticalmiles:1/1852,radians:1/e.earthRadius,yards:1/1.0936},e.areaFactors={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,millimeters:1e6,millimetres:1e6,yards:1.195990046},e.feature=n,e.geometry=function(t,e,r){switch(void 0===r&&(r={}),t){case"Point":return o(e).geometry;case"LineString":return a(e).geometry;case"Polygon":return i(e).geometry;case"MultiPoint":return h(e).geometry;case"MultiLineString":return p(e).geometry;case"MultiPolygon":return u(e).geometry;default:throw new Error(t+" is invalid")}},e.point=o,e.points=function(t,e,r){return void 0===r&&(r={}),s(t.map((function(t){return o(t,e)})),r)},e.polygon=i,e.polygons=function(t,e,r){return void 0===r&&(r={}),s(t.map((function(t){return i(t,e)})),r)},e.lineString=a,e.lineStrings=function(t,e,r){return void 0===r&&(r={}),s(t.map((function(t){return a(t,e)})),r)},e.featureCollection=s,e.multiLineString=p,e.multiPoint=h,e.multiPolygon=u,e.geometryCollection=function(t,e,r){return void 0===r&&(r={}),n({type:"GeometryCollection",geometries:t},e,r)},e.round=function(t,e){if(void 0===e&&(e=0),e&&!(e>=0))throw new Error("precision must be a positive number");var r=Math.pow(10,e||0);return Math.round(t*r)/r},e.radiansToLength=m,e.lengthToRadians=l,e.lengthToDegrees=function(t,e){return c(l(t,e))},e.bearingToAzimuth=function(t){var e=t%360;return e<0&&(e+=360),e},e.radiansToDegrees=c,e.degreesToRadians=function(t){return t%360*Math.PI/180},e.convertLength=function(t,e,r){if(void 0===e&&(e="kilometers"),void 0===r&&(r="kilometers"),!(t>=0))throw new Error("length must be a positive number");return m(l(t,e),r)},e.convertArea=function(t,r,n){if(void 0===r&&(r="meters"),void 0===n&&(n="kilometers"),!(t>=0))throw new Error("area must be a positive number");var o=e.areaFactors[r];if(!o)throw new Error("invalid original units");var i=e.areaFactors[n];if(!i)throw new Error("invalid final units");return t/o*i},e.isNumber=f,e.isObject=function(t){return!!t&&t.constructor===Object},e.validateBBox=function(t){if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be an Array");if(4!==t.length&&6!==t.length)throw new Error("bbox must be an Array of 4 or 6 numbers");t.forEach((function(t){if(!f(t))throw new Error("bbox must only contain numbers")}))},e.validateId=function(t){if(!t)throw new Error("id is required");if(-1===["string","number"].indexOf(typeof t))throw new Error("id must be a number or a string")},e.radians2degrees=function(){throw new Error("method has been renamed to `radiansToDegrees`")},e.degrees2radians=function(){throw new Error("method has been renamed to `degreesToRadians`")},e.distanceToDegrees=function(){throw new Error("method has been renamed to `lengthToDegrees`")},e.distanceToRadians=function(){throw new Error("method has been renamed to `lengthToRadians`")},e.radiansToDistance=function(){throw new Error("method has been renamed to `radiansToLength`")},e.bearingToAngle=function(){throw new Error("method has been renamed to `bearingToAzimuth`")},e.convertDistance=function(){throw new Error("method has been renamed to `convertLength`")}},function(t,e,r){var n=r(13);t.exports=function(t,e,r){var o=null==t?void 0:n(t,e);return void 0===o?r:o}},function(t,e,r){var n=r(14),o=r(54);t.exports=function(t,e){for(var r=0,i=(e=n(e,t)).length;null!=t&&r<i;)t=t[o(e[r++])];return r&&r==i?t:void 0}},function(t,e,r){var n=r(3),o=r(15),i=r(21),a=r(51);t.exports=function(t,e){return n(t)?t:o(t,e)?[t]:i(a(t))}},function(t,e,r){var n=r(3),o=r(4),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;t.exports=function(t,e){if(n(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!o(t))||(a.test(t)||!i.test(t)||null!=e&&t in Object(e))}},function(t,e,r){(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e;t.exports=r}).call(this,r(17))},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var n=r(5),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,s=n?n.toStringTag:void 0;t.exports=function(t){var e=i.call(t,s),r=t[s];try{t[s]=void 0;var n=!0}catch(t){}var o=a.call(t);return n&&(e?t[s]=r:delete t[s]),o}},function(t,e){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,r){var n=r(22),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=n((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,(function(t,r,n,o){e.push(n?o.replace(i,"$1"):r||t)})),e}));t.exports=a},function(t,e,r){var n=r(23);t.exports=function(t){var e=n(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}},function(t,e,r){var n=r(24);function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=t.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(o.Cache||n),r}o.Cache=n,t.exports=o},function(t,e,r){var n=r(25),o=r(46),i=r(48),a=r(49),s=r(50);function p(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}p.prototype.clear=n,p.prototype.delete=o,p.prototype.get=i,p.prototype.has=a,p.prototype.set=s,t.exports=p},function(t,e,r){var n=r(26),o=r(38),i=r(45);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(i||o),string:new n}}},function(t,e,r){var n=r(27),o=r(34),i=r(35),a=r(36),s=r(37);function p(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}p.prototype.clear=n,p.prototype.delete=o,p.prototype.get=i,p.prototype.has=a,p.prototype.set=s,t.exports=p},function(t,e,r){var n=r(0);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},function(t,e,r){var n=r(29),o=r(30),i=r(10),a=r(32),s=/^\[object .+?Constructor\]$/,p=Function.prototype,h=Object.prototype,u=p.toString,m=h.hasOwnProperty,l=RegExp("^"+u.call(m).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(n(t)?l:s).test(a(t))}},function(t,e,r){var n=r(8),o=r(10);t.exports=function(t){if(!o(t))return!1;var e=n(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},function(t,e,r){var n,o=r(31),i=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!i&&i in t}},function(t,e,r){var n=r(6)["__core-js_shared__"];t.exports=n},function(t,e){var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,r){var n=r(0),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(n){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(e,t)?e[t]:void 0}},function(t,e,r){var n=r(0),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return n?void 0!==e[t]:o.call(e,t)}},function(t,e,r){var n=r(0);t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=n&&void 0===e?"__lodash_hash_undefined__":e,this}},function(t,e,r){var n=r(39),o=r(40),i=r(42),a=r(43),s=r(44);function p(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}p.prototype.clear=n,p.prototype.delete=o,p.prototype.get=i,p.prototype.has=a,p.prototype.set=s,t.exports=p},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,r){var n=r(1),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=n(e,t);return!(r<0)&&(r==e.length-1?e.pop():o.call(e,r,1),--this.size,!0)}},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,r){var n=r(1);t.exports=function(t){var e=this.__data__,r=n(e,t);return r<0?void 0:e[r][1]}},function(t,e,r){var n=r(1);t.exports=function(t){return n(this.__data__,t)>-1}},function(t,e,r){var n=r(1);t.exports=function(t,e){var r=this.__data__,o=n(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this}},function(t,e,r){var n=r(9)(r(6),"Map");t.exports=n},function(t,e,r){var n=r(2);t.exports=function(t){var e=n(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,r){var n=r(2);t.exports=function(t){return n(this,t).get(t)}},function(t,e,r){var n=r(2);t.exports=function(t){return n(this,t).has(t)}},function(t,e,r){var n=r(2);t.exports=function(t,e){var r=n(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this}},function(t,e,r){var n=r(52);t.exports=function(t){return null==t?"":n(t)}},function(t,e,r){var n=r(5),o=r(53),i=r(3),a=r(4),s=n?n.prototype:void 0,p=s?s.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(i(e))return o(e,t)+"";if(a(e))return p?p.call(e):"";var r=e+"";return"0"==r&&1/e==-1/0?"-0":r}},function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}},function(t,e,r){var n=r(4);t.exports=function(t){if("string"==typeof t||n(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(11);e.getCoord=function(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if("Feature"===t.type&&null!==t.geometry&&"Point"===t.geometry.type)return t.geometry.coordinates;if("Point"===t.type)return t.coordinates}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return t;throw new Error("coord must be GeoJSON Point or an Array of numbers")},e.getCoords=function(t){if(Array.isArray(t))return t;if("Feature"===t.type){if(null!==t.geometry)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")},e.containsNumber=function t(e){if(e.length>1&&n.isNumber(e[0])&&n.isNumber(e[1]))return!0;if(Array.isArray(e[0])&&e[0].length)return t(e[0]);throw new Error("coordinates must only contain numbers")},e.geojsonType=function(t,e,r){if(!e||!r)throw new Error("type and name required");if(!t||t.type!==e)throw new Error("Invalid input to "+r+": must be a "+e+", given "+t.type)},e.featureOf=function(t,e,r){if(!t)throw new Error("No feature passed");if(!r)throw new Error(".featureOf() requires a name");if(!t||"Feature"!==t.type||!t.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!t.geometry||t.geometry.type!==e)throw new Error("Invalid input to "+r+": must be a "+e+", given "+t.geometry.type)},e.collectionOf=function(t,e,r){if(!t)throw new Error("No featureCollection passed");if(!r)throw new Error(".collectionOf() requires a name");if(!t||"FeatureCollection"!==t.type)throw new Error("Invalid input to "+r+", FeatureCollection required");for(var n=0,o=t.features;n<o.length;n++){var i=o[n];if(!i||"Feature"!==i.type||!i.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!i.geometry||i.geometry.type!==e)throw new Error("Invalid input to "+r+": must be a "+e+", given "+i.geometry.type)}},e.getGeom=function(t){return"Feature"===t.type?t.geometry:t},e.getType=function(t,e){return"FeatureCollection"===t.type?"FeatureCollection":"GeometryCollection"===t.type?"GeometryCollection":"Feature"===t.type&&null!==t.geometry?t.geometry.type:t.type}},function(t,e,r){"use strict";r.r(e);var n={_enableKeyListener:function(){L.DomEvent.on(this.map.getContainer(),"keydown",this._keyDownFunction,this),L.DomEvent.on(this.map.getContainer(),"keyup",this._keyDownFunction,this),L.DomEvent.on(this.map.getContainer(),"mouseover",this._keyDownFunction,this),this.map.boxZoom.disable()},_disableKeyListener:function(){L.DomEvent.off(this.map.getContainer(),"keydown",this._keyDownFunction,this),L.DomEvent.off(this.map.getContainer(),"keyup",this._keyDownFunction,this),L.DomEvent.off(this.map.getContainer(),"mouseover",this._keyDownFunction,this),this.map.pm.pmOrtho._defaultBox&&this.map.boxZoom.enable()},_keyDownFunction:function(t){if("keyup"!=t.type)if(this.map.pm.pmOrtho.options.customKey&&"shift"!==this.map.pm.pmOrtho.options.customKey){var e=this.map.pm.pmOrtho.options.customKey;t.key==e||t.code==e||t.which==e||t.keyCode==e||"alt"==e&&t.altKey?this.map.pm.pmOrtho._shiftpressed=!0:"strg"!=e&&"ctrl"!=e||!t.ctrlKey?this.map.pm.pmOrtho._shiftpressed=!1:this.map.pm.pmOrtho._shiftpressed=!0}else this.map.pm.pmOrtho._shiftpressed=t.shiftKey;else this.map.pm.pmOrtho._shiftpressed=!1},_getPointofAngle:function(t,e){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=this.map.latLngToContainerPoint(t),o=this.map.latLngToContainerPoint(e),i=this._getDistance(n,o),a=this._getAngle(n,o),s=this.options.snapAngle||45,p=0,h=[],u=0,m=0;m<360/s;)u=(m*s+r)%360,h.push(u),m++;r%90==0&&h.push(360),h.sort((function(t,e){return t-e})),p=h.reduce((function(t,e){return Math.abs(e-a)<Math.abs(t-a)?e:t}));var l=this._findDestinationPoint(n,i,p);return this.map.containerPointToLatLng(l)},_findDestinationPoint:function(t,e,r){return r=(r-90)%360,{x:Math.round(Math.cos(r*Math.PI/180)*e+t.x),y:Math.round(Math.sin(r*Math.PI/180)*e+t.y)}},_getDistance:function(t,e){var r=t.x-e.x,n=t.y-e.y;return Math.sqrt(r*r+n*n)},_getAngle:function(t,e){var r=e.x-t.x,n=e.y-t.y,o=-1*(180*Math.atan2(n,r)/Math.PI*-1-90);return(o<0?o+360:o)%360},_getRectanglePoint:function(t,e){var r,n=L.rectangle([t,e]),o=this.map.latLngToContainerPoint(t).x-this.map.latLngToContainerPoint(e).x,i=this.map.latLngToContainerPoint(t).y-this.map.latLngToContainerPoint(e).y,a=this.map.pm.pmOrtho._getDistance(this.map.latLngToContainerPoint(n.getBounds().getNorthEast()),this.map.latLngToContainerPoint(n.getBounds().getNorthWest())),s=this.map.pm.pmOrtho._getDistance(this.map.latLngToContainerPoint(n.getBounds().getNorthEast()),this.map.latLngToContainerPoint(n.getBounds().getSouthEast())),p=this.map.latLngToContainerPoint(t),h=this.map.latLngToContainerPoint(e);if(a>s){var u={x:h.x,y:p.y},m=i<0?180:0;r=this.map.pm.pmOrtho._findDestinationPoint(u,a,m)}else{var l={x:p.x,y:h.y},c=o<0?90:-90;r=this.map.pm.pmOrtho._findDestinationPoint(l,s,c)}return this.map.containerPointToLatLng(r)}},o=r(12),i=r.n(o),a={meters:6371008.8,metres:6371008.8,millimeters:6371008800,millimetres:6371008800,centimeters:637100880,centimetres:637100880,kilometers:6371.0088,kilometres:6371.0088,miles:3958.761333810546,nauticalmiles:6371008.8/1852,inches:6371008.8*39.37,yards:6371008.8/1.0936,feet:20902260.511392,radians:1,degrees:6371008.8/111325};function s(t,e,r){if(!g(r=r||{}))throw new Error("options is invalid");var n=r.bbox,o=r.id;if(void 0===t)throw new Error("geometry is required");if(e&&e.constructor!==Object)throw new Error("properties must be an Object");n&&d(n),o&&_(o);var i={type:"Feature"};return o&&(i.id=o),n&&(i.bbox=n),i.properties=e||{},i.geometry=t,i}function p(t,e,r){if(!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!f(t[0])||!f(t[1]))throw new Error("coordinates must contain numbers");return s({type:"Point",coordinates:t},e,r)}function h(t,e,r){if(!t)throw new Error("coordinates is required");for(var n=0;n<t.length;n++){var o=t[n];if(o.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var i=0;i<o[o.length-1].length;i++){if(0===n&&0===i&&!f(o[0][0])||!f(o[0][1]))throw new Error("coordinates must contain numbers");if(o[o.length-1][i]!==o[0][i])throw new Error("First and last Position are not equivalent.")}}return s({type:"Polygon",coordinates:t},e,r)}function u(t,e,r){if(!t)throw new Error("coordinates is required");if(t.length<2)throw new Error("coordinates must be an array of two or more positions");if(!f(t[0][1])||!f(t[0][1]))throw new Error("coordinates must contain numbers");return s({type:"LineString",coordinates:t},e,r)}function m(t,e){if(null==t)throw new Error("distance is required");if(e&&"string"!=typeof e)throw new Error("units must be a string");var r=a[e||"kilometers"];if(!r)throw new Error(e+" units is invalid");return t/r}function l(t){if(null==t)throw new Error("radians is required");return 180*(t%(2*Math.PI))/Math.PI}function c(t){if(null==t)throw new Error("degrees is required");return t%360*Math.PI/180}function f(t){return!isNaN(t)&&null!==t&&!Array.isArray(t)}function g(t){return!!t&&t.constructor===Object}function d(t){if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be an Array");if(4!==t.length&&6!==t.length)throw new Error("bbox must be an Array of 4 or 6 numbers");t.forEach((function(t){if(!f(t))throw new Error("bbox must only contain numbers")}))}function _(t){if(!t)throw new Error("id is required");if(-1===["string","number"].indexOf(typeof t))throw new Error("id must be a number or a string")}var y=function(t,e,r,n){if(!g(n=n||{}))throw new Error("options is invalid");var o=n.units,i=n.properties,a=function(t){if(!t)throw new Error("coord is required");if("Feature"===t.type&&null!==t.geometry&&"Point"===t.geometry.type)return t.geometry.coordinates;if("Point"===t.type)return t.coordinates;if(Array.isArray(t)&&t.length>=2&&void 0===t[0].length&&void 0===t[1].length)return t;throw new Error("coord must be GeoJSON Point or an Array of numbers")}(t),s=c(a[0]),h=c(a[1]),u=c(r),f=m(e,o),d=Math.asin(Math.sin(h)*Math.cos(f)+Math.cos(h)*Math.sin(f)*Math.cos(u));return p([l(s+Math.atan2(Math.sin(u)*Math.sin(f)*Math.cos(h),Math.cos(f)-Math.sin(h)*Math.sin(d))),l(d)],i)};var v=function(t,e,r){var n=(r=r||{}).steps||64,o=r.properties;if(!t)throw new Error("center is required");if(!e)throw new Error("radius is required");if("object"!=typeof r)throw new Error("options must be an object");if("number"!=typeof n)throw new Error("steps must be a number");n=n||64,o=o||t.properties||{};for(var i=[],a=0;a<n;a++)i.push(y(t,e,-360*a/n,r).geometry.coordinates);return i.push(i[0]),h([i],o)};function w(t){var e=t%360;return e<0&&(e+=360),e}var b=function(t,e,r,n,o){if(!g(o=o||{}))throw new Error("options is invalid");var i=o.steps,a=o.units;if(!t)throw new Error("center is required");if(!e)throw new Error("radius is required");if(null==r)throw new Error("bearing1 is required");if(null==n)throw new Error("bearing2 is required");if("object"!=typeof o)throw new Error("options must be an object");i=i||64;var s=w(r),p=w(n),h=t.properties;if(s===p)return u(v(t,e,o).geometry.coordinates[0],h);for(var m=s,l=s<p?p:p+360,c=m,f=[],d=0;c<l;)f.push(y(t,e,c,a).geometry.coordinates),c=m+360*++d/i;return c>l&&f.push(y(t,e,l,a).geometry.coordinates),u(f,h)};function O(t,e,r){if(null!==t)for(var n,o,i,a,s,p,h,u,m=0,l=0,c=t.type,f="FeatureCollection"===c,g="Feature"===c,d=f?t.features.length:1,_=0;_<d;_++){s=(u=!!(h=f?t.features[_].geometry:g?t.geometry:t)&&"GeometryCollection"===h.type)?h.geometries.length:1;for(var y=0;y<s;y++){var v=0,w=0;if(null!==(a=u?h.geometries[y]:h)){p=a.coordinates;var L=a.type;switch(m=!r||"Polygon"!==L&&"MultiPolygon"!==L?0:1,L){case null:break;case"Point":if(!1===e(p,l,_,v,w))return!1;l++,v++;break;case"LineString":case"MultiPoint":for(n=0;n<p.length;n++){if(!1===e(p[n],l,_,v,w))return!1;l++,"MultiPoint"===L&&v++}"LineString"===L&&v++;break;case"Polygon":case"MultiLineString":for(n=0;n<p.length;n++){for(o=0;o<p[n].length-m;o++){if(!1===e(p[n][o],l,_,v,w))return!1;l++}"MultiLineString"===L&&v++,"Polygon"===L&&w++}"Polygon"===L&&v++;break;case"MultiPolygon":for(n=0;n<p.length;n++){for("MultiPolygon"===L&&(w=0),o=0;o<p[n].length;o++){for(i=0;i<p[n][o].length-m;i++){if(!1===e(p[n][o][i],l,_,v,w))return!1;l++}w++}v++}break;case"GeometryCollection":for(n=0;n<a.geometries.length;n++)if(!1===O(a.geometries[n],e,r))return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function P(t){var e=t%360;return e<0&&(e+=360),e}var M=function(t,e,r,n,o){if(!g(o=o||{}))throw new Error("options is invalid");if(!t)throw new Error("center is required");if(null==r)throw new Error("bearing1 is required");if(null==n)throw new Error("bearing2 is required");if(!e)throw new Error("radius is required");if("object"!=typeof o)throw new Error("options must be an object");if(P(r)===P(n))return v(t,e,o);var i=function(t){if(!t)throw new Error("coords is required");if("Feature"===t.type&&null!==t.geometry)return t.geometry.coordinates;if(t.coordinates)return t.coordinates;if(Array.isArray(t))return t;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}(t),a=b(t,e,r,n,o),s=[[i]];return O(a,(function(t){s[0].push(t)})),s[0].push(i),h(s)},x=r(7),E=r.n(x);L.PMOrtho=L.Class.extend({includes:[n],options:{allowOrtho:!0,customKey:null,snapAngle:45,baseAngleOfLastSegment:!1,showAngleTooltip:!0,angleText:"Angle: "},cssadded:!1,initialize:function(t,e){this.map=t,L.setOptions(this,e),this.map&&this.map.pm&&(this.map.pm.pmOrtho=this),this._overwriteFunctions()},setOptions:function(t){L.setOptions(this,t)},_overwriteFunctions:function(){L.PM.PMOrthoFunctionAdded||(L.PM.PMOrthoFunctionAdded=!0,this._extendedEnable(),this._extendedDisable(),L.PM.Draw.Line.prototype._syncHintMarker=this._syncHintMarker(this),L.PM.Draw.Rectangle.prototype._finishShapeOrg=L.PM.Draw.Rectangle.prototype._finishShape,L.PM.Draw.Rectangle.prototype._finishShape=function(t){t.latlng=this._cornerPoint||t.latlng,this._hintMarker._snapped=!this._cornerPoint&&this._hintMarker._snapped,this._finishShapeOrg(t)},L.PM.Draw.prototype._addDrawnLayerPropOrg=L.PM.Draw.prototype._addDrawnLayerProp,L.PM.Draw.prototype._addDrawnLayerProp=function(t){this._addDrawnLayerPropOrg(t),t instanceof L.Rectangle?(t.pm._adjustRectangleForMarkerMoveOrg=t.pm._adjustRectangleForMarkerMove,t.pm._adjustRectangleForMarkerMove=function(e){if(this._map.pm.pmOrtho._shiftpressed&&this._map.pm.pmOrtho.options.allowOrtho){var r=this._map.pm.pmOrtho._getRectanglePoint(e._oppositeCornerLatLng,e.getLatLng());e.setLatLng(r)}t.pm._adjustRectangleForMarkerMoveOrg(e)}):t instanceof L.Polyline&&(t.pm._onMarkerDragOrg=t.pm._onMarkerDrag,t.pm._onMarkerDrag=function(e){var r=e.target,n=L.PM.Utils.findDeepMarkerIndex(this._markers,r),o=n.indexPath,a=n.index,s=n.parentPath;if(o){var p=o.length>1?i()(this._markers,s):this._markers,h=(a+(p.length-1))%p.length,u=(a+(p.length+1))%p.length,m=p[h].getLatLng(),l=p[u].getLatLng();if(this._map.pm.pmOrtho._shiftpressed&&this._map.pm.pmOrtho.options.allowOrtho){var c=0;if(this._map.pm.pmOrtho.options.baseAngleOfLastSegment&&p.length>1){var f=p[(a+(p.length-2))%p.length].getLatLng(),g=this._map.latLngToContainerPoint(m),d=this._map.latLngToContainerPoint(f);c=(c=this._map.pm.pmOrtho._getAngle(d,g)+90)>180?c-180:c}var _=this._map.pm.pmOrtho._getPointofAngle(m,r.getLatLng(),c);e.target._latlng=_,e.target.update()}if(p.length>1){this._map.pm.pmOrtho._angleLine||(this._map.pm.pmOrtho._angleLine=L.polyline([],{smoothFactor:0}).addTo(this._map));var y=this._map.latLngToContainerPoint(r.getLatLng()),v=this._map.latLngToContainerPoint(m),w=this._map.latLngToContainerPoint(l),b=this._map.pm.pmOrtho._getAngle(y,w);b=this._map.pm.pmOrtho._formatAngle(b-this._map.pm.pmOrtho._getAngle(y,v));var O=!0;if(this._layer instanceof L.Polygon?O=!0:this._layer instanceof L.Polyline&&(O=h<a+1&&0!==u),this._map.pm.pmOrtho.options.showAngleTooltip&&O){var P=this._map.pm.pmOrtho._addAngleLine(m,r.getLatLng(),l).getLatLngs();0===P.length?(this._map.pm.pmOrtho._angleLine.remove(),this._map.pm.pmOrtho._angleLine=null):this._map.pm.pmOrtho._angleLine.setLatLngs(P),this._map.pm.pmOrtho.tooltip?this._map.pm.pmOrtho.tooltip.setLatLng(r.getLatLng()).setContent(this._map.pm.pmOrtho.options.angleText+b):this._map.pm.pmOrtho.tooltip=L.tooltip({permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).setContent(this._map.pm.pmOrtho.options.angleText+b).setLatLng(r.getLatLng()).addTo(this._map)}else this._map.pm.pmOrtho._angleLine.remove(),this._map.pm.pmOrtho._angleLine=null,this._map.pm.pmOrtho.tooltip&&(this._map.pm.pmOrtho.tooltip.remove(),this._map.pm.pmOrtho.tooltip=null)}t.pm._onMarkerDragOrg(e)}},t.pm._onMarkerDragEndOrg=t.pm._onMarkerDragEnd,t.pm._onMarkerDragEnd=function(e){this._map.pm.pmOrtho._angleLine&&(this._map.pm.pmOrtho._angleLine.removeFrom(this._map.pm.pmOrtho.map),this._map.pm.pmOrtho._angleLine=null),this._map.pm.pmOrtho.tooltip&&(this._map.pm.pmOrtho.tooltip.removeFrom(this._map.pm.pmOrtho.map),this._map.pm.pmOrtho.tooltip=null),t.pm._onMarkerDragEndOrg(e)})}),this.map.on("pm:create",(function(t){var e=t.target;e._angleLine&&(e._angleLine.removeFrom(e),e._angleLine=null),e.tooltip&&(e.tooltip.removeFrom(e),e.tooltip=null)})),this.map.on("pm:globaleditmodetoggled",(function(t){t.enabled?t.map.pm.pmOrtho._enableShiftListener():t.map.pm.pmOrtho._disableShiftListener()}))},_extendedEnable:function(){L.PM.Draw.Line.prototype.enableOrg=L.PM.Draw.Line.prototype.enable,L.PM.Draw.Line.prototype.enable=function(t){this.enableOrg(t),this._map.pm.pmOrtho._enableShiftListener(),this._map.off("click",this._createVertex,this),this._map.on("click",this._map.pm.pmOrtho._createVertexNew,this)},L.PM.Draw.Rectangle.prototype.enableOrg=L.PM.Draw.Rectangle.prototype.enable,L.PM.Draw.Rectangle.prototype.enable=function(t){if(this.enableOrg(t),this._map.pm.pmOrtho._enableShiftListener(),this.options.cursorMarker){L.DomUtil.addClass(this._hintMarker._icon,"visible"),this._styleMarkers=[];for(var e=0;e<4;e+=1){var r=L.marker([0,0],{icon:L.divIcon({className:"marker-icon rect-style-marker"}),draggable:!1,zIndexOffset:100});r._pmTempLayer=!0,this._layerGroup.addLayer(r),this._styleMarkers.push(r)}}}},_extendedDisable:function(){L.PM.Draw.Line.prototype.disableOrg=L.PM.Draw.Line.prototype.disable,L.PM.Draw.Line.prototype.disable=function(){this.disableOrg(),this._map.pm.pmOrtho._disableShiftListener(),this._map.off("click",this._map.pm.pmOrtho._createVertexNew,this),this._map.pm.pmOrtho._angleLine&&(this._map.pm.pmOrtho._angleLine.remove(),this._map.pm.pmOrtho._angleLine=null),this._map.pm.pmOrtho.tooltip&&(this._map.pm.pmOrtho.tooltip.remove(),this._map.pm.pmOrtho.tooltip=null)},L.PM.Draw.Rectangle.prototype.disableOrg=L.PM.Draw.Rectangle.prototype.disable,L.PM.Draw.Rectangle.prototype.disable=function(){this.disableOrg(),this._map.pm.pmOrtho._disableShiftListener(),this._map.pm.pmOrtho._angleLine&&(this._map.pm.pmOrtho._angleLine.remove(),this._map.pm.pmOrtho._angleLine=null),this._map.pm.pmOrtho.tooltip&&(this._map.pm.pmOrtho.tooltip.remove(),this._map.pm.pmOrtho.tooltip=null)},L.PM.Draw.Rectangle.include({_syncRectangleSize:this._syncRectangleSize})},_enableShiftListener:function(){this.map.pm.pmOrtho.options.allowOrtho&&(this.map.pm.pmOrtho._shiftpressed=!1,this.map.pm.pmOrtho._defaultBox=this.map.boxZoom.enabled(),this.map.pm.pmOrtho._enableKeyListener())},_disableShiftListener:function(){this.map.pm.pmOrtho.options.allowOrtho&&this.map.pm.pmOrtho._disableKeyListener()},_syncHintMarker:function(){return function(t){var e=this._layer.getLatLngs();if(e.length>0&&this._map.pm.pmOrtho._shiftpressed&&this._map.pm.pmOrtho.options.allowOrtho){var r=e[e.length-1],n=t.latlng,o=0;if(this._map.pm.pmOrtho.options.baseAngleOfLastSegment&&e.length>1){var i=e[e.length-2],a=this._map.latLngToContainerPoint(r),s=this._map.latLngToContainerPoint(i);o=this._map.pm.pmOrtho._getAngle(s,a)}var p=this._map.pm.pmOrtho._getPointofAngle(r,n,o);this._hintMarker.setLatLng(p),t.latlng=p}else this._hintMarker.setLatLng(t.latlng);if(this.options.snappable){var h=t;h.target=this._hintMarker,this._handleSnapping(h)}if(this.options.allowSelfIntersection||this._handleSelfIntersection(!0,this._hintMarker.getLatLng()),e.length>1){this._map.pm.pmOrtho._angleLine||(this._map.pm.pmOrtho._angleLine=L.polyline([],{smoothFactor:0}).addTo(this._map),this._map.pm.pmOrtho._angleLine.setStyle(this._layer.options));var u=0,m=e[e.length-2],l=e[e.length-1],c=this._map.latLngToContainerPoint(l);if(this._map.pm.pmOrtho.options.baseAngleOfLastSegment&&e.length>1){var f=this._map.latLngToContainerPoint(m);u=this._map.pm.pmOrtho._getAngle(f,c)}var g=this._hintMarker.getLatLng(),d=this._map.latLngToContainerPoint(g),_=this._map.pm.pmOrtho._formatAngle(this._map.pm.pmOrtho._getAngle(d,c)-u);if(this._map.pm.pmOrtho.options.showAngleTooltip){var y=this._map.pm.pmOrtho._addAngleLine(m,l,g).getLatLngs();0===y.length?(this._map.pm.pmOrtho._angleLine.remove(),this._map.pm.pmOrtho._angleLine=null):this._map.pm.pmOrtho._angleLine.setLatLngs(y),this._map.pm.pmOrtho.tooltip?this._map.pm.pmOrtho.tooltip.setLatLng(l).setContent(this._map.pm.pmOrtho.options.angleText+_):this._map.pm.pmOrtho.tooltip=L.tooltip({permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).setContent(this._map.pm.pmOrtho.options.angleText+_).setLatLng(l).addTo(this._map)}else this._map.pm.pmOrtho._angleLine.remove(),this._map.pm.pmOrtho._angleLine=null,this._map.pm.pmOrtho.tooltip&&(this._map.pm.pmOrtho.tooltip.remove(),this._map.pm.pmOrtho.tooltip=null)}}},_createVertexNew:function(t){var e=this._layer.getLatLngs();if(e.length>0&&this._map.pm.pmOrtho._shiftpressed&&this._map.pm.pmOrtho.options.allowOrtho){var r=e[e.length-1],n=t.latlng,o=0;if(this._map.pm.pmOrtho.options.baseAngleOfLastSegment&&e.length>1){var i=e[e.length-2],a=this._map.latLngToContainerPoint(r),s=this._map.latLngToContainerPoint(i);o=(o=this._map.pm.pmOrtho._getAngle(s,a)+90)>180?o-180:o}this._map.pm.pmOrtho._angleLine&&(this._map.pm.pmOrtho._angleLine.removeFrom(this._map),this._map.pm.pmOrtho._angleLine=null),this._map.pm.pmOrtho.tooltip&&(this._map.pm.pmOrtho.tooltip.removeFrom(this._map),this._map.pm.pmOrtho.tooltip=null);var p=this._map.pm.pmOrtho._getPointofAngle(r,n,o);t.latlng=p}this._createVertex(t)},_syncRectangleSize:function(){var t=this,e=this._startMarker.getLatLng(),r=this._hintMarker.getLatLng();(this._layer.setBounds([e,r]),this._map.pm.pmOrtho.options.allowOrtho&&this._map.pm.pmOrtho._shiftpressed?(this._cornerPoint=this._map.pm.pmOrtho._getRectanglePoint(e,r),this._layer.setBounds([e,this._cornerPoint])):this._cornerPoint=null,this.options.cursorMarker&&this._styleMarkers)&&this._findCorners().forEach((function(e,r){t._styleMarkers[r].setLatLng(e)}))},_addAngleLine:function(t,e,r){var n=E()(this._toLngLat(e),this._toLngLat(t)),o=E()(this._toLngLat(e),this._toLngLat(r));n=n<0?n+360:n,o=o<0?o+360:o;var i=t.distanceTo(e),a=r.distanceTo(e),s=i;if(a<s&&(s=a),i/a<.4?s=i*(1-i/a):a/i<.4?s=a*(1-a/i):s*=.4,0===s)return L.polyline([]);var p=M(this._toLngLat(e),s/1e3,n,o,{steps:360}),h=L.geoJson(p).getLayers()[0];return L.polyline(h.getLatLngs())},_toLngLat:function(t){return[t.lng,t.lat]},_formatAngle:function(t){var e=(t<0?t+360:t)%360;if(this._shiftpressed){var r=e%5;e=r<2.5&&r>1?parseInt(e)-parseInt(Math.ceil(r)):r>2.5?parseInt(e)+parseInt(Math.ceil(5-r)):parseInt(e)}return e.toFixed(2)}})}]);