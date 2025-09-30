import { useParams, Link, useNavigate } from "react-router-dom";
import { project_info } from "../../constants";
import { useEffect, useState } from "react";
import './ProjectDetails.css';
import Navbar from "../../common-components/Navbar";


export default function ProjectDetails() {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const projectId = parseInt(id);
        const found = project_info.find((p) => p.id === projectId);
        setProject(found);
    }, [id])


    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width: 700px)").matches
    );
    useEffect(() => {
        const handler = () =>
            setIsMobile(window.matchMedia("(max-width: 700px)").matches);
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, []);

    if (!project) return <h2> Project Not Found</h2>


    return (



        <div className="project-details-container">
            <Navbar
                isMobile={isMobile}
            />
            <div className="project-info-container">
                <h1>{project.title}</h1>


                <p>{project.description}</p>
                <div className="project-img-container">
                    {project.images.map((item, idx) =>
                        item.type === "video" ?
                            (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="project_video"
                                    onClick={() => navigate(`/project/${id}/gallery?index=${idx}`)}
                                >
                                    <source src={item.src} />
                                </video>
                            )
                            :
                            (
                                <img
                                    key={idx}
                                    src={item.src}
                                    onClick={() => navigate(`/project/${id}/gallery?index=${idx}`)}

                                    alt="img"
                                />
                            )
                    )}
                </div>
            </div>
        </div>
    )

}
