import React, { Fragment, useEffect, useState } from 'react';
import ArtistsService from '../../../services/categories';
import { Columns, Image, Section } from 'react-bulma-components';
import styled from 'styled-components';

const DivVSpaced = styled.div`
 margin-top: 50px;
`

const Artists = (props) => {
  const [artists, setArtists] = useState([]);

  async function fetchArtists() {
    const response = await ArtistsService.index();
    setArtists(response.data['artists'])
  }

  useEffect(() => {
    fetchArtists();
  }, []);

  const artists_list = artists.map((artist, key) =>
    <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
      <Image src={artist.photo_url} onClick={() => props.fetchArtistSearch(artist.id)}></Image>
    </Columns.Column>
  );

  return (
    <Fragment>
      <DivVSpaced>
        <Columns className='is-mobile'>
          {artists_list}
        </Columns>
      </DivVSpaced>
    </Fragment>
  );
}
export default Artists;