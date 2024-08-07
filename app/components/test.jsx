import { useState } from 'react';

// Variable globale pour générer des identifiants uniques
let nextId = 0;

export default function List() {
  // État pour stocker le nom de l'artiste à ajouter
  const [name, setName] = useState('');
  
  // État pour stocker la liste des artistes
  const [artists, setArtists] = useState([]);
  
  // Fonction pour ajouter un nouvel artiste
  const handleAddArtist = () => {
    if (name.trim() === '') return; // Ne pas ajouter si le nom est vide

    // Met à jour la liste des artistes avec un nouvel artiste
    setArtists(prevArtists => [
      ...prevArtists,
      { id: nextId++, name } // Utilisation de nextId pour attribuer un ID unique
    ]);
    
    setName(""); // Réinitialiser le champ de texte après l'ajout
  };

  // Fonction pour mettre à jour le nom d'un artiste
  const handleEditArtist = (id, newName) => {
    setArtists(prevArtists => 
      prevArtists.map(artist =>
        artist.id === id ? { ...artist, name: newName } : artist // Met à jour l'artiste spécifique
      )
    );
  };

  // Fonction pour supprimer un artiste
  const handleDeleteArtist = (id) => {
    setArtists(prevArtists => 
      prevArtists.filter(artist => artist.id !== id) // Filtre l'artiste à supprimer
    );
  };

  return (
    <>
      <h1>Sculpteurs inspirants :</h1>
      
      {/* Champ de texte pour entrer le nom de l'artiste */}
      <input
        value={name}
        onChange={e => setName(e.target.value)} // Met à jour l'état `name` à chaque changement
        placeholder="Nom de l'artiste"
      />
      
      {/* Bouton pour ajouter l'artiste */}
      <button onClick={handleAddArtist}>Ajouter</button>
      
      {/* Liste des artistes */}
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {/* Affiche le nom de l'artiste */}
            {artist.name}

            {/* Bouton pour éditer le nom de l'artiste */}
            <button onClick={() => {
              const newName = prompt('Nouveau nom:', artist.name); // Demande le nouveau nom
              if (newName) handleEditArtist(artist.id, newName); // Met à jour si un nouveau nom est fourni
            }}>
              Modifier
            </button>
            
            {/* Bouton pour supprimer l'artiste */}
            <button onClick={() => handleDeleteArtist(artist.id)}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
      
      {/* Afficher le nombre total d'artistes */}
      <div>
        Nombre total d'artistes : {artists.length}
      </div>
    </>
  );
}
