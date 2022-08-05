import { useState } from "react";
import ToggleButton from "../components/ToggleButton/ToggleButton";

export default {
    title:'ToggleButton',
    component:ToggleButton,
    decorators: [
        (StoryFn) => {
          // mock state
          const [toggled, changeToggled] = useState(false);
          const setToggled = () => {
            changeToggled(!toggled);
            return toggled;
          };
    
          return (
            <ToggleButton
              toggled={false}
              setToggled={setToggled}
            />
          );
        }
      ]
}
const Template = (args)=><ToggleButton {...args}/>

export const defToggle = Template.bind({});

defToggle.args={
    toggle:false
    
}