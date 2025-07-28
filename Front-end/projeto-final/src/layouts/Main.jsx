import React from 'react'
import './main.css';
import { BiSolidMouseAlt } from "react-icons/bi";
import Botao from '../components/botao';

function Main() {
    return (
        <main>
            <section className='trasparencia' id='inicio'>
                <div className='banner-texto'>



                    <h1 className='title manrope'>Less Hassle, <br /> More Fun.</h1>
                    <p className='manrope'>
                        Discover a new way to travel that’s fun, easy, and stress-free-Turn <br />your dream destinations into unforgettable realities
                    </p>
                </div>
                <div className='div-transparente'>
                    <div className='card'>
                        <div className='img-video'>
                            <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/shifaaz-shamoon-_STLYdogRF4.webp" alt="" className='img-video' />
                            <span className='span-play'><img src="https://icon-library.com/images/play-button-icon-white/play-button-icon-white-8.jpg" alt="" className='img-play' /></span>
                        </div>
                        <div className='img-texto'>
                            <div className='img-perfil'>
                                <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/avatar2-1.png" alt="" />
                                <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/avatar3-1.png" alt="" className='dois' />
                                <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/oliver-ragfelt-khV4fTy6-D8-unsplash-1.png" alt="" className='tres' />
                                <span><img src="https://cdn-icons-png.flaticon.com/512/7794/7794550.png" alt="" /></span>
                            </div>
                            <p className='enjoy'>
                                12K+ Membership <br /> enjoy our facility
                            </p>
                        </div>
                    </div>
                </div>
                <div className='scroll'>
                    <BiSolidMouseAlt />
                    <p>Scroll Now</p>
                </div>
            </section>

            <section id='destination'>
                <div className='destination-botao'>
                    <h1>Recommended Destination</h1>
                    <Botao texto='View More'></Botao>
                </div>
            </section>
        </main >
    )
}

export default Main