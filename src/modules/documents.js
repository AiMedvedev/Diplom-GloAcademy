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
            
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        });
    })
}