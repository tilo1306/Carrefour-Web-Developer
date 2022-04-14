import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  text-align: center;
  margin: 25px;
  padding: 25px;
  .input {
    width: 100%;
    pad: 10px;
  }
  .input input {
    width: 200px;
    margin-top: 10px;
  }
`;
export const Header = styled.h1`
  color: red;
  text-align: center;
`;
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
export const SectionCountries = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const SectionPagination = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  .paginationBttns {
    width: 80%;
    height: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
  }

  .paginationBttns a {
    padding: 10px;
    margin: 8px;
    border-radius: 5px;
    border: 1px solid #2b2eff;
    color: #2b2eff;
    cursor: pointer;
  }

  .paginationBttns a:hover {
    color: white;
    background-color: #2b2eff;
  }

  .paginationActive a {
    color: white;
    background-color: #2b2eff;
  }

  .paginationDisabled a {
    color: white;
    background-color: white;
    border: none;
  }
`;
