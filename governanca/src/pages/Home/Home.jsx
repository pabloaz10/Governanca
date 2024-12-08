import './styles.css'
import Menu from '../../components/Menu/Menu';
import Header from '../../components/header/header';
import PropTypes from 'prop-types';
import ButtonStatus from '../../components/button';


Header.propTypes = {
  title: PropTypes.string.isRequired,
};

function Home() {
  return (
    <div>
        <Header />
        <ButtonStatus title="Cancelar" status="cancel" color="red" />
        <Menu />
    </div>
  )
}

export default Home;
