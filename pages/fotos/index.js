import React from "react"
import Header from "../../components/header/header";
import "../fotos/styles.css"
import imagem from "../../assets/logo-dc3.png";

function Fotos () {

  return (
<>
< Header />
     <div className="fundo-fotos"> 
       <div className="fotos">
         <div className="img foto1"></div>
         <div className="img foto2"></div>
         <div className="img foto3"></div>
         <div className="img foto4"></div>
         <div className="img foto5"></div>
         <div className="img foto6"></div>
         <div className="img foto7"></div>
         <div className="img foto8"></div>
         <div className="img foto9"></div>
         <div className="img foto10"></div>
         <div className="img foto11"></div>
         <div className="img foto12"></div>
       </div>
       <div className="footerfotos">
         <img id="logofooter" src={imagem}/>
          <span>
             <p className="text-footer">Todos os direitos reservados © <br></br>
              Desenvolvido por: Djoseffer Domingues</p>
          </span>
       </div>
     </div>
</>
  )
  }

    export default Fotos;