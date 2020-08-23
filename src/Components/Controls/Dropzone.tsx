/*
https://www.npmjs.com/package/material-ui-dropzone
*/
// calebaren.github.io
import React from 'react';
import { DropzoneArea} from 'material-ui-dropzone';
import { AttachFile } from '@material-ui/icons';


const Dropzone = (props: any) => {
    const { values, name, handleFileAdd, handleFileDelete, text } = props;
    return (
        <DropzoneArea
            filesLimit={1}
            initialFiles={values[name][0]}
            acceptedFiles={['text/*']}
            maxFileSize={26000}
            showPreviews={false}
            showFileNames={true}
            previewGridProps={{container: { spacing: 0, direction: 'row' , justify: 'center'}}}
            previewText="Selected files"
            dropzoneText={text}
            onDrop={file => handleFileAdd(file, name)}
            onDelete={() => handleFileDelete(name)}
            Icon={<AttachFile />}
        />
    );
}

export default Dropzone;
