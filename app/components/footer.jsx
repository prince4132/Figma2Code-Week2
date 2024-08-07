import React, { useState } from 'react';

function Footer() {
  // Déclare les états pour les champs du formulaire
  const [email, setEmail] = useState('');

  // Fonction pour gérer l'envoi du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire

    // Effectue des actions avec les données du formulaire
    // Par exemple, affichage dans la console
    console.log('Email soumis :', email);

    // Réinitialiser le champ du formulaire si nécessaire
    setEmail('');
  };

  return (
    <section className='mt-[50px] bg-noir font-archivo-regular text-blanc px-[5%]'>
      <div className='flex-col lg:flex-row lg:flex py-10 justify-between'>
        <div className='flex flex-col gap-5 w-full lg:w-1/2'>
          <h1 className='uppercase text-xl md:text-[36px] text-blanc font-chillax-extralight font-semibold'>
            Ballamas
          </h1>
          <h3 className='text-gris1 font-archivo-regular'>
            Subscribe to our newsletter for upcoming products and best discount for all items
          </h3>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder='Your email'
              className='p-3 rounded-full bg-transparent border-2 border-blanc placeholder:text-blanc outline-none'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="submit"
              value="Subscribe"
              className='ml-5 border-2 outline-none p-3 rounded-full bg-blanc text-noir hover:bg-noir hover:text-blanc border-blanc'
            />
          </form>
        </div>

        <div className='mt-5 lg:mt-0 text-blanc'>
          WOeld
        </div>
      </div>
    </section>
  );
}

export default Footer; 
