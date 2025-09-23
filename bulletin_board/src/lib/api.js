
const API_BASE = import.meta.env.VITE_API_BASE_URL;

// apiの/threads から配列を取得してくる
export async function fetchThreads() {
    const res = await fetch(`${API_BASE}/threads`,{
        headers: {Accept: 'application/json'},//json形式で受け取る
   
})  
const data = await res.json();
return Array.isArray(data) ? data : (data.items ?? [])//配列が来ること前提。将来、{items:[...]} になったら data.items を返せることを想定
}
