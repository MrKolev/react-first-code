import './Card.css';

function Card(props){
    const alasses = "card " + props.className;
return <div className={alasses}>{props.children}</div>

}

export default Card