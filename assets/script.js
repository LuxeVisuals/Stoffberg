
document.addEventListener("DOMContentLoaded",()=>{
  const toggle=document.querySelector(".nav-toggle"), links=document.querySelector(".nav-links");
  if(toggle) toggle.addEventListener("click",()=>{links.classList.toggle("open");toggle.setAttribute("aria-expanded",links.classList.contains("open"))});
  document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>links?.classList.remove("open")));
  const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
  const back=document.querySelector(".backtop");
  window.addEventListener("scroll",()=>back?.classList.toggle("show",scrollY>500));
  back?.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));
  document.querySelectorAll("[data-modal]").forEach(btn=>btn.addEventListener("click",()=>{
    const modal=document.querySelector(btn.dataset.modal); if(modal) modal.classList.add("open");
  }));
  document.querySelectorAll(".modal .close").forEach(btn=>btn.addEventListener("click",()=>btn.closest(".modal").classList.remove("open")));
  document.querySelectorAll(".modal").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)m.classList.remove("open")}));
  document.querySelectorAll("form").forEach(form=>form.addEventListener("submit",e=>{
    e.preventDefault(); const msg=form.querySelector(".form-msg"); if(msg){msg.textContent="Dankie! Jou boodskap is gereed om gestuur te word.";msg.style.color="#0b4ea2";} form.reset();
  }));
  document.querySelectorAll("[data-filter]").forEach(btn=>btn.addEventListener("click",()=>{
    const value=btn.dataset.filter;
    document.querySelectorAll("[data-category]").forEach(card=>card.style.display=(value==="all"||card.dataset.category===value)?"":"none");
    document.querySelectorAll("[data-filter]").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
  }));
});
