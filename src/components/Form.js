import React from 'react';

import About from './About';
import ContactDetails from './ContactDetails';
import Education from './Education';
import PersonalDetails from './PersonalDetails';
import TagsInput from './TagsInput';
import Work from './Work';

const Form = () => {
    return (
        <div className="ui form">
            <PersonalDetails />
            <div className="ui grid">
                <div className="row">
                    <div className="eight wide computer twelve wide tablet sixteen wide mobile column">
                        <ContactDetails />
                    </div>
                    <div className="eight wide computer four wide tablet sixteen wide mobile column">
                        <About />
                        <TagsInput />
                    </div>
                </div>
                <div className="row">
                    <div className="sixteen column wide computer">
                        <Education />
                        <Work />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
