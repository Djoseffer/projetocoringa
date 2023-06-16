import Header from "../../components/header/header";
import "../comentarios/styles.css"
import imagem from '../../assets/logo-dc3.png';

function Comentarios () {

  return (
<>
<Header />
  <div className="pai">
    <div className="comentarios">
        <p id="autor1">
        Heloisa Zanella ✰✰✰
        <br></br>
        </p>
        <p className="coments">
        <br></br>
       Esse foi um dos melhores filmes que eu já vi, com certeza! Ele foi capaz de me prender,
       de me fazer criar uma empatia e de me indentificar com o personagem de uma forma tremenda,
       o drama é muito envolvente e a atuação de Joaquin Phoenix é fantástica, 
       tanto é que ganhou o merecidíssimo Oscar, e ele realmente mergulha no personagem e é isso, 
       simplesmente os momentos mostrados no filme são uma jornada dentro de uma psique que
       simplesmente é julgada como insana e rasa, deu um novo ar para a personagem, total.
        A música tocada do Sinatra, "That's life", dá um match com o coringa mostrado e acaba passando
         uma vibe tão boa, principalmente na cena da escada. O visual é outra coisa que chama atenção,
          a atmosfera dark é muito imersiva. Enfim, não me julguem, 
          mas ver esse filme foi como fazer terapia para mim.
       </p>
  </div>

  <div className="comentarios2">
        <p id="autor2">
            César Leite ✰✰✰✰
            <br></br>
        </p>
        <p className="coments2">
            <br></br>
        Não à toa, Joaquin Phoenix venceu o Oscar de melhor ator! Que atuação soberba! Que carisma! 
        Que domínio de cena! E de quebra, a presença "luxuosa" de Robert de Niro.
         O filme é um tratado de sociologia perfeito, com investidas no campo da psiquiatria.
         E Phoenix -  com seu Coringa - nos presenteia com uma das atuações mais perfeitas,
          carismáticas e profundas de Hollywood em todos os tempos. A viajem pelo ponderável,
          com o paralelismo entre a origem do vilão, e a loucura de sua mãe "adotiva",
          com  a possibilidade de ele ser filho do magnata Wayne, e portanto meio-irmão de ninguém
          menos que o Batman, foi sensacional.
         Essa é uma proposta que inclusive enriquece as origens do Homem-morcego.
          Filme para ser revisto várias vezes.
            Cinco, seis, dez estrêlas! 
        </p>
  </div>

  <div className="comentarios3">
    <p id="autor3">
      Matheus Vinicios ✰✰✰✰✰
      <br></br> 
    </p>
    <p className="coments3">
    <br></br>
    A natureza fez o homem feliz e bom, mas a sociedade deprava-o e torna-o miserável.
     Essa famosa frase do suíço Rousseau exemplifica muito bem o que assistimos
       ao longo de 122 minutos de projeção. Coringa é antes de mais nada um retrato de nossa sociedade,
       que anda entre vales nebulosos onde o medo e as desilusões se tornam estopim
        para novos modos de pensar mas que também caminha para a maldade em mentes perturbadas.
      Dirigido pelo cineasta nova iorquino Todd Phillips e com uma atuação de gala
       de Joaquin Phoenix no papel principal, o filme, que já bateu recordes de bilheteria
       onde exibido, é um dos fortes candidatos a melhor filme do ano.
    </p>
  </div>
  </div>
  <div className="footer">
      <img id="logofooter" src={imagem}/>
        <span>
             <p> Todos os direitos reservados © <br></br>
              Desenvolvido por: Djoseffer Domingues</p>
        </span>
  </div>
</>
)
}

export default Comentarios;