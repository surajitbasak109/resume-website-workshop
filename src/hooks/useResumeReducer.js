import { useReducer } from 'react';
import {
    ADD_ABOUT,
    ADD_EDUCATIONS,
    ADD_EMAIL,
    ADD_FACEBOOK,
    ADD_FIRST_NAME,
    ADD_GITHUB,
    ADD_LAST_NAME,
    ADD_LINKEDIN,
    ADD_PHONE,
    ADD_ROLE,
    ADD_SKILLS,
    ADD_TWITTER,
	ADD_WORKS,
} from '../types';

const initialState = {
    personalDetails: {
        firstName: '',
        lastName: '',
        role: '',
    },
    contactDetails: {
        email: '',
        phone: '',
        facebook: '',
        twitter: '',
        linkedin: '',
        github: '',
    },
    about: '',
    skills: [],
    educations: [],
    works: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_FIRST_NAME:
            return {
                ...state,
                personalDetails: {
                    ...state.personalDetails,
                    firstName: action.payload,
                },
            };
        case ADD_LAST_NAME:
            return {
                ...state,
                personalDetails: {
                    ...state.personalDetails,
                    lastName: action.payload,
                },
            };
        case ADD_ROLE:
            return {
                ...state,
                personalDetails: {
                    ...state.personalDetails,
                    role: action.payload,
                },
            };
        case ADD_EMAIL:
            return {
                ...state,
                contactDetails: {
                    ...state.contactDetails,
                    email: action.payload,
                },
            };
        case ADD_PHONE:
            return {
                ...state,
                contactDetails: {
                    ...state.contactDetails,
                    phone: action.payload,
                },
            };
        case ADD_FACEBOOK:
            return {
                ...state,
                contactDetails: {
                    ...state.contactDetails,
                    facebook: action.payload,
                },
            };
        case ADD_TWITTER:
            return {
                ...state,
                contactDetails: {
                    ...state.contactDetails,
                    twitter: action.payload,
                },
            };
        case ADD_LINKEDIN:
            return {
                ...state,
                contactDetails: {
                    ...state.contactDetails,
                    linkedin: action.payload,
                },
            };
        case ADD_GITHUB:
            return {
                ...state,
                contactDetails: {
                    ...state.contactDetails,
                    github: action.payload,
                },
            };
        case ADD_ABOUT:
            return {
                ...state,
                about: action.payload,
            };
        case ADD_SKILLS:
            return {
                ...state,
                skills: action.payload,
            };
        case ADD_EDUCATIONS:
            return {
                ...state,
                educations: action.payload,
            };
        case ADD_WORKS:
            return {
                ...state,
                works: action.payload,
            };
        default:
            return state;
    }
};

const useResumeReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return [state, dispatch];
};

export default useResumeReducer;
