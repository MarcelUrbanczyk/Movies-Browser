import { ListItem, Item, Header, Wrapper } from "./styled";
import Tile from "../../../../common/Tile";

const Success = ({ results }) => (
  <Wrapper>
    <Header>Popular movies</Header>
    <ListItem>
      {results
        ? results.map((movie) => (
            <Item key={movie.id}>
              <Tile
                title={movie.original_title}
                year={movie.release_date.substring(0, 4)}
                rating={movie.vote_average}
                votes={movie.vote_count}
                poster={movie.poster_path}
                genres={"."}
              />
            </Item>
          ))
        : null}
    </ListItem>
  </Wrapper>
);

export default Success;