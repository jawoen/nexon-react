import React from 'react';
const titleStyle = {
    padding: "100px 0 0 0",
    textAlign: "left",
    fontSize: "24px"
}
const Title = ({title}) => {
    return (
        <div style={titleStyle}>
            <h2>{title}</h2>
        </div>
    );
};

export default Title;