import React, { Fragment } from 'react';
import SectionWrapper from '../../components/common/section_wrapper';
import Discovery from '../../components/discovery';
import NavbarFooter from '../../components/common/navbar_footer';

const DiscoveryScreen = () => {
  return(
    <Fragment>
      <SectionWrapper>
        <Discovery />
      </SectionWrapper>
      <SectionWrapper>
        <NavbarFooter />
      </SectionWrapper>
    </Fragment>
  );
}
export default DiscoveryScreen;