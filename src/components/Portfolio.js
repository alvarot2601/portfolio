import React, { useEffect, useRef, useState } from "react";

import Nav from "./Nav";
import Picture from "./Picture";
import Info from "./Info";
import Stack from "./Stack";
import Projects from "./Projects";
import oxygenShop from "../assets/img/oxygenshop.png";
import unsplashProject from "../assets/img/unsplash-project1.png";
import hotelMirandaProject from "../assets/img/hotel-miranda-proyecto.png";
import umediProject from "../assets/img/umedi.png";
import andelProject from "../assets/img/andel.png";
import Form from "./Form";
import Footer from "./Footer";
import {
  SiJquery,
  SiMysql,
  SiPhp,
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import {
  AiOutlineHtml5,
  AiOutlineConsoleSql,
} from "react-icons/ai";
import { FaCss3, FaFigma, FaReact, FaSass } from "react-icons/fa";
import { DiNpm } from "react-icons/di";
  const Portfolio = () => {
    const stackSection = useRef(null);
    const projectsSection = useRef(null);
    const contactSection = useRef(null);
    const hr_stack = useRef(null);
    const hr_projects = useRef(null);
    const hr_contact = useRef(null);
    const actualSection = useRef(0);
    const [actualHr, setActualHr] = useState(hr_stack);
    const [sectionPosition, setSectionPosition] = useState(0);
    const images = [
      [
        oxygenShop,
        "https://alvarot2601.github.io/Oxygen-Shop",
        "https://github.com/alvarot2601/Oxygen-Shop",
      ],
      [
        unsplashProject,
        "https://alvarot2601.github.io/dashboard-photos",
        "https://github.com/alvarot2601/dashboard-photos",
      ],
      [
        hotelMirandaProject,
        "https://alvarot2601.github.io/Hotel-Miranda",
        "https://github.com/alvarot2601/Hotel-Miranda",
      ],
      [
        umediProject,
        "https://umedi.roymo.info/colegio-infantil-concertado-en-bilbao",
        "",
      ],
      [
        andelProject,
        "https://andelfuenllanaykids.es/colegio-concertado-bilingue-en-alcorcon-andel",
        "",
      ],
    ];

    const stack = [
      {
        type:'FrontEnd',
        tech: [
          [<AiOutlineHtml5 />, 'Html5'],
          [<FaCss3 />, 'Css3'],
          [<TbBrandJavascript />, 'JavaScript'],
          [<SiJquery />, 'JQuery'],
          [ <FaFigma />, 'Figma'],
          [<FaReact />, 'React'],
        ]
      },
      {
        type:'BackEnd',
        tech: [
          [<AiOutlineConsoleSql />, 'SQL'],
          [<SiMysql />, 'MySql'],
          [<DiNpm />, 'NPM'],
          [<SiPhp />, 'PHP']
        ]
      },
      {
        type:'DevOps',
        tech: [
          [<AiOutlineConsoleSql />, 'SQL'],
          [<SiMysql />, 'MySql'],
          [<DiNpm />, 'NPM'],
          [<SiPhp />, 'PHP']
        ]
      },
    ];

    useEffect(()=>{
      
      window.addEventListener('scroll', checkSectionPosition);
      if(actualSection.current == 0 && stackSection.current != null){
        actualSection.current = stackSection.current;
      }
      
      return () => {
        window.removeEventListener('scroll', checkSectionPosition);
      };
    }, []);

    useEffect( ()=>{
      if(sectionPosition !== 0 )
      {
        if (sectionPosition.top.toFixed() < 600) {
          actualHr.current.style.display = "block";
          if(actualSection.current.id == 'my_stack'){
            actualSection.current = projectsSection.current;
            setActualHr(hr_projects);
          }
          else if(actualSection.current.id == 'my_projects'){
            actualSection.current = contactSection.current;
            setActualHr(hr_contact);
            //window.removeEventListener('scroll', checkSectionPosition);
          }
        }
      }
    }, [sectionPosition]);

    const checkSectionPosition = () => {
      setSectionPosition(actualSection.current.getBoundingClientRect());
      //si no pongo aqui el removeevent no se elimina no se por que
      if(hr_contact.current.style.display == "block")
        window.removeEventListener('scroll', checkSectionPosition);
    };
    return (
      <>
        <Nav />
        <main>
          <Picture />
          <hr id="hr_info" className="hr-text tiperwriter" data-content="< Sobre mi />"></hr>
          <Info />
          <hr id="hr_stack" ref={hr_stack} className="hr-text tiperwriter" data-content="< Stack Tecnológico />"></hr>
          <section id="my_stack" className="stack" ref={stackSection}>
            <Stack stack={stack}/>
          </section>
          <hr id="hr_projects" ref={hr_projects}
            className="hr-text tiperwriter"
            data-content="< Algunos Proyectos />"
          ></hr>
          <Projects images={images} reference={projectsSection} />
          <hr id="hr_contact" ref={hr_contact}
            className="hr-text tiperwriter"
            data-content="< Contáctame />"
          ></hr>
          <Form reference={contactSection} />
        </main>
        <Footer />
      </>
    );
  };
export default Portfolio;
