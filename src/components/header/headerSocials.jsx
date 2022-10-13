import React from 'react';

import {GrLinkedin, GrGithub, GrTwitter, GrInstagram} from "react-icons/gr";



const HeaderSocials = () => {
  return (
    <div className="header__socials">
    <a href= "linkedin.com" target="_blank"> <GrLinkedin/> </a>
    <a href= "github.com" target="_blank"> <GrGithub/></a>
    <a href= "twitter.com" target="_blank"><GrTwitter/></a>
    <a href= "intagram.com" target="_blank"><GrInstagram/></a>
    
    </div>
  )
}

export default HeaderSocials