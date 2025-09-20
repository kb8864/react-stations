// @ts-check


// props として 親コンポーネント（DogListContainer）からbreeds を渡される
// ({ breeds, value, onChange }) で正しく props を受け取る（子はデータを“持たない”）
export const BreedsSelect = ({breeds,value, onChange}) => {
  const handleChange = (e) => {onChange(e.target.value)};

  return <>
      <label htmlFor="breedSelect">BleedsList</label>{''}
      <select id="breedSelect" value={value} onChange={handleChange}> 
        <option value="" disabled>Select</option>
      {breeds.map(b => (<option key= {b} value={b}>{b}</option>))}
      </select>
  </>
}


