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


  //ランダムに画像を表示させるために追加
  const handleNext = async () =>{
    try {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();       
    setDogUrl(data.message);     
    } catch (e) {
      console.log("画像取得失敗");
    }
  }

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

      {/* ボタン追加 */}
      {/* <button onClick={() => setDogUrl('https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg')}>更新</button> */}
      <button onClick={handleNext}>ランダムに次の犬の画像を表示</button>
    </main>
    </>

    
  )
}

