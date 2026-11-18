(function(){
  var D=[['A','/','地層'],['B','/b','誌面'],['C','/c','シネマ'],['D','/d','グリッド'],['E','/e','オーガニック'],['F','/f','ベント'],['G','/g','王道']];
  var m=location.pathname.match(/\/([b-g])(?:\.html)?\/?$/i);
  var cur=m?m[1].toUpperCase():'A';
  var up=document.body.getAttribute('data-sw')==='up';
  var st=document.createElement('style');
  st.textContent='.asw{position:fixed;left:50%;bottom:calc('+(up?'86px':'14px')+' + env(safe-area-inset-bottom,0px));transform:translateX(-50%);z-index:2147483000;display:flex;align-items:center;gap:3px;padding:6px;border-radius:999px;background:rgba(14,16,18,.88);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);box-shadow:0 10px 30px rgba(0,0,0,.28);font:700 12px/1 "Helvetica Neue",Arial,sans-serif;letter-spacing:.08em}'+
  '.asw span{color:#9AA3AD;padding:0 8px 0 10px;font-size:10px;letter-spacing:.24em}'+
  '.asw a{position:relative;display:grid;place-items:center;width:38px;height:38px;border-radius:50%;color:#EDEFF2;text-decoration:none;transition:background .25s,color .25s,transform .25s}'+
  '.asw a:hover{background:rgba(255,255,255,.14)}'+
  '.asw a.on{background:#28A7E0;color:#0B0D0F;transform:scale(1.08);box-shadow:0 0 0 2px rgba(40,167,224,.35)}'+
  '.asw a::after{content:attr(data-n);position:absolute;bottom:48px;left:50%;transform:translateX(-50%) translateY(4px);white-space:nowrap;padding:6px 10px;border-radius:6px;background:#0B0D0F;color:#fff;font-size:11px;letter-spacing:.06em;opacity:0;pointer-events:none;transition:opacity .2s,transform .2s}'+
  '.asw a:hover::after,.asw a:focus-visible::after{opacity:1;transform:translateX(-50%)}'+
  '.asw a:focus-visible{outline:2px solid #28A7E0;outline-offset:2px}'+
  '.asw-cv{position:fixed;inset:0;z-index:2147483646;background:#0B0D0F;clip-path:inset(100% 0 0 0);transition:clip-path .55s cubic-bezier(.77,0,.18,1);display:grid;place-items:center;color:#28A7E0;font:700 13px/1 "Helvetica Neue",Arial,sans-serif;letter-spacing:.4em}'+
  '.asw-cv.on{clip-path:inset(0 0 0 0)}'+
  '@media (max-width:440px){.asw span{display:none}.asw a{width:34px;height:34px}}'+
  '@media (prefers-reduced-motion:reduce){.asw-cv{transition:none}}';
  document.head.appendChild(st);
  var nav=document.createElement('nav');nav.className='asw';nav.setAttribute('aria-label','デザイン切り替え');
  nav.innerHTML='<span>DESIGN</span>'+D.map(function(d){var on=d[0]===cur;return '<a href="'+d[1]+'" data-n="'+d[0]+'：'+d[2]+'"'+(on?' class="on" aria-current="page"':'')+'>'+d[0]+'</a>'}).join('');
  document.body.appendChild(nav);
  var cv=document.createElement('div');cv.className='asw-cv';cv.setAttribute('aria-hidden','true');document.body.appendChild(cv);
  nav.addEventListener('click',function(e){
    var a=e.target.closest('a');if(!a||e.metaKey||e.ctrlKey||e.shiftKey)return;
    e.preventDefault();var href=a.getAttribute('href');
    cv.textContent='DESIGN '+a.textContent;
    requestAnimationFrame(function(){cv.classList.add('on')});
    setTimeout(function(){location.href=href},560);
  });
  window.addEventListener('pageshow',function(e){if(e.persisted){cv.classList.remove('on');location.reload()}});
})();
