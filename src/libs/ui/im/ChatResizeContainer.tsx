'use client'
import React, { useCallback } from 'react'
import * as Resize from 'react-resizable-panels'

export default function ChatResizeContainer (props: {
  primary?: React.JSX.Element
  secondary?: React.JSX.Element,
  defaultLayouts?: [primary: number, secondary: number]
}) {
  const onLayout = useCallback((sizes: number[]) => {
    document.cookie = `layout:resize=${JSON.stringify(sizes)}`
  }, [])
  return (
    <Resize.PanelGroup
      direction='horizontal'
      onLayout={onLayout}
      className='gap-[1px] bg-gray-100'
    >
      <Resize.Panel
        minSize={20} maxSize={60} defaultSize={
          props.defaultLayouts?.[0] ?? 30
        }
        className='bg-gray-50'
      >
        <div>
          {props.primary}
        </div>
      </Resize.Panel>
      <Resize.PanelResizeHandle />
      <Resize.Panel defaultSize={props.defaultLayouts?.[1] ?? 70} className='bg-white'>
        <div>
          {props.secondary}
        </div>
      </Resize.Panel>
    </Resize.PanelGroup>
  )
}
