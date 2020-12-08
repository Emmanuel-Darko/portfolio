import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import resume from '../files/Emmanuel-Resume.pdf';
import cv from '../files/Emma-Darko-CV.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
 
function Pdf(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
 
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const doc = props.match.params.id;
 
  return (
    <div>
      <Document
        file={doc==='cv'? cv : resume}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={e=>console.log(e)}
        options={{workerSrc: "pdf.worker.js"}}
        style={{width:"100%"}}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}

export default Pdf;