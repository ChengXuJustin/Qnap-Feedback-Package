import React, { useState } from 'react'
import { FaMicrophoneAlt, FaImage, FaVideo, FaTextHeight, FaTelegramPlane } from "react-icons/fa";

const open_placeholder = "Please tell us your opinion. To help you protect your privacy, please do not contain any personal information(Eg: your name or address)."

const OpenQuestion = () => {

  const [text, setText] = useState('')
  const [selectedMethod, setSelectedMethod] = useState('text')
  const [triggerAnimation, setTriggerAnimation] = useState(false)
  
  const Max_Length = 1000;


  const feedbackMethod = [
    {
      id: "text",
      icon: FaTextHeight
    },
    {
      id: "audio",
      icon: FaMicrophoneAlt
    },
    {
      id: "image",
      icon: FaImage
    },
    {
      id: "video",
      icon: FaVideo
    },
  ]

  // Function to trigger the animation effect
  const triggerAnimationEffect = () => {
    setTriggerAnimation(true)
    setTimeout(() => {
      setTriggerAnimation(false)
    }, 500);
  }

  const handleTextChange = (e) => {
    const newText = e.target.value;
    if(newText.length <= Max_Length){
      setText(newText)
      triggerAnimationEffect();
    }
  }

  const methodSwitch = (method) => {
    switch(method){
      case 'text':
        return(
          <>
            <textarea
              name="open-question"
              id=""
              placeholder={open_placeholder}
              className='fw textAreah bd-rd-5 pd-10 rz-v'
              value={text}
              onChange={handleTextChange}
              maxLength={Max_Length}
            />
            <p 
              style={{color: text.length===Max_Length ? 'red' : ''}}
              className={`${triggerAnimation ? 'reachMaxAmine' : ''}`}
            >
              {text.length}/1000{text.length==Max_Length ? " (You've reached the max)" : ''}
            </p>
          </>
        )
      case 'audio':
        return(
          <>
            
          </>
        )
      case 'image':
        return(
          <>
            
          </>
        )
      case 'video':
        return(
          <>
            
          </>
        )
    }
  }

  return (
    <div>
      <h3 className='mb-10'>您期待我們如何進步可以提升您的體驗?</h3>

        {/* Rendering the Methods */}

        {methodSwitch(selectedMethod)}
        {/* <textarea
          name="open-question"
          id=""
          placeholder={open_placeholder}
          className='fw textAreah bd-rd-5 pd-10 rz-v'
          value={text}
          onChange={handleTextChange}
          maxLength={Max_Length}
        />
        <p 
          style={{color: text.length===Max_Length ? 'red' : ''}}
          className={`${triggerAnimation ? 'reachMaxAmine' : ''}`}
        >
          {text.length}/1000{text.length==Max_Length ? " (You've reached the max)" : ''}
        </p> */}

        {/* Select the Methods */}
        <div>
          <ul className='df'>
            {feedbackMethod.map((methodItem, index) => {
              const Icon = methodItem.icon
              return(
                <li
                  key={index}
                  onClick={() => setSelectedMethod(methodItem.id)}
                  className={`
                    pd-10 mg-r-10 bd-rd-10 cursor-pointer
                    ${ methodItem.id == selectedMethod ? 'method-active' : 'method-hover hover:method-hover'}
                  `}
                >
                  <Icon size={25} className='mg-ct'/>
                </li>
              );
            })}
            
          </ul>
        </div>
 
    </div>
  )
}

export default OpenQuestion