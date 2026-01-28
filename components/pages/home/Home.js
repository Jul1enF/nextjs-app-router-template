'use client'

import styles from '@/styles/pages/home/Home.module.css';
import ConfirmationModal from '@/components/ui/ConfirmationModal';
import { useState } from 'react';

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <div className="pageContent pageViewport">
      <h2 className="pageTitle">
        What's next ?!
      </h2>

      <h3 className="pageSubtitle">
        Hello, are you there ?!
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

       <button className='largeItem strongRedBg regularText' style={{marginTop : "var(--large-margin-top)"}} onClick={() => setModalVisible(true)}>
        Confirmation
      </button>


      <ConfirmationModal visible={modalVisible} confirmationText={"Êtes vous sûr de vouloir gagner 1 million d'euros ?"} confirmationButtonText={"Oui je suis sûr"} cancelButtonText={"Non je préfère un chocolat"} confirmationFunction={() => setModalVisible(false)} closeModal={() => setModalVisible(false)} />

      {/* <div className='card'>
        <input className='regularItem regularText strongGreyBorder' />

        <button className='regularItem strongRedBg regularText' onClick={() => setModalVisible(true)}>
          Confirmation
        </button>

        <button className='regularItem strongRedBg regularText' style={{marginTop : "var(--medium-margin-top)"}} onClick={() => setModalVisible(true)}>
        Confirmation
      </button>
      </div> */}



      <div className='largeCard' style={{marginTop : 'var(--large-margin-top)'}}>
          <h3 className='pageSubtitle'>
            Modifier mes informations
          </h3>

          <input className='largeCardItem regularText strongGreyBorder' style={{marginTop : "var(--large-margin-top)"}} />

          <input className='largeCardItem regularText strongGreyBorder' style={{marginTop : "var(--medium-margin-top)"}} />

          <input className='largeCardItem regularText strongGreyBorder' style={{marginTop : "var(--medium-margin-top)"}} />

          <input className='largeCardItem regularText strongGreyBorder' style={{marginTop : "var(--medium-margin-top)"}} />

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

