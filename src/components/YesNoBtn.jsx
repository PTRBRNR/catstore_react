import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
`;

const Button = styled.button`
  outline: none;
  border: 2px solid black;
  border-radius: 3px;
  color: white;
  padding: 0.5rem 2rem;
`;

const YesButton = styled(Button)`
  background-color: #0ead69;
`;

const NoButton = styled(Button)`
  background-color: #ee4266;
`;

const YesNoBtn = (props) => {
  return (
    <div className="yesno">
      Do you need that kitten???
      <ButtonContainer>
        <YesButton onClick={props.onYes}>Yes</YesButton>
        <NoButton onClick={props.onNo}>No</NoButton>
      </ButtonContainer>
    </div>
  );
};

export default YesNoBtn;
