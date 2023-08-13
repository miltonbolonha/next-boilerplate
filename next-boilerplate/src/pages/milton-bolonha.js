import React from "react";
import Row from "../containers/RowContainer";
import Image from "next/image";
import MainWrapperContainer from "../containers/MainWrapperContainer";

const MiltonBolonha = () => (
  <MainWrapperContainer rowWidth={960}>
    <h2>Página: Milton Bolonha</h2>
    <div className='wrapper-box'>
      <Row opt={{ isBoxed: true }}>
        <div className='hero-txt'>
          <h1>Milton Bolonha</h1>
          <h2>Especialista em Tecnologia e Marketing</h2>
          <p>Milton Bolonha desenvolve sites desde 1998.</p>
          <p>
            Como especialista faz a curadoria e implementação sustentável de
            códigos e de tecnologias.
          </p>
          <div className='hero-img'>
            <Image
              src={"/brandimages/laptop-reading.png"}
              alt={"Maskot Reading"}
              placeholder={"NONE"}
              critical='true'
              className={""}
              width={300}
              height={300}
            />
          </div>
          <p>
            Atua como gerente de tecnologia com proeficiência no governo de
            dados
            <br />e a otimização do alcance publicitário.
          </p>
          <p>
            Direciona investimentos e toma decisões estratégicas em marketing,
            publicidade e branding,
            <br />
            que trarão resultados para a empresa em médio e longo prazo.
          </p>
        </div>
      </Row>

      <Row
        opt={{
          numColumns: 2,
          isBoxed: true,
          classes: "hero-txt contact-wrapper",
        }}
      >
        <Image
          src={"/brandimages/envelope-greeting.png"}
          alt={"Maskot Contact"}
          placeholder={"NONE"}
          critical='true'
          className={""}
          width={300}
          height={300}
        />
        <div id='contato' className='contact-info'>
          <h2>Contato</h2>
          <p>
            Fale com a gente por meio do e-mail:{" "}
            <strong>miltonbolonha@gmail.com</strong>
          </p>
        </div>
      </Row>
    </div>
  </MainWrapperContainer>
);

export default MiltonBolonha;
