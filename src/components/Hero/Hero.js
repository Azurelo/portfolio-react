import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Justus Schoppmann <br />
          
        </SectionTitle>
        <SectionText>
        Full Stack Developer
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

