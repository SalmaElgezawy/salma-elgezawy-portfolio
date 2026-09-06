
const nav = document.querySelector('.nav');
window.addEventListener('scroll',()=>nav?.classList.toggle('scrolled',window.scrollY>18));
const btn=document.querySelector('.menu-btn'), links=document.querySelector('.nav-links');
btn?.addEventListener('click',()=>links?.classList.toggle('open'));
links?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
