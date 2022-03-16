import React, { useState, useEffect } from 'react';
import Form from './Form';
import './App.css';
import { ResumeProvider } from '../ResumeContext';
import useResumeReducer from '../hooks/useResumeReducer';
import PreviewResumeDisplay from './PreviewResumeDisplay';

const App = () => {
    const [state, dispatch] = useResumeReducer();

    const [previewResume, setPreviewResume] = useState(false);
    const [previewBtnEnabled, setPreviewBtnEnabled] = useState(false);
    const [isPrinting, setIsPrinting] = useState(false);

    useEffect(() => {
        if (isPrinting) window.print();
    }, [isPrinting]);

    useEffect(() => {
        const checkPreviewBtnEnabled = () => {
            const {
                personalDetails: { firstName, lastName, role },
                contactDetails: { email, phone },
                skills,
                educations,
                works,
            } = state;

            if (!firstName || !lastName || !role) {
                return false;
            }

            if (!email || !phone) {
                return false;
            }

            if (skills.length === 0) {
                return false;
            }

            if (educations.length === 0) {
                return false;
            }

            if (works.length === 0) {
                return false;
            }

            return true;
        };

        if (checkPreviewBtnEnabled()) {
            setPreviewBtnEnabled(true);
        } else {
            setPreviewBtnEnabled(false);
        }
    }, [state]);

    return (
        <ResumeProvider value={{ state, dispatch }}>
            <div
                className="ui segment right aligned"
                style={{ display: `${isPrinting ? 'none' : 'block'}` }}
            >
                <button
                    disabled={!previewBtnEnabled}
                    className="ui button primary"
                    onClick={() => setPreviewResume(!previewResume)}
                >
                    {previewResume ? 'Close Preview' : 'Preview Resume'}
                </button>
                {previewResume && (
                    <button
                        title="print"
                        className="ui button secondary"
                        onClick={() => setIsPrinting(true)}
                    >
                        <em className="fa fa-print"></em>
                    </button>
                )}
            </div>
            <div className="ui container app">
                {previewResume ? <PreviewResumeDisplay /> : <Form />}
            </div>
        </ResumeProvider>
    );
};

export default App;
