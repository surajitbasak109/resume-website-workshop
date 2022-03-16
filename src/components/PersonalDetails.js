import React, { useContext } from 'react';
import { ResumeContext } from '../ResumeContext';
import { ADD_FIRST_NAME, ADD_LAST_NAME, ADD_ROLE } from '../types';

const PersonalDetails = () => {
    const context = useContext(ResumeContext);
    const {
		state: {
			personalDetails: { firstName, lastName, role },
		},
		dispatch
    } = context;

    return (
        <div className="ui segment">
            <h3 className="ui center aligned header">Personal Details</h3>
            <div className="ui grid">
                <div className="row">
                    <div className="ui three column doubling stackable grid">
                        <div className="column">
                            <div className="field">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    name="firstname"
                                    value={firstName}
                                    onChange={event =>
                                        dispatch({
                                            type: ADD_FIRST_NAME,
                                            payload: event.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div className="column">
                            <div className="field">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    name="firstname"
                                    value={lastName}
                                    onChange={event =>
                                        dispatch({
                                            type: ADD_LAST_NAME,
                                            payload: event.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div className="column">
                            <div className="field">
                                <label>Job Role</label>
                                <input
                                    type="text"
                                    name="role"
                                    value={role}
                                    onChange={event =>
                                        dispatch({ type: ADD_ROLE, payload: event.target.value })
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalDetails;
