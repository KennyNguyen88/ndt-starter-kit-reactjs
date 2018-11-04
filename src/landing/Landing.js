import React from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faLaptopCode);

export const Landing = () => {
    return (
        <div>
            This is Landing
            <FontAwesomeIcon icon="laptop-code" size="2x"/>
        </div>
    )
};

export default Landing;