import React from 'react'
import Card from './Card';
import Circlecard from './Circlecard';
import Informationcard from './Information';
import Video from './Video.png';
import './ProjectCard.css';
import classic from './classic.png';
import multi  from './multi.png';
import roll from './roll.png';
import information from './information.png';



function projectCard() {
    return (
        <div className="ProjectCard">

           {/* floating card component starts here*/}
            <div className="cards_container">

                       <ul className="cards_items">
                        <Card
                           src={classic}
                           title ='Classical Media'
                           text='He oppose at thrown desire of no. Announcing impression unaffected day his are unreserved indulgence.'
                           path='/'
                           pathName='Read More' 
                           />
                        <Card
                           src={multi}
                           title ='Multiplex Rotrec'
                           text='He oppose at thrown desire of no. Announcing impression unaffected day his are unreserved indulgence.'
                           path='/'
                           pathName='Read More' 
                           />
                        <Card
                           src={roll}
                           title ='Roll Metalic Gum'
                           text='He oppose at thrown desire of no. Announcing impression unaffected day his are unreserved indulgence.'
                           path='/'
                           pathName='Read More' 
                           />
                        </ul> 
            </div>
            {/* floating carrd component ends here*/}

            <div className="projectCard_title_bar">
              <p className="ProjectCard_title">IF YOU STILL HAVE ANY DOUBT</p>
              <h4 className="ProjectCard_subtitle">Let our numbers speack for us</h4>
            </div>

               {/* circle components starts here*/}
            <div className="circlecards_container">
                  <ul className="circlecards_items">
                     <Circlecard
                     title='130+'
                     subTitle='countries'
                     />
                     <Circlecard
                     title='1600+'
                     subTitle='partners'
                     />
                     <Circlecard
                     title='2.4M'
                     subTitle='units connected'
                     />
                     <Circlecard
                     title='300k+'
                     subTitle='projects implemented'
                     />
                  </ul>
            </div>
            {/* circle component ends here*/}

            <div className="divider"></div>

            {/* information component starts here*/}
            <div className="information_section">
               <ul className="information_cards_item">
                    <Informationcard

                    Cname='information_item_container'
                     title='We help you build your store'
                     text= 'Sir new the particular frequently indulgence excellence how. 
                     Wishing an if he sixteen visited tedious subject it. Mind mrs yet did 
                     quit high even you went. Sex against the two however not nothing 
                     prudent colonel greater. Up husband removed parties staying he .
                     
                     Respect forming clothes do in he. Course so piqued no an by appear. 
                     Themselves reasonable pianoforte so motionless he as difficulty be. 
                     Abode way begin ham there power whole. Do unpleasing indulgence
                     impossible to conviction. Suppose neither evident welcome it at do civilly 
                     uncivil. Sing tall much you get nor.'
                     src={information}
                     alt='information_image'
                     path='/'
                     pathName='Learn More'
                    />
                    <Informationcard
                      Cname='information_item_container_flip'
                     title='How do we really operate?'
                     text= 'Sir new the particular frequently indulgence excellence how. 
                     Wishing an if he sixteen visited tedious subject it. Mind mrs yet did 
                     quit high even you went. Sex against the two however not nothing 
                     prudent colonel greater. Up husband removed parties staying he .
                     
                     Respect forming clothes do in he. Course so piqued no an by appear. 
                     uncivil. Sing tall much you get nor. 
                     '
                     src={Video}
                     alt='information_image'
                     path='/'
                     pathName='Learn More'
                    />
               </ul>

            </div>
            {/* information component starts ends*/}
        </div>
    )
}

export default projectCard
