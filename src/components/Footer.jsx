import { Link } from "react-router-dom";
import map from "../assets/map.png"; // твоя картинка карты

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer style={{ backgroundColor: "#C0AD95", color: "white" }}>
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Левая часть */}
          <div className="col-md-6 d-flex justify-content-between align-items-start mb-4 mb-md-0">
            <h4
              className="fw-bold mb-4"
              style={{ cursor: "pointer" }}
              onClick={scrollToTop}
            >
              MADESHKAF
            </h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/about" className="text-white text-decoration-none">
                  О нас
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/catalog" className="text-white text-decoration-none">
                  Каталог
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/materials"
                  className="text-white text-decoration-none"
                >
                  Материалы
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/prices" className="text-white text-decoration-none">
                  Цены
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/reviews" className="text-white text-decoration-none">
                  Отзывы
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="text-white text-decoration-none"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a
              href="https://yandex.by/maps/" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={map}
                alt="Карта"
                className="img-fluid rounded"
                style={{ maxWidth: "400px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
