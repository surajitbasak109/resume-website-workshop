import { useContext } from 'react';
import { ResumeContext } from '../ResumeContext';
import { ADD_ABOUT } from '../types';

const About = () => {
    const context = useContext(ResumeContext);
    const {
        state: {
            personalDetails: { about },
        },
        dispatch,
    } = context;

    return (
        <div className="ui segment">
            <h3 className="ui center aligned header">About Yourself</h3>
            <div className="field">
                <textarea
                    name="about"
					placeholder='Markdown supported'
                    value={about}
                    onChange={e => dispatch({ type: ADD_ABOUT, payload: e.target.value })}
                ></textarea>
            </div>
        </div>
    );
};

export default About;
