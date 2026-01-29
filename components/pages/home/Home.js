'use client'

import styles from '@/styles/pages/home/Home.module.css';
import ConfirmationModal from '@/components/ui/ConfirmationModal';
import { useState } from 'react';
import useWindowDimensions from '@/hooks/useWindowDimensions';

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false)
const {vw, vh } = useWindowDimensions()
  return (
    <div className="pageContent pageViewport">
      <h2 className="pageTitle">
        Welcome home !!!
      </h2>

      <h3 className="pageSubtitle mt-medium">
        Hello !!!
      </h3>

      <button className='regularItem strongRedBg regularText mt-large' onClick={() => setModalVisible(true)}>
        Confirmation
      </button>

      <button className='largeItem strongRedBg regularText mt-medium' onClick={() => setModalVisible(true)}>
        Confirmation - regular text
      </button>

       <button className='largeItem strongRedBg largeText mt-large' onClick={() => setModalVisible(true)}>
        Confirmation - large text
      </button>


      <ConfirmationModal visible={modalVisible} confirmationText={"Êtes vous sûr de vouloir gagner 1 million d'euros ?"} confirmationButtonText={"Oui je suis sûr"} cancelButtonText={"Non je préfère un chocolat"} confirmationFunction={() => setModalVisible(false)} closeModal={() => setModalVisible(false)} />



      <div className='largeCard'>
          <h3 className='pageSubtitle'>
            Modifier mes informations
          </h3>

          <p className='labelText mt-large'>Titre input - label text </p>

          <input className='largeCardItem regularText strongGreyBorder' />

          <p className='largeText mt-medium'>Titre input - large text </p>

          <input className='largeCardItem regularText strongGreyBorder' />

          <p className='regularText mt-medium'>Titre input - regular text </p>

          <input className='largeCardItem regularText strongGreyBorder' />

        <button className='largeCardItem strongRedBg regularText' onClick={() => setModalVisible(true)}>
          Confirmation
        </button>

      </div>


    </div>
  );
}

