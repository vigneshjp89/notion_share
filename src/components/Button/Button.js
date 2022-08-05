
import React, {Component, useCallback, useState} from 'react';
import PopUp from './PopUp';
import './ButtonStyle.css';
function Button({id,label,color="black",fontColor="white"}){
    const [hasPopUpElement,setPopUpElement]=useState(false);
    const changePopUp=useCallback(()=>{
        setPopUpElement(!hasPopUpElement);
    });
    let sharePNG=require('./Vector.png');
    const style={
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "8px 16px",
        gap: "8px",

        // position: "absolute",
        width: "95px",
        height: "36px",
        // left: "124px",
        // top: "124px",

        /* coolGray/900 */

        background: color,
        borderRadius: "4px",

    }
    const labelStyle={
        
        width:"39px",
        height:"20px",
        // fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "20px",
        /* identical to box height, or 143% */

        display: "flex",
        alignItems: "center",

        /* white */

        color: fontColor,


        /* Inside auto layout */

        flex: "none",
        order: 0,
        flexGrow: 0
    }
    const shareIco={
        width:"12.8px",
        height:"12.8px",
        
    }
    return(
        <>
            
            <div className='share-button' style={{display:"inline"}}>
            <button className="btn btn-primary" onClick={changePopUp} id={id} >
                <label className="btn-label" >{label}</label>
                <img className="share-ico" src={sharePNG} width={"12.8px"} height={"12.8px"}/>
            </button>

            {(hasPopUpElement)?(<>
                <PopUp/>
            </>):(<></>)}
            
            </div>
        </>
    );
}
export default Button;