
export const DogImage = ({ imageUrl, alt = '犬の写真' }) => {
  // TODO: 必要なら width/height, className を追加
  return <img src={imageUrl} alt={alt} />;
}
