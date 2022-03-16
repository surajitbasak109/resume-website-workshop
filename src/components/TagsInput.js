import { useState, useEffect, useContext } from 'react';
import { ResumeContext } from '../ResumeContext';
import { ADD_SKILLS } from '../types';
import './TagsInput.css';

const TagsInput = () => {
    const [tags, setTags] = useState([]);
    const { dispatch } = useContext(ResumeContext);

    useEffect(() => {
        dispatch({ type: ADD_SKILLS, payload: tags });
    }, [dispatch, tags]);

    const addTag = event => {
        if (event.key === 'Enter' && event.target.value !== '') {
            setTags([...tags, event.target.value]);
            event.target.value = '';
        }
    };

    const removeTag = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };

    const renderedTagsList = tags.map((tag, index) => {
        return (
            <li key={index} className="tag">
                <span className="tag-title">{tag}</span>
                <i className="icon close tag-close-icon" onClick={() => removeTag(index)}></i>
            </li>
        );
    });

    return (
        <div className="ui segment">
            <h3 className="ui center aligned header">Your Skills</h3>
            <div className="field">
                <div className="tags-input">
                    <ul id="tags">{renderedTagsList}</ul>
                    <input
                        type="text"
                        placeholder="Press enter to add skills"
                        onKeyUp={event => addTag(event)}
                    />
                </div>
            </div>
        </div>
    );
};

export default TagsInput;
