import { useState } from 'react';

const About = () => {
    const [about, setAbout] = useState('');
    return (
        <div className="ui segment">
            <h3 className="ui center aligned header">About Yourself</h3>
            <div className="field">
                <textarea
                    name="about"
                    value={about}
                    onChange={e => setAbout(e.target.value)}
                ></textarea>
            </div>
        </div>
    );
};

export default About;
