import { useState } from 'react'
import { AppHeader } from './components/AppHeader'
import { OptionA } from './pages/OptionA'
import { OptionB } from './pages/OptionB'
import { OptionC } from './pages/OptionC'
import { PrototypeHome } from './pages/PrototypeHome'

type Page = 'home' | 'a' | 'b' | 'c'

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const home = () => setPage('home')
  return <><AppHeader onHome={home} />{page === 'home' && <PrototypeHome onSelect={setPage} />}{page === 'a' && <OptionA onBack={home} />}{page === 'b' && <OptionB onBack={home} />}{page === 'c' && <OptionC onBack={home} />}</>
}
