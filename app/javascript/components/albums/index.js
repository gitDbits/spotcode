import React, { Fragment, useState, useEffect } from 'react';
import { Heading, Columns, Image } from 'react-bulma-components';
import styled from 'styled-components';
import AlbumsService from '../../services/albums';
import Musics from '../musics';
import Favorite from '../common/favorite'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';


const DivVSpaced = styled.div`
 margin-top: 20px;
 margin-bottom: 20px;
`

const Albums = () => {
   let { id } = useParams();
   const [album, setAlbum] = useState([]);

   async function fetchAlbum() {
      const response = await AlbumsService.show(id);
      setAlbum(response.data);
   }

   useEffect(() => {
      fetchAlbum();
   }, [])
   
   return (
      <Fragment>
         <Columns className='is-vcentered is-mobile is-centered'>
            <Columns.Column desktop={{ size: 3 }} className='has-text-centered'>
               <Image src={album.cover_url} />
               <DivVSpaced>
               <Heading size={5} className='has-text-white'>{album.title}</Heading>
               <Link to={`/artists/${album.artist_id}`}>
                  <Heading size={6} className='has-text-white has-text-centered vertical-spacing'>{album.artist_name}</Heading>
               </Link>
               </DivVSpaced>
               <Favorite id={id} kind='albums' state_favor={album.favorite}></Favorite>
            </Columns.Column>
         </Columns>
         <Musics songs={album.songs || [] } />
      </Fragment>
   );
}
export default Albums;