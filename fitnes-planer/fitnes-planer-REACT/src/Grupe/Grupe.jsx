import React, { useState } from 'react';
import './Grupe.css';

// MuscleGroup Component
function MuscleGroup({ name, onClick, isExpanded, children }) {
  return (
    <div className="muscle-group" onClick={() => onClick(name)}>
      <h2>{name}</h2>
      {isExpanded && <div className="muscle-details">{children}</div>}
    </div>
  );
}

// Grupe Component
function Grupe() {
  const [expandedGroup, setExpandedGroup] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleGroupClick = (name) => {
    setExpandedGroup(expandedGroup === name ? null : name);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter muscle groups based on search term
  const muscleGroups = [
    { name: 'Ruke', content: <p>Mišići ruke se dele na dve glavne grupe: mišići gornjeg dela ruke i mišići podlaktice. Gornji deo ruke uključuje biceps brachii, triceps brachii i brachialis, koji su uglavnom odgovorni za savijanje i pružanje lakta. Podlaktica sadrži složenu grupu mišića koja omogućava precizne pokrete ruke i prstiju, kao i pronaciju i supinaciju podlaktice.</p> },
    { name: 'Noge', content: <p>Mišići nogu su neki od najjačih u telu. Gornji deo noge (butina) dominira kvadriceps na prednjoj strani, koji produžava koleno, i hamstrings na zadnjoj strani, koji savija koleno. Mišići lista, prvenstveno gastrocnemius i soleus, su ključni za pokrete kao što su hodanje, trčanje i skakanje, jer kontrolišu ekstenziju članka.</p> },
    { name: 'Ledja', content: <p>Mišići leđa uključuju složeni sistem koji podržava kičmu i gornji deo tela. Latissimus dorsi, koji se protežu preko donjih leđa i strana, učestvuju u pokretima ruku i stabilnosti ramena. Trapezni mišići u gornjem delu leđa i vratu su odgovorni za pomeranje, rotiranje i stabilizovanje lopatice (ramene kosti) i produžavanje vrata.</p> },
    { name: 'Stomak', content: <p>Abdominalni mišići, često nazivani jezgro, uključuju nekoliko ključnih grupa mišića kao što su rectus abdominis, obliques i transverse abdominis. Ovi mišići podržavaju pokrete trupa i održavaju držanje. Rectus abdominis pomaže u savijanju lumbalne kičme, dok obliques pomažu u rotiranju i bočnom savijanju trupa.</p> },
    { name: 'Vrat', content: <p>Mišići vrata su ključni za podršku glave i omogućavanje njenog kretanja. Glavni mišići u ovoj oblasti uključuju sternocleidomastoid, koji pomaže u rotiranju i savijanju vrata, i trapezius, koji se takođe proteže u gornji deo leđa i ramena. Ovi mišići igraju ključnu ulogu u održavanju držanja i omogućavaju širok raspon pokreta za glavu i vrat.</p> },

    // ... other muscle groups
  ].filter(group => group.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="grupe">
      <header>
        <h1>Grupe mišića u našim telima</h1>
        <input type="text" placeholder="Pretraži mišićne grupe" onChange={handleSearchChange} />
      </header>
      <main>
        {muscleGroups.map(group => (
          <MuscleGroup
            key={group.name}
            name={group.name}
            onClick={handleGroupClick}
            isExpanded={expandedGroup === group.name}
          >
            {group.content}
          </MuscleGroup>
        ))}
      </main>
      <footer>
        <p>Pravo mesto za fitnes entuzijaste</p>
      </footer>
    </div>
  );
}

export default Grupe;
