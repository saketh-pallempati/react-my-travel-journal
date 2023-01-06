import loc from './Images/loc.png'
function Card(props) {
  console.log(props);
  return (
    <div className = "card">
      <img src={require(`./Images/${props.imageUrl}`)} alt={props.imageUrl} width="80px" className = "cardImage"/>
      <div className = "card--main">
        <img src = {loc} alt="" />
        <p className = "card--location">{props.location}</p>
        <a href={props.googleMapsUrl} className = "card--link"> View on Google Maps</a>
        <h3 className = "card--title">{props.title}</h3>
        <h5 className = "card--date">
          {props.startDate} - {props.endDate}{" "}
        </h5>
        <p className = "card--description">{props.description}</p>
      </div>
    </div>
  );
}
export default Card;
