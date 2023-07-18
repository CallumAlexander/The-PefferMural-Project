import React from 'react';
import OpenSeadragon from 'openseadragon';


const MuralContainer = () => {

    // Define image source and other display props
    const imageURL  = 'mural.jpg';
    const initial_zoom_level = '';

    // Event handle for zoom changes
    const HandleZoomChanges = (zoom_level) => {
        // Update zoom level state or perform other actions
        console.log('Zoom level changed:', zoom_level);
    };

    // Event handle for panning
    const HandlePanChanges = (event) => {
      // Perform any necessary actions based on panning
        console.log('Pan event:', event);
    };

    return (
    <div className="mural-container">
      <OpenSeadragon
        image={imageURL}
        initialZoom={initial_zoom_level}
        onZoomChange={HandleZoomChanges}
        onPan={HandlePanChanges}
      />
    </div>
  );


}

export default MuralContainer;

