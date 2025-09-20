import { useState } from 'react'
import { fetchThreads } from "./lib/api";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

//トップページ
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


// ヘッダー部分
function Header() {
    return (
        <header className="header">
          <div className='header_title'>掲示板</div>
          <a href="#" className='header_link'>スレッドを立てる</a>
        </header>
    )
  }


export default function app() {
   const [threads, setThreads] = useState([]);


return(
  <div className="app">
    <Header />
    <main className='main'>

        <h1 className='heading'>新着スレッド</h1>
        {/* APIから配列を取得して、ひとつずつ画面に並べる */}
        <ul className='threads'>
          {threads.map((t) => (
            <li key={t.id} className='thread' title='{t.title}'>
              <div className='thread_title'>{t.title}</div>
              </li>
            ))}
        </ul>
    </main>
    </div>
  )
}

