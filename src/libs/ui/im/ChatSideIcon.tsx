import { MouseEventHandler } from 'react'
import { twJoin } from 'tailwind-merge'

export default function ChatSideIcon (props: {
  twName: {
    value: string
    actived?: string
  }
  actived?: boolean
  variant?: 'container' | 'outline'
  onClick?: MouseEventHandler<HTMLDivElement>
}) {
  const {
    actived, twName, onClick, variant = 'container'
  } = props

  return (
    <div
      className={
        twJoin(
          'flex items-center justify-center size-14 rounded-md group transition-all',
          variant === 'container' && 'hover:bg-black hover:bg-opacity-5',
          actived && 'bg-opacity-5 bg-black'
        )
      }
      onClick={onClick}
    >
      <div className={
        twJoin(
          'iconify text-3xl group-active:opacity-60 transition-all',
          actived ? twName.actived ?? twName.value : twName.value,
          actived ? 'text-blue-500' : 'text-gray-600',
          variant === 'outline' && 'hover:text-blue-500'
        )
      }
      />
    </div>
  )
}
