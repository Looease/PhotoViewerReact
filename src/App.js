import React, { useState } from "react";

import {PhotoViewer} from "./PhotoViewer/PhotoViewer";
import {Thumbnails} from "./Thumbnails/Thumbnails";
import * as styles from "./App.module.scss";


function App() {

  const [selectedImageURL, updateImageURL] =useState("https://picsum.photos/id/6${imageNumberString}/1600/900")


  return (
    <main>
      <h1 className={styles.title}>Photo Viewer</h1>
      <PhotoViewer imageUrl={selectedImageURL}/>
      <Thumbnails selectedImageURL={selectedImageURL} updateImageURL={updateImageURL}/>
    </main>
  );
}

export default App;


//anything shared between photoviewer and thumbnails live in here as this is the only class that is connected to both of them