export const reviews = () => {
    window.addEventListener("DOMContentLoaded", () => {
       
        const reviewsBlock = document.querySelector('#reviews .row .col-sm-offset-1.col-xs-12.comments-container');
        const dataBase = [];
        
        reviewsBlock.innerHTML = `<img src="../images/loader.gif" class="centered-image"/>`;

        fetch('../comments.json')
                .then(res => res.json())
                .then(array => (() => {
                    array.comments.forEach(item => {
                        dataBase.push(item)
                    });
                    return dataBase;
                }) ())  
                .then(data => {
                    reviewsBlock.innerHTML = `
<div class="review-margin-bottom row comments-item">
    <div class="col-xs-3 col-sm-2">
        <div class="review-user">
            <img src="images/users/face4.png" alt="" class="img-responsive avatar">
        </div>
    </div>
    <div class="col-xs-9 col-sm-9">
        <div class="review-inner review-green review-arrow review-arrow-left">
            <p class="text-normal">${data[data[0].id].author}</p>
            <p>${data[data[0].id].comment}</p>
        </div>
    </div>
</div>
<div class="review-margin-bottom row comments-item">
    <div class="col-xs-9 col-sm-9">
        <div class="review-inner review-gray review-arrow review-arrow-right">
            <p class="text-normal">${data[data[1].id].author}</p>
            <p>${data[data[1].id].comment}</p>
        </div>
    </div>
    <div class="col-xs-3 col-sm-2">
        <div class="review-user">
            <img src="images/users/face5.png" alt="" class="img-responsive avatar">
        </div>
    </div>
</div>
<div class="row comments-item">
    <div class="col-xs-3 col-sm-2">
        <div class="review-user">
            <img src="images/users/face6.png" alt="" class="img-responsive avatar">
        </div>
    </div>
    <div class="col-xs-9 col-sm-9">
        <div class="review-inner review-orange review-arrow review-arrow-left">
            <p class="text-normal">${data[data[2].id].author}</p>
            <p>${data[data[2].id].comment}</p>
        </div>
    </div>
</div></br></br></br></br>`;
                   
        let i = 3;          
                
        setInterval(() => {
            let div = reviewsBlock.querySelector('div .comments-item');        

            const blockA = `
    <div class="review-margin-bottom row comments-item">
        <div class="col-xs-3 col-sm-2">
            <div class="review-user">
                <img src="../images/users/${data[data[i].id].image}" alt="" class="img-responsive avatar">
            </div>
        </div>
        <div class="col-xs-9 col-sm-9">
            <div class="review-inner review-green review-arrow review-arrow-left">
                <p class="text-normal">${data[data[i].id].author}</p>
                <p>${data[data[i].id].comment}</p>
            </div>
        </div>
    </div>`;

            const blockB = `
    <div class="review-margin-bottom row comments-item">
        <div class="col-xs-9 col-sm-9">
            <div class="review-inner review-gray review-arrow review-arrow-right">
                <p class="text-normal">${data[data[i].id].author}</p>
                <p>${data[data[i].id].comment}</p>
            </div>
        </div>
        <div class="col-xs-3 col-sm-2">
            <div class="review-user">
                <img src="../images/mickey.png" alt="" class="img-responsive avatar">
            </div>
        </div>
    </div>`;

            reviewsBlock.removeChild(div);

            if ((i + 2) % 2 === 0) {
                reviewsBlock.insertAdjacentHTML('beforeend', blockA);
            } else {
                reviewsBlock.insertAdjacentHTML('beforeend', blockB);
            }

            i++;

            if (i > 5) {
                i = 0;
            }
            
            return i;
        }, 20000)
               
                })
                .catch(error => error.message);
    });
}
