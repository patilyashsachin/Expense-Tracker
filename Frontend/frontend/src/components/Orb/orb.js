import React from 'react';
import styled from 'styled-components';

function Orb() {
    const OrbStyled = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        border-radius: 50%;
        top: 10%;
        right: 5%;
        background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
        filter: blur(230px);
        z-index: -1;
    `;

    return <OrbStyled />;
}

export default Orb;
