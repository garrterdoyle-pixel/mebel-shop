import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Offers() {
  const [type, setType] = useState("Шкаф");
  const [material, setMaterial] = useState("ЛДСП");
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(200);
  const [extra, setExtra] = useState(false);

  const navigate = useNavigate();

  // простой расчет стоимости
  const basePrices = { Шкаф: 500, Кухня: 1200, Комод: 400 };
  const materialCoef = { ЛДСП: 1, МДФ: 1.3, Зеркало: 1.2, Стекло: 1.4 };

  const price = Math.round(
    (basePrices[type] || 500) *
      materialCoef[material] *
      (width / 100) *
      (height / 200) +
      (extra ? 200 : 0)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Ваша заявка отправлена! Стоимость: ${price} BYN`);
    navigate("/");
  };

  return (
    <section className="container py-5">
      <button
        onClick={() => navigate(-1)}
        className="btn btn-outline-secondary mb-4"
      >
        ⬅ Назад
      </button>
      <h2 className="h4 fw-bold mb-4" style={{ color: "#937A60" }}>
        Рассчитать стоимость
      </h2>

      <form onSubmit={handleSubmit} className="p-4 shadow-sm bg-light rounded">
        {/* Тип мебели */}
        <div className="mb-3">
          <label className="form-label">Тип мебели</label>
          <select
            className="form-select"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>Шкаф</option>
            <option>Кухня</option>
            <option>Комод</option>
          </select>
        </div>

        {/* Материал */}
        <div className="mb-3">
          <label className="form-label">Материал</label>
          <select
            className="form-select"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
          >
            <option>ЛДСП</option>
            <option>МДФ</option>
            <option>Зеркало</option>
            <option>Стекло</option>
          </select>
        </div>

        {/* Размеры */}
        <div className="row mb-3">
          <div className="col">
            <label className="form-label">Ширина (см)</label>
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(+e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col">
            <label className="form-label">Высота (см)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(+e.target.value)}
              className="form-control"
            />
          </div>
        </div>

        {/* Доп. опции */}
        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            checked={extra}
            onChange={(e) => setExtra(e.target.checked)}
            id="extra"
          />
          <label className="form-check-label" htmlFor="extra">
            Подсветка (+200 BYN)
          </label>
        </div>

        {/* Итог */}
        <h5 className="fw-bold mb-3">Примерная стоимость: {price} BYN</h5>

        {/* Кнопка */}
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: "#937A60", color: "#fff" }}
        >
          Оставить заявку
        </button>
      </form>
    </section>
  );
}
