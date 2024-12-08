import './styles.css'

const Card = ({ news }) => {
    return (
        <div className="news-container">
            {news.map((item, index) => (
                <div key={index} className="news-card">
                    <img
                        src={item.imagem}
                        alt={item.titulo}
                        className="news-image"
                    />

                    <h2>{item.titulo}</h2>
                    <p>{item.data}</p>

                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer">
                        <button>
                            Leia mais
                        </button>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Card;