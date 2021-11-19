import React, { useState } from "react";
import "./About.css";
import alex from "../images/4.png";
import Modal from "../components/Portal/Modal";

const Strateg = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <div className="about" id="strateg">
        <div className="container">
          <img src={alex} alt="Aleksander Wielki" />
          <div className="col-2">
            <h2>
              Wybitny strateg i jeden z największych zdobywców w historii
              ludzkości
            </h2>
            <span className="line"></span>
            <p>
              Okres panowania Aleksandra wyznacza granicę między dwiema epokami
              historii starożytnej: <b>okresem klasycznym</b> i
              <b> epoką hellenistyczną</b>.
            </p>
            <p>
              Aleksander złamał potęgę imperium perskiego w wyniku serii
              zwycięstw (najsłynniejsze odniósł pod <b>Issos</b> i
              <b> Gaugamelą</b>) i do 327 p.n.e. opanował całe państwo. W tym
              samym roku ruszył na Indie, lecz pomimo odnoszonych zwycięstw
              został zmuszony do odwrotu z powodu niezadowolenia w armii. Zmarł
              w wieku 32 lat w Babilonie w trakcie przygotowań do kolejnych
              wypraw wojennych, pozostawiając imperium, którego rozpiętość ze
              wschodu na zachód wynosiła 5 tys. km. <br />
              <br />
              Po jego śmierci rozgorzały walki pomiędzy dowódcami macedońskiej
              armii, tzw. <b>diadochami</b>, które doprowadziły do podziału
              ogromnego państwa na kilka królestw. <br />
              Tocząc zwycięskie bitwy z wojskami Traków, Ilirów, Persów i
              Hindusów, opierał się na zdyscyplinowanej piechocie –
              <b> falandze</b> i ciężkiej macedońskiej jeździe –{" "}
              <b>hetajrach</b>.
            </p>
            <button onClick={() => Toggle()} className="button">
              Więcej
            </button>
            <Modal show={modal} close={Toggle} title="Wojny i podboje króla">
              <p>
                W 335 zniszczył Teby, które zbuntowały się na wieść o jego
                wyprawie nad Dunaj; w V 334 przeprawił się przez Hellespont na
                czele ponad 40-tysięcznej armii i nad Granikiem rozgromił
                połączone armie lokalnych satrapów perskich, co otworzyło mu
                drogę do podboju całej Azji Mniejszej. W XI 333 pod Issos w
                Cylicji pokonał główne siły perskie, dowodzone przez króla
                perskiego Dariusza III Kodomanusa, który ratował się ucieczką z
                pola bitwy.
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
      </div>
    </>
  );
};

export default Strateg;
