let images = [];

const getAllImages = async() => {
    try {
        const response = await fetch('https://api.unsplash.com/photos/?client_id=WUIf-dHIq-KxSKQz1So92KwdAmWrxigCMcuZN5RhhNM')
        if (response.ok) {
            const jsonData = await response.json();
            images = jsonData;
        }
    }
    catch (error) {
        console.log(error);
    }
}

const renderSingleImage = async() => {
    await getAllImages();
    const body = document.querySelector('body');
    const imageElementHTML = document.createElement('img');
    imageElementHTML.src = images[0].urls.raw;
    body.appendChild(imageElementHTML);
}

renderSingleImage();