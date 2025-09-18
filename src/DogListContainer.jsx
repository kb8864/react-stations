// @ts-check
import { useState } from 'react';
import { useEffect } from 'react';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])

  useEffect(() =>{
    const loadBreeds = async () =>{
      const res = await fetch('https://dog.ceo/api/breeds/list/all')

      if(!res.ok)throw new Error(`HTTP ${res.status}`);
      const { message } = await res.json()     // HTTP の本文（文字列）を JSON としてパースし、その中の message プロパティだけを分割代入で取り出してる
      const list = Object.keys(message); 
      setBreeds(list)
    } ;
    loadBreeds(); 
  },[])


  return(
    <div className='container'>
      <label htmlFor="breedSelect">BleedsList</label>{''}
      <select id="breedSelect" defaultValue=""> 
        <option value="" disabled></option>
        {breeds.map(b => (<option key= {b} value={b}>{b}</option>
      ))}
      </select>
      
    </div>
  )

}

