'use client'
import React, { useState, useEffect } from 'react';

const ProjectStatistics = () => {
    const [projectsCompleted, setProjectsCompleted] = useState(0);
    const [clientsCount, setClientsCount] = useState(0);

    useEffect(() => {
        const projectInterval = setInterval(() => {
            setProjectsCompleted(prevCount => prevCount + 1);
        }, 50); // Increase the count every 10 milliseconds

        const clientsInterval = setInterval(() => {
            setClientsCount(prevCount => prevCount + 1);
        }, 8); // Increase the count every 8 milliseconds

        // Cleanup the intervals when thresholds are reached
        return () => {
            if (projectsCompleted >= 300) clearInterval(projectInterval);
            if (clientsCount >= 250) clearInterval(clientsInterval);
        };
    }, [projectsCompleted, clientsCount]);

    return (
        <span className='flex items-start justify-center gap-10 md:gap-0 md:justify-evenly'>
            <div className='space-y-2'>
                <h2 className='font-Concert text-5xl'>{projectsCompleted > 300 ? '300+' : projectsCompleted}</h2>
                <p className='text-xs'>Project Completed</p>
            </div>
            <div className='space-y-2'>
                <h2 className='font-Concert text-5xl'>{clientsCount > 250 ? '250+' : clientsCount}</h2>
                <p className='text-xs'>Happy Clients</p>
            </div>
        </span>
    );
};

export default ProjectStatistics;
