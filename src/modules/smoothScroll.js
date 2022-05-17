export const smoothScroll = () => {
    const btn = document.querySelector('.smooth-scroll');
    const body = document.querySelector('.okna');
    
    window.addEventListener('scroll', () => {
        const top = document.documentElement.scrollTop;
        
        if (top > 840) { 
            btn.style.display = 'block'; 
        } else {
            btn.style.display = 'none';
        }
    })
  
    btn.addEventListener('click', (e) => {       
        e.preventDefault();

        body.scrollIntoView({
            behavior: 'smooth'
        });      
    });
}