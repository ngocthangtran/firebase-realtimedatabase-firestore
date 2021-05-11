import './App.css';
import React, { useState } from 'react';
import { storage } from "./firebase/firebase"

function App() {

  const allInputs = { imgUrl: '' };
  const [imageAsFile, setImageAsFile] = useState('');
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);

  //set state select file
  console.log(imageAsUrl)
  const handleImageAsFile = (e) => {
    const image = e.target.files[0]
    setImageAsFile(image)//neu k dk xem lai
  }

  //upload file to firebase
  const handleFireBaseUpload = e => {
    e.preventDefault();
    if (imageAsFile === '') {
      console.error(`not an image, the image file is a ${typeof (imageAsFile)}`)
    }
    const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)

    //get link img on firebase
    uploadTask.on('state_changed',
      (snapShot) => {
        console.log(snapShot)
      }, (err) => {
        console.error(err)
      }, () => {
        storage.ref('images').child(imageAsFile.name).getDownloadURL()
          .then(fireBaseUrl => {
            setImageAsUrl(prevObject => ({ ...prevObject, imgUrl: fireBaseUrl }))
          })
      })
  }

  return (
    <div className="App">
      <form onSubmit={handleFireBaseUpload}>
        <input
          type="file"
          onChange={handleImageAsFile}
        />
        <button>upload</button>
      </form>
      <img src={imageAsUrl.imgUrl} alt='test img'></img>
    </div>
  );
}

export default App;
