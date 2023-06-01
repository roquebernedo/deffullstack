import React from 'react'
import './Styles/Entrance.scss'
import { Link } from 'react-router-dom'
import Save from './Save'

const Entrance = () => {
  return (
    <div className='main-square'>
        <div className='top-side'>
            <div className='right-side'>
                <div className='img-left'>
                    <img src='https://tofuu.getjusto.com/orioneat-prod/rNQKpgQTeNbCJu8P7-Lomo%20Fino%20Saltado.jpg' alt='' className='lomosaltado' />
                </div>
                <div className='img-right'>
                    <div>
                        <img src='https://elcomercio.pe/resizer/xT_dkJixACO0gBnIOP_mTuN0YF8=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/QLFEJCGWOREPLBYFE7H2FOPXFY.jpg' alt='' className='polloalabrasa' />
                    </div>
                    <div className='redire'>
                        <img src='https://tofuu.getjusto.com/orioneat-local/resized2/4hgvXJxCcPgaRJpLp-1200-1200.webp' alt='' className='amazonico'/>
                    </div>
                    <div className='cont-ceviche'>
                        <img src='https://assets.unileversolutions.com/recipes-v2/234472.jpg' alt='' className='ceviche' />
                    </div>
                </div>
                
            </div>
            <div className='left-side'>
                <div className='container'>
                    <div className='minititle'>Explore new ideas</div>
                    <div className='info'>
                        What is the next thing you want to try? Think of something that interests you, like "easy Arroz Chaufa Amazonico recipe,"
                        and see what you come up with.</div>
                    <Link to="/" className='explore'>Search</Link>
                </div>
            </div>
        </div>
        <div className='bottom-side'>
            <Save/>
        </div>
    </div>
    
  )
}

export default Entrance