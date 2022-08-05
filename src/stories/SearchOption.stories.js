import { useState } from "react";
import SearchOption from "../components/SearchOption/SearchOption";

export default {
    title:'SearchOption',
    component:SearchOption,
    
}
const Template = (args)=><SearchOption {...args}/>

export const def = Template.bind({});

def.args={
    placeholder:"Peoples, emails, groups"
    
}