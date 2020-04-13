import React from "react";

const styles = {
  roundImage: {
    borderRadius: '50%',
  },
};

function ImageRound(props) {
    return(
        <img style={{...styles.roundImage}} src={props.source} alt={props.alt} width={props.width} height={props.height}/>
    )
}

export default ImageRound;