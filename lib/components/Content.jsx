import styled from 'styled-components';

const Content = styled.div`
  height: calc(${props => props.height} - '56px');
  overflow-y: scroll;
  margin-top: 2px;
  padding-top: 6px;
`;

export default Content;
