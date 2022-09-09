import './botao.css';
export function Botao(props) {
  return <button className={`botao ${props.tipo}`}> {props.texto} </button>;
}
