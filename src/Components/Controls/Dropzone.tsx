/*
https://www.npmjs.com/package/material-ui-dropzone
*/
import React, { useState } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';

const Dropzone: React.FC = () => {
    const [files, setFiles] = useState([]);
    return (
        <DropzoneArea 
            filesLimit={4}
            acceptedFiles={['text/txt', 'text/csv']}
            maxFileSize={5000000}
            showPreviews={false}
            showPreviewsInDropzone={true}
            showFileNames={true}
            previewGridProps={{container: { spacing: 1, direction: 'row' }}}
            previewText="Selected files"
            dropzoneText="Drag and drop 4 .csv or .txt files or click"
        />
    );
}

export default Dropzone;
