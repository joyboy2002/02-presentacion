import imagenAvatar from './assets/avatar.jpg';
import './PresentationCard.css';
function PresentationCard() {
  let name = 'Emiliano';
  return (
    <div className="presentation-card">
      <img src={imagenAvatar} alt="Imagen de Emiliano López" />
      <h1>
        Hola, soy {name} y estoy aprendiendo React
      </h1>

    </div>
  );
}

export default PresentationCard;