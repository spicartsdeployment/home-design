import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './ProjectGallery.css'


import { Navigation, Pagination } from "swiper/modules";
import { project_info } from "../../constants";
import Navbar from "../../common-components/Navbar";

export default function ProjectGallery() {

    const { id } = useParams();
    const location = useLocation();
    const [project, setProject] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const pid = parseInt(id, 10);
        const found = project_info.find(p => p.id === pid);
        setProject(found || null)
    }, [id]);

    const params = new URLSearchParams(location.search);
    const startIndex = parseInt(params.get("index") ?? "0", 10) || 0;


    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 700px)").matches);

    useEffect(() => {
        const handler = () =>
            setIsMobile(window.matchMedia("(max-width: 700px)").matches)
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("reset", handler)
    }, [])

    if (!project) {
        return (<div>Project not found</div>)
    }

    return (
        <div className="project-gallery-container">

            <Navbar
                isMobile={isMobile} />
            {/* {project.images.map((img, idx) => (
                <div key={idx}>
                    <img src={img} alt={idx} />
                </div>

            ))} */}

            <div >

                <div className="swiper-container">

                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                        initialSlide={startIndex}

                    >

                        {project.images.map((member, i) => (
                            <SwiperSlide key={i}>
                                <div className="slider-image">
                                    <img src={member}
                                        alt={`Slide ${i + 1}`}

                                    />
                                </div>

                            </SwiperSlide>

                        ))}

                    </Swiper>




                </div>
            </div>

        </div>
    );
}
