import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './download.css';

class DownloadFile extends React.Component {
  
  getItems(){
    let items: any;
    items = [];
    let filelist: any;
    filelist = {
      "Main File":"sample_master_file.xlsm",
      "Room Capacity File":"sample_rooms_with_names.csv",
      "Same Day Sets File":"sample_same_day_sets.csv",
      "Different Day File":"sample_diff_day_pairs.csv",
    };
    //var elements = document.createElement('button').setAttribute('className',''); 
    
    Object.keys(filelist).forEach(key => {
      console.log(key, filelist[key]);
      items.push(<Col sm="6" xs="12"><button className="btn-theme full-width m-1" onClick={() => this.downloadData('/files/' + filelist[key])} >Download {key} file(s)</button></Col>);
      
    });
    return items;
  }
  downloadData(param: any) {
    fetch(param, {mode : "no-cors"})
      .then(response => {
  				response.blob().then(blob => {
            
  					let url = window.URL.createObjectURL(blob);
  					let a = document.createElement('a');
  					a.href = url;
                                          // This is the name to be presented to the user.
  					a.download = param; 
  					a.click();
  				});
  				// window.location.href = response.url;
                           })
  }

  render() {
    return (
      <Container id="container">
        <Row>
          {this.getItems()}
        </Row>
      </Container>
        
    )
  }

}

export default DownloadFile;
