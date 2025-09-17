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


  //ローディングを入れてみる
  const [loading, setLoading] = useState(false)



  //ランダムに画像を表示させるために追加
  const handleNext = async () =>{
    setLoading(true);                       
    try {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();       
    setDogUrl(data.message);     
    } catch (e) {
      console.log("画像取得失敗",e);
    }finally{
      setLoading(false);                       
    }
  }

  return (
    <>
      <header className="app-header">
        <div className="container">
          <h1 className="brand">{appName}</h1>
        </div>
    </header>
      {/* アクセシビリティ向上：処理中を周知 */}
      <main className="container" aria-busy={loading}>
        <p>{description}</p>
        <img src={dogUrl} alt="表示する犬の写真" />

        {/* ② 変更：loading中は無効化＆文言切替 */}
        <button onClick={handleNext} disabled={loading}>
          {loading ? "読み込み中…" : "ランダムに次の犬の画像を表示"}
        </button>
      </main>
    </>

    
  )
}

