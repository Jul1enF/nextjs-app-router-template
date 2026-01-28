'use client'

import styles from '@/styles/pages/home/Home.module.css';
import ConfirmationModal from '@/components/ui/ConfirmationModal';
import { useState } from 'react';
import useWindowDimensions from '@/hooks/useWindowDimensions';

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false)
const {vw } = useWindowDimensions()
  return (
    <div className="pageContent pageViewport">
      <h2 className="pageTitle">
        What's next ?!
      </h2>

      <h3 className="pageSubtitle">
        Hello, are you there ?! {vw * 1.2}
      </h3>

      <button className='regularItem strongRedBg regularText' onClick={() => setModalVisible(true)}>
        Confirmation
      </button>

      <button className='regularItem strongRedBg regularText' onClick={() => setModalVisible(true)}>
        Confirmation
      </button>

      <button className='largeItem strongRedBg regularText' style={{marginTop : "var(--medium-margin-top)"}} onClick={() => setModalVisible(true)}>
        Confirmation
      </button>

       <button className='largeItem strongRedBg largeText' style={{marginTop : "var(--large-margin-top)"}} onClick={() => setModalVisible(true)}>
        Confirmation
      </button>


      <ConfirmationModal visible={modalVisible} confirmationText={"Êtes vous sûr de vouloir gagner 1 million d'euros ?"} confirmationButtonText={"Oui je suis sûr"} cancelButtonText={"Non je préfère un chocolat"} confirmationFunction={() => setModalVisible(false)} closeModal={() => setModalVisible(false)} />

  

      <p className='regularText'>Test d'écriture de text qui doit forcément être très long pour revenir à la ligne donc j'écris beaucoup de choses pour grand chose. Je fais ça pour teste le line height de regular text et le passer en em plutôt qu'en vw</p>



      <div className='largeCard'>
          <h3 className='pageSubtitle'>
            Modifier mes informations
          </h3>

          <p className='regularText' style={{margin : "var(--regular-margin-top) 0", textAlign : "center"}}>Test d'écriture de text qui doit forcément être très long pour revenir à la ligne donc j'écris beaucoup de choses pour grand chose. Je fais ça pour teste le line height de regular text et le passer en em plutôt qu'en vw</p>


          <input className='largeCardItem regularText strongGreyBorder' style={{marginTop : "var(--large-margin-top)"}} />

          <p className='labelText'>Titre input - label text </p>

          <input className='largeCardItem regularText strongGreyBorder' />

          <p className='largeText'>Titre input - large text </p>

          <input className='largeCardItem regularText strongGreyBorder' />

          <p className='regularText' style={{marginTop : "var(--regular-margin-top)"}}>Titre input - regular text </p>

          <input className='largeCardItem regularText strongGreyBorder' />

        <button className='largeCardItem strongRedBg regularText' onClick={() => setModalVisible(true)}>
          Confirmation
        </button>

        <button className='largeCardItem strongRedBg regularText' style={{marginTop : "var(--medium-margin-top)"}} onClick={() => setModalVisible(true)}>
        Confirmation
      </button>
      </div>

      <div style={{minHeight : 300, width : 200, background : "green", marginTop : "var(--very-large-margin-top"}}/>


    </div>
  );
}

