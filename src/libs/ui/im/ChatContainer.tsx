import { PropsWithChildren, useMemo } from 'react'
import ChatSide from './ChatSide'
import ChatResizeContainer from './ChatResizeContainer'
import { cookies } from 'next/headers'

export default function ChatContainer (props: PropsWithChildren) {
  const defaultResizeLayouts = useMemo(() => {
    const layouts = cookies().get('layout:resize')
    if (layouts) {
      return JSON.parse(layouts.value)
    }
  }, [])

  return (
    <div className='fixed inset-20'>
      <div className='shadow-md rounded-lg h-full overflow-hidden'>
        <div className='flex h-full'>
          <div className='w-20 h-full'>
            <ChatSide />
          </div>
          <div className='flex flex-1 h-full overflow-hidden'>
            <ChatResizeContainer
              defaultLayouts={defaultResizeLayouts}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
