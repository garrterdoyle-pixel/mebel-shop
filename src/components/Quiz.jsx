import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const [step, setStep] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone) {
      alert("Введите номер телефона!");
      return;
    }
    alert("Ваша скидка успешно добавлена ✅");
    navigate("/"); // редирект на главную
  };

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  return (
    <div className="container py-5">
      <button
        onClick={() => navigate(-1)}
        className="btn btn-outline-secondary mb-4"
      >
        ⬅ Назад
      </button>
      {step === 1 && (
        <div className="card p-4">
          <h3>Какой тип шкафа вам нужен?</h3>
          <div className="d-flex gap-3">
            <button
              className="btn btn-outline-secondary"
              onClick={() => setDiscount(5)}
            >
              Корпусный шкаф
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => setDiscount(10)}
            >
              Встроенный шкаф
            </button>
          </div>
          <div className="mt-3">Ваша скидка: {discount}р</div>
          <div className="d-flex justify-content-end mt-3">
            <button className="btn btn-primary" onClick={nextStep}>
              Далее
            </button>
          </div>
        </div>
      )}

      {/* === Шаг 2 === */}
      {step === 2 && (
        <div className="card p-4">
          <h3>Знаете ли вы размеры шкафа-купе?</h3>
          <div>
            <button
              className="btn btn-outline-secondary d-block mb-2"
              onClick={() => setDiscount(15)}
            >
              Знаю, могу сообщить
            </button>
            <button
              className="btn btn-outline-secondary d-block mb-2"
              onClick={() => setDiscount(20)}
            >
              Знаю, могу прислать эскиз
            </button>
            <button
              className="btn btn-outline-secondary d-block"
              onClick={() => setDiscount(10)}
            >
              Не знаю, нужны замеры
            </button>
          </div>
          <div className="mt-3">Ваша скидка: {discount}р</div>
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-secondary" onClick={prevStep}>
              Назад
            </button>
            <button className="btn btn-primary" onClick={nextStep}>
              Далее
            </button>
          </div>
        </div>
      )}

      {/* === Шаг 3 === */}
      {step === 3 && (
        <div className="card p-4">
          <h3>Сколько отделений хотите в шкафу?</h3>
          <div>
            <button
              className="btn btn-outline-secondary d-block mb-2"
              onClick={() => setDiscount(25)}
            >
              1 отделение
            </button>
            <button
              className="btn btn-outline-secondary d-block mb-2"
              onClick={() => setDiscount(30)}
            >
              2 отделения
            </button>
            <button
              className="btn btn-outline-secondary d-block mb-2"
              onClick={() => setDiscount(35)}
            >
              3 отделения
            </button>
            <button
              className="btn btn-outline-secondary d-block"
              onClick={() => setDiscount(15)}
            >
              Пока не знаю
            </button>
          </div>
          <div className="mt-3">Ваша скидка: {discount}р</div>
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-secondary" onClick={prevStep}>
              Назад
            </button>
            <button className="btn btn-success" onClick={nextStep}>
              Далее
            </button>
          </div>
        </div>
      )}

      {/* === Шаг 4 === */}
      {step === 4 && (
        <div className="card p-4 text-center">
          <h3>Ваша скидка составила: {discount}р</h3>
          <p>Введите номер телефона, чтобы мы могли связаться с вами:</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="+998 XX XXX-XX-XX"
              className="form-control mb-3"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit" className="btn btn-success">
              Получить скидку
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
