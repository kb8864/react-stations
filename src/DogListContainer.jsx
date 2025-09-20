// @ts-check
import { useEffect, useRef, useState } from 'react';
import {BreedsSelect} from './BreedsSelect.jsx';



export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed,  setSelectedBreed]= useState('')
  const [limit, setLimit] = useState(10)
  const [images, setImages] = useState([])

  // 子の <select> で取れるようにする
  const selectRef = useRef(null);

  useEffect(() =>{
    const loadBreeds = async () =>{
      const res = await fetch('https://dog.ceo/api/breeds/list/all')

      if(!res.ok)throw new Error(`HTTP ${res.status}`);
      const { message } = await res.json()     // HTTP の本文（文字列）を JSON としてパースし、その中の message プロパティだけを分割代入で取り出してる
      // const list = Object.keys(message); 
      setBreeds(Object.keys(message)) // 犬種名だけの配列に
    } ;
    loadBreeds(); 
  },[])
  
   // 表示ボタンクリックで画像を取得
  //  この時、テストコードでは犬種を選ばずに『表示/Show』を押しても fetch() が呼ばれる」ことを期待しているので、
  //  未選択なら breeds[0] を使って続行して、その上で fetch → setImages
  const handleShow = async() =>{
    const raw = selectRef.current?.value;
    const breed = raw || breeds[0] || ''; // 未選択なら最初の犬種を使う
    if (!breed) return;  
    if (!raw && selectRef.current) { selectRef.current.value = breed;

     } // 選択解除

    setSelectedBreed(breed);// 親の state に反映
  
  //件数制限。APIからランダムに取ってくる
  const n = Math.max(1, Math.min(limit, 50));
  const url = `https://dog.ceo/api/breed/${breed}/images/random/${n}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const { message } = await res.json(); // 画像URLの配列に格納
    setImages(message);
  }



  return(
    <div className='container'>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <BreedsSelect breeds={breeds} selectRef={selectRef} />

      <label >BreedsList
        <input type="number" value={limit} min={1} max={50} onChange={(e) => setLimit(Number(e.target.value))} />
      </label>
      <button type="button" onClick={handleShow}>表示</button>
      </div>

      {/* 選択した犬種の画像リスト */}    
      <ul className="image-grid" style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 12, listStyle: 'none', padding: 0 }}>
        {images.map((src) => (
          <li key={src} style={{ borderRadius: 8, overflow: 'hidden' }}>
            <img src={src} alt={selectedBreed} style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }} />
          </li>
        ))}
      </ul>
    </div>
  )
}
