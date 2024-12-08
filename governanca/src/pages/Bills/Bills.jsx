import './styles.css'
import ButtonStatus from '../../components/button';

function Bills() {
  return (
    <>
       <h1>Projetos de leis</h1>
       <div className="bills-container">
       <ButtonStatus title="Cancelar" status="cancel" color="red" />
       </div>
    </>
  )
}

export default Bills;
