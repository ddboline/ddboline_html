let ae=4,$=null,a1=`undefined`,a9=`boolean`,a4=0,Z=128,aa=`string`,a7=127,a0=1,ac=`Object`,a6=`function`,af=`bigint`,a2=`utf-8`,ah=8,a8=`number`,Y=Array,ab=Array.isArray,ag=BigInt,a3=Error,ai=Function,ad=JSON.stringify,ak=Object,aj=Reflect,a5=Uint8Array,_=undefined;var S=(async(a,b)=>{if(typeof Response===a6&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===a6){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var M=((a,b,c)=>{j._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h2cb18dd9b577f64b(a,b,p(c))});var F=(a=>{const b=typeof a;if(b==a8||b==a9||a==$){return `${a}`};if(b==aa){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==$){return `Symbol`}else{return `Symbol(${b})`}};if(b==a6){const b=a.name;if(typeof b==aa&&b.length>a4){return `Function(${b})`}else{return `Function`}};if(ab(a)){const b=a.length;let c=`[`;if(b>a4){c+=F(a[a4])};for(let d=a0;d<b;d++){c+=`, `+ F(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>a0){d=c[a0]}else{return toString.call(a)};if(d==ac){try{return `Object(`+ ad(a)+ `)`}catch(a){return ac}};if(a instanceof a3){return `${a.name}: ${a.message}\n${a.stack}`};return d});var U=((a,b)=>{});var P=((a,b)=>{a=a>>>a4;const c=O();const d=c.subarray(a/ae,a/ae+ b);const e=[];for(let a=a4;a<d.length;a++){e.push(o(d[a]))};return e});var p=(a=>{if(m===k.length)k.push(k.length+ a0);const b=m;m=k[b];k[b]=a;return b});var o=(a=>{const b=l(a);n(a);return b});var X=(async(a)=>{if(j!==_)return j;if(typeof a===a1){a=new URL(`weather_api_wasm-6ee566e73c0f0fc4_bg.wasm`,import.meta.url)};const b=T();if(typeof a===aa||typeof Request===a6&&a instanceof Request||typeof URL===a6&&a instanceof URL){a=fetch(a)};U(b);const {instance:c,module:d}=await S(await a,b);return V(c,d)});var W=(a=>{if(j!==_)return j;const b=T();U(b);if(!(a instanceof WebAssembly.Module)){a=new WebAssembly.Module(a)};const c=new WebAssembly.Instance(a,b);return V(c,a)});var V=((a,b)=>{j=a.exports;X.__wbindgen_wasm_module=b;D=$;B=$;z=$;N=$;r=$;j.__wbindgen_start();return j});var T=(()=>{const k={};k.wbg={};k.wbg.__wbindgen_object_drop_ref=(a=>{o(a)});k.wbg.__wbindgen_object_clone_ref=(a=>{const b=l(a);return p(b)});k.wbg.__wbindgen_is_string=(a=>{const b=typeof l(a)===aa;return b});k.wbg.__wbindgen_error_new=((a,b)=>{const c=new a3(t(a,b));return p(c)});k.wbg.__wbg_new_abd8a48ffd951779=(a=>{const b=new h(l(a));return p(b)});k.wbg.__wbindgen_is_undefined=(a=>{const b=l(a)===_;return b});k.wbg.__wbindgen_string_get=((a,b)=>{const c=l(b);const d=typeof c===aa?c:_;var e=y(d)?a4:x(d,j.__wbindgen_malloc,j.__wbindgen_realloc);var f=u;A()[a/ae+ a0]=f;A()[a/ae+ a4]=e});k.wbg.__wbg_rustSend_6175a678357f46b1=((a,b)=>{l(a).rustSend(o(b))});k.wbg.__wbindgen_string_new=((a,b)=>{const c=t(a,b);return p(c)});k.wbg.__wbg_getformdata_7206b99ef44b788e=(a=>{const b=g(l(a));return p(b)});k.wbg.__wbindgen_boolean_get=(a=>{const b=l(a);const c=typeof b===a9?(b?a0:a4):2;return c});k.wbg.__wbindgen_is_bigint=(a=>{const b=typeof l(a)===af;return b});k.wbg.__wbindgen_bigint_from_i64=(a=>{const b=a;return p(b)});k.wbg.__wbindgen_jsval_eq=((a,b)=>{const c=l(a)===l(b);return c});k.wbg.__wbindgen_bigint_from_u64=(a=>{const b=ag.asUintN(64,a);return p(b)});k.wbg.__wbindgen_number_get=((a,b)=>{const c=l(b);const d=typeof c===a8?c:_;C()[a/ah+ a0]=y(d)?a4:d;A()[a/ae+ a4]=!y(d)});k.wbg.__wbindgen_is_object=(a=>{const b=l(a);const c=typeof b===`object`&&b!==$;return c});k.wbg.__wbindgen_in=((a,b)=>{const c=l(a) in l(b);return c});k.wbg.__wbindgen_jsval_loose_eq=((a,b)=>{const c=l(a)==l(b);return c});k.wbg.__wbg_String_88810dfeb4021902=((a,b)=>{const c=String(l(b));const d=x(c,j.__wbindgen_malloc,j.__wbindgen_realloc);const e=u;A()[a/ae+ a0]=e;A()[a/ae+ a4]=d});k.wbg.__wbindgen_number_new=(a=>{const b=a;return p(b)});k.wbg.__wbg_set_841ac57cff3d672b=((a,b,c)=>{l(a)[o(b)]=o(c)});k.wbg.__wbg_create_e7a4871bd307ada9=(b=>{a(b>>>a4)});k.wbg.__wbg_updatememory_acd4e8342aa8de4a=(a=>{b(o(a))});k.wbg.__wbg_savetemplate_c4cab19a5b168471=((a,b,d)=>{var e=P(a,b).slice();j.__wbindgen_free(a,b*ae,ae);c(e,d>>>a4)});k.wbg.__wbg_getnode_f20ae005be1aee22=(a=>{const b=d(a>>>a4);return p(b)});k.wbg.__wbg_initilize_bfb3db58295295dd=((a,b)=>{e(o(a),l(b))});k.wbg.__wbg_setAttributeInner_605314ec1c8cafdf=((a,b,c,d,e,g)=>{var h=Q(b,c);var i=Q(e,g);f(o(a),h,o(d),i)});k.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new a3();return p(a)});k.wbg.__wbg_stack_658279fe44541cf6=((a,b)=>{const c=l(b).stack;const d=x(c,j.__wbindgen_malloc,j.__wbindgen_realloc);const e=u;A()[a/ae+ a0]=e;A()[a/ae+ a4]=d});k.wbg.__wbg_error_f851667af71bcfc6=((a,b)=>{var c=Q(a,b);if(a!==a4){j.__wbindgen_free(a,b,a0)};console.error(c)});k.wbg.__wbindgen_cb_drop=(a=>{const b=o(a).original;if(b.cnt--==a0){b.a=a4;return !0};const c=!1;return c});k.wbg.__wbindgen_as_number=(a=>{const b=+l(a);return b});k.wbg.__wbg_getwithrefkey_4a92a5eca60879b9=((a,b)=>{const c=l(a)[l(b)];return p(c)});k.wbg.__wbg_queueMicrotask_4d890031a6a5a50c=(a=>{queueMicrotask(l(a))});k.wbg.__wbg_queueMicrotask_adae4bc085237231=(a=>{const b=l(a).queueMicrotask;return p(b)});k.wbg.__wbindgen_is_function=(a=>{const b=typeof l(a)===a6;return b});k.wbg.__wbg_instanceof_Window_3e5cd1f48c152d01=(a=>{let b;try{b=l(a) instanceof Window}catch(a){b=!1}const c=b;return c});k.wbg.__wbg_document_d609202d16c38224=(a=>{const b=l(a).document;return y(b)?a4:p(b)});k.wbg.__wbg_location_176c34e89c2c9d80=(a=>{const b=l(a).location;return p(b)});k.wbg.__wbg_innerWidth_e5d865919c14bdf9=function(){return R((a=>{const b=l(a).innerWidth;return p(b)}),arguments)};k.wbg.__wbg_innerHeight_5e414ce6ae3fd139=function(){return R((a=>{const b=l(a).innerHeight;return p(b)}),arguments)};k.wbg.__wbg_localStorage_8c507fd281456944=function(){return R((a=>{const b=l(a).localStorage;return y(b)?a4:p(b)}),arguments)};k.wbg.__wbg_fetch_2d3e207b67a04104=((a,b,c,d)=>{var e=Q(b,c);const f=l(a).fetch(e,l(d));return p(f)});k.wbg.__wbg_createElement_fdd5c113cb84539e=function(){return R(((a,b,c)=>{var d=Q(b,c);const e=l(a).createElement(d);return p(e)}),arguments)};k.wbg.__wbg_createElementNS_524b05a6070757b6=function(){return R(((a,b,c,d,e)=>{var f=Q(b,c);var g=Q(d,e);const h=l(a).createElementNS(f,g);return p(h)}),arguments)};k.wbg.__wbg_createTextNode_7ff0c034b2855f66=((a,b,c)=>{var d=Q(b,c);const e=l(a).createTextNode(d);return p(e)});k.wbg.__wbg_getElementById_65b9547a428b5eb4=((a,b,c)=>{var d=Q(b,c);const e=l(a).getElementById(d);return y(e)?a4:p(e)});k.wbg.__wbg_instanceof_Element_3f326a19cc457941=(a=>{let b;try{b=l(a) instanceof Element}catch(a){b=!1}const c=b;return c});k.wbg.__wbg_getAttribute_bff489553dd803cc=((a,b,c,d)=>{var e=Q(c,d);const f=l(b).getAttribute(e);var g=y(f)?a4:x(f,j.__wbindgen_malloc,j.__wbindgen_realloc);var h=u;A()[a/ae+ a0]=h;A()[a/ae+ a4]=g});k.wbg.__wbg_getBoundingClientRect_4167ccfa40cf88fc=(a=>{const b=l(a).getBoundingClientRect();return p(b)});k.wbg.__wbg_scrollIntoView_d55385b7b1c1b7af=((a,b)=>{l(a).scrollIntoView(l(b))});k.wbg.__wbg_toggleAttribute_9013602d6b410309=function(){return R(((a,b,c)=>{var d=Q(b,c);const e=l(a).toggleAttribute(d);return e}),arguments)};k.wbg.__wbg_instanceof_HtmlElement_55a0f0f0f0f0118e=(a=>{let b;try{b=l(a) instanceof HTMLElement}catch(a){b=!1}const c=b;return c});k.wbg.__wbg_blur_0f6854a1635dce70=function(){return R((a=>{l(a).blur()}),arguments)};k.wbg.__wbg_focus_6d3d2b6776d06f7f=function(){return R((a=>{l(a).focus()}),arguments)};k.wbg.__wbg_instanceof_HtmlInputElement_e7869aaef9cbb0e6=(a=>{let b;try{b=l(a) instanceof HTMLInputElement}catch(a){b=!1}const c=b;return c});k.wbg.__wbg_checked_f46acdc11342a4bd=(a=>{const b=l(a).checked;return b});k.wbg.__wbg_files_84acf164900adf19=(a=>{const b=l(a).files;return y(b)?a4:p(b)});k.wbg.__wbg_type_2a81047eef6840e7=((a,b)=>{const c=l(b).type;const d=x(c,j.__wbindgen_malloc,j.__wbindgen_realloc);const e=u;A()[a/ae+ a0]=e;A()[a/ae+ a4]=d});k.wbg.__wbg_value_e024243a9dae20bc=((a,b)=>{const c=l(b).value;const d=x(c,j.__wbindgen_malloc,j.__wbindgen_realloc);const e=u;A()[a/ae+ a0]=e;A()[a/ae+ a4]=d});k.wbg.__wbg_instanceof_Node_b3f418be312abe25=(a=>{let b;try{b=l(a) instanceof Node}catch(a){b=!1}const c=b;return c});k.wbg.__wbg_parentElement_72e144c2e8d9e0b5=(a=>{const b=l(a).parentElement;return y(b)?a4:p(b)});k.wbg.__wbg_textContent_2f37235e13f8484b=((a,b)=>{const c=l(b).textContent;var d=y(c)?a4:x(c,j.__wbindgen_malloc,j.__wbindgen_realloc);var e=u;A()[a/ae+ a0]=e;A()[a/ae+ a4]=d});k.wbg.__wbg_appendChild_d30e6b83791d04c0=function(){return R(((a,b)=>{const c=l(a).appendChild(l(b));return p(c)}),arguments)};k.wbg.__wbg_result_d1e1134585be8336=function(){return R((a=>{const b=l(a).result;return p(b)}),arguments)};k.wbg.__wbg_setonload_7edf3cf67d18c0a2=((a,b)=>{l(a).onload=l(b)});k.wbg.__wbg_new_d881a9e329b0c6bb=function(){return R((()=>{const a=new FileReader();return p(a)}),arguments)};k.wbg.__wbg_readAsArrayBuffer_a3d6ef46725fe135=function(){return R(((a,b)=>{l(a).readAsArrayBuffer(l(b))}),arguments)};k.wbg.__wbg_readAsText_612cb8cf6ffd9437=function(){return R(((a,b)=>{l(a).readAsText(l(b))}),arguments)};k.wbg.__wbg_instanceof_HtmlFormElement_7d89e65c39841f5c=(a=>{let b;try{b=l(a) instanceof HTMLFormElement}catch(a){b=!1}const c=b;return c});k.wbg.__wbg_instanceof_HtmlSelectElement_2d43d9e14dd8e866=(a=>{let b;try{b=l(a) instanceof HTMLSelectElement}catch(a){b=!1}const c=b;return c});k.wbg.__wbg_value_30ed7fed7e3a14ba=((a,b)=>{const c=l(b).value;const d=x(c,j.__wbindgen_malloc,j.__wbindgen_realloc);const e=u;A()[a/ae+ a0]=e;A()[a/ae+ a4]=d});k.wbg.__wbg_width_1ccae8ab185a4192=(a=>{const b=l(a).width;return b});k.wbg.__wbg_height_415b4e67932f43c9=(a=>{const b=l(a).height;return b});k.wbg.__wbg_debug_678fc976919895d2=((a,b,c,d)=>{console.debug(l(a),l(b),l(c),l(d))});k.wbg.__wbg_error_e60eff06f24ab7a4=(a=>{console.error(l(a))});k.wbg.__wbg_error_ce00188b70015ed4=((a,b,c,d)=>{console.error(l(a),l(b),l(c),l(d))});k.wbg.__wbg_info_7904cb81904ea2ec=((a,b,c,d)=>{console.info(l(a),l(b),l(c),l(d))});k.wbg.__wbg_log_aaedbaa276606939=((a,b,c,d)=>{console.log(l(a),l(b),l(c),l(d))});k.wbg.__wbg_warn_0345511f899411e2=((a,b,c,d)=>{console.warn(l(a),l(b),l(c),l(d))});k.wbg.__wbg_instanceof_CompositionEvent_bdeef8fdaebace4e=(a=>{let b;try{b=l(a) instanceof CompositionEvent}catch(a){b=!1}const c=b;return c});k.wbg.__wbg_data_5d89389455680c67=((a,b)=>{const c=l(b).data;var d=y(c)?a4:x(c,j.__wbindgen_malloc,j.__wbindgen_realloc);var e=u;A()[a/ae+ a0]=e;A()[a/ae+ a4]=d});k.wbg.__wbg_top_da9f6cf2fb5b9968=(a=>{const b=l(a).top;return b});k.wbg.__wbg_left_253905e6c5050382=(a=>{const b=l(a).left;return b});k.wbg.__wbg_name_bbf9c43b9611377a=((a,b)=>{const c=l(b).name;const d=x(c,j.__wbindgen_malloc,j.__wbindgen_realloc);const e=u;A()[a/ae+ a0]=e;A()[a/ae+ a4]=d});k.wbg.__wbg_altKey_bf16cace6fb79198=(a=>{const b=l(a).altKey;return b});k.wbg.__wbg_ctrlKey_977280484bcead08=(a=>{const b=l(a).ctrlKey;return b});k.wbg.__wbg_shiftKey_55894418ec38c771=(a=>{const b=l(a).shiftKey;return b});k.wbg.__wbg_metaKey_16606958d932a374=(a=>{const b=l(a).metaKey;return b});k.wbg.__wbg_location_6b0f1184627d67d8=(a=>{const b=l(a).location;return b});k.wbg.__wbg_repeat_2ffa2628836d8009=(a=>{const b=l(a).repeat;return b});k.wbg.__wbg_key_cf8022c18f47869e=((a,b)=>{const c=l(b).key;const d=x(c,j.__wbindgen_malloc,j.__wbindgen_realloc);const e=u;A()[a/ae+ a0]=e;A()[a/ae+ a4]=d});k.wbg.__wbg_code_878e76a4ddb70157=((a,b)=>{const c=l(b).code;const d=x(c,j.__wbindgen_malloc,j.__wbindgen_realloc);const e=u;A()[a/ae+ a0]=e;A()[a/ae+ a4]=d});k.wbg.__wbg_length_c8f895dad5ec94df=(a=>{const b=l(a).length;return b});k.wbg.__wbg_item_312a88e5ba8832a5=((a,b)=>{const c=l(a).item(b>>>a4);return y(c)?a4:p(c)});k.wbg.__wbg_deltaX_03d8f6dcd2e14b63=(a=>{const b=l(a).deltaX;return b});k.wbg.__wbg_deltaY_7d9a7eb25f83e193=(a=>{const b=l(a).deltaY;return b});k.wbg.__wbg_deltaZ_3556e726737898b1=(a=>{const b=l(a).deltaZ;return b});k.wbg.__wbg_deltaMode_5f43eb63f3077df7=(a=>{const b=l(a).deltaMode;return b});k.wbg.__wbg_instanceof_Response_4c3b1446206114d1=(a=>{let b;try{b=l(a) instanceof Response}catch(a){b=!1}const c=b;return c});k.wbg.__wbg_json_34535d9848f043eb=function(){return R((a=>{const b=l(a).json();return p(b)}),arguments)};k.wbg.__wbg_text_668782292b0bc561=function(){return R((a=>{const b=l(a).text();return p(b)}),arguments)};k.wbg.__wbg_getItem_5395a7e200c31e89=function(){return R(((a,b,c,d)=>{var e=Q(c,d);const f=l(b).getItem(e);var g=y(f)?a4:x(f,j.__wbindgen_malloc,j.__wbindgen_realloc);var h=u;A()[a/ae+ a0]=h;A()[a/ae+ a4]=g}),arguments)};k.wbg.__wbg_setItem_3786c4c8dd0c9bd0=function(){return R(((a,b,c,d,e)=>{var f=Q(b,c);var g=Q(d,e);l(a).setItem(f,g)}),arguments)};k.wbg.__wbg_altKey_aed9fd1b4e7c811a=(a=>{const b=l(a).altKey;return b});k.wbg.__wbg_metaKey_cff45cd01eb1e457=(a=>{const b=l(a).metaKey;return b});k.wbg.__wbg_ctrlKey_3429fc09f6022470=(a=>{const b=l(a).ctrlKey;return b});k.wbg.__wbg_shiftKey_d1fad7fd5ce30d9f=(a=>{const b=l(a).shiftKey;return b});k.wbg.__wbg_propertyName_77de8558dcc64081=((a,b)=>{const c=l(b).propertyName;const d=x(c,j.__wbindgen_malloc,j.__wbindgen_realloc);const e=u;A()[a/ae+ a0]=e;A()[a/ae+ a4]=d});k.wbg.__wbg_elapsedTime_882bd08fe9dac23e=(a=>{const b=l(a).elapsedTime;return b});k.wbg.__wbg_pseudoElement_a7506243b6b8f12a=((a,b)=>{const c=l(b).pseudoElement;const d=x(c,j.__wbindgen_malloc,j.__wbindgen_realloc);const e=u;A()[a/ae+ a0]=e;A()[a/ae+ a4]=d});k.wbg.__wbg_type_7728453479ee70f4=((a,b)=>{const c=l(b).type;const d=x(c,j.__wbindgen_malloc,j.__wbindgen_realloc);const e=u;A()[a/ae+ a0]=e;A()[a/ae+ a4]=d});k.wbg.__wbg_target_52ddf6955f636bf5=(a=>{const b=l(a).target;return y(b)?a4:p(b)});k.wbg.__wbg_preventDefault_7f821f72e7c6b5d4=(a=>{l(a).preventDefault()});k.wbg.__wbg_screenX_89d33e900365d853=(a=>{const b=l(a).screenX;return b});k.wbg.__wbg_screenY_92594aac0d2666d8=(a=>{const b=l(a).screenY;return b});k.wbg.__wbg_clientX_1a01963cb1caa614=(a=>{const b=l(a).clientX;return b});k.wbg.__wbg_clientY_c370190d4150fba9=(a=>{const b=l(a).clientY;return b});k.wbg.__wbg_offsetX_e8c2e5379a90ae29=(a=>{const b=l(a).offsetX;return b});k.wbg.__wbg_offsetY_b8587366f6d36a25=(a=>{const b=l(a).offsetY;return b});k.wbg.__wbg_ctrlKey_643b17aaac67db50=(a=>{const b=l(a).ctrlKey;return b});k.wbg.__wbg_shiftKey_8fb7301f56e7e01c=(a=>{const b=l(a).shiftKey;return b});k.wbg.__wbg_altKey_c6c2a7e797d9a669=(a=>{const b=l(a).altKey;return b});k.wbg.__wbg_metaKey_2a8dbd51a3f59e9c=(a=>{const b=l(a).metaKey;return b});k.wbg.__wbg_button_cd87b6dabbde9631=(a=>{const b=l(a).button;return b});k.wbg.__wbg_buttons_45faa2de9fb9d23b=(a=>{const b=l(a).buttons;return b});k.wbg.__wbg_animationName_c19e2ad610c32d6d=((a,b)=>{const c=l(b).animationName;const d=x(c,j.__wbindgen_malloc,j.__wbindgen_realloc);const e=u;A()[a/ae+ a0]=e;A()[a/ae+ a4]=d});k.wbg.__wbg_elapsedTime_9063a1f5267069fd=(a=>{const b=l(a).elapsedTime;return b});k.wbg.__wbg_pseudoElement_5940ef718db987d8=((a,b)=>{const c=l(b).pseudoElement;const d=x(c,j.__wbindgen_malloc,j.__wbindgen_realloc);const e=u;A()[a/ae+ a0]=e;A()[a/ae+ a4]=d});k.wbg.__wbg_pageX_58e43d6529844f55=(a=>{const b=l(a).pageX;return b});k.wbg.__wbg_pageY_f3752d96ecd2a291=(a=>{const b=l(a).pageY;return b});k.wbg.__wbg_origin_595edc88be6e66b8=function(){return R(((a,b)=>{const c=l(b).origin;const d=x(c,j.__wbindgen_malloc,j.__wbindgen_realloc);const e=u;A()[a/ae+ a0]=e;A()[a/ae+ a4]=d}),arguments)};k.wbg.__wbg_protocol_51a4e630fff75abb=function(){return R(((a,b)=>{const c=l(b).protocol;const d=x(c,j.__wbindgen_malloc,j.__wbindgen_realloc);const e=u;A()[a/ae+ a0]=e;A()[a/ae+ a4]=d}),arguments)};k.wbg.__wbg_host_793ff88f2063bc10=function(){return R(((a,b)=>{const c=l(b).host;const d=x(c,j.__wbindgen_malloc,j.__wbindgen_realloc);const e=u;A()[a/ae+ a0]=e;A()[a/ae+ a4]=d}),arguments)};k.wbg.__wbg_pointerId_32f8345c9e0f0ed8=(a=>{const b=l(a).pointerId;return b});k.wbg.__wbg_width_d81f90f418b10094=(a=>{const b=l(a).width;return b});k.wbg.__wbg_height_1f0aec13040a28d6=(a=>{const b=l(a).height;return b});k.wbg.__wbg_pressure_b9f7c7decc59eb11=(a=>{const b=l(a).pressure;return b});k.wbg.__wbg_tangentialPressure_75648627b43ce0cb=(a=>{const b=l(a).tangentialPressure;return b});k.wbg.__wbg_tiltX_eaf660d62564dce8=(a=>{const b=l(a).tiltX;return b});k.wbg.__wbg_tiltY_dc18659a75a06a1f=(a=>{const b=l(a).tiltY;return b});k.wbg.__wbg_twist_2e3841b5ebc7e59f=(a=>{const b=l(a).twist;return b});k.wbg.__wbg_pointerType_07ad77393049c448=((a,b)=>{const c=l(b).pointerType;const d=x(c,j.__wbindgen_malloc,j.__wbindgen_realloc);const e=u;A()[a/ae+ a0]=e;A()[a/ae+ a4]=d});k.wbg.__wbg_isPrimary_19f3516f3a2a6fa0=(a=>{const b=l(a).isPrimary;return b});k.wbg.__wbg_instanceof_HtmlTextAreaElement_ce81e455dc21bc93=(a=>{let b;try{b=l(a) instanceof HTMLTextAreaElement}catch(a){b=!1}const c=b;return c});k.wbg.__wbg_value_57e57170f6952449=((a,b)=>{const c=l(b).value;const d=x(c,j.__wbindgen_malloc,j.__wbindgen_realloc);const e=u;A()[a/ae+ a0]=e;A()[a/ae+ a4]=d});k.wbg.__wbg_charCodeAt_ae37a5e09da14dab=((a,b)=>{const c=l(a).charCodeAt(b>>>a4);return c});k.wbg.__wbg_get_f01601b5a68d10e3=((a,b)=>{const c=l(a)[b>>>a4];return p(c)});k.wbg.__wbg_length_1009b1af0c481d7b=(a=>{const b=l(a).length;return b});k.wbg.__wbg_new_ffc6d4d085022169=(()=>{const a=new Y();return p(a)});k.wbg.__wbg_newnoargs_c62ea9419c21fbac=((a,b)=>{var c=Q(a,b);const d=new ai(c);return p(d)});k.wbg.__wbg_new_bfd4534b584a9593=(()=>{const a=new Map();return p(a)});k.wbg.__wbg_next_9b877f231f476d01=(a=>{const b=l(a).next;return p(b)});k.wbg.__wbg_next_6529ee0cca8d57ed=function(){return R((a=>{const b=l(a).next();return p(b)}),arguments)};k.wbg.__wbg_done_5fe336b092d60cf2=(a=>{const b=l(a).done;return b});k.wbg.__wbg_value_0c248a78fdc8e19f=(a=>{const b=l(a).value;return p(b)});k.wbg.__wbg_iterator_db7ca081358d4fb2=(()=>{const a=Symbol.iterator;return p(a)});k.wbg.__wbg_get_7b48513de5dc5ea4=function(){return R(((a,b)=>{const c=aj.get(l(a),l(b));return p(c)}),arguments)};k.wbg.__wbg_call_90c26b09837aba1c=function(){return R(((a,b)=>{const c=l(a).call(l(b));return p(c)}),arguments)};k.wbg.__wbg_new_9fb8d994e1c0aaac=(()=>{const a=new ak();return p(a)});k.wbg.__wbg_length_36658cb09b6ec34a=(a=>{const b=l(a).length;return b});k.wbg.__wbg_self_f0e34d89f33b99fd=function(){return R((()=>{const a=self.self;return p(a)}),arguments)};k.wbg.__wbg_window_d3b084224f4774d7=function(){return R((()=>{const a=window.window;return p(a)}),arguments)};k.wbg.__wbg_globalThis_9caa27ff917c6860=function(){return R((()=>{const a=globalThis.globalThis;return p(a)}),arguments)};k.wbg.__wbg_global_35dfdd59a4da3e74=function(){return R((()=>{const a=global.global;return p(a)}),arguments)};k.wbg.__wbg_set_f2740edb12e318cd=((a,b,c)=>{l(a)[b>>>a4]=o(c)});k.wbg.__wbg_isArray_74fb723e24f76012=(a=>{const b=ab(l(a));return b});k.wbg.__wbg_instanceof_ArrayBuffer_e7d53d51371448e2=(a=>{let b;try{b=l(a) instanceof ArrayBuffer}catch(a){b=!1}const c=b;return c});k.wbg.__wbg_newwithargs_7224eea6ed10c1a3=((a,b,c,d)=>{var e=Q(a,b);var f=Q(c,d);const g=new ai(e,f);return p(g)});k.wbg.__wbg_call_5da1969d7cd31ccd=function(){return R(((a,b,c)=>{const d=l(a).call(l(b),l(c));return p(d)}),arguments)};k.wbg.__wbg_set_d257c6f2da008627=((a,b,c)=>{const d=l(a).set(l(b),l(c));return p(d)});k.wbg.__wbg_entries_eae7e542df1a4316=(a=>{const b=l(a).entries();return p(b)});k.wbg.__wbg_isSafeInteger_f93fde0dca9820f8=(a=>{const b=Number.isSafeInteger(l(a));return b});k.wbg.__wbg_getUTCDate_4a708efdf0060371=(a=>{const b=l(a).getUTCDate();return b});k.wbg.__wbg_getUTCFullYear_a908b5d897587805=(a=>{const b=l(a).getUTCFullYear();return b});k.wbg.__wbg_getUTCHours_1ae306af03feaa43=(a=>{const b=l(a).getUTCHours();return b});k.wbg.__wbg_getUTCMinutes_fe890a7cee7b211d=(a=>{const b=l(a).getUTCMinutes();return b});k.wbg.__wbg_getUTCMonth_8c311c96584494b4=(a=>{const b=l(a).getUTCMonth();return b});k.wbg.__wbg_new0_622c21a64f3d83ea=(()=>{const a=new Date();return p(a)});k.wbg.__wbg_entries_9e2e2aa45aa5094a=(a=>{const b=ak.entries(l(a));return p(b)});k.wbg.__wbg_resolve_6e1c6553a82f85b7=(a=>{const b=Promise.resolve(l(a));return p(b)});k.wbg.__wbg_then_3ab08cd4fbb91ae9=((a,b)=>{const c=l(a).then(l(b));return p(c)});k.wbg.__wbg_then_8371cc12cfedc5a2=((a,b,c)=>{const d=l(a).then(l(b),l(c));return p(d)});k.wbg.__wbg_buffer_a448f833075b71ba=(a=>{const b=l(a).buffer;return p(b)});k.wbg.__wbg_new_8f67e318f15d7254=(a=>{const b=new a5(l(a));return p(b)});k.wbg.__wbg_set_2357bf09366ee480=((a,b,c)=>{l(a).set(l(b),c>>>a4)});k.wbg.__wbg_length_1d25fa9e4ac21ce7=(a=>{const b=l(a).length;return b});k.wbg.__wbg_instanceof_Uint8Array_bced6f43aed8c1aa=(a=>{let b;try{b=l(a) instanceof a5}catch(a){b=!1}const c=b;return c});k.wbg.__wbg_stringify_e1b19966d964d242=function(){return R((a=>{const b=ad(l(a));return p(b)}),arguments)};k.wbg.__wbg_set_759f75cd92b612d2=function(){return R(((a,b,c)=>{const d=aj.set(l(a),l(b),l(c));return d}),arguments)};k.wbg.__wbindgen_bigint_get_as_i64=((a,b)=>{const c=l(b);const d=typeof c===af?c:_;E()[a/ah+ a0]=y(d)?ag(a4):d;A()[a/ae+ a4]=!y(d)});k.wbg.__wbindgen_debug_string=((a,b)=>{const c=F(l(b));const d=x(c,j.__wbindgen_malloc,j.__wbindgen_realloc);const e=u;A()[a/ae+ a0]=e;A()[a/ae+ a4]=d});k.wbg.__wbindgen_throw=((a,b)=>{throw new a3(t(a,b))});k.wbg.__wbindgen_memory=(()=>{const a=j.memory;return p(a)});k.wbg.__wbindgen_closure_wrapper412=((a,b,c)=>{const d=G(a,b,a7,H);return p(d)});k.wbg.__wbindgen_closure_wrapper413=((a,b,c)=>{const d=G(a,b,a7,I);return p(d)});k.wbg.__wbindgen_closure_wrapper416=((a,b,c)=>{const d=G(a,b,a7,L);return p(d)});k.wbg.__wbindgen_closure_wrapper1010=((a,b,c)=>{const d=G(a,b,449,M);return p(d)});k[`./snippets/dioxus-interpreter-js-85a0a2f8acce2e86/inline0.js`]=i;return k});function R(a,b){try{return a.apply(this,b)}catch(a){j.__wbindgen_exn_store(p(a))}}var Q=((a,b)=>{if(a===a4){return l(b)}else{return t(a,b)}});var L=((a,b,c)=>{try{j.wasm_bindgen__convert__closures__invoke1_mut_ref__h7a98ca2794cb976d(a,b,K(c))}finally{k[J++]=_}});var A=(()=>{if(z===$||z.byteLength===a4){z=new Int32Array(j.memory.buffer)};return z});var y=(a=>a===_||a===$);var l=(a=>k[a]);var I=((a,b,c)=>{j.wasm_bindgen__convert__closures__invoke1_mut__h849621a0d8c803bf(a,b,p(c))});var E=(()=>{if(D===$||D.byteLength===a4){D=new BigInt64Array(j.memory.buffer)};return D});var O=(()=>{if(N===$||N.byteLength===a4){N=new Uint32Array(j.memory.buffer)};return N});var C=(()=>{if(B===$||B.byteLength===a4){B=new Float64Array(j.memory.buffer)};return B});var H=((a,b)=>{j.wasm_bindgen__convert__closures__invoke0_mut__h07cd28257428b14d(a,b)});var n=(a=>{if(a<132)return;k[a]=m;m=a});var G=((a,b,c,d)=>{const e={a:a,b:b,cnt:a0,dtor:c};const f=(...a)=>{e.cnt++;const b=e.a;e.a=a4;try{return d(b,e.b,...a)}finally{if(--e.cnt===a4){j.__wbindgen_export_2.get(e.dtor)(b,e.b)}else{e.a=b}}};f.original=e;return f});var x=((a,b,c)=>{if(c===_){const c=v.encode(a);const d=b(c.length,a0)>>>a4;s().subarray(d,d+ c.length).set(c);u=c.length;return d};let d=a.length;let e=b(d,a0)>>>a4;const f=s();let g=a4;for(;g<d;g++){const b=a.charCodeAt(g);if(b>a7)break;f[e+ g]=b};if(g!==d){if(g!==a4){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,a0)>>>a4;const b=s().subarray(e+ g,e+ d);const f=w(a,b);g+=f.written};u=g;return e});var s=(()=>{if(r===$||r.byteLength===a4){r=new a5(j.memory.buffer)};return r});var t=((a,b)=>{a=a>>>a4;return q.decode(s().subarray(a,a+ b))});var K=(a=>{if(J==a0)throw new a3(`out of js stack`);k[--J]=a;return J});import{create as a,update_memory as b,save_template as c,get_node as d,initilize as e}from"./snippets/dioxus-interpreter-js-85a0a2f8acce2e86/inline0.js";import{setAttributeInner as f}from"./snippets/dioxus-interpreter-js-85a0a2f8acce2e86/src/common.js";import{get_form_data as g}from"./snippets/dioxus-web-a95d8cc6c91ff8eb/inline0.js";import{Dioxus as h}from"./snippets/dioxus-web-a95d8cc6c91ff8eb/src/eval.js";import*as i from"./snippets/dioxus-interpreter-js-85a0a2f8acce2e86/inline0.js";let j;const k=new Y(Z).fill(_);k.push(_,$,!0,!1);let m=k.length;const q=typeof TextDecoder!==a1?new TextDecoder(a2,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw a3(`TextDecoder not available`)}};if(typeof TextDecoder!==a1){q.decode()};let r=$;let u=a4;const v=typeof TextEncoder!==a1?new TextEncoder(a2):{encode:()=>{throw a3(`TextEncoder not available`)}};const w=typeof v.encodeInto===a6?((a,b)=>v.encodeInto(a,b)):((a,b)=>{const c=v.encode(a);b.set(c);return {read:a.length,written:c.length}});let z=$;let B=$;let D=$;let J=Z;let N=$;export default X;export{W as initSync}