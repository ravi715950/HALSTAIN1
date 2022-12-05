import React from 'react'

import logo from '../../../images/logos/logo-ER.png'
import './Footer.css'
export default function Left() {
  return (
    <div>

    <div className='logo-img'>
<img src={logo} alt="logo" />
    </div>
<p className='margin-y-30px'>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/> Itaque voluptatem facilis corrupti dicta.<br/> Cupiditate magni, modi rem,  Nam iusto accusantium consequuntur?
</p>

    <a className='social-links margin-y-30px ' href='/'>
      FB
    </a>
    
    <a className='social-links margin-y-30px' href='/'>
      li
    </a>


    <a className='social-links margin-y-30px' href='/'>
      Yt
    </a>


    </div>
  )
}