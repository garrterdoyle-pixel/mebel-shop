import { useLocation, useNavigate } from "react-router-dom";

export default function DiscountPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isValid, phone } = location.state || {};

  if (isValid === undefined) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <h2>⚠ Нет данных</h2>
        <button className="btn btn-dark mt-3" onClick={() => navigate("/")}>
          Вернуться на главную
        </button>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      {isValid ? (
        <>
          <h2 className="text-success">✅ Принято!</h2>
          <p>Мы скоро свяжемся с вами по номеру {phone}</p>
        </>
      ) : (
        <>
          <h2 className="text-danger">❌ Ошибка</h2>
          <p>Неверный номер телефона: {phone}</p>
        </>
      )}

      <button className="btn btn-dark mt-3" onClick={() => navigate("/")}>
        На главную
      </button>
    </div>
  );
}
