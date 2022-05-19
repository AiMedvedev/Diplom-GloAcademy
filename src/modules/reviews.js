export const reviews = () => {
    window.addEventListener("DOMContentLoaded", () => {
        const reviewsBlock = document.querySelector('#reviews .row');
        const interval = 2000;
        const dataBase = [];
        let i = 0;

        reviewsBlock.innerHTML = `<img src="../images/loader.gif" class="centered-image"/>`;
        
        /* setInterval(() => {
            console.log(i);
            i++;
            if (i > 5) {
                i = 0;
            }
        }, interval) */

        fetch('../comments.json')
                .then(res => res.json())
                //.then(answer => JSON.parse(answer))
                .then(data => (() => {
                    data.comments.forEach(item => {
                        dataBase.push(item)
                    });
                    
                    return dataBase;
                }) () /* {
                    const spinner = reviewsBlock.querySelector('.centered-image');
                    //console.log(spinner);
                    reviewsBlock.removeChild(spinner);
                    answer.forEach(comment => {
                        comments.append(comment);
                    });
                    console.log(comments);
                    
                } */)
                .then(data => {
                    //console.log(data[0].image); 
                    let avatar = `../images/users/${data[data.id].image}`;
                    reviewsBlock.innerHTML = `
<div class="col-sm-offset-1 col-xs-12 comments-container">
    <div class="review-margin-bottom row comments-item">
        <div class="col-xs-3 col-sm-2">
            <div class="review-user">
                <img src="${avatar || '../images/mickey.png'}" alt="" class="img-responsive avatar">
            </div>
        </div>
        <div class="col-xs-9 col-sm-9">
            <div class="review-inner review-green review-arrow review-arrow-left">
                <p class="text-normal">${data[data.id].author}</p>
                <p>${data[data.id].comment}</p>
            </div>
        </div>
    </div>
    <div class="review-margin-bottom row comments-item">
        <div class="col-xs-9 col-sm-9">
            <div class="review-inner review-gray review-arrow review-arrow-right">
                <p class="text-normal">${data[data.id].author}</p>
                <p>${data[data.id].comment}</p>
            </div>
        </div>
        <div class="col-xs-3 col-sm-2">
            <div class="review-user">
                <img src="${avatar || '../images/mickey.png'}" alt="" class="img-responsive avatar">
            </div>
        </div>
    </div>
    <div class="row comments-item">
        <div class="col-xs-3 col-sm-2">
            <div class="review-user">
                <img src="${avatar || '../images/mickey.png'}" alt="" class="img-responsive avatar">
            </div>
        </div>
        <div class="col-xs-9 col-sm-9">
            <div class="review-inner review-orange review-arrow review-arrow-left">
                <p class="text-normal">${data[data.id].author}</p>
                <p>${data[data.id].comment}</p>
            </div>
        </div>
    </div>
</div>`;
                })
                .catch(error => error.message);
        //console.log(dataBase);
    });
}

 