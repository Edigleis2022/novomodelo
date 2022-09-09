import { Botao } from './Botao';
import './cartao.css';
export function Cartao(props) {
  return (
    <div className="cartao">
      <div>
        <img src={props.foto} />
      </div>
      <div className="dados">
        <h2>{props.nome}</h2>
        <p>{props.email}</p>
        <Botao texto="Ver Perfil" />
      </div>
    </div>
  );
}
