import styled from "styled-components";

export const SinglePost = styled.article`
  min-height: 400px;
  margin-bottom: var(--marginbottom);
`;

export const CommentContainer = styled.article`
  padding: 1rem;
  a {
    color: #2a2e2e!important;
  }
`;

export const NoteContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  h3 {
    text-align: center;
    color: #9fa9ba;
    font-size: 1.2rem;
    word-wrap: break-word;
    font-style: italic;
    font-weight: 400;
    margin-bottom: 2rem;
    text-decoration: underline;
  }
  p {
    white-space: pre-line; 
    height: unset!important;
  }
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
