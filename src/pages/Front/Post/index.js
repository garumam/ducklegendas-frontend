import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import {SinglePost,SinglePostInfo} from "./styles";
import {InputPersonalizado} from "../Contato";
import {getRequest} from "services/api";
import { formatDate } from "utils/Utils";
import { baseUrl } from "services/api";

export default props => {
  const [post,setPost] = useState([]);
  let { id } = useParams();
  let data = [];
  useEffect(() =>{
    let isMount = true;
    async function getItens(){
      const res = await getRequest(`subtitles/${id}`);
      if(res.success && isMount){
        console.log(res.success)
        setPost(res.success)
      }else{
        setPost({error : "Legenda não encontrada"})
      }
    }
    getItens();
    return () => isMount = false
  },[id]);

  return(
  <SinglePost className="card card-shadow">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="header-card">
            <h2>{post && post.name ? post.name : post.error}</h2>
          </div>
        </div>
        <div className="card-border" />

        { post && post.name  &&
        <SinglePostInfo>
          <p>by { post.author }, Adicionado {formatDate(post.created_at)}</p>
          <article>
            <img
              src={post.image?`${baseUrl}storage/${post.image}`: "http://via.placeholder.com/160x240"}
              className="img-fluid"
              width="160"
              height="240"
              alt=""
            />
            <p>
              Episódio 13×09 – The Bad Place” <br />
              Legendas: <br />
              Supernatural.S13E09.720p.HDTV.x264-AVS
              <br />
              Supernatural.S13E09.1080p.HDTV.x264-CRAVERS
              <br />
              Supernatural.S13E09.HDTV.x264-SVA
              <br />
              Supernatural.S13E09.iNTERNAL.720p.WEB.x264-BAMBOOZLE
              <br />
              
            </p>
            <a href={post.url}><InputPersonalizado type="submit" value="Download" /></a>
          </article>
        </SinglePostInfo>
        }
      </div>
    </div>
  </SinglePost>
);
}