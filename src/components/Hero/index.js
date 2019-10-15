import React from 'react';
import { Col } from 'reactstrap';
import { HeroSection, HeroContainer, HeroHeader, Avatar } from './styles';

import Github from '../Github';

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroHeader>
          <Col md="9">
            <h1> Hi, I'm Ítalo </h1>
            <p>I ❤ code</p>
            <h4>Passionate about the incredible world of software development, always seeking to develop and learn technologies that can positively impact society.</h4>
            <Github />
          </Col>
          <Col md="3">
            <div className="d-flex justify-content-center">
              <Avatar object src="https://avatars2.githubusercontent.com/u/28374391?s=200" alt="Italo Sousa"/>
            </div>
          </Col>
        </HeroHeader>

      </HeroContainer>
    </HeroSection>
  );
}

export default Hero;
