import { Link, useNavigate } from "react-router-dom";
import shkaf from "../assets/shkaf.png";
import kuhnya from "../assets/kuhnya.jpg";
import garderob from "../assets/kuhnya.jpg";
import tumba from "../assets/tumba.png";
import komod from "../assets/komod.png";
import zakaz from "../assets/zakaz-kuhnya.png";
import { useState } from "react";

export default function Catalog() {
  const navigate = useNavigate();
  const [sort, setSort] = useState("");
  const [materials, setMaterials] = useState([]);
  const [products] = useState([
    {
      id: 1,
      title: "Шкаф-купе",
      price: "500 USD",
      material: "ЛДСП",
      img: shkaf,
    },
    {
      id: 2,
      title: "Кухня на заказ",
      price: "1200 USD",
      material: "МДФ",
      img: kuhnya,
    },
    {
      id: 3,
      title: "Гардеробная",
      price: "800 USD",
      material: "Зеркало",
      img: kuhnya,
    },
    {
      id: 4,
      title: "Тумба ТВ",
      price: "400 USD",
      material: "Стекло",
      img: tumba,
    },
    {
      id: 5,
      title: "Комод",
      price: "600 USD",
      material: "Фрезировка",
      img: komod,
    },
    {
      id: 6,
      title: "Столешница",
      price: "700 USD",
      material: "ЛДСП",
      img: zakaz,
    },
  ]);

  const Products = [...products]
    .filter((p) => (materials.length ? materials.includes(p.material) : true))
    .sort((a, b) => {
      if (sort === "asc") return a.price - b.price;
      if (sort === "desc") return b.price - a.price;
      return 0;
    });

  const handleMaterialChange = (mat) => {
    setMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    );
  };

  const resetFilters = () => {
    setSort("");
    setMaterials([]);
  };

  return (
    <div className="container py-5">
      <button
        onClick={() => navigate(-1)}
        className="btn btn-outline-secondary mb-4"
      >
        ⬅ Назад
      </button>

      <h2 className="text-center mb-4">Каталог мебели</h2>

      <div className="row g-4">
        {products.map((item) => (
          <div key={item.id} className="col-12 col-sm-6 col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src={item.img}
                alt={item.title}
                className="card-img-top"
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{item.title}</h5>
                <p className="text-muted">{item.price}</p>
                <Link to="/offers" className="btn btn-dark">
                  Заказать
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
