import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px;
  border: 1px solid black;
  width: 250px;
  background: #afc1cd;
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    height: 150px;
    border-bottom: 1px solid black;
  }
  .thead {
    background: #fbc8c9;
    font-weight: bold;
  }
  tr:nth-child(even) {
    background: #fff;
  }
  tr:nth-child(odd) {
    background: #eee;
  }
`;
