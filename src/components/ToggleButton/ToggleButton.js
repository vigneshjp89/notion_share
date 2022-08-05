import { useCallback, useEffect, useState } from 'react';
import './ToggleButtonStyle.css';
function ToggleButton({toggled,setToggled}){
    
   
    return (<>
        <div className="toggle-wrapper" onClick={()=>setToggled(!toggled)}>
            {(toggled)?(
            <div className='toggle-circle' id='z-tg-circle' ></div>
            ):(
            <div className='toggled-circle' id='z-tg-circle' ></div>
            )}
        </div>
    </>);
}
export default ToggleButton;