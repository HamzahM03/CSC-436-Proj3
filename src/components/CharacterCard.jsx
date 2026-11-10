function CharacterCard({ name, image, species, status }) {
  return (
    <div className="character-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{species}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default CharacterCard;