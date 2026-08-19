
document.addEventListener("DOMContentLoaded",()=>{
  const toggle=document.querySelector(".nav-toggle"),links=document.querySelector(".nav-links");
  if(toggle&&links)toggle.addEventListener("click",()=>{links.classList.toggle("open");toggle.setAttribute("aria-expanded",links.classList.contains("open"))});
  document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>links?.classList.remove("open")));
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
  document.querySelectorAll(".reveal").forEach((el,i)=>{if(i%4===1)el.classList.add("delay-1");if(i%4===2)el.classList.add("delay-2");if(i%4===3)el.classList.add("delay-3");observer.observe(el)});
  const back=document.querySelector(".backtop");
  window.addEventListener("scroll",()=>back?.classList.toggle("show",scrollY>500));
  back?.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));
  document.querySelectorAll(".modal .close").forEach(btn=>btn.addEventListener("click",()=>btn.closest(".modal").classList.remove("open")));
  document.querySelectorAll(".modal").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)m.classList.remove("open")}));
  document.querySelectorAll("form").forEach(form=>form.addEventListener("submit",e=>{e.preventDefault();const msg=form.querySelector(".form-msg");if(msg){msg.textContent="Dankie! Jou boodskap is gereed om gestuur te word.";msg.style.color="#087331"}form.reset()}));
});
