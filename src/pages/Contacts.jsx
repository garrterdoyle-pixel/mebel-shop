import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contacts() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("✅ Сообщение успешно отправлено!");
      navigate("/"); 
    }, 1500);
  };

  return (
    <section className="container py-5">
      <h2 className="h4 fw-bold mb-4 text-center" style={{ color: "#937A60" }}>
        Контакты
      </h2>

      <div className="row g-4">
        <div className="col-12 col-md-6">
          <div className="p-4 shadow-sm rounded bg-light h-100">
            <h5 className="fw-bold mb-3" style={{ color: "#937A60" }}>
              Наши данные
            </h5>
            <p>
              <strong>Адрес:</strong> г. Ташкент, р. Алмазар, ул. Сагбан, 29Б
            </p>
            <p>
              <strong>Телефон:</strong>{" "}
              <a href="tel:+375291112233" style={{ color: "#937A60" }}>
                +998 91 009 59 00
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@madeshkaf.by" style={{ color: "#937A60" }}>
                info@madeshkaf.by
              </a>
            </p>
            <p>
              <strong>Время работы:</strong> Пн-Вс 9:00 – 21:00
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="p-4 shadow-sm rounded bg-light h-100">
            <h5 className="fw-bold mb-3" style={{ color: "#937A60" }}>
              Напишите нам
            </h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  placeholder="Ваше сообщение"
                  className="form-control"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn"
                style={{
                  backgroundColor: "#937A60",
                  color: "#fff",
                  transition: "all 0.3s",
                }}
                disabled={loading}
              >
                {loading ? "Отправка..." : "Отправить"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}