import { useState } from 'react';
import AccessButton from '../components/AccessButton/AccessButton';
export default {
    title:"AccessButton",
    component:AccessButton
}
const Template = (args)=><AccessButton {...args}/>
 export const def = Template.bind({});
//const [value,setValue]=useState("No access");
 def.args={
    accessValue:"No access",
    setAccessValue:(e)=>{alert(e)}
 }
 //export const Dark = ()=><Button label="Share" color="#111827" fontColor="white"></Button>