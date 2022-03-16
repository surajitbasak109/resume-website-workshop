import { useState, useRef, useContext, useEffect } from 'react';
import markdownIt from 'markdown-it';
import WorkDisplay from './WorkDisplay';
import { ResumeContext } from '../ResumeContext';
import { ADD_WORKS } from '../types';

const generateYears = (count, startYear) => {
    const years = [];
    for (let i = count; i >= 0; --i) {
        years.push(startYear - i);
    }
    return years;
};

const yearOfJoinings = generateYears(15, new Date().getFullYear());
const yearOfPassings = generateYears(14, new Date().getFullYear());

const Work = () => {
    const [workDetails, setWorkDetails] = useState([]);
    const [designation, setDesignation] = useState('');
    const [organization, setOrganization] = useState('');
    const [location, setLocation] = useState('');
    const [yearOfJoining, setYearOfJoining] = useState('');
    const [yearOfPassing, setYearOfPassing] = useState('');
    const [description, setDescription] = useState('');

    const [error, setError] = useState('');

    const [markdownPreview, setMarkdownPreview] = useState(false);
    const md = markdownIt();

    const designationRef = useRef();
	const {dispatch} = useContext(ResumeContext);

	useEffect(() => {
        dispatch({ type: ADD_WORKS, payload: workDetails });
    }, [dispatch, workDetails]);

    const onAddButtonClick = event => {
        event.preventDefault();
		setError(null);

        if (
            designation &&
            organization &&
            location &&
            yearOfJoining &&
            yearOfPassing &&
            description
        ) {
            setWorkDetails([
                ...workDetails,
                {
                    designation,
                    organization,
                    location,
                    yearOfJoining,
                    yearOfPassing,
                    description,
                },
            ]);

            setDesignation('');
            setOrganization('');
            setLocation('');
            setYearOfJoining('');
            setYearOfPassing('');
            setDescription('');

            designationRef.current.focus();
        } else {
			setError('Please fill all the fields');
		}
    };

    const renderWorkDisplay = () => {
        return workDetails.map((work, index) => {
            const {
                designation,
                organization,
                location,
                yearOfJoining,
                yearOfPassing,
                description,
            } = work;
            return (
                <WorkDisplay
                    key={index}
                    designation={designation}
                    organization={organization}
                    location={location}
                    yearOfJoining={yearOfJoining}
                    yearOfPassing={yearOfPassing}
                    description={description}
                    position={index}
                    onRemoveWork={onRemoveWork}
					onEditWork={onEditWork}
                />
            );
        });
    };

    const onRemoveWork = index => {
        setWorkDetails(workDetails.filter((work, idx) => idx !== index));
    };

	const onEditWork = index => {
		const { designation, organization, location, yearOfJoining, yearOfPassing, description } = workDetails[index];
		setDesignation(designation);
		setOrganization(organization);
		setLocation(location);
		setYearOfJoining(yearOfJoining);
		setYearOfPassing(yearOfPassing);
		setDescription(description);
		setWorkDetails(workDetails.filter((work, idx) => idx !== index));
	}

    return (
        <div className="works ui segment">
            <h3 className="ui center aligned header">Work Experience</h3>

            <div className="ui items">{renderWorkDisplay()}</div>

            <div className="ui grid">
                <div className="row">
                    <div className="eight wide computer sixteen wide mobile column">
                        <div className="field">
                            <label>Designation</label>
                            <input
                                type="text"
                                name="designation"
                                placeholder="Designation"
                                ref={designationRef}
                                value={designation}
                                onChange={event => setDesignation(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="eight wide computer sixteen wide mobile column">
                        <div className="field">
                            <label>Organization</label>
                            <input
                                type="text"
                                name="organization"
                                placeholder="Organization"
                                value={organization}
                                onChange={event => setOrganization(event.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="eight wide computer sixteen wide mobile column">
                        <div className="field">
                            <label>Location</label>
                            <input
                                type="text"
                                name="location"
                                placeholder="Location"
                                value={location}
                                onChange={event => setLocation(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="eight wide computer sixteen wide mobile column">
                        <div className="ui grid">
                            <div className="eight wide column">
                                <div className="field">
                                    <label>Year of Joining</label>
                                    <select
                                        name="yearOfJoining"
                                        value={yearOfJoining}
                                        onChange={event => setYearOfJoining(event.target.value)}
                                    >
                                        <option value="">Select Year</option>
                                        {yearOfJoinings.map(year => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="eight wide column">
                                <div className="field">
                                    <label>Year of Passing</label>
                                    <select
                                        name="yearOfPassing"
                                        value={yearOfPassing}
                                        onChange={event => setYearOfPassing(event.target.value)}
                                    >
                                        <option value="">Select Year</option>
                                        {yearOfPassings.map(year => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="sixteen wide column">
                        <div className="ui grid">
                            <div className={`${markdownPreview ? 'eight' : 'sixteen'} wide column`}>
                                <div className="field">
                                    <div
                                        style={{
                                            margin: '10px 0',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <label style={{ marginRight: '5px' }}>Description</label>
                                        <div className="ui toggle checkbox">
                                            <input
                                                id="markdown-preview-checkbox"
                                                type="checkbox"
                                                name="public"
                                                onChange={() =>
                                                    setMarkdownPreview(!markdownPreview)
                                                }
                                            />
                                            <label htmlFor="markdown-preview-checkbox">
                                                {markdownPreview ? 'Disable' : 'Enable'} Preview
                                            </label>
                                        </div>
                                    </div>
                                    <textarea
                                        name="description"
                                        value={description}
                                        onChange={event => setDescription(event.target.value)}
                                        placeholder="Markdown supported"
                                    />
                                </div>
                            </div>
                            {markdownPreview && (
                                <div className="eight wide column">
                                    <div className="ui segment">
                                        <div
                                            style={{ minHeight: '168px' }}
                                            dangerouslySetInnerHTML={{
                                                __html: md.render(description),
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="eight wide column">
                        <button className="ui button primary" onClick={onAddButtonClick}>
                            <i className="icon plus"></i>
                            Add
                        </button>
                    </div>
                    <div className="eight wide column">
                        {error && <div className="ui negative message">{error}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
