import './styles.css'
import Header from '../../components/header/header';
import PropTypes from 'prop-types';
import ButtonStatus from '../../components/button';
import NavBar from '../../components/navbar/navbar';

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

function Home() {
  return (
    <div>
        <Header />
        <ButtonStatus title="Cancelar" status="cancel" color="red" />
        <NavBar />
    </div>
  )
}

export default Home;
