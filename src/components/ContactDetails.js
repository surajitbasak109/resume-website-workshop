import { useContext } from 'react';
import Mobile from './Mobile';
import SocialHandle from './SocialHandle';
import socialLinks from '../helpers/socialLinks';
import { ResumeContext } from '../ResumeContext';
import {
    ADD_EMAIL,
    ADD_FACEBOOK,
    ADD_GITHUB,
    ADD_LINKEDIN,
    ADD_PHONE,
    ADD_TWITTER,
} from '../types';

const ContactDetails = () => {
    const context = useContext(ResumeContext);
    const {
        state: {
			personalDetails: {
				email,
				phone,
				facebookHandle,
				twitterHandle,
				githubHandle,
				linkedinHandle,
			}
		},
		dispatch
    } = context;

    return (
        <div className="ui segment">
            <h3 className="ui center aligned header">Contact Details</h3>
            <div className="field">
                <div className="ui labeled left icon input">
                    <i className="envelope icon"></i>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="john@example.com"
                        onChange={e => dispatch({ type: ADD_EMAIL, payload: e.target.value })}
                    />
                </div>
            </div>
            <Mobile phone={phone} type={ADD_PHONE} onPhoneChange={dispatch} />
            <SocialHandle
                icon={socialLinks.facebook.icon}
                url={socialLinks.facebook.url}
                handle={facebookHandle}
                handleType={ADD_FACEBOOK}
                setHandle={dispatch}
            />
            <SocialHandle
                icon={socialLinks.twitter.icon}
                url={socialLinks.twitter.url}
                handleType={ADD_TWITTER}
                handle={twitterHandle}
                setHandle={dispatch}
            />
            <SocialHandle
                icon={socialLinks.linkedin.icon}
                url={socialLinks.linkedin.url}
                handleType={ADD_LINKEDIN}
                handle={linkedinHandle}
                setHandle={dispatch}
            />
            <SocialHandle
                icon={socialLinks.github.icon}
                url={socialLinks.github.url}
                handleType={ADD_GITHUB}
                handle={githubHandle}
                setHandle={dispatch}
            />
        </div>
    );
};

export default ContactDetails;
