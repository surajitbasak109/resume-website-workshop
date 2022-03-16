import { useRef, useState, useContext, useEffect } from 'react';
import { ResumeContext } from '../ResumeContext';
import { ADD_EDUCATIONS } from '../types';
import EducationDisplay from './EducationDisplay';

const Educations = () => {
    const [educations, setEducations] = useState([]);
    const [organization, setOrganization] = useState('');
    const [degree, setDegree] = useState('');
    const [board, setBoard] = useState('');
    const [yearOfJoining, setYearOfJoining] = useState('');
    const [yearOfPassing, setYearOfPassing] = useState('');

    const [error, setError] = useState('');

    const { dispatch } = useContext(ResumeContext);

    const organizationRef = useRef();

    useEffect(() => {
        dispatch({ type: ADD_EDUCATIONS, payload: educations });
    }, [dispatch, educations]);

    const onAddButtonClick = event => {
        event.preventDefault();
		setError(null);

        if (organization && degree && board && yearOfJoining && yearOfPassing) {
            setEducations([
                ...educations,
                {
                    organization,
                    degree,
                    board,
                    yearOfJoining,
                    yearOfPassing,
                },
            ]);

            setOrganization('');
            setDegree('');
            setBoard('');
            setYearOfJoining('');
            setYearOfPassing('');

            organizationRef.current.focus();
        } else {
			setError('Please fill all the required fields');
		}
    };

    const onYearChange = (event, callback) => {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            return callback(event.target.value);
        }
    };

    const renderEducationsDisplay = () => {
        return educations.map((education, index) => {
            const { organization, degree, board, yearOfJoining, yearOfPassing } = education;
            return (
                <EducationDisplay
                    key={index}
                    organization={organization}
                    degree={degree}
                    board={board}
                    yearOfJoining={yearOfJoining}
                    yearOfPassing={yearOfPassing}
                    position={index}
                    onRemoveEducation={onRemoveEducation}
					onEditEducation={onEditEducation}
                />
            );
        });
    };

    const onRemoveEducation = index => {
        setEducations(educations.filter((education, idx) => idx !== index));
    };

	const onEditEducation = index => {
		const { organization, degree, board, yearOfJoining, yearOfPassing } = educations[index];
		setOrganization(organization);
		setDegree(degree);
		setBoard(board);
		setYearOfJoining(yearOfJoining);
		setYearOfPassing(yearOfPassing);
		setEducations(educations.filter((education, idx) => idx !== index));
	}

    return (
        <div className="educations ui segment">
            <h3 className="ui center aligned header">Educations</h3>

            <div className="ui items">{renderEducationsDisplay()}</div>

            <div className="ui grid">
                <div className="row">
                    <div className="eight wide computer sixteen wide mobile column">
                        <div className="field">
                            <label>School/College</label>
                            <input
                                type="text"
                                name="organization"
                                placeholder="School/College"
                                value={organization}
                                onChange={e => setOrganization(e.target.value)}
                                ref={organizationRef}
                            />
                        </div>
                    </div>
                    <div className="eight wide computer sixteen wide column mobile column">
                        <div className="field">
                            <label>Major Subject/Degree</label>
                            <input
                                type="text"
                                name="major_subject"
                                placeholder="Major Subject(s)"
                                value={degree}
                                onChange={e => setDegree(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="sixteen wide column">
                        <div className="field">
                            <label>Board/University</label>
                            <input
                                type="text"
                                name="board"
                                placeholder="Board/University"
                                value={board}
                                onChange={e => setBoard(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="eight wide computer sixteen wide mobile column">
                        <div className="field">
                            <label>Year of Joining</label>
                            <input
                                type="text"
                                name="joining_year"
                                placeholder="Year of Joining"
                                maxLength={4}
                                value={yearOfJoining}
                                onChange={e =>
                                    onYearChange(e, value => {
                                        setYearOfJoining(value);
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="eight wide computer sixteen wide mobile column">
                        <div className="field">
                            <label>Year of Passing</label>
                            <input
                                type="text"
                                name="passing_year"
                                placeholder="Year of Passing"
                                maxLength={4}
                                value={yearOfPassing}
                                onChange={e =>
                                    onYearChange(e, value => {
                                        setYearOfPassing(value);
                                    })
                                }
                            />
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

export default Educations;
