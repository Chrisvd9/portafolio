import React from 'react';
import './portafolio.css';
import IMG1 from '../../assests/homepage.png'
import IMG2 from '../../assests/homepageferia.png'
import IMG3 from '../../assests/blackjacksc.png'



const data = [ 
    {
        id: 1,
        image: IMG1,
        title: 'Almond Web Project',
        github: 'https://github.com/Chrisvd9/Almond-Web-Project',
        demo: 'http://34.234.77.210/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Feria Virtual Project',
        github: 'https://github.com/Chrisvd9/feria-virtual-projectv2',
        demo: ''
    },    
    {
        id: 3,
        image: IMG3,
        title: 'BlackJack',
        github: 'https://github.com/Chrisvd9/simple-blackjack-game',
        demo: 'https://chrisvd9.github.io/simple-blackjack-game/'
    },


]

const Portafolio = () => {
    return (
        <section id='portafolio'>
            <h5>Mis últimos trabajos</h5>
            <h2>Portafolio</h2>

            <div className='container portafolio__container'>
                {
                    data?.map(({id, image, title, github, demo}) => {
                        return (
                            <article className='portafolio__item'>  
                            <div className="portafolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className='portafolio__item-cta'>
                                <a href={github} className='btn' target='_blank'>GitHub</a>
                                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                            </div>
                        </article>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Portafolio;
