import React, { useState } from 'react'
import { FaMicrophoneAlt, FaImage, FaVideo, FaTextHeight, FaTelegramPlane } from "react-icons/fa";

const open_placeholder = "Please tell us your opinion. To help you protect your privacy, please do not contain any personal information(Eg: your name or address)."

const OpenQuestion = () => {

  const [text, setText] = useState('')
  const [method, setMethod] = useState('')
  const [selectMethod, setSelectedMethod] = useState('')

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {text}
    console.log(blog);
  }

  return (
    <div>
      <h2 className='mb-10'>How can we further enhance your experience?</h2>
      <form action="" onSubmit={handleSubmit}>
        <textarea
          name="open-question"
          id=""
          placeholder={open_placeholder}
          className='fw textAreah bd-rd-5 pd-10'
          onChange={(e) => setText(e.target.value)}
        />
        <div>
          <ul className='df'>
            {feedbackMethod.map((methodItem, index) => {
              const Icon = methodItem.icon
              return(
                <li
                  key={index}
                  onClick={() => setSelectedMethod(feedbackMethod.id)}
                  className={`
                    ${selectMethod === methodItem.id}
                    ? ' pd-10 mg-r-10 bd-rd-10 method-hover-bg hover:method-hover-bg cursor-pointer '
                    : ' '
                  `}
                >
                  <Icon size={25} className='mg-ct'/>
                </li>
              )
            })}
            
          </ul>
        </div>
        <div className='df fw jc-fe'>
          <button className='sm-btn df aln-tm-ct jc-sb'>
            Submit<FaTelegramPlane className='mg-l-10'/>
          </button>
        </div>
      </form>
    </div>
  )
}

export default OpenQuestion