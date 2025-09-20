// Description.jsx
import { useState } from 'react'
import { DogImage } from './DogImage'

export const Description = ({ description }) => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg'
  )

  const handleNext = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const { message } = await res.json()
    setDogUrl(message)
  }

  return (
    <main className="container">
      <p>{description}</p>
      <DogImage imageUrl={dogUrl} />
      <button onClick={handleNext}>ランダムに次の犬の画像を表示</button>
    </main>
  )
}
