import { Link } from "react-router-dom";
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"

export default function CatalogItem() {
  const items = [
    { title: "Шкаф-купе", img: img1, link: "/catalog" },
    { title: "Шкаф с распашными дверями", img: img2, link: "/catalog" },
    { title: "Кухни", img: img3, link: "/catalog" },
  ];

  return (
    <section className="container py-5">
      <h2 className="h2 fw-bold mb-4" style={{color: "#937A60"}}>Каталог</h2>
      <div className="row g-4">
        {items.map((item, i) => (
          <div key={i} className="col-12 col-md-4">
            <Link to={item.link} className="text-decoration-none">
              <div className="card shadow-sm h-100 position-relative">
                <img src={item.img} alt={item.title} className="card-img" />
                <div className="card-img-overlay d-flex justify-content-center align-items-center bg-dark bg-opacity-50">
                  <h5 className="text-white">{item.title}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
