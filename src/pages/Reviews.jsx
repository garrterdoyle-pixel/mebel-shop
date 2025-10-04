import { useNavigate } from "react-router-dom";

export default function Reviews() {
  const navigate = useNavigate();
  const reviews = [
    {
      name: "Anna_23",
      text: "Очень довольна заказом! Шкаф сделали быстро и качественно. Все размеры подошли идеально.",
    },
    {
      name: "Igor_Master",
      text: "Отличный сервис! Помогли с выбором материалов, доставка была в срок. Буду заказывать ещё.",
    },
    {
      name: "Maria89",
      text: "Приятно удивлена качеством. Думала, что будет дольше, но установили за один день!",
    },
  ];

  return (
    <section className="container py-5">
      <button
        onClick={() => navigate(-1)}
        className="btn btn-outline-secondary mb-4"
      >
        ⬅ Назад
      </button>
      <h2 className="h4 fw-bold mb-4 text-center" style={{ color: "#937A60" }}>
        Отзывы наших клиентов
      </h2>

      <div className="row g-4">
        {reviews.map((rev, i) => (
          <div key={i} className="col-12 col-md-4">
            <div className="card h-100 shadow-sm border-0 text-center p-3">
              {/* Кружок с ником */}
              <div
                className="rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3"
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#937A60",
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                {rev.name[0].toUpperCase()}
              </div>

              {/* Имя (ник) */}
              <h5 className="fw-bold" style={{ color: "#937A60" }}>
                {rev.name}
              </h5>

              {/* Текст отзыва */}
              <p className="text-muted">{rev.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
