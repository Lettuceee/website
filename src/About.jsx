import Draggable from 'react-draggable';
import { useRef } from 'react';

const About = () => {

    const nodeRef = useRef(null);

    return (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} className="window">
                <div className="windowheader">test text</div>
                <div><p>move this text box</p></div>
            </div>
        </Draggable>
    )
}

export default About;