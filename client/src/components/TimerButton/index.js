import React from 'react';
import { Button } from 'react-materialize';
import 'components/TimerButton/timer.css'



function button(){
    return(
        <div>
<Button className="timerButton" waves="light" style={{marginRight: '5px'}}>
Set Timer!
</Button>
</div>

    )
}

export default button;