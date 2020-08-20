/*
https://www.npmjs.com/package/material-ui-dropzone
*/
import React, { useState } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';

const Dropzone: React.FC = () => {
    const [files, setFiles] = useState([]);
    return (
        <DropzoneArea 
            acceptedFiles={['text/txt', 'text/csv']}
            showPreviews={true}
            maxFileSize={5000000}
        />
    );
}

export default Dropzone;
