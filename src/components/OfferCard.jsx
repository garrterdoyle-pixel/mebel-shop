import { Link, useNavigate } from "react-router-dom";
import img1 from "../assets/imag1.png";
import img2 from "../assets/imag2.png";
import img3 from "../assets/imag3.png";
import img4 from "../assets/imag4.png";
import img5 from "../assets/imag5.png";
import img6 from "../assets/imag6.png";
import { img } from "framer-motion/client";

export default function Offers() {
  const navigate = useNavigate();
  const offers = [
    {
      title: "Шкаф Riviera/1",
      price: "1000р",
      oldPrice: null,
      tag: "Хит продаж",
      img: img1,
    },
    {
      title: "Шкаф Comfort/5",
      price: "900р",
      oldPrice: "1000р",
      tag: "-50%",
      img: img2,
    },
    {
      title: "Шкаф WingLine",
      price: "840р",
      oldPrice: "1200р",
      tag: "-30%",
      img: img3,
    },
    {
      title: "Шкаф Riviera/5",
      price: "80р/мес",
      oldPrice: null,
      tag: "Рассрочка",
      img: img4,
    },
    {
      title: "Шкаф Comfort/3",
      price: "420р",
      oldPrice: "840р",
      tag: "-50%",
      img: img5,
    },
    {
      title: "Шкаф WingLine/8",
      price: "510р",
      oldPrice: "600р",
      tag: "-15%",
      img: img6,
    },
  ];

  return (
    <section className="container py-5">
      <h2 className="h2 fw-bold mb-4" style={{ color: "#937A60" }}>
        Специальные предложения
      </h2>
      <div className="row g-4">
        {offers.map((offer, i) => (
          <div key={i} className="col-12 col-md-4">
            <div className="card shadow-sm h-100">
              <div className="position-relative">
                <img
                  src={offer.img}
                  alt={offer.title}
                  className="card-img-top"
                  style={{ height: "460px", objectFit: "cover" }}
                />
                {offer.tag && (
                  <span className="badge bg-dark position-absolute top-0 start-0 m-2">
                    {offer.tag}
                  </span>
                )}
              </div>
              <div className="card-body text-center">
                <p className="fw-semibold">{offer.title}</p>
                <p>
                  {offer.oldPrice && (
                    <span className="text-decoration-line-through me-2 text-muted">
                      {offer.oldPrice}
                    </span>
                  )}
                  <span className="fw-bold">{offer.price}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-3">
        <Link
          to="/catalog"
          className="btn"
          style={{
            border: "2px solid #937A60",
            color: "#937A60",
            backgroundColor: "transparent",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#937A60";
            e.target.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#937A60";
          }}
        >
          Смотреть ещё
        </Link>
      </div>
    </section>
  );
}
