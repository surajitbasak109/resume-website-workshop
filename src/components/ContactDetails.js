import { useState } from 'react';
import Mobile from './Mobile';
import SocialHandle from './SocialHandle';

const socialLinks = {
    github: {
        icon: 'icon github',
        url: 'https://github.com/',
    },
    linkedin: {
        icon: 'icon linkedin',
        url: 'https://www.linkedin.com/in/',
    },
    facebook: {
        icon: 'icon facebook',
        url: 'https://facebook.com/',
    },
    twitter: {
        icon: 'icon twitter',
        url: 'https://twitter.com/',
    },
};

const ContactDetails = () => {
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [facebookHandle, setFacebookHandle] = useState('');
    const [twitterHandle, setTwitterHandle] = useState('');
    const [githubHandle, setGithubHandle] = useState('');
    const [linkedinHandle, setLinkedinHandle] = useState('');
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
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
            </div>
            <Mobile mobile={mobile} onMobileChange={setMobile} />
            <SocialHandle
                icon={socialLinks.facebook.icon}
                url={socialLinks.facebook.url}
                handle={facebookHandle}
                setHandle={setFacebookHandle}
            />
            <SocialHandle
                icon={socialLinks.twitter.icon}
                url={socialLinks.twitter.url}
                handle={twitterHandle}
                setHandle={setTwitterHandle}
            />
            <SocialHandle
                icon={socialLinks.linkedin.icon}
                url={socialLinks.linkedin.url}
                handle={linkedinHandle}
                setHandle={setLinkedinHandle}
            />
            <SocialHandle
                icon={socialLinks.github.icon}
                url={socialLinks.github.url}
                handle={githubHandle}
                setHandle={setGithubHandle}
            />
        </div>
    );
};

export default ContactDetails;
