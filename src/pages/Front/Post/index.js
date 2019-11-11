import React, { useState, useEffect } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { SinglePost, SinglePostInfo, CommentContainer } from "./styles";
import { InputPersonalizado } from "../Contato";
import { getRequest } from "services/api";
import { formatDate } from "utils/Utils";
import { baseUrl } from "services/api";
import Disqus from 'disqus-react';

export default props => {
  let { id } = useParams();
  let history = useHistory();
  let { state } = useLocation();
  state = (state && state.item) || [];
  const [post, setPost] = useState(state);

  useEffect(() => {
    let isMount = true;
    async function getItens() {
      const res = await getRequest(`subtitles/front/${id}`);
      if (res.success && isMount) {
        setPost(res.success);
      } else {
        setPost({ error: "Legenda não encontrada" });
      }
    }

    if (state.length === 0) getItens();
    return () => (isMount = false);
  }, [id, state.length]);

  const addDownload = async () => {
    const res = await getRequest(`/subtitles/downloaded?id=${post.id}`);
    if (res.success) {
      setPost({
        ...post,
        downloaded: post.downloaded + 1
      });
      history.replace({ state: post });
    }
  };

  const disqusShortname = 'ducklegendas';
  const disqusConfig = {
    url: '',
    identifier: post.id,
    title: post.name,
  };

  if (typeof window !== 'undefined') {
    disqusConfig.url = window.location.href;
  }
  
  return (
    <>
    <SinglePost className="card card-shadow">
      <div className="header-card">
        <h2>{post && post.name ? post.name : post.error}</h2>
      </div>

      <div className="card-border" />

      {post && post.name && (
        <SinglePostInfo>
          <p>
            by{" "}
            {post.author && post.author.name ? post.author.name : post.author},
            Adicionado {formatDate(post.created_at)}
          </p>
          <article>
            <img
              src={
                post.image
                  ? `${baseUrl}${post.image}`
                  : "https://via.placeholder.com/160x240"
              }
              className="img-fluid"
              width="160"
              height="240"
              alt=""
            />
            <p>
              {post.episode && `Episódio : ${post.episode.toUpperCase()}`} Ano :{" "}
              {post.year}
              <br />
              Downloads: {post.downloaded} <br />
              {/* Supernatural.S13E09.720p.HDTV.x264-AVS
              <br />
              Supernatural.S13E09.1080p.HDTV.x264-CRAVERS
              <br />
              Supernatural.S13E09.HDTV.x264-SVA
              <br />
              Supernatural.S13E09.iNTERNAL.720p.WEB.x264-BAMBOOZLE
              <br /> */}
            </p>
            <a
              style={{ width: "100%" }}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={addDownload}
            >
              <InputPersonalizado type="submit" value="Download" />
            </a>
          </article>
        </SinglePostInfo>
      )}
      <CommentContainer>
        <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
        Comentários
        </Disqus.CommentCount>               
        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </CommentContainer>
      
    </SinglePost>
    
    </>
  );
};
