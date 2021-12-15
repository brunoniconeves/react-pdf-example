import React, { Component, Fragment } from 'react';
import {PDFViewer} from '@react-pdf/renderer'
import Invoice from './components/reports/Invoice'
import invoice from './data/invoice'
import { PDFDownloadLink } from "@react-pdf/renderer"

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <Fragment>
            <PDFViewer width="1000" height="600" className="app" >
                <Invoice invoice={invoice}/>
            </PDFViewer>
            <PDFDownloadLink
              className="app" 
              document={<Invoice invoice={invoice} />}
              fileName="movielist.pdf"
              style={{
                textDecoration: "none",
                padding: "10px",
                color: "#4a4a4a",
                backgroundColor: "#f2f2f2",
                border: "1px solid #4a4a4a"
              }}
            >
              {({ blob, url, loading, error }) =>
                loading ? "Loading document..." : "Download Pdf"
              }
            </PDFDownloadLink>
        </Fragment>
    );
  }
}

export default App;