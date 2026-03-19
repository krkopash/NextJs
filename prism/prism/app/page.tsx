'use client'
import {useState, useEffect } from 'react'
import CodeEditor from './components/CodeEditor'

interface Snippet { id: string; title: string; content: string; language: string; timestamp: string }

export default function Home() {
  const [snippets, setSnippets] = useState<Snippet[]>([])
  const [currentCode, setCurrentCode] = useState('')
  const [currentLang, setCurrentLang] = useState('javascript')
  const [title, setTitle] = useState('')
  const [shareLink, setShareLink] = useState('')
  const [notif, setNotif] = useState('')
  const [password, setPassword]=useState("");

  useEffect(() => {
    const saved = localStorage.getItem('code-vault-snippets')
    if (saved) setSnippets(JSON.parse(saved))
  }, [])

  const generateShareLink = () => {
    if (!currentCode) return
    
    try {
  const json = JSON.stringify({
    c: currentCode,
    l: currentLang,
    t: title,
    p: password|| undefined
  });

  const encoded = btoa(unescape(encodeURIComponent(json)));
  const urlSafe = encoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  const link = `${window.location.origin}/share/${urlSafe}`;
  setShareLink(link);
  navigator.clipboard.writeText(link);

  showNotification('Link copied');
} catch (error) {
      console.error('Failed to generate share link:', error)
      showNotification('not able to generate link check console')
    }
  }

  const showNotification = (msg: string) => {
    setNotif(msg)
    setTimeout(() => setNotif(''), 3000)
  }

  return (
    <div className="flex flex-col gap-8 justify-between"><br/>
        {notif && (
          <div className="px-4 py-2 items-center gap-2">
            {notif}
          </div>
        )}
      
          <div className="flex gap-4">
            <label>Title:</label>
            <input  type="text" placeholder="title" value={title}
              onChange={(e) => setTitle(e.target.value)} className="text-white bg-gray-950"/>
              <label>password:</label>
              <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='text-white bg-gray-950'/>
            
      <button onClick={generateShareLink}>Share</button>
      </div><br/>
          <div className='bg-gray-950 text-white'>
            <CodeEditor initialCode={currentCode} initialLanguage={currentLang} onChange={(code, lang) => {setCurrentCode(code)
              setCurrentLang(lang)}}/>
          </div>
      
    </div>
  )
}