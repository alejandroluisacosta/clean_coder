// DISPLAY ONE IMAGE 

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

// renderSingleImage();

// GET ALL THE PHOTOS FROM A COLLECTION AND DISPLAY THE DESCRIPTION OF THOSE WITH MORE THAN 500 LIKES

let allCollectionPhotos = [];
let photosWithMoreThan500Likes = [];
let filteredDescriptions = [];

// Fetch all photos
const getAllPhotos = async() => {
    const response = await fetch('https://api.unsplash.com/collections/220/photos?per_page=30&client_id=WUIf-dHIq-KxSKQz1So92KwdAmWrxigCMcuZN5RhhNM');
    if (response.ok) {
        const jsonData = await response.json();
        allCollectionPhotos = jsonData;
    }
}

// Filter photos by those with more than 10 likes
const filterPhotosByLikes  = (photoArray) => {
    return photoArray.filter(photo => photo.likes >= 500);
}

// Display descriptions of the filtered photos
const displayFilteredPhotos = async() => {
    await getAllPhotos();
    photosWithMoreThan500Likes = filterPhotosByLikes(allCollectionPhotos);
    console.log(photosWithMoreThan500Likes);
    const body = document.querySelector('body');
    for (let i = 0; i < photosWithMoreThan500Likes.length; i++) {
        const description = document.createElement('p');
        description.innerHTML = photosWithMoreThan500Likes[i].description ?? "Photo without description";
        body.appendChild(description);
    }
}


displayFilteredPhotos();