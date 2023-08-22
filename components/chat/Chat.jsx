import Image from 'next/image'
import React from 'react'

const Chat = () => {
  return (
    <div className={chatContainer}>
        <Image
            src='/chat.svg'
            height={86}
            width={80}
            alt=''
        />
    </div>
  )
}

export default Chat