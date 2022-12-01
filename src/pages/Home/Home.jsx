import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchData } from 'services/ApiService';
import { Container } from 'components/base/Container.styled';
import { Section } from 'components/base/Section.styled';
import { Title } from './Home.styled';
import NotiflixLoading from '../../helpers/Loader/NotiflixLoading';
const loader = new NotiflixLoading();

const Home = () => {
  const [trends, setTrends] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const pathParams = 'trending/movie/day';

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(pathParams);
        setTrends(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  if (!trends) {
    return null;
  }

  return (
    <main>
      <Container>
        {isLoading ? loader.onLoading() : loader.onLoaded()}
        <Section>
          {!error ? (
            <Title> Trending today</Title>
          ) : (
            <Title> Whoops, something went wrong</Title>
          )}
          {!error && trends.length > 0 && <MoviesList movies={trends} />}
        </Section>
      </Container>
    </main>
  );
};

export default Home;
