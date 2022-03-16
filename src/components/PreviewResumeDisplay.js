import { useContext } from 'react';
import { ResumeContext } from '../ResumeContext';
import './preview-resume-display.css';
import markdownIt from 'markdown-it';

const PreviewResumeDisplay = () => {
    const {
        state: {
            personalDetails: { firstName, lastName, role },
            contactDetails: { email, phone, facebook, twitter, linkedin, github },
            skills,
            about,
            educations,
            works,
        },
    } = useContext(ResumeContext);

    const md = markdownIt();

    return (
        <div className="preview-resume">
            <header id="header">
                <h1>
                    <b>{firstName}</b> {lastName}
                </h1>
                <hr />
                {role}
                <hr />
            </header>
            <main>
                <article id="mainLeft">
                    <section>
                        <h2>CONTACT</h2>
                        <p>
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <a href={`mailto:${email}`}>{email}</a>
                        </p>
						<p>
							<i className="fa fa-phone-alt" aria-hidden="true"></i>
							<a href={`tel:${phone}`}>{phone}</a>
						</p>
                        <p>
                            <i className="fab fa-github" aria-hidden="true"></i>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={`https://github.com/${github}`}
                            >
                                {github}
                            </a>
                        </p>
                        <p>
                            <i className="fab fa-linkedin" aria-hidden="true"></i>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={`https://www.linkedin.com/in/${linkedin}`}
                            >
                                {linkedin}
                            </a>
                        </p>
                        <p>
                            <i className="fab fa-facebook" aria-hidden="true"></i>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={`https://facebook.com/${facebook}`}
                            >
                                {facebook}
                            </a>
                        </p>
                        <p>
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={`https://twitter.com/${twitter}`}
                            >
                                {twitter}
                            </a>
                        </p>
                    </section>
                    <section>
                        <h2>SKILLS</h2>
                        <p className="skills">
                            {skills.map(skill => (
                                <span className="skill" key={skill}>
                                    {skill}
                                </span>
                            ))}
                        </p>
                    </section>
                    <section>
                        <h2>EDUCATION</h2>
                        {educations.map(education => (
                            <div key={education.degree}>
                                <b>{education.degree}</b>
                                <p>
                                    {education.organization} ({education.board})
                                </p>
                                <p>
                                    {education.yearOfJoining} - {education.yearOfPassing}
                                </p>
                            </div>
                        ))}
                    </section>
                </article>
                <article id="mainRight">
                    <section>
                        <h2>ABOUT</h2>
                        <div dangerouslySetInnerHTML={{ __html: md.render(about) }} />
                    </section>
                    <section>
                        <h2>WORK EXPERIENCE</h2>
                        {works.map(work => (
                            <div key={work.organization}>
                                <h3>
                                    <b>{work.designation}</b>
                                </h3>
                                <p>
                                    {work.organization} | {work.location} | {work.yearOfJoining} -{' '}
                                    {work.yearOfPassing}
                                </p>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: md.render(work.description),
                                    }}
                                />
                                <br />
                            </div>
                        ))}
                    </section>
                </article>
            </main>
        </div>
    );
};

export default PreviewResumeDisplay;
