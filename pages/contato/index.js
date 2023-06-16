import React from "react"
import Header from "../../components/header/header";
import "../contato/styles.css";
import imagem from '../../assets/logo-dc3.png';

function Contato () {

    return (
<>
< Header />
  <body>
      <form action="./Contato5.html" />

      <div className="contatopai">

        <div className="contato">Entrar Em Contato</div>

          <label className="contato-email" for="email">E-mail*</label>
          <input style={{display: "block"}} id="email" type="email" name="Email" placeholder=" Coloque um e-mail válido*"/>

      <div>
          <label className="nome" for="text">Nome*</label>
          <input style={{display: "block"}} id="name" type="name" name="name" placeholder=" Nome*" />

          <label className="textoassunto" for="assunto">Assunto*</label>
          <input style={{display: "block"}} id="assunto" type="assunto" name="assunto" placeholder=" Assunto*" />
      </div>

    <div>
          <textarea id="mensagem" style={{display: "block"}} name="mensagem" rows="15" placeholder=" Mensagem*"></textarea>
    </div>
        <button className="contatobutton">Enviar</button>
    </div>
    
      <div className="footercontato">
       <img id="logofooter" src={imagem}/>
          <span>
             <p className="text-footer">Todos os direitos reservados © </p>
             <p>Desenvolvido por: Djoseffer Domingues</p>
          </span>
      </div>
  </body>
</>
  )
  }

    export default Contato;