import React, { useState } from "react";
import "./Demo.css";
import img from "../images/10.jpg";
import img0 from "../images/4.jpg";
import Modal from "../components/Portal/Modal";

const Dziedzictwo = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <div className="demo" id="dziedzictwo">
        <div className="container">
          <div className="col-1">
            <p>Dziedzictwo</p>
            <p>
              Mimo że nie rządził swoim wielkim imperium zbyt długo, efekty jego
              podbojów były ogromne.
            </p>
            <p>
              Zakładane przez niego greckie kolonie spowodowały
              rozprzestrzenienie się <b>helleńskiej kultury</b> na ogromnych
              obszarach, co spowodowało powstanie
              <b> kultury hellenistycznej</b>. W kilka lat po jego śmierci
              imperium zostało podzielone w wyniku wojen <b>diadochów</b> –
              dowódców armii Aleksandra Wielkiego. Założone przez nich królestwa
              na wiele lat zdominowały Bliski Wschód.
            </p>
            <p>
              O Aleksandrze Macedońskim wspomina też <b>Biblia</b>, w
              <b> 1 Księdze Machabejskiej</b>: <br />
              <br />
            </p>
            <p>
              "<b>Aleksander, syn Filipa Macedońskiego</b>, wyruszył z kraju
              <b> Kittim</b> i po zwycięskich walkach pokonał <b>Dariusza</b>,
              króla Persów i Medów, i w jego miejsce objął panowanie najpierw
              nad Helladą. Prowadził on wiele wojen: zdobył [wiele] umocnionych
              miejscowości i wytracił królów [rządzących na swych] ziemiach.
              Przeszedł on aż na krańce świata, a nabrał łupów od wielu narodów.
              Cała ziemia przed nim zamilkła, jego zaś serce wbiło się w pychę.
              Zebrał bowiem bardzo liczne wojsko i rządził państwami, narodami i
              [ich] władcami tak, że płacili mu daniny."
            </p>
            <button onClick={() => Toggle()} className="button">
              Więcej
            </button>
            <Modal show={modal} close={Toggle} title="Legenda Aleksandra">
              <p>
                W epoce hellenistycznej zaczęły powstawać fantastyczno-baśniowe
                opowieści o życiu Aleksandra Wielkiego (tzw. aleksandreidy).
                Najsłynniejsze dzieło tego gatunku, Romans o Aleksandrze (III
                w.), zostało w X w. przełożone na łacinę i stało się podstawą
                wyobrażeń średniowiecznych o Aleksandrze Wielkim (polska wersja
                Historia o żywocie i znamienitych sprawach Aleksandra Wielkiego
                1550).
              </p>
              <br />
              <p>
                <em>
                  encyklopedia.pwn.pl/haslo/Aleksander-III-Wielki;3867559.html
                </em>
              </p>
            </Modal>
          </div>
          <div className="col-2">
            <img src={img0} alt="..." />
            <img src={img} alt="..." />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dziedzictwo;
