import styled from "styled-components";

export const SinglePost = styled.article`
  min-height: 400px;
  margin-bottom: var(--marginbottom);
`;

export const SinglePostInfo = styled.section`
  width: 100%;
  padding: 1rem;

  & > p {
    color: #9fa9ba;
    font-size: 0.8rem;
    word-wrap: break-word;
    font-style: italic;
    font-weight: 400;
  }

  article {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  article img {
    margin-top: 0.9rem;
    padding-bottom: 1rem;
  }
  article p {
    width: 74%;
    color: #9fa9ba;
    font-size: 0.9rem;
    word-wrap: break-word;
    height: 150px;
    margin-top:.6rem;
    margin-bottom: 1rem;
  }
 
`;
