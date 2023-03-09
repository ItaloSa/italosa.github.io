import React from 'react';
import { HeroHeader, Avatar } from './styles';
import { CustomSection, CustomContainer } from '../styles';

import Github from '../Github';
import Social from '../Social';

const Hero: React.FC = () => {
  return (
    <CustomSection dark>
      <CustomContainer className="container">
        <HeroHeader className="row">
          <div className="col-md-9">
            <h1> Hi, I'm Ítalo </h1>
            <p>I ❤ code</p>
            <h4>
            I'm a passionate software engineer with a love for exploring the latest technologies and tools. With a background in web development, I specialize in creating innovative solutions to solve complex business issues. What excites me most about software development is the potential to make a positive impact on society.
            </h4>
            {/* <Github /> */}
            <Social />
          </div>
          <div className="col-md-3">
            <div className="d-flex justify-content-center">
              <div className="media">
                <Avatar
                  src="https://avatars2.githubusercontent.com/u/28374391?s=200"
                  alt="A photo of Italo Sousa"
                />
              </div>
            </div>
          </div>
        </HeroHeader>
      </CustomContainer>
    </CustomSection>
  );
};

export default Hero;
