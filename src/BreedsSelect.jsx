// @ts-check


// props として 親コンポーネント（DogListContainer）からbreeds を渡される
// ({ breeds, value, onChange }) で正しく props を受け取る（子はデータを“持たない”）
// export const BreedsSelect = ({breeds,value,onChange}) => {
//ref 方式に合わせる
  export const BreedsSelect = ({ breeds, selectRef }) => {
  //const handleChange = (e) => {onChange(e.target.value)};

  return (
      <label htmlFor="breedSelect" >bleedsList
      <select id="breedSelect"ref={selectRef} defaultValue="" >
        <option value="" disabled>選択してください</option>
      {breeds.map((b) => (
        <option key= {b} value={b}>{b}</option>
        ))}
      </select>
      </label>
    )
}


