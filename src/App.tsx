import React, { useState } from 'react';

function App() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadMessage, setUploadMessage] = useState<string>('');

  // 파일 선택 처리
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  // 파일 업로드 처리
  const handleFileUpload = async () => {
    if (!selectedFile) {
      setUploadMessage('파일을 선택해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://localhost:8080/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.text();
      setUploadMessage(data); // 성공 메시지 또는 오류 메시지
    } catch (error) {
      setUploadMessage('파일 업로드 실패');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>백엔드 이미지 업로드 테스트</h1>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleFileUpload}>업로드</button>
        <p>{uploadMessage}</p>
      </header>
    </div>
  );
}

export default App;
