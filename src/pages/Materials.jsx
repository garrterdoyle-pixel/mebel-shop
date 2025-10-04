import { useState } from "react";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image4.webp";
import img4 from "../assets/image0.png";
import { useNavigate } from "react-router-dom";

export default function Materials() {
  const [tab, setTab] = useState("materials");
  const navigate = useNavigate();

  const materials = [
    { title: "Лдсп", img: img1 },
    { title: "Стекло", img: img2 },
  ];
  const furnitures = [
    { title: "Ручки", img: img3 },
    { title: "Направляющие", img: img4 },
  ];

  const data = tab === "materials" ? materials : furnitures;

  return (
    <section className="container py-5">
      <button
        onClick={() => navigate(-1)}
        className="btn btn-outline-secondary mb-4"
      >
        ⬅ Назад
      </button>
      <h2 className="h2 fw-bold mb-4 text-center" style={{ color: "#937A60" }}>
        Современные материалы
      </h2>

      <div className="d-flex justify-content-center gap-3 mb-3">
        <button
          onClick={() => setTab("materials")}
          className="btn"
          style={{
            border: "2px solid #937A60",
            color: tab === "materials" ? "#fff" : "#937A60",
            backgroundColor: tab === "materials" ? "#937A60" : "transparent",
            transition: "all 0.3s ease-in-out",
          }}
        >
          Материалы
        </button>

        <button
          onClick={() => setTab("furniture")}
          className="btn"
          style={{
            border: "2px solid #937A60",
            color: tab === "furniture" ? "#fff" : "#937A60",
            backgroundColor: tab === "furniture" ? "#937A60" : "transparent",
            transition: "all 0.3s ease-in-out",
          }}
        >
          Фурнитура
        </button>
      </div>

      <div className="d-flex justify-content-center gap-3 flex-wrap">
        {data.map((item, i) => (
          <div key={i} className="card" style={{ width: "200px" }}>
            <img
              src={item.img}
              alt={item.title}
              className="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body text-center">
              <p className="fw-medium">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4"></div>
    </section>
  );
}
