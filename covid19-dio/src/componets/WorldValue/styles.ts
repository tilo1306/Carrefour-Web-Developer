import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: auto;
    height: auto;
    padding: 20px;
    border: 1px solid black;
    width: 160px;
  }
  .Cases {
    background: aquamarine;
    margin: 20px;
  }
  .Deaths {
    background: red;
    margin: 20px;
  }
  .Recovered {
    background: green;
    margin: 20px;
  }
`;
