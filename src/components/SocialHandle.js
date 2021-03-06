const SocialHandle = ({ icon, url, handle, setHandle, handleType }) => {
    return (
        <div className="field">
            <div className="ui left action input">
                <div className="ui labeled icon button">
                    <i className={icon}></i>
                    {url}
                </div>
                <input
                    type="text"
                    name="facebook"
                    value={handle}
                    onChange={e => setHandle({ type: handleType, payload: e.target.value })}
                />
            </div>
        </div>
    );
};

export default SocialHandle;
