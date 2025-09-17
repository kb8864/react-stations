// DO NOT DELETE

import './App.css'
import {Header} from './Header.jsx';
import {Description} from './Description.jsx';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const appName = "Dogアプリ";
  const description = " 犬の画像を表示するサイトです";
  // const dogImageUrl = "https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg";
  return(
    <>
    <Header title = {appName}></Header>
    <Description description={description}></Description>
    </>
  )  


  
    

    
  
}

