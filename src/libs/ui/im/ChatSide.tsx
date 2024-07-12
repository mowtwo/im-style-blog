import ChatSideIcon from './ChatSideIcon'

export default function ChatSide () {
  return (
    <div className='bg-gray-300 bg-opacity-70 backdrop-blur-xl h-full'>
      <div className='flex flex-col items-center gap-2 py-6 h-full'>
        <ChatSideIcon
          twName={{
            value: 'mdi--message-outline',
            actived: 'mdi--message'
          }}
          actived
        />
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
