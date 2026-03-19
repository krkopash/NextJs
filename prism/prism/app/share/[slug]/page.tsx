'use client'
import React, { use, useEffect, useState, useMemo } from 'react'
import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-java'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/components/prism-python'
import 'prismjs/themes/prism-tomorrow.css'
import { Shield, Share2, Copy, Home } from 'lucide-react'
import Link from 'next/link'

interface ShareData {
  c: string
  l: string
  t: string
  p?: string
}

export default function SharePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [error, setError] = useState<string | null>(null)
  const [userPassword, setUserPassword] = useState('')
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [copied, setCopied] = useState(false)
  
  const data = useMemo<ShareData | null>(() => {
    try {
      if (slug) {
        let base64 = slug.replace(/-/g, '+').replace(/_/g, '/')
        while (base64.length % 4 !== 0) {
          base64 += '='
        }
        const decodedB64 = atob(base64)
        const decodedURI = decodeURIComponent(decodedB64)
        return JSON.parse(decodedURI)
      }
    } catch (e) {
      console.error("Failed to decode snippet:", e)
      setError("This share link appears to be invalid or corrupted.")
    }
    return null
  }, [slug])


  const highlightedCode = useMemo(() => {
    if (!data || (data.p && !isAuthorized)) return ""
    return highlight(data.c, languages[data.l] || languages.javascript, data.l)
  }, [data, isAuthorized])

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (data && userPassword === data.p) {
      setIsAuthorized(true)
      setPasswordError(false)
    } else {
      setPasswordError(true)
    }
  }

  if (!data) return (
      <p>loading...</p>
  )

  if (data.p && !isAuthorized) {
    return (
        <div>
          <form onSubmit={handlePasswordSubmit}>
            <input  type="password"  placeholder="Enter password"  value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}/>
              
            {passwordError && <p>Incorrect password. Please try again.</p>}<br/><br/>
            <button type="submit">unlock</button>
          </form>
        </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div>
            <p>language: {data.l}</p>
            <p>title: {data.t}</p>
          </div>
  
          <div className="flex items-center gap-2">
            <Link href="/" className="p-1 px-3 flex">Home page</Link>
          </div>
        </div>
        <pre className="line-numbers bg-gray-950 language-javascript" tabIndex={0}>
          <code  className={`language-${data.l}`} dangerouslySetInnerHTML={{ __html: highlightedCode }}/>
        </pre>
      </div>
  )
}