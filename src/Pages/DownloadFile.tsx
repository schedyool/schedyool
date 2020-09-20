import React from 'react';
import './download.css';

class DownloadFile extends React.Component {
	
  downloadData = () => {
    var element = document.createElement('a'); 
    fetch('https://www.schedyool.com/blank_students_with_names.txt', {mode : "no-cors"})
      .then(response => {
  				response.blob().then(blob => {
  					let url = window.URL.createObjectURL(blob);
  					let a = document.createElement('a');
  					a.href = url;
                                          // This is the name to be presented to the user.
  					a.download = 'students_with_names.txt'; 
  					a.click();
  				});
  				// window.location.href = response.url;
                           })
  }

  render() {
    return (
      <div id="container">
        <button onClick={this.downloadData}>Download file(s)</button>
      </div>
    )
  }

}

export default DownloadFile;
