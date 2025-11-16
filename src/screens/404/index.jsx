import { NotFoundContainer } from "./style";
import { FaHouse } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <div className="NotFoundContent">
        <div>
          <img
            src="https://res.cloudinary.com/dyyiewmgy/image/upload/v1763332790/health_av1duh.jpg"
            alt="teste"
          />
        </div>

        <div>
          <div className="NotFound404">
            <span className="titleNotFound">404</span>
            <span className="subTitleNotFound">Página Não Encontrada</span>
            <span className="notFoundText">
              A página que você está procurando não existe ou foi movida.
              Verifique o endereço ou retorne ao sistema de prontuário
              eletrônico.
            </span>
          </div>

          <div className="buttonsContainer">
            <a href="/" className="backHomeButton primary">
              <FaHouse />
              Voltar ao início
            </a>
            <button
              onClick={() => window.history.back()}
              className="backHomeButton secondary"
            >
              <FaArrowLeft />
              Página anterior
            </button>
          </div>

          <div className="supportSection">
            <p className="supportText">
              Precisa de ajuda? Entre em contato com o suporte técnico
            </p>
            <p className="errorCode">
              🔍 Código do erro: 404 - /pagina-inexistente
            </p>
          </div>
        </div>
      </div>
    </NotFoundContainer>
  );
};

export default NotFound;
