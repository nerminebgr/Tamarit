import './App1.css';
import styled from 'styled-components';
import Side from './side';
import { Calendar, DirectboxDefault, Notification } from 'iconsax-react';
import Search from './search';
import dayjs from 'dayjs';
import Footer from './footer';
import Tab from './tab';
import Card from './card';
import '@smastrom/react-rating/style.css'
import Chart from './charts';
import CalendarItem from './calendar';
const Header = styled.div`
  display: flex;
  height: 40px;
  justify-content: flex-end;
  padding: 15px;
  gap: 15px;
`
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;

`


const SideBar = styled.div`
  width: 250px;
  display: flex;
`

const Section = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`
const Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    color: var(--primary);
`
const SubTitle = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: var(--primary);
`
const Date = styled.div`
    font-size: 16px;
    color: var(--black);
    font-weight: 600;
    gap: 5px;
    display: flex;
`

function EmployeProfile() {
  return (
    <div className="App1">
      <Container>
        <SideBar>
          <Side />
        </SideBar>
        <Section>
          <Header>
            <DirectboxDefault color='var(--black)' />
          </Header>
          <Row>
            <Title>Statistique</Title>
            <Date><Calendar color='var(--black)' size={20} />{dayjs().format("DD MMM YYYY")}</Date>
            <Search />
          </Row>
          <Row>
            <SubTitle>Nombre visiteurs</SubTitle>
            <Tab />
          </Row>
          <Row style={{ height: 400 }}>
            <Chart />
          </Row>
          <Row>
            <SubTitle>Detailles</SubTitle>
          </Row>
          <Row>
            <Card image="image.png" title="Jardin d'essai du Hamma" text="Just a random description that should be limited by a certain letter count, so i’mma  keep on typing these random words to show the full extent of a simple description (just a few more)." review="3.91k Reviews" rate={3} />
            <CalendarItem />
          </Row>
        </Section>
      </Container>
      <Footer />
    </div>
  );
}

export default EmployeProfile;
