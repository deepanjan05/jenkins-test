import React from 'react'
import './Button.scss'
import {SUBMIT, SUCCESS, FAILURE} from '../../../constants/constants'

/**
@params
    action - Function to be executed on button click
    caption - Text to be displayed on the button
    usage - To use 1 out of 4 button styles
*/
const CustomButton:React.FC<{action?:Function, caption: string, usage: string}> = ({action, caption, usage}) => {

    let myButton = null;
    if(usage === SUCCESS && action){
        myButton = (<button className="btn success-background my-2" onClick={() => action()}>{caption}</button>)
    }
    else if(usage === SUBMIT){
        myButton = (<button className="btn success-background my-2" type="submit">{caption}</button>)
    }
    else if(usage === FAILURE && action){
        myButton = (<button className="btn danger-background my-2" onClick={() => action()}>{caption}</button>)
    }
    else if(action){
        myButton = (<button className="btn primary-background my-2" onClick={() => action()}>{caption}</button>)
    }
    else{
        myButton = (<button className="btn secondary-background my-2">{caption}</button>)
    }

    return(
        <>{myButton}</>
    )

}

export default CustomButton;