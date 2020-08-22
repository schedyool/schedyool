/*
https://www.npmjs.com/package/material-ui-dropzone
*/
import React from 'react';
import { DropzoneArea} from 'material-ui-dropzone';
import { AttachFile } from '@material-ui/icons';


const Dropzone = (props: any) => {
    const { files, handleFileAdd, handleFileDelete } = props;
    return (
        <DropzoneArea
            filesLimit={4}
            initialFiles={files}
            acceptedFiles={['text/txt', 'text/csv', 'application/vnd.ms-excel']}
            maxFileSize={5000000}
            showPreviews={false}
            // showPreviewsInDropzone={true}
            showFileNames={true}
            previewGridProps={{container: { spacing: 1, direction: 'row' }}}
            previewText="Selected files"
            dropzoneText="Drag and drop 4 .csv or .txt files or click"
            onDrop={file => handleFileAdd(file)}
            onDelete={file => handleFileDelete(file)}
        />
    );
}

export default Dropzone;
