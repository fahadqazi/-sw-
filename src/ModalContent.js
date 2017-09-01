import React from 'react';

const ModalContent = ({content}) => {
    return(
        <div>
            <h3>{content.name}</h3>
            <p><strong>Gender</strong>: {content.gender}</p>
            <p><strong>Eye Color</strong>: {content.eye_color}</p>
            <p><strong>Hair Color</strong>: {content.hair_color}</p>
            <p><strong>Height</strong>: {content.height}</p>
            <p><strong>Mass</strong>: {content.mass}</p>
        </div>
    );
}

export default ModalContent;