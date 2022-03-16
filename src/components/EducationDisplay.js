const EducationDisplay = ({
    position,
    organization,
    degree,
    board,
    yearOfJoining,
    yearOfPassing,
    onRemoveEducation,
	onEditEducation,
}) => {
    return (
        <div className="item">
            <div className="middle aligned content">
                <div className="header">{degree}</div>
                <div className="content">
                    <div>
                        {organization} ({board})
                    </div>
                    <div>
                        {yearOfJoining} - {yearOfPassing}
                    </div>
                </div>
                <div className="extra">
                    <div
                        className="ui right floated icon button red"
                        onClick={() => onRemoveEducation(position)}
                        title="Remove"
                    >
                        <em className="fa fa-trash"></em>
                    </div>
                    <div
                        className="ui right floated icon button secondary"
                        title="Edit"
                        onClick={() => onEditEducation(position)}
                    >
                        <em className="fa fa-edit"></em>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationDisplay;
