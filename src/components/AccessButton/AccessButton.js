import { useCallback, useState ,useRef, useEffect} from 'react';
import './AccessButtonStyle.css';
import useComponentVisible from './UseComponentVisible';

function AccessButton({accessValue,setAccessValue}){
    let DownIco=require('./Icon.png')
    let listAccesses=["Full access","Can edit","Can view","No access"];
    const [showListPopUp,setListPopUp]=useState(false);
    
    
    
    const ref = useRef(null);
    const createList=()=>{
        setListPopUp(!showListPopUp);
    }
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setListPopUp(false);
        }else{
            setListPopUp(true);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);
    //document.addEventListener('click',(event)=>{},true);
   const handleItemClick=useCallback((event)=>{
    console.log(event.target);
    setAccessValue(event.target.getAttribute('value'));
    setTimeout(()=>{
        setListPopUp(false);
    },100);
   });
    return (<>
    <div className="access-div" ref={ref} onClick={()=>{createList}}>
        <button className="access-button" >{accessValue} <img src={DownIco}/></button>
        <div className='list-popup' >
        {(showListPopUp)?(<>
            
                <ul className='ul-item-access' >
                    {listAccesses.map((item)=>(<li className="list-item-access" onClick={handleItemClick} value={item}>{item}</li>))}
                </ul>
            
        </>):(<></>)}
        </div>
    </div>
    </>);
}
export default AccessButton;