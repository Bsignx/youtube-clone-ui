import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  > p {
    margin-top: 10px;
    font-weight: bold;
    color: var(--primary);
  }
`;

export const ImageContainer = styled.div`
  width: 250px;
  height: 150px;
  overflow: hidden;
  border-radius: 8px;

  > img {
    max-width: 100%;
    min-height: 100%;
  }

  position: relative;
  > span {
    background-color: rgba(0, 0, 0, 0.3);
    padding: 6px;
    border-radius: 14px;
    font-size: 14px;
    color: white;
    position: absolute;
    bottom: 12px;
    right: 12px;
  }
`;
export const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  > span {
    font-size: 13px;
    color: var(--legend);
  }
`;
