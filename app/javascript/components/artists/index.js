import React, { Fragment, useState, useEffect } from 'react';
import { Heading, Columns, Image } from 'react-bulma-components';
import styled from 'styled-components';
import ArtistsService from '../../services/artists'
import Favorite from '../common/favorite'
import Album from '../common/album'
import { useParams } from 'react-router-dom';


const DivVSpaced = styled.div`
 margin-top: 20px;
 margin-bottom: 20px;
`

const Artists = () => {
   let { id } = useParams();
   const [artist, setArtist] = useState([]);
   const [albums, setAlbums] = useState([]);

   async function fetchArtist() {
      const response = await ArtistsService.show(id);
      setArtist(response.data);
      setAlbums(response.data.albums);
   }

   useEffect(() => {
      fetchArtist();
   }, [])

   const artists_albums = albums.map((album, key) =>
      <Columns.Column desktop={{size:3}} mobile={{size:6}} key={key}>
         <Album artist_name={album.artist_name} title={album.title} cover_url={album.cover_url} id={album.id}></Album>
      </Columns.Column> 
   );
   
   return (
      <Fragment>
      <h1 className="sutitle has-text-white has-text-centered">Artista</h1>
      <Heading className='has-text-white has-text-centered'>{artist.name}</Heading>
      <Columns.Column className='is-vcentered is-centered has-text-centered'>
         <Favorite id={id} kind='artists' state_favor={artist.favorite} />
      </Columns.Column>
      <DivVSpaced />
      <Columns desktop={{size:3}} mobile={{size:6}} className='is-vcentered is-centered has-text-centered'>
         <Columns.Column desktop={{size:3}} mobile={{size:6}}>
         <Image src={artist.photo_url} className='vertical-spacing'></Image>
      </Columns.Column>
      </Columns>
      <DivVSpaced />
      <h1 className="title has-text-white has-text-centered">Albums</h1>        
      <Columns className='is-vcentered is-mobile'>
        {artists_albums}
      </Columns>      
    </Fragment>
   );
}
export default Artists;