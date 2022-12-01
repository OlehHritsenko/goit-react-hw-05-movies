import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchDataByID } from 'services/ApiService';
import { List, Item, Image, TextWrapper, Name, Content } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await fetchDataByID(movieId, 'credits');
        setCast(data.cast);
      } catch (error) {
        setError(error);
      }
    }
    getData();
  }, [movieId]);

  if (!cast) {
    return null;
  }

  const imgDefault = `https://cdn.pixabay.com/photo/2019/01/26/20/22/public-speaking-3956908_960_720.jpg`;
  return (
    <>
      {cast.length === 0 && <div>We don't have a cast for this movie</div>}
      {cast.length > 0 && !error && (
        <List key={movieId}>
          {cast.map(({ id, name, character, profile_path }) => (
            <Item key={id}>
              <Image
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : imgDefault
                }
                alt={name}
                width="100"
                height="160"
              />
              <TextWrapper>
                <Name>{name}</Name>
                <Content>Character: {character}</Content>
              </TextWrapper>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

Cast.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      character: PropTypes.string,
      profile_path: PropTypes.string,
    })
  ),
};

export default Cast;
