const PersonalDetails = () => {
    return (
        <div className="ui segment">
            <h3 className="ui center aligned header">Personal Details</h3>
            <div className="ui grid">
                <div className="row">
                    <div className="ui three column doubling stackable grid">
                        <div className="column">
                            <div className="field">
                                <label>First Name</label>
                                <input type="text" name="firstname" />
                            </div>
                        </div>
                        <div className="column">
                            <div className="field">
                                <label>Last Name</label>
                                <input type="text" name="firstname" />
                            </div>
                        </div>
                        <div className="column">
                            <div className="field">
                                <label>Job Role</label>
                                <input type="text" name="role" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalDetails;
