import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const CertificatePage = () => {
  const certRef = useRef();

  // Placeholder data (will come from Laravel backend later)
  const certificateData = {
    recipientName: "Juan Dela Cruz",
    courseTitle: "Front-End Development",
    dateIssued: "August 13, 2025",
    issuer: "CosMo Academy"
  };

  // Function to download as PDF
  const downloadPDF = () => {
    html2canvas(certRef.current, { scale: 2 }).then(canvas => {
      const pdf = new jsPDF("landscape", "mm", "a4");
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 297; // A4 landscape width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("certificate.pdf");
    });
  };

  return (
    <div className="certificate-page" style={{ padding: "20px", textAlign: "center" }}>
      <h1>Certificate Preview</h1>

      <div
        ref={certRef}
        style={{
          width: "100%",
          maxWidth: "900px",
          margin: "auto",
          padding: "40px",
          background: "#fff",
          border: "10px solid #F9C80E",
          borderRadius: "12px",
          fontFamily: "'Times New Roman', serif"
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "10px" }}>Certificate of Completion</h2>
        <p>This is to certify that</p>
        <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
          {certificateData.recipientName}
        </h1>
        <p>has successfully completed the course</p>
        <h3>{certificateData.courseTitle}</h3>
        <p>Date Issued: {certificateData.dateIssued}</p>
        <p>Issued by: {certificateData.issuer}</p>
      </div>

      <button
        onClick={downloadPDF}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#F9C80E",
          color: "#191919",
          fontWeight: "bold",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Download Certificate
      </button>
    </div>
  );
};

export default CertificatePage;

// I just commented it because it will cause an error 

//   use thid example route  on app 
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import CertificatePage from "./pages/CertificatePage";
// import HomePage from "./pages/HomePage";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/certificate" element={<CertificatePage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
