import React from "react";
import { SiJquery, SiRedux, SiMysql, SiPhp } from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';
import { AiOutlineHtml5, AiOutlineGithub, AiOutlineConsoleSql } from 'react-icons/ai';
import {FaCss3, FaFigma, FaReact, FaSass} from 'react-icons/fa';
import {BsWordpress} from 'react-icons/bs';
import {DiNpm, DiGit} from 'react-icons/di';
import reactRouterLogo from "../assets/img/react-router-mark-color.svg";
const Stack = () => {
  return (
    <section className="stack">
      <hr className="hr-text tiperwriter" data-content="< Stack Tecnológico />"></hr>
      <div className="stack__container">
        <div className="stack__frontend">
          <p>Frontend</p>
          <div className="stack__row">
            <AiOutlineHtml5 />
            <span>Html5</span>
          </div>
          <div className="stack__row">
            <FaCss3 />
            <span>Css3</span>
          </div>
          <div className="stack__row">
            <TbBrandJavascript />
            <span>JavaScript</span>
          </div>
          <div className="stack__row">
            <SiJquery/>
            <span>Jquery</span>
          </div>
          <div className="stack__row">
            <FaFigma />
            <span>Figma</span>
          </div>
          <div className="stack__row">
            <FaReact />
            <span>React</span>
          </div>
        </div>
        <div className="stack__backend">
          <p>Backend</p>
          <div className="stack__row">
            <AiOutlineConsoleSql/>
            <span>SQL</span>
          </div>
          <div className="stack__row">
            <SiMysql/>
            <span>Mysql</span>
          </div>
          <div className="stack__row">
            <DiNpm/>
            <span>NPM</span>
          </div>
          <div className="stack__row">
            <SiPhp/>
            <span>PHP</span>
          </div>
        </div>
        <div className="stack__devops">
          <p>Dev Ops</p>
          <div className="stack__row">
            <DiGit/>
            <span>Git</span>
          </div>
          <div className="stack__row">
            <AiOutlineGithub />
            <span>Github</span>
          </div>
          <div className="stack__row">
            <BsWordpress/>
            <span>Wordpress</span>
          </div>
        </div>  
      </div>
      <div className="stack__other-tecnologies">
          <p>Otras tecnologías</p>
          <div className="stack__">
            <div className="stack__row">
                <SiRedux />
                <BsWordpress/>
                <FaSass/>
                <img src={reactRouterLogo}/>
                <svg viewBox="0 0 101.7 84" width="32" height="32" class="opacity-80 astro-5SOCBQWG" astro-icon="b_"><path d="M0 13h23.8v7H0zM0 0h23.8v7H0zm42.7 25.9H0v7h41.1c4.5 0 15 .1 18.9 6.4v-3.9c-1.9-6.2-7.5-9.5-17.3-9.5zm.1 13H0v7h41.1c10 0 16.3.4 18.9 1.8v-3.1c-2-4.9-10.4-5.7-17.2-5.7zm-.1 33H0v-7h41.1c4.5 0 15-.1 18.9-6.4v3.9c-1.9 6.2-7.5 9.5-17.3 9.5zm.1-13H0v-7h41.1c10 0 16.3-.4 18.9-1.8v3.1c-2 4.9-10.4 5.7-17.2 5.7zM70.4 84h31.4v-4.3H71.3c-2.7 0-9.1-.1-11.4-3.8v2.4C61 82 64.4 84 70.4 84zm-.1-7.9h31.4v-4.3H71.3c-6.1 0-9.9-.2-11.4-1.1v1.9c1.2 3 6.3 3.5 10.4 3.5z"></path></svg>
          </div>
          <div className="stack__row">
            
            
          </div>
          <div className="stack__row">
            <BsWordpress/>
            <span>Google maps Platform</span>
          </div>
          <div className="stack__row">
            <BsWordpress/>
            <span>Sass</span>
          </div>
          <div className="stack__row">
            <BsWordpress/>
            <span>BEM</span>
          </div>
          <div className="stack__row">
            <BsWordpress/>
            <span>D3</span>
          </div>
          <div className="stack__row">
            <BsWordpress/>
            <span>Bootstrap</span>
          </div>
          <div className="stack__row">
            <BsWordpress/>
            <span>w3.css</span>
          </div>
          </div>
        </div>
    </section>
  );
};
export default Stack;
