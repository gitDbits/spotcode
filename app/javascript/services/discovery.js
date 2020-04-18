import Api from './api';

const AlbumService = {
  index: () => Api.get('/dashboard')
}

export default AlbumsService;