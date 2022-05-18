export const smoothScroll = () => {
    const scrollUpBtns = document.querySelectorAll('.smooth-scroll');
    const bodyDivs = document.querySelectorAll('body');
    
    scrollUpBtns.forEach(btn => {
        window.addEventListener('scroll', () => {
            const top = document.documentElement.scrollTop;
            
            if (top > 840) { 
                btn.style.display = 'block'; 
            } else {
                btn.style.display = 'none';
            }
        });
        
        btn.addEventListener('click', (e) => {       
            e.preventDefault();
    
            bodyDivs.forEach(body => {
                body.scrollIntoView({
                    behavior: 'smooth'
                });  
            });
        });
    });
}