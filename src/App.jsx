import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './App.css';
import { Body, Card, CardContainer, CardImg, LogoContainer, SlideImage, StyledArrow, SlideContainer, Footer, FooterText, PaymentMenu, BackgroundDarken, CloseMenu } from './styles.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCog } from '@fortawesome/free-solid-svg-icons';
import logo from "./images/logo.png"
import img1 from "./images/carousel-img-1.png"
import img2 from "./images/carousel-img-2.png"
import calendar from "./images/calendar.png"
import barCode from "./images/bar-code.png"
import idCard from "./images/id-card.png"
import newspaper from "./images/newspaper.png"
import phone from "./images/phone.png"
import plus from "./images/plus.png"
import BillContainer from "./components/BillContainer"
import BillPayment from "./components/BillPayment"

// AS VARIAÇÕES DO SITE SÃO DEPENDENTES DO JSON ABAIXO
// COMENTE O JSON QUE NÃO DESEJA UTILIZAR E DESCOMENTE O QUE DESEJA USAR
//import data from "./data/data-1.json"
import data from "./data/data-2.json"
// import data from "./data/data-3.json"

function App() {
  const [display, setDisplay] = useState('none');

  function handleClick(){
    if (display === 'none')
      setDisplay('contents')
    else
      setDisplay('none')
  }

  return (
    <div className="App">
      <Body>
        <StyledArrow icon={faArrowLeft} style={{color: "#ffffff",}} size="xl" />

        <SlideContainer>
          <LogoContainer>
            <img src={logo} alt='logo'/>
            <FontAwesomeIcon icon={faCog} style={{color: "#ffffff",}} size="xl" />
          </LogoContainer>
          
          <Swiper style={{width: "342px", height: "156px", zIndex: 0}}
            modules={[Pagination]}
            pagination={true}
            slidesPerView={1}
            setWrapperSize={true}
            spaceBetween={50}
          >
            <SwiperSlide><SlideImage src={img1}/></SwiperSlide>
            <SwiperSlide><SlideImage src={img2}/></SwiperSlide>
          </Swiper>
        </SlideContainer>

        <BillContainer handleClick={handleClick} data={data}/>

        <CardContainer>
          <Card theme="light">
            <CardImg src={calendar}/>
            <p>Agendar Consulta</p>
          </Card>
          <Card theme="light">
            <CardImg src={barCode}/>
            <p>Minhas Faturas</p>
          </Card>
          <Card theme="light">
            <CardImg src={idCard}/>
            <p>Carteirinha Digital</p>
          </Card>
        </CardContainer>
      </Body>

      <Footer>
        <FooterText>Mais Opções</FooterText>

        <CardContainer>
          <Card theme="dark">
            <CardImg src={newspaper}/>
            <p>Notícias do CCG</p>
          </Card>
          <Card theme="dark">
            <CardImg src={phone}/>
            <p>Contatos Importantes</p>
          </Card>
          <Card theme="dark">
            <CardImg src={plus}/>
            <p>Plano Odontológico</p>
          </Card>
        </CardContainer>
      </Footer>

      <div style={{display: display}}>
        <BackgroundDarken>
          <CloseMenu onClick={handleClick}/>
          <PaymentMenu>
            <BillPayment handleClick={handleClick} data={data}/>
          </PaymentMenu>  
        </BackgroundDarken>
      </div>
    </div>
  );
}

export default App;
