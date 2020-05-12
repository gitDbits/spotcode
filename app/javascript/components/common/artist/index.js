import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Image, Heading } from 'react-bulma-components';
import { Link } from 'react-router-dom';

const DivVSpaced = styled.div`
  margin-top: 10px;
`

const Artist = (props) => {
  return(
    <Link to={`/artists/${props.id}`}>
      <Image src={props.photo_url}/>
      <DivVSpaced>
        <Heading size={6} className='has-text-white subtitle'>{props.name}</Heading>
      </DivVSpaced>
    </Link >
  );
}
export default Artist;