'use client'

import React, { useState, useEffect } from 'react'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-python'
import 'prismjs/themes/prism-tomorrow.css'

const languageOptions = [
  { label: 'JavaScript', value: 'javascript' },
  { label: 'Java', value: 'java' },
  { label: 'Python', value: 'python' },
  {label: 'TSX',value:"TSX"},
  {label: 'JSX',value:"JSX"},
  {label: 'typescript',value:"typescript"},
]

interface CodeEditorProps {
  initialCode?: string
  initialLanguage?: string
  onChange?: (code: string, language: string) => void
}

export default function CodeEditor({  
  initialCode = '', 
  initialLanguage = 'tsx', 
  onChange }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode)
  const [language, setLanguage] = useState(initialLanguage)

  useEffect(() => {
    if (onChange) onChange(code, language)
  }, [code, language, onChange])

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <select value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="px-3 py-2 text-black bg-white" style={{}}>
          {languageOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      <div className="overflow-hidden min-h-[300px]">
      <Editor value={code} onValueChange={code => setCode(code)} highlight={code => highlight(code, languages[language] || languages.javascript, language)} padding={20}
          className="min-h-[300px]" textareaClassName="focus:outline-none"/>
      </div>
    </div>
  )
}
