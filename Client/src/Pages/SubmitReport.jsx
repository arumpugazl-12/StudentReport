
import React, { useState } from "react";
import axios from "axios";

const SubmitReport = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pdf", file);

    try {
      await axios.post("http://localhost:8001/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("PDF uploaded successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to upload PDF");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button type="submit">Upload PDF</button>
    </form>
  );
};

export default SubmitReport;
