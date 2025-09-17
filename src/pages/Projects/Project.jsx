import React from 'react';
import './project.css';
import Navbar from '../../common-components/Navbar';
import { IMAGE_SOURCES } from '../../constants';
import { useState, useEffect } from 'react';




const Project = () => {


    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width: 700px)").matches
    );
    useEffect(() => {
        const handler = () =>
            setIsMobile(window.matchMedia("(max-width: 700px)").matches);
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, []);


    return (
        <section className='projects-section app-main' id='projects'>
            <Navbar
                isMobile={isMobile}
            />
            <h1 className='hero-tittle'>Projects</h1>

            <div className='projects-main'>
                <div className='projects-container'>
                    <div className='left-container'>
                        <div className='project-box'>
                            <img src={IMAGE_SOURCES.img1} alt="" />
                            <p className='imge-tittle'>f&b interior</p>
                            <h3 className='project-tittle'>Babylon</h3>
                            <p className='project-decription'>F&B interior design is the art of creating functional and visually appealing spaces for restaurants, cafés, bars, and other food and beverage outlets. It focuses on blending aesthetics with practicality by designing layouts that ensure smooth movement for staff and comfort for guests, while also reflecting the brand’s identity.</p>
                        </div>

                        <div className='project-box'>
                            <img src={IMAGE_SOURCES.img1} alt="" />
                            <p className='imge-tittle'>f&b interior</p>
                            <h3 className='project-tittle'>Babylon</h3>
                            <p className='project-decription'>F&B interior design is the art of creating functional and visually appealing spaces for restaurants, cafés, bars, and other food and beverage outlets. It focuses on blending aesthetics with practicality by designing layouts that ensure smooth movement for staff and comfort for guests, while also reflecting the brand’s identity.</p>
                        </div>

                        <div className='project-box'>
                            <img src={IMAGE_SOURCES.img1} alt="" />
                            <p className='imge-tittle'>f&b interior</p>
                            <h3 className='project-tittle'>Babylon</h3>
                            <p className='project-decription'>F&B interior design is the art of creating functional and visually appealing spaces for restaurants, cafés, bars, and other food and beverage outlets. It focuses on blending aesthetics with practicality by designing layouts that ensure smooth movement for staff and comfort for guests, while also reflecting the brand’s identity.</p>
                        </div>

                        <div className='project-box'>
                            <img src={IMAGE_SOURCES.img1} alt="" />
                            <p className='imge-tittle'>f&b interior</p>
                            <h3 className='project-tittle'>Babylon</h3>
                            <p className='project-decription'>F&B interior design is the art of creating functional and visually appealing spaces for restaurants, cafés, bars, and other food and beverage outlets. It focuses on blending aesthetics with practicality by designing layouts that ensure smooth movement for staff and comfort for guests, while also reflecting the brand’s identity.</p>
                        </div>

                        <div className='project-box'>
                            <img src={IMAGE_SOURCES.img1} alt="" />
                            <p className='imge-tittle'>f&b interior</p>
                            <h3 className='project-tittle'>Babylon</h3>
                            <p className='project-decription'>F&B interior design is the art of creating functional and visually appealing spaces for restaurants, cafés, bars, and other food and beverage outlets. It focuses on blending aesthetics with practicality by designing layouts that ensure smooth movement for staff and comfort for guests, while also reflecting the brand’s identity.</p>
                        </div>




                    </div>

                    <div className='right-container'>
                        <div className='project-box'>
                            <img src={IMAGE_SOURCES.img1} alt="" />
                            <p className='imge-tittle'>f&b interior</p>
                            <h3 className='project-tittle'>Babylon</h3>
                            <p className='project-decription'>F&B interior design is the art of creating functional and visually appealing spaces for restaurants, cafés, bars, and other food and beverage outlets. It focuses on blending aesthetics with practicality by designing layouts that ensure smooth movement for staff and comfort for guests, while also reflecting the brand’s identity.</p>
                        </div>

                        <div className='project-box'>
                            <img src={IMAGE_SOURCES.img1} alt="" />
                            <p className='imge-tittle'>f&b interior</p>
                            <h3 className='project-tittle'>Babylon</h3>
                            <p className='project-decription'>F&B interior design is the art of creating functional and visually appealing spaces for restaurants, cafés, bars, and other food and beverage outlets. It focuses on blending aesthetics with practicality by designing layouts that ensure smooth movement for staff and comfort for guests, while also reflecting the brand’s identity.</p>
                        </div>

                        <div className='project-box'>
                            <img src={IMAGE_SOURCES.img1} alt="" />
                            <p className='imge-tittle'>f&b interior</p>
                            <h3 className='project-tittle'>Babylon</h3>
                            <p className='project-decription'>F&B interior design is the art of creating functional and visually appealing spaces for restaurants, cafés, bars, and other food and beverage outlets. It focuses on blending aesthetics with practicality by designing layouts that ensure smooth movement for staff and comfort for guests, while also reflecting the brand’s identity.</p>
                        </div>

                        <div className='project-box'>
                            <img src={IMAGE_SOURCES.img1} alt="" />
                            <p className='imge-tittle'>f&b interior</p>
                            <h3 className='project-tittle'>Babylon</h3>
                            <p className='project-decription'>F&B interior design is the art of creating functional and visually appealing spaces for restaurants, cafés, bars, and other food and beverage outlets. It focuses on blending aesthetics with practicality by designing layouts that ensure smooth movement for staff and comfort for guests, while also reflecting the brand’s identity.</p>
                        </div>

                        <div className='project-box'>
                            <img src={IMAGE_SOURCES.img1} alt="" />
                            <p className='imge-tittle'>f&b interior</p>
                            <h3 className='project-tittle'>Babylon</h3>
                            <p className='project-decription'>F&B interior design is the art of creating functional and visually appealing spaces for restaurants, cafés, bars, and other food and beverage outlets. It focuses on blending aesthetics with practicality by designing layouts that ensure smooth movement for staff and comfort for guests, while also reflecting the brand’s identity.</p>
                        </div>



                    </div>

                </div>
            </div>


        </section>
    )
};

export default Project
