import './PopUpStyle.css';
import ToggleButton from '../ToggleButton/ToggleButton';
import { useCallback, useEffect, useState } from 'react';
import SearchOption from '../SearchOption/SearchOption';
import AccessButton from '../AccessButton/AccessButton';
function PopUp(){
    let globeIco=require('./GlobeIco.png');
    let questionIco=require('./QuestionIcon.png')
    let insignia=require('./Insignia.png');
    let linkIco=require('./linkIco.png');
    const [toggled,checkToggled]=useState(false);
    const [accessVal,setAccessVal]=useState("No access");
    const setToggled=useCallback(()=>{
        checkToggled(!toggled);
    });
    useEffect(()=>{alert("toggled")},[toggled]);
    useEffect(()=>{alert(accessVal)},[accessVal]);
    return (
        <>  <div className='share-pop-over'>
                <div className='frame-1690'>
                    <div className="frame-1689">
                        <div className='frame-1681'>
                            <div className='frame-1680'>
                                <div className='frame-1679'>
                                    <div className='frame-1677'>
                                        <img src={globeIco}/>
                                    </div>
                                    <div className='frame-1678'>
                                        <label>Share to web</label>
                                        <label className='text-desc'>Publish and share link with anyone</label>
                                        
                                    </div>
                                </div>
                                <div className='simple-toggle'>
                                    <ToggleButton toggled={toggled} setToggled={setToggled}/>
                                </div>
                            </div>
                            <div className='frame-1688'>
                                <div className='frame-search-handler'>
                                    <div className='frame-form-field'>   
                                            <SearchOption/>
                                    </div>
                                </div>
                                <div className='frame-1686'>
                                    <div className='frame-1681'>
                                        <div className='frame-1679'>
                                            <div className='frame-leading-content'>
                                                <div className='frame-1647'>
                                                    <div className='insignia'>
                                                        <img src={insignia}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='frame-1678'>
                                                <label>Everyone at OSlash</label>
                                                <label className='frame-1678-desc'>25 Worspace Members</label>
                                            </div>
                                           
                                        </div>
                                        <div className='frame-permission-button'>
                                            <AccessButton accessValue={accessVal} setAccessValue={setAccessVal}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='frame-1685'>
                        <div className='frame-1684'>
                            <div className='frame-1683'>
                                <div className='frame-question-mcircle'>
                                    <img src={questionIco}/>
                                </div>
                                <div className='frame-learn-sharing'>
                                    <span className='text-desc'>learn about sharing</span>
                                </div>
                            </div>
                            <div className='frame-1692'>
                                <img src={linkIco}/>
                                <label className='link-label'>Copy link</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default PopUp;