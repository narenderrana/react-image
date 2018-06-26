class ImageService  {

    getImage(src, onload, onerror) {
        const image= new Image();
         image.src=src;
         image.onload= onload;
         image.onerror= onerror;
    }
}

export default new ImageService();