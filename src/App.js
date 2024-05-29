import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [classifiedImg, setClassifiedImage] = useState(null);
  const [classes, setClasses] = useState(null);
  const inputRef = useRef();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else setSelectedImage(null);
  };

  const handleInput = () => {
    inputRef.current.click();
  };

  const resetStates = () => {
    setClasses(null);
    setClassifiedImage(null);
  }

  const hanldeSubmit = async (event) => {
    event.preventDefault();
    const url = "https://616b-35-230-99-186.ngrok-free.app/";
    const formData = new FormData();
    formData.append("image", event.target.image.files[0]);

    try {
      resetStates()
      const response = await fetch(`${url}predict`, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        console.log({data})
        console.log(typeof data.classes)
        // setOriginalImage(data.image)
        setClassifiedImage(`data:image/jpeg;base64,${data.image_base64}`)
        setClasses(data.classes)
      } else {
        resetStates()
        console.error("Request failed:", response.status);
      }
    } catch (error) {
      resetStates()
      console.error("Request failed:", error);
    }
  };

  return (
    <div className="main">
      <header>
        <div className="image">
          <img src="/logo.png" alt="logo" />
        </div>
        <h1>Trash Classification And Recyclability Assistant</h1>
      </header>
      <main>
        <div className="container">
          {selectedImage && (
            <img onClick={handleInput} src={selectedImage} alt="Preview" className="preview-image" />
          )}
          <div className="input">
            <h1 onClick={handleInput}>Upload an Image</h1>
            <form onSubmit={hanldeSubmit}>
              <input
                type="file"
                name="image"
                id="image"
                onChange={handleImageChange}
                ref={inputRef}
              />
              <button type="submit" value="Predict">
                Predict
              </button>
            </form>
          </div>
        </div>
        {
              classifiedImg &&
              <>
              <div className="prediction">
                <img src={classifiedImg} alt='Classification'/>
              </div>
              
              
              </> 
            }
            {
              classes &&
              <div className="classes">
                <dl>
                  <dt>Classes Are..:</dt>
                  <dd>

                {
                  Object.keys(classes).map(key => 
                    classes[key]? <li>{key} : {classes[key]}</li>: null
                  )
                }
                </dd>
              </dl>
              </div>
            }
      </main>
    </div>
  );
}

export default App;
