function Card(cardProps) {
  let props = cardProps.cardProps;
  return (
    <>
      <div className="card">
        <img src={props.image} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.link} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
