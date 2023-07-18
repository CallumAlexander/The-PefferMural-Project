/* Credits go to
* https://articles.wesionary.team/getting-started-with-openseadragon-in-react-9461ec3bf841?gi=b10bc6022ae5
* */

import OpenSeaDragon from "openseadragon";
import React, {useEffect, useRef, useState} from "react";

const OpenSeaDragonViewer = ({image}) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    const viewer = OpenSeaDragon({
      id: 'openSeaDragon',
      tileSources: {
        type: 'image',
        url: image.source
      },
      // Pass the image source directly
      // Additional configuration options if needed
    });

    viewerRef.current = viewer;

    return () => {
      viewerRef.current && viewerRef.current.destroy();
    };
  }, [image]);

  return <div id="openSeaDragon" style={{height: '800px', width: '1200px'}}/>;
};

export {OpenSeaDragonViewer}; // Update export statement

