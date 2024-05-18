import React, { useState, useEffect } from 'react';

const SectionHome = () => {
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        const updateImageSrc = () => {
            if (window.innerWidth <= 600) {
                setImageSrc('./images/linkedInNoBackground.jpeg');
            } else {
                setImageSrc('./images/LinkedIn-Photo-cropped.png');
            }
        };

        updateImageSrc(); // Initial call to set the image source
        window.addEventListener('resize', updateImageSrc);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateImageSrc);
        };
    }, []);

    useEffect(() => {
        console.log('Image source updated to:', imageSrc); // Debugging line
    }, [imageSrc]);

    return (
        <div>
            <h3>Home</h3>
            <img src={imageSrc} alt="Profile Img" />
        </div>
    );
};

export default SectionHome;
