import './projects.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../context/DarkModeContext';
import MDThumbnail from '../../assets/Maison-D-thumbnail.png';

function Projects () {
    const { darkMode } = useDarkMode();
    const projectsData = [
        {
            id: 'project-one',
            title: 'Maison`D',
            description: 'Modern Luxurious Spa Website',
            tags: ['WIP','React'],
            link: 'https://maison-d.vercel.app/'
        },
    ];


    return (
        <>
            <div className='project-wrapper' id="projects">
                <div className={`projects-title ${darkMode? 'light' : 'dark'}`}>
                    <p><span>MY</span> PROJECTS</p>
                    <div className={`divider-line ${darkMode? 'light' : 'dark'}`} />
                </div>

                <div className='projects-container'>
                    {projectsData.map((project) => (
                        <div className='project-box' id={project.id} key={project.id}>
                            <div className={`project-info ${darkMode? 'light' : 'dark'}`}>
                                <h1>{project.title}</h1>
                                {project.description && <p>{project.description}</p>}
                                {project.tags && (
                                    <ul className='tags'>
                                        {project.tags.map((tag, index) => (
                                            <li key={index}>{tag}</li>
                                        ))}
                                    </ul>
                                )}
                                {project.link && (
                                    <a href={project.link} className={`view-project ${darkMode? 'light' : 'dark'}`} target="_blank">VISIT</a>
                                )}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Projects;