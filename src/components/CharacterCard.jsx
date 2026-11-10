function CharacterCard({ name, image, species, status }) {
  // "Alive" -> "status-alive", so CSS can color each status differently
  const statusClass = `status-${status.toLowerCase()}`;

  return (
    <article className="character-card">
      <img src={image} alt={name} width="300" height="300" />
      <h2>{name}</h2>
      <p className="character-species">{species}</p>
      <span className={`status-badge ${statusClass}`}>Status: {status}</span>
    </article>
  );
}

export default CharacterCard;
