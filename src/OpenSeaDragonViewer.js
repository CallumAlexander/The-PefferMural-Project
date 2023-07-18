/* Credits go to
* https://articles.wesionary.team/getting-started-with-openseadragon-in-react-9461ec3bf841?gi=b10bc6022ae5
* */

import OpenSeaDragon from "openseadragon";
import React, {useEffect, useState} from "react";

const OpenSeaDragonViewer = ({image}) => {
    const [viewer, setViewer] = useState(null);
    useEffect(() => {
        if (image && viewer) {
            viewer.open(image.source);
        }
    }, [image]);
    const InitOpenseadragon = () => {
        viewer && viewer.destroy();
        setViewer(
            OpenSeaDragon({
                id: "openSeaDragon",
                prefixUrl: "openseadragon-images/",
                animationTime: 0.5,
                blendTime: 0.1,
                constrainDuringPan: true,
                maxZoomPixelRatio: 2,
                minZoomLevel: 1,
                visibilityRatio: 1,
                zoomPerScroll: 2
            })
        );
    };
    useEffect(() => {
        InitOpenseadragon();
        return () => {
            viewer && viewer.destroy();
        };
    }, []);
    return (
        <div
            id="openSeaDragon"
            style={{
                height: "800px",
                width: "1200px"
            }}
        >
        </div>
    );
};
export {OpenSeaDragonViewer};
