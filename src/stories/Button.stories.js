import Button from '../components/Button/Button';
export default {
    title:"Share",
    component:Button,
    argTypes:{
        onClick:{action:"test"}
    }
}
const Template = (args)=><Button {...args}/>
 export const White = Template.bind({});

 White.args={
    label:"Share",
    color:"white",
    fontColor:"black",
    
 }
 export const Dark = Template.bind({});
 Dark.args={
    label:"Share",
    color:"#111827",
    fontColor:"white",
    
 }
 //export const Dark = ()=><Button label="Share" color="#111827" fontColor="white"></Button>