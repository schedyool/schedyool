/*
https://www.npmjs.com/package/material-ui-dropzone
*/
import React from 'react';
import { DropzoneArea} from 'material-ui-dropzone';
import { AttachFile } from '@material-ui/icons';


const Dropzone = (props: any) => {
    const { values, name, handleFileAdd, handleFileDelete, text } = props;
    console.log(values);
    return (
        <DropzoneArea
            filesLimit={1}
            initialFiles={values[name][0]}
            acceptedFiles={['text/txt', 'text/csv', 'application/vnd.ms-excel']}
            maxFileSize={200000}
            showPreviews={false}
            showFileNames={true}
            previewGridProps={{container: { spacing: 1, direction: 'row' }}}
            previewText="Selected files"
            dropzoneText={text}
            onDrop={file => handleFileAdd(file, name)}
            onDelete={() => handleFileDelete(name)}
        />
    );
}

export default Dropzone;
