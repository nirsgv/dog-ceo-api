import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const ImageWrap = styled.div`
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
`;

const Image = styled.img`
   object-fit: cover;
   width: 100%;
   height: 100%;

`;

function ImageGallery({ images }) {

    const [imgNum, setImgNum] = useState(0);
    useEffect(() => {
        setImgNum(0);
    }, [images]);


    return (
        <ImageWrap className={'img-wrap'}>
            <Image className="select-options" src={images[imgNum]} onClick={() => setImgNum(imgNum+1)} />
        </ImageWrap>
    );
}

export default ImageGallery;
