import React from "react"
import Header from "../header/header";
import './styles.css';
import video from"../../assets/coringatrailer.mp4"
import Cards from "../cards";
import imagem from '../../assets/logo-dc3.png';

function Home () {

 return(
    <> 
     <Header /> 
         <div id="banner"></div>
         <div id="trailer-container">
         <div className="content">
           <video controls className="trailer">
             <source src={video} />
           </video>
      
         <div id="sinopse">
             <p className="description">
             Isolado, intimidado e desconsiderado pela sociedade, o fracassado comediante Arthur Fleck 
             inicia seu caminho como uma mente criminosa após assassinar três homens em pleno metrô.
              Sua ação inicia um movimento popular contra a elite de Gotham City,
               da qual Thomas Wayne é seu maior representante.
             </p>
         <button className="button">Assistir</button>
         </div> 
         </div>
         </div>
    <Cards />
        <div className="footer">
          <img id="logofooter" src={imagem}/>
          <span>
             <p>Todos os direitos reservados ©</p>
             <p> Desenvolvido por: Djoseffer Domingues</p>
          </span>
        </div>
      </>
    )
    }

export default Home;