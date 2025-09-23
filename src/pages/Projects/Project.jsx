import React from 'react';
import './Project.css';
import Navbar from '../../common-components/Navbar';
import { IMAGE_SOURCES } from '../../constants';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { teamData } from '../../constants';
import { project_info } from '../../constants';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';




const Project = () => {


    const [isOpened, setIsOpened] = useState(false);

    const toggleContent = () => {
        setIsOpened(!isOpened);
    };

    const content = "Lighting Warm lighting for cozy dining, accent lights for highlighting décor or food displaysMusic & Acoustics: Controlling echo and background music balance.Aroma: Subtle scents to enhance appetite."


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
        <div>
            <section className='projects-section app-main' id='projects'>
                <Navbar
                    isMobile={isMobile}
                />
                <h1 className='hero-tittle'>Projects</h1>

                {/* { <div className='projects-main'>
                <div className='projects-container'>
                    <div className='left-container'>
                        <div className='project-box'>
                            <img src={IMAGE_SOURCES.img1} alt="" />
                            <p className='imge-tittle'>f&b interior</p>
                            <h3 className='project-tittle'>Babylon</h3>
                            <p className='project-decription'>F&B interior design is the art of creating functional and visually appealing spaces for restaurants, cafés, bars, and other food and beverage outlets. It focuses on blending aesthetics with practicality by designing layouts that ensure smooth movement for staff and comfort for guests, while also reflecting the brand’s identity.</p>
                            {<div>
                                <div>{isOpened ?
                                    <div style={{ width: '600px', margin: "0 auto" }}>

                                        <Swiper
                                            modules={[Navigation, Pagination]}
                                            spaceBetween={20}
                                            slidesPerView={1}
                                            navigation
                                            pagination={{ clickable: true }}
                                            loop={true}

                                        >

                                            {teamData.members.map((member, i) => (
                                                <SwiperSlide key={i}>
                                                    <img src={member.img}
                                                        alt={`Slide ${i + 1}`}
                                                        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                                                    />

                                                </SwiperSlide>

                                            ))}

                                        </Swiper>


                                       

                                    </div>
                                    : `......`}</div>

                                <button onClick={toggleContent}>{isOpened ? 'readless' : 'readmore'}</button>
                            </div>}
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
            </div> } */}

                <div className='project-info-conatainer'>
                    {project_info.map((project) => (
                        <Link key={project.id} to={`/project/${project.id}`}>
                            <div className='img-container'>
                                <img src={project.img} alt={project.title} />
                                <h3 className='project-tittle'>{project.title}</h3>
                                <p className='project-type'>{project.subTittle}</p>
                            </div>
                        </Link>

                    ))}

                </div>


            </section>
        </div>
    )
};

export default Project
