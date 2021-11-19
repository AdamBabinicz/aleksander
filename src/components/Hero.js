import React, { useState } from "react";
import "./Hero.css";
import Modal from "../components/Portal/Modal";

const Hero = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <div className="hero" id="start">
        <div className="content">
          <p>Ἀλέξανδρος ὁ Μέγας</p>
          <p>άνίκητος</p>
          <p>Aleksander Wielki</p>
          <p>365 p.n.e. - 323 p.n.e.</p>
          <button onClick={() => Toggle()} className="button">
            Więcej
          </button>
          <Modal
            show={modal}
            close={Toggle}
            title="Aleksander III Wielki, zw. Macedońskim, gr. Aléxandros"
          >
            <p>
              Syn Filipa II i Olimpias. Jako następca tronu był wychowywany
              przez Arystotelesa (od 342 p.n.e.). W 340 sprawował regencję pod
              nieobecność ojca; 338 odznaczył się w bitwie pod Cheroneą; rozwód
              Filipa II z Olimpias (337) poróżnił go z ojcem, ale wkrótce doszło
              do pojednania; po śmierci Filipa (336), w którą zdaniem niektórych
              miała być zaangażowana Olimpias, a być może i on sam, Aleksander
              Wielki wyeliminował wszystkich konkurentów i został królem
              Macedonii oraz hegemonem Związku Korynckiego.
            </p>
            <br />
            <p>
              <em>
                encyklopedia.pwn.pl/haslo/Aleksander-III-Wielki;3867559.html
              </em>
            </p>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Hero;
