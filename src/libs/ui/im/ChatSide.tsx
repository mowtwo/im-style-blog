'use client'
import Link from 'next/link'
import ChatSideIcon from './ChatSideIcon'
import { usePathname } from 'next/navigation'
import ChatSideAvatar from './ChatSideAvatar'

export default function ChatSide () {
  const pathname = usePathname()

  return (
    <div className='bg-gray-300 bg-opacity-70 backdrop-blur-xl h-full'>
      <div className='flex flex-col items-center gap-2 py-6 h-full'>
        <ChatSideAvatar />
        <div className='mb-4' />
        <Link href='/chat'>
          <ChatSideIcon
            twName={{
              value: 'mdi--message-outline',
              actived: 'mdi--message'
            }}
            actived={pathname === '/chat'}
          />
        </Link>
        <ChatSideIcon
          twName={{
            value: 'mdi--user-outline',
            actived: 'mdi--user'
          }}
        />
        <ChatSideIcon
          twName={{
            value: 'mdi--document-sign',
            actived: 'mdi--document'
          }}
        />
        <ChatSideIcon
          twName={{
            value: 'mdi--file-code-outline',
            actived: 'mdi--file-code'
          }}
        />
        <div>
          <ChatSideIcon
            twName={{
              value: 'mdi--dots-hexagon'
            }}
          />
        </div>
        <div className='mt-auto' />
        <ChatSideIcon
          twName={{
            value: 'mdi--github'
          }}
          variant='outline'
        />
        <ChatSideIcon
          twName={{
            value: 'mdi--menu'
          }}
          variant='outline'
        />
      </div>
    </div>
  )
}
