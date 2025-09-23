import { useParams, Link } from "react-router-dom";
import { project_info } from "../../constants";
import { useEffect, useState } from "react";
import './ProjectDetails.css';
import Navbar from "../../common-components/Navbar";


export default function ProjectDetails() {
    const { id } = useParams();
    const [project, setProject] = useState(null);

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
                <div className="project-hero-img">
                    <img src={project.img} alt="" />

                </div>

                <p>{project.description}</p>
                <div className="project-img-container">
                    {project.images.map((image, id) => (
                        <div key={id}>

                            <img src={image} alt="img" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}
