const Mobile = ({ phone, type, onPhoneChange }) => {
    const onInputChange = event => {
        const re = /^[0-9\b]+$/;
        const value = event.target.value;
        if (value === '' || re.test(value)) {
            onPhoneChange({ type, payload: value });
        }
    };
    return (
        <div className="field">
            <div className="ui labeled left icon input">
                <i className="phone icon"></i>
                <input
                    type="text"
                    name="phone"
                    value={phone}
                    placeholder="9832098320"
                    onChange={onInputChange}
                    maxLength={10}
                />
            </div>
        </div>
    );
};

export default Mobile;
