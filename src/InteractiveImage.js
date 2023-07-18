import React, {useRef, useState} from 'react';

const InteractiveImage = ({imageSource}) => {
    const imageRef = useRef(null);
    const [scale, setScale] = useState(1);
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);

    const handleZoom = (event) => {
        const newScale = event.deltaY > 0 ? scale * 1.1 : scale / 1.1;
        setScale(newScale);
    };

    const handleDragStart = (event) => {
        setIsDragging(true);
        setStartX(event.clientX);
        setStartY(event.clientY);
    };

    const handleDrag = (event) => {
        if (!isDragging) return;

        const deltaX = event.clientX - startX;
        const deltaY = event.clientY - startY;

        setTranslateX(translateX + deltaX);
        setTranslateY(translateY + deltaY);

        setStartX(event.clientX);
        setStartY(event.clientY);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    return (
        <div
            onWheel={handleZoom}
            onMouseDown={handleDragStart}
            onMouseMove={handleDrag}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            style={{
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                cursor: isDragging ? 'grabbing' : 'grab',
            }}
        >
            <img
                ref={imageRef}
                src={imageSource}
                alt="Interactive Image"
                style={{
                    transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
                }}
            />
        </div>
    );
};

export default InteractiveImage;