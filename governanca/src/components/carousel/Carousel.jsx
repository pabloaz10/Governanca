import PropTypes from 'prop-types';
import './styles.css';

function Carousel({ news }) {
  const handleItemClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="carousel">
      {news.slice(0, 4).map((item, index) => (
        <div
          key={index}
          className="carousel-item"
          onClick={() => handleItemClick(item.link)}
        >
          <img src={item.imagem} alt={item.titulo} className="carousel-image" />
          <h2>{item.titulo}</h2>
          <p>{item.data}</p>
          <button>Leia mais</button>
        </div>
      ))}
    </div>
  );
}

Carousel.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      imagem: PropTypes.string.isRequired,
      titulo: PropTypes.string.isRequired,
      data: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Carousel;