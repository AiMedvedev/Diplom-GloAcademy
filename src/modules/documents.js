export const documentModal = () => {
    const docImages = document.querySelectorAll('.sertificate-document');
    
    docImages.forEach(doc => {
        doc.addEventListener('click', (e) => {
            e.preventDefault();

            const modal = document.getElementById('myModal');
            const modalImg = document.getElementById('img01');
            const closeBtn = document.getElementsByClassName("doc-close")[0];

            
            modalImg.src = doc.getAttribute('href');
            modal.style.display = 'block';
            
            modal.addEventListener('click', (event) => {
                if (event.target === closeBtn || (!event.target.closest('doc-modal-content') && event.target !== modalImg)) {
                    modal.style.display = 'none';
                }
            });
        });
    });
}