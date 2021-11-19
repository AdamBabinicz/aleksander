import React from "react";
import "./Testimonials.css";
import img1 from "../images/1.jfif";
import img2 from "../images/11.jpg";
import img3 from "../images/5.jpg";

const Podboje = () => {
  return (
    <>
      <div className="testimonials" id="podboje">
        <div className="container">
          <h2>Podboje</h2>
          <span className="line"></span>
          <div className="content">
            <div className="card">
              <img src={img1} alt="..." />
              <p>Podbój Imperium Perskiego</p>
              <p>
                W <b>334 p.n.e.</b> wyruszył z kampanią w celu zajęcia
                <b> Anatolii</b>.
              </p>
              <p>
                Bitwa pod <b>Issos</b>, podbój <b>Fenicji</b> i <b>Egiptu</b>.
              </p>
              <p>Król Górnego i Dolnego Egiptu.</p>
              <p>
                Bitwa pod <b>Gaugamelą</b>, opanowanie <b>Mezopotamii</b> i
                <b> Persji</b>.
              </p>
              <p>
                Walki w <b>Baktrii</b> i <b>Sogdianie</b>.
              </p>
            </div>
            <div className="card">
              <img src={img2} alt="..." />
              <p>Kampania w Indiach</p>
              <p>
                Po zakończeniu podboju <b>Sogdiany</b> żądny dalszych zwycięstw
                Aleksander ruszył w roku <b>327 p.n.e.</b> na Indie. W wyprawie
                uczestniczyło już wtedy około 120 tysięcy ludzi – macedońskich,
                greckich i azjatyckich żołnierzy oraz kupców, tragarzy,
                niewolników, kurtyzan i żon. Była to najcięższa część kampanii.
                Mieszkańcy ziem nad <b>Indusem</b> okazali się twardym
                przeciwnikiem, a klimat (m.in. częste deszcze) dawał się we
                znaki wojskom Aleksandra. Rozdrażnieni żołnierze urządzali
                rzezie miejscowej ludności. Nad rzeką <b>Hydaspes</b> macedoński
                król pokonał wojska indyjskiego księcia <b>Porosa</b>, który
                miał aż 200 słoni bojowych.
              </p>
              <p>
                Było to już ostatnie wielkie zwycięstwo Aleksandra. W Indiach
                Północnych Aleksander wywarł takie wrażenie na Hindusach, że
                przez pewien czas był czczony jako bóstwo. Zamieszkujący
                Himalaje Gurkhowie wywodzą pochodzenie swoich noży kukri od
                greckich mieczy kopis, w które uzbrojeni byli żołnierze
                Aleksandra.
              </p>
              <p>
                Maszerując z Indii do Persji ruszył z częścią sił przez pustynną
                <b> Gedrozję</b>. Marsz zakończył się śmiercią tysięcy ludzi z
                braku wody i jedzenia.
              </p>
            </div>
            <div className="card">
              <img src={img3} alt="..." />
              <p>Ostatni rok panowania</p>
              <p>
                Po powrocie króla ze wschodu wielu satrapów podejrzanych o
                spisek (np. niedostarczenie zapasów dla maszerującej przez
                Gedrozję armii) zostało skazanych na śmierć lub też zdjętych ze
                stanowiska, co być może było jedynym sposobem, by opanować
                poważny kryzys imperium, jaki wówczas nastąpił.
              </p>
              <p>
                Stan Aleksandra pogorszył się latem <b>324 p.n.e.</b> w
                <b> Ekbatanie</b>, po śmierci Hefajstiona, jego najbliższego
                przyjaciela, współpracownika, a według części źródeł, także
                kochanka. Na pogrzeb i grobowiec wydał gigantyczną fortunę i
                zaczął jeszcze bardziej nadużywać alkoholu.
              </p>
              <p>
                Po kilkunastu dniach choroby Aleksander zmarł. Nie można
                wykluczyć, że został otruty przez obawiających się kolejnej fali
                czystek dowódców jego armii (trucizna wlana do wina). Kilka
                miesięcy po jego śmierci <b>Roksana</b> urodziła mu syna
                <b> Aleksandra IV</b>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Podboje;
