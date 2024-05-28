import React from 'react'

function Images(props) {
    const openNext = (event) => {
        const backgroundImage = window.getComputedStyle(event.target).getPropertyValue('background-image');
        const urlMatch = backgroundImage.match(/url\(["']?(.*?)["']?\)/);
        const nimg = urlMatch ? urlMatch[1] : null;
        const opens = document.getElementById('fully');
        opens.style.display = 'none';
        const opens1 = document.getElementById('open');
        opens1.style.display = 'none';
        document.body.style.overflow = 'hidden';
        opens.style.display = 'flex';
        opens1.style.display = 'flex';
        const imageUrl = nimg;
        const newImage = document.createElement('img');
        newImage.src = imageUrl;
        newImage.onload = function () {
            const imageDiv = document.getElementById('img-dis');
            const maxWidth = imageDiv.clientWidth;
            const maxHeight = imageDiv.clientHeight;
            const imgWidth = newImage.width;
            const imgHeight = newImage.height;
            let newWidth, newHeight;
            if (imgWidth / maxWidth > imgHeight / maxHeight) {
                newWidth = maxWidth;
                imageDiv.style.left = '220px'
                imageDiv.style.marginTop = '85px'
                newHeight = (imgHeight / imgWidth) * maxWidth;
            } else {
                newHeight = maxHeight;
                imageDiv.style.left = '332px'
                imageDiv.style.marginTop = '1px'
                newWidth = (imgWidth / imgHeight) * maxHeight;
            }
            newImage.style.width = `${newWidth}px`;
            newImage.style.height = `${newHeight}px`;
            imageDiv.innerHTML = '';
            imageDiv.appendChild(newImage);
        }
    }
    const open = (index, event) => {
        document.body.style.overflow = 'hidden';
        const opens = document.getElementById('fully');
        opens.style.display = 'flex';
        const opens1 = document.getElementById('open');
        opens1.style.display = 'flex';
        const imageUrl = event.target.src;
        const imageKey = index;
        const newImage = document.createElement('img');
        newImage.src = imageUrl;
        const next_n = document.getElementById('next-n');
        for (let i = 0; i < 10; i++) {
            const imgdiv = document.createElement('div');
            imgdiv.classList.add('next');
            imgdiv.addEventListener('click', (event) => openNext(event));
            if (imageKey + i < 10)
                imgdiv.style.background = `url(${props.imagesc1[imageKey + i]})center center / cover no-repeat`;
            else
                imgdiv.style.background = `url(${props.imagesc1[imageKey + i - 10]})center center / cover no-repeat`;
            next_n.appendChild(imgdiv);
        }
        newImage.onload = function () {
            const imageDiv = document.getElementById('img-dis');
            const maxWidth = imageDiv.clientWidth;
            const maxHeight = imageDiv.clientHeight;
            const imgWidth = newImage.width;
            const imgHeight = newImage.height;
            let newWidth, newHeight;
            if (imgWidth / maxWidth > imgHeight / maxHeight) {
                newWidth = maxWidth;
                imageDiv.style.left = '220px'
                imageDiv.style.marginTop = '85px'
                newHeight = (imgHeight / imgWidth) * maxWidth;
            } else {
                newHeight = maxHeight;
                imageDiv.style.left = '332px'
                imageDiv.style.marginTop = '1px'
                newWidth = (imgWidth / imgHeight) * maxHeight;
            }
            newImage.style.width = `${newWidth}px`;
            newImage.style.height = `${newHeight}px`;
            imageDiv.innerHTML = '';

            imageDiv.appendChild(newImage);
        }
    }
    const close = () => {
        document.body.style.overflow = '';
        const opens = document.getElementById('fully');
        opens.style.display = 'none';
        const opens1 = document.getElementById('open');
        opens1.style.display = 'none';
        const imageDiv = document.getElementById('img-dis');
        imageDiv.removeChild(imageDiv.firstChild);
        const next_n = document.getElementById('next-n');
        while (next_n.firstChild) {
            next_n.removeChild(next_n.firstChild);
        }
    }
    
    return (
        <div>
            <div id="fully">
                <i onClick={close} class="bi bi-x-lg"></i>
                <div id="open">
                    <h1>Preview</h1>
                    <div id="img-dis"></div>
                    <div id="next-n">
                    </div>
                </div>
            </div>
            <div className="display">
                <div className="column">
                    {props.imagesc1.map((image, index) => (
                        <img key={index} onClick={(event) => open(index, event)} src={image} alt="" />
                    ))}
                </div>
                <div className="column">
                    {props.imagesc2.map((image, index) => (
                        <img key={index} onClick={(event) => open(index, event)} src={image} alt="" />
                    ))}
                </div>
                <div className="column">
                    {props.imagesc3.map((image, index) => (
                        <img key={index} onClick={(event) => open(index, event)} src={image} alt="" />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Images;
