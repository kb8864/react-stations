// DO NOT DELETE

import './App.css'
import { useState } from "react";

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const appName = "Dogアプリ";
  const description = " 犬の画像を表示するサイトです";
  // const dogImageUrl = "https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg";
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");

  return (
    <>
      <header className="app-header">
        <div className="container">
          <h1 className="brand">{appName}</h1>
        </div>
    </header>
    <main className = "container">
      <p>{description}</p>
      <img src={dogUrl} alt="表示する犬の写真" />
    </main>
    </>
  )
}
