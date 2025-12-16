document.addEventListener('DOMContentLoaded',function(){
  // Year in footer
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  if(navToggle && siteNav){
    navToggle.addEventListener('click',()=>{
      const shown = siteNav.style.display === 'flex' || siteNav.style.display === 'block';
      siteNav.style.display = shown ? 'none' : (window.innerWidth <= 680 ? 'block' : 'flex');
    });
  }

  // Simple contact form handling (client-only).
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if(form){
    form.addEventListener('submit',async function(e){
      e.preventDefault();
      if(!form.checkValidity()){
        status.textContent = 'Please fill out all required fields.';
        return;
      }

      // Replace with your own endpoint (e.g., Formspree) for real submissions.
      status.textContent = 'Sending...';
      try{
        // Simulate network delay
        await new Promise(r=>setTimeout(r,800));
        form.reset();
        status.textContent = 'Message sent (simulation). To enable real submissions, see README.';
      }catch(err){
        status.textContent = 'Failed to send message. Try again later.';
      }
    });
  }

  // Load skill bars immediately without animation
  document.querySelectorAll('.skill').forEach(skill=>{
    const level = skill.getAttribute('data-level') || '70';
    const fill = skill.querySelector('.skill-fill');
    if(fill){
      fill.style.width = level + '%';
    }
  });

  // Show tech strip when user scrolls down or presses PageDown
  const techStrip = document.getElementById('tech-strip');
  let lastY = window.scrollY || 0;
  function showTechStrip(){ if(techStrip) techStrip.classList.add('visible'); }
  function hideTechStrip(){ if(techStrip) techStrip.classList.remove('visible'); }

  window.addEventListener('scroll', ()=>{
    const y = window.scrollY || 0;
    if(y > lastY + 10){ // user scrolled down
      showTechStrip();
    }else if(y < lastY - 20){ // scrolled up
      hideTechStrip();
    }
    lastY = y;
  }, {passive:true});

  window.addEventListener('keydown', (e)=>{
    // show badges when PageDown pressed
    if(e.key === 'PageDown'){
      showTechStrip();
      // optional: hide after a short timeout
      setTimeout(hideTechStrip, 3500);
    }
  });
});
