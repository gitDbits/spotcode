import React, { Fragment } from 'react';
import NavbarFooter from '../../components/common/navbar_footer';
import SectionWrapper from '../../components/common/section_wrapper';
import { Heading } from 'react-bulma-components';
import Categories from '../../components/common/categories';
const CatagoriesScreen = () => {
 return(
   <Fragment>
     <SectionWrapper>
       <Heading className='has-text-centered has-text-white'>Categorias</Heading>
       <Categories/>
     </SectionWrapper>
     <NavbarFooter/>
   </Fragment>
);
}
export default CatagoriesScreen;