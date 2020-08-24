/*
https://www.npmjs.com/package/material-ui-dropzone
*/
// calebaren.github.io
import React from 'react';
import { DropzoneArea } from 'material-ui-dropzone';


const Dropzone = (props: any) => {
    const { values, name, handleFileAdd, handleFileDelete, text } = props;
    return (
        <DropzoneArea
            filesLimit={1}
            initialFiles={values[name][0]}
            acceptedFiles={[".csv, text/csv, text/plain, application/vnd.ms-excel, application/csv, text/x-csv, application/x-csv, text/comma-separated-values, text/x-comma-separated-values"]}
            maxFileSize={26000}
            showPreviews={false}
            showFileNames={true}
            previewGridProps={{ container: { spacing: 0, direction: 'row', justify: 'center' } }}
            previewText="Selected files"
            dropzoneText={text}
            onDrop={file => handleFileAdd(file, name)}
            onDelete={() => handleFileDelete(name)}
        />
    );
}

export default Dropzone;
