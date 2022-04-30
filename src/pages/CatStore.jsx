import styled from "styled-components";
import CatDisplay from "../components/CatDisplay";
import "./CatStore.css";

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function CatStore() {
  return (
    <Flex>
      <h1>Cat Store</h1>
      <CatDisplay />
    </Flex>
  );
}

export default CatStore;
