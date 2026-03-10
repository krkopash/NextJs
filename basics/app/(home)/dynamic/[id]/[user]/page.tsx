'use client'
import { usePathname} from 'next/navigation'
export default function DynamicRoute() {
  const pathname = usePathname()
  return (
    <div>
      <h1>Dynamic</h1><br/>
      <h2>Pathname: {pathname}</h2>
    </div>
  )
}