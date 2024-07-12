import { PropsWithChildren } from 'react'
import ChatSide from './ChatSide'

export default function ChatContainer (props: PropsWithChildren) {
  return (
    <div className='fixed inset-20'>
      <div className='shadow-md rounded-lg h-full overflow-hidden'>
        <div className='flex h-full'>
          <div className='w-20 h-full'>
            <ChatSide />
          </div>
          <div className='flex flex-1 h-full overflow-hidden'>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}
