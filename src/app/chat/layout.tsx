import ChatResizeContainer from '@/libs/ui/im/ChatResizeContainer'
import { cookies } from 'next/headers'
import { PropsWithChildren, useMemo } from 'react'

export default function ChatLayout (props: PropsWithChildren) {
  const defaultResizeLayouts = useMemo(() => {
    const layouts = cookies().get('layout:resize')
    if (layouts) {
      return JSON.parse(layouts.value)
    }
  }, [])

  return (
    <ChatResizeContainer
      defaultLayouts={defaultResizeLayouts}
      secondary={props.children}
      primary={<></>}
    />
  )
}
