function Card(cardProps) {
  let props = cardProps.cardProps;
  return (
    <>
      <div className="card">
        <img src={props.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description}</p>
          <a href={props.link} class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
