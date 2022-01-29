const Mobile = ({ mobile, onMobileChange }) => {
    const onInputChange = event => {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            onMobileChange(event.target.value);
        }
    };
    return (
        <div className="field">
            <div className="ui labeled left icon input">
                <i className="phone icon"></i>
                <input
                    type="text"
                    name="mobile"
                    value={mobile}
                    placeholder="9832098320"
                    onChange={onInputChange}
					maxLength={10}
                />
            </div>
        </div>
    );
};

export default Mobile;
