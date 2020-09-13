import React from 'react';
import './download.css';

class DownloadFile extends React.Component {
	
  downloadData = () => {
    var element = document.createElement('a'); 
    fetch('http://localhost:5000/blank_students_with_names.xlsm', {mode : "no-cors"})
      .then(response => {
  				response.blob().then(blob => {
  					let url = window.URL.createObjectURL(blob);
  					let a = document.createElement('a');
  					a.href = url;
                                          // This is the name to be presented to the user.
  					a.download = 'blank_students_with_names.xlsm'; 
  					a.click();
  				});
  				// window.location.href = response.url;
                           })
  }

  render() {
    return (
      <div id="container">
        <button onClick={this.downloadData}>Download macro-enabled Excel spreadsheet</button>
      </div>
    )
  }

}

export default DownloadFile;
