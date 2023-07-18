import React from 'react';
import {OpenSeaDragonViewer} from "./OpenSeaDragonViewer";
import Mural from "./assets/images/mural.jpeg";
import InteractiveImage from "./InteractiveImage";

const MuralContainer = () => {

    return (
        <div className="mural-container">
            {/*<OpenSeaDragonViewer image={Mural} />*/}
            <InteractiveImage imageSource={Mural}/>
        </div>
    );


}

export default MuralContainer;

