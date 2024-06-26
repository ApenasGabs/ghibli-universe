import styled from "styled-components";

export const StyledFilmCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  img {
    max-height: 141px;
  }
  margin-top: 20px;
  color: black;
  width: 90%;
  /* flex-wrap: wrap; */
`;

export const StyledFilmDescriptionContainer = styled.div`
  padding: 10px;
  width: 100%;
`;
export const StyledFilmOverview = styled.div`
  max-width: 100%;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
