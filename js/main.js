(function(){
var d=document,root=d.documentElement;
var tg=d.getElementById('mob-toggle'),dr=d.getElementById('mob-drawer'),ov=d.getElementById('mob-overlay'),cl=d.getElementById('drawer-close');
function openD(){if(!dr)return;dr.hidden=false;ov.setAttribute('aria-hidden','false');requestAnimationFrame(function(){dr.classList.add('open');ov.classList.add('open')});tg.setAttribute('aria-expanded','true');root.style.overflow='hidden';cl.focus()}
function closeD(){if(!dr)return;dr.classList.remove('open');ov.classList.remove('open');ov.setAttribute('aria-hidden','true');tg.setAttribute('aria-expanded','false');root.style.overflow='';setTimeout(function(){if(!dr.classList.contains('open'))dr.hidden=true},300);tg.focus()}
if(tg){tg.addEventListener('click',function(){dr.hidden?openD():closeD()});cl.addEventListener('click',closeD);ov.addEventListener('click',closeD);
d.addEventListener('keydown',function(e){if(e.key==='Escape'&&!dr.hidden)closeD()});
dr.addEventListener('click',function(e){if(e.target.closest('a'))root.style.overflow=''});
window.addEventListener('resize',function(){if(window.innerWidth>=900&&!dr.hidden){dr.classList.remove('open');ov.classList.remove('open');dr.hidden=true;root.style.overflow='';tg.setAttribute('aria-expanded','false')}})}
d.querySelectorAll('.faq-btn').forEach(function(b){b.addEventListener('click',function(){
var a=d.getElementById(b.getAttribute('aria-controls')),open=b.getAttribute('aria-expanded')==='true';
b.setAttribute('aria-expanded',open?'false':'true');a.style.maxHeight=open?'0px':a.scrollHeight+'px'})});
window.addEventListener('resize',function(){d.querySelectorAll('.faq-btn[aria-expanded=true]').forEach(function(b){var a=d.getElementById(b.getAttribute('aria-controls'));a.style.maxHeight=a.scrollHeight+'px'})});
})();
