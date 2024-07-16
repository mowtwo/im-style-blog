import { ImgHTMLAttributes, ReactNode } from 'react'

export type StatusString =
  | 'online'
  | 'busy'
  | 'offline'
  | 'focus'
  | 'leaving'
  | 'not-disturb'

export interface ChatSideAvatarProps {
  slots?: {
    imgProps: ImgHTMLAttributes<any>
  }
  statusBadge?: StatusString | ReactNode
}

export default function ChatSideAvatar (
  props: ChatSideAvatarProps
) {
  return (
    <div className='bg-gray-50 rounded-full size-12'>
      {/*  */}
    </div>
  )
}
