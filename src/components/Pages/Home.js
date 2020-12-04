import React from 'react';
import '../../App.css';
import Hero from '../Hero/Hero';
import ProjectCard from '../Projectcard/ProjectCard';
import Main from '../Main/Main';
import Global from '../Global/Global';
import { Button } from '../Button';

function Home(){
    return (
        <>
        <Hero/>
        <ProjectCard/>
        <Main/>
        <Global/>
        </>
    );
}
export default Home;