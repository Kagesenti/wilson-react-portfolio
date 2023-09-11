import React, { useContext, useState } from 'react'
import { CardContainer, PortfolioContainer } from './style'
import { styleContext } from '../../context_providers/styleContext'
import Card from './Card'
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
const portfolioItems = require("./portfolioItems")

function Portfolio() {
  const { secondaryColor, primaryColor, tertiaryColor } = useContext(styleContext)

  const [ modalIsVisible, setModalIsVisible] = useState(false)

  const [ modalContent, setModalContent ] = useState({})

  const handleModal = (title, image, description, iFrame, websiteLink) => {
    setModalIsVisible(!modalIsVisible)
    setModalContent({title, image, description, iFrame, websiteLink})
  }

  return (
    <>
      <PortfolioContainer $primaryColor={primaryColor} $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor}>
        {!modalIsVisible && 
          <CardContainer>
            {portfolioItems.map((item, index) => {return <Card handleModal={handleModal} websiteLink={item.websiteLink} iFrame={item.iFrame} key={index} title={item.title} image={item.image} description={item.description} link={item.link}></Card>})}
          </CardContainer>
        }
        <AnimatePresence>
          { modalIsVisible &&  
            <motion.div initial={{y: "-100vw", opacity: 0}} animate={{y: "0",opacity: 1}} exit={{y: "-100vw", opacity: 0}} transition={{duration: 0.5}} className='modal'>
              <div className="image">
                { modalContent.iFrame ? 
                <iframe src={modalContent.iFrame} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen="allowfullscreen"
                  mozallowfullscreen="mozallowfullscreen" 
                  msallowfullscreen="msallowfullscreen" 
                  oallowfullscreen="oallowfullscreen" 
                  webkitallowfullscreen="webkitallowfullscreen">
                </iframe> 
                : 
                <img src={modalContent.image} alt={modalContent.title}/>
                }
              </div>
              <div className="content">
                <h1>
                  {modalContent.title}
                </h1>
                <p>
                  {modalContent.description}
                </p>
                <p className='ps'>
                  More than 10 seconds of loading-time means the server isn't online
                </p>
                { modalContent.websiteLink && <a className='website-link' href={modalContent.websiteLink}> Visit Project </a>}
              </div>
              <FontAwesomeIcon onClick={() => setModalIsVisible(false)} className='fa-2xl x-button' icon={faXmarkCircle}></FontAwesomeIcon>
            </motion.div>
          }
        </AnimatePresence>
      </PortfolioContainer>
    </>
  )
}

export default Portfolio