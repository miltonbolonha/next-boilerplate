import React from "react";

import Row from "../containers/RowContainer";
import MainWrapperContainer from "../containers/MainWrapperContainer";

const Contato = () => (
  <MainWrapperContainer rowWidth={960}>
    <h2>Início: Contato</h2>
    <div className='wrapper-box'>
      <Row opt={{ isBoxed: true }}>
        <div className='hero-txt'>
          <h1>Fale com a gente</h1>
          <h2>Especialista em Tecnologia e Marketing</h2>
          <p>Milton Bolonha desenvolve sites desde 1998.</p>
          <p>
            Como especialista faz a curadoria e implementação sustentável de
            códigos e de tecnologias.
          </p>
        </div>
        <ul>
          <li>um</li>
          <li>dois</li>
          <li>tres</li>
          <li>quatro</li>
          <li>cinco</li>
        </ul>
      </Row>
    </div>
  </MainWrapperContainer>
);
export default Contato;
