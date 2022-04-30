import styled from "styled-components";
import { useState, useEffect } from "react";
import ArrayStore from "../lib/store/array-store";

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;

  margin: 1rem;
`;

const Card = styled.div``;

const Img = styled.img`
  width: 100%;
`;

const CatCard = (props) => (
  <Card>
    <Img src={props.url} />
  </Card>
);

const CatGrid = (props) => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const farm = new ArrayStore(props.storeKey);
    setCats(farm.load());
  }, [props.storeKey]);

  return (
    <Grid>
      {cats.map((cat) => {
        return <CatCard url={cat.url} key={cat.id} />;
      })}
    </Grid>
  );
};

export default CatGrid;
