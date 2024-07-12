import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function HomePage () {
  const router = useRouter()

  useEffect(() => {
    router.replace('/chat')
  }, [router])

  return <></>
}
