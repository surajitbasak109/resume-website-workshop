import markdownIt from 'markdown-it';

const WorkDisplay = ({
    position,
    designation,
    organization,
    location,
    yearOfJoining,
    yearOfPassing,
    description,
    onRemoveWork,
    onEditWork,
}) => {
    const md = markdownIt();

    return (
        <div className="item">
            <div className="middle aligned content">
                <div className="header">{designation}</div>
                <div className="content">
                    <div>
                        {organization} - {location}
                    </div>
                    <div>
                        {yearOfJoining} - {yearOfPassing}
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: md.render(description) }} />
                </div>
                <div className="extra">
                    <div
                        className="ui right floated icon button red"
						title='Remove'
                        onClick={() => onRemoveWork(position)}
                    >
                        <em className="fa fa-trash"></em>
                    </div>
                    <div
                        className="ui right floated icon button secondary"
                        title="Edit"
                        onClick={() => onEditWork(position)}
                    >
                        <em className="fa fa-edit"></em>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkDisplay;
