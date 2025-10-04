import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar3, CashStack, Gift, Star, Box } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import CatalogItem from "./CatalogItem";
import Materials from "../pages/Materials";
import Offers from "./OfferCard";
export default function Header() {
  const [time, setTime] = useState(30 * 60);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (!phone) return;
  //     setLoading(true);
  //     setTimeout(() => {
  //       setLoading(false);
  //       alert("Скидка применена!");
  //     }, 1500);
  //   };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Скидка отправлена!");
      const isValid = /^\+375\d{9}$/.test(phone);
      navigate("/discount", { state: { isValid, phone } });
    }, 1500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(time / (60 * 60 * 24));
  const hours = Math.floor((time % (60 * 60 * 24)) / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-100 min-vh-100 bg-white">
      {" "}
      <header
        className="bg-dark text-white d-flex flex-column justify-content-center align-items-center"
        style={{ height: "600px", backgroundColor: "#C0AD95" }}
      >
        {" "}
        <div className="position-absolute top-0 start-0 w-100 d-flex justify-content-between p-3 small">
          <h4
            className="fw-bold mb-4"
            style={{ cursor: "pointer", color: "#C0AD95" }}
            onClick={scrollToTop}
          >
            MADESHKAF
          </h4>{" "}
          <nav className="d-flex gap-3">
            {" "}
            <a
              href="#about"
              style={{ color: "#C0AD95" }}
              className="link-light text-decoration-none"
            >
              О нас
            </a>{" "}
            <Link to="/catalog" className="link-light text-decoration-none">
              Каталог
            </Link>
            <Link to="/materials" className="link-light text-decoration-none">
              Материалы
            </Link>
            <Link to="/offers" className="link-light text-decoration-none">
              Рассчитать стоимость
            </Link>
            <Link to="/reviews" className="link-light text-decoration-none">
              Отзывы
            </Link>
            <Link to="/contacts" className="link-light text-decoration-none">
              Контакты
            </Link>
          </nav>{" "}
          <div
            className="text-end"
            style={{ cursor: "pointer", color: "#C0AD95" }}
          >
            {" "}
            <p className="fw-bold mb-0">+998910095900</p>{" "}
            <p className="mb-0 text-white-50 small">Пн-Вс 9:00-21:00</p>{" "}
          </div>{" "}
        </div>{" "}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-75"
          style={{ cursor: "pointer", color: "#C0AD95" }}
        >
          {" "}
          <h1 className="display-4 fw-bold mb-3">Шкафы на заказ</h1>{" "}
          <p className="mb-4">
            По заявке с сайта скидка 10% каждому покупателю
          </p>{" "}
          <p style={{ color: "white" }}>
            До конца скидки осталось:{days} д {hours} ч {minutes} м {seconds} с
          </p>
          <form
            onSubmit={handleSubmit}
            className="d-flex justify-content-center gap-2"
          >
            <input
              type="text"
              placeholder="Введите номер телефона"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`form-control w-50 ${
                phone && !/^\+998\d{9}$/.test(phone) ? "is-invalid" : ""
              } ${/^\+998\d{9}$/.test(phone) ? "is-valid" : ""}`}
            />
            <button
              type="submit"
              className="btn btn-light"
              disabled={loading || !/^\+998\d{9}$/.test(phone)}
            >
              {loading ? "Загрузка..." : "Получить скидку"}
            </button>
          </form>
        </motion.div>{" "}
      </header>{" "}
      {/* Cost Section */}{" "}
      <motion.section
        id="cost"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className=" d-flex ml-5 container py-5 text-center"
      >
        {" "}
        <div
          className="d-flex flex-column justify-content-center align-items-center text-align-center mx-auto"
          style={{ marginTop: "50px" }}
        >
          <h2 className="h2 fw-semibold mb-3">Узнайте стоимость мебели</h2>
          <p className="mb-4" style={{ color: "#937A60" }}>
            Ответь на вопросы, получи скидку и бесплатный дизайн проект
          </p>
          <button
            onClick={() => navigate("/quiz")}
            className="btn btn-outline-dark px-3 py-1"
            style={{
              border: "2px solid #937A60",
              color: "#937A60",
              backgroundColor: "transparent",
              fontSize: "18px",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#937A60";
              e.target.style.color = "#fff";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#937A60";
              e.target.style.transform = "scale(1)";
            }}
          >
            Пройти тест
          </button>
        </div>
      </motion.section>{" "}
      <section id="about" className="bg-light py-5">
        {" "}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container text-center"
        >
          {" "}
          <h3 className="h4 fw-bold mb-4" style={{ color: "#937A60" }}>
            О нас
          </h3>{" "}
          <p className="mb-5 text-secondary">
            {" "}
            Мы рады видеть вас на нашем сайте, здесь представлены примеры наших
            работ и мебели, которую мы можем изготовить, в том числе по вашим
            индивидуальным запросам. Мы поможем сделать ваш интерьер комфортным,
            функциональным и привлекательным. В производстве мебели мы
            используем лучшие материалы и современное оборудование, чтобы
            создать по-настоящему красивую, удобную и качественную мебель.{" "}
          </p>{" "}
          <h4 className="h5 fw-semibold mb-4" style={{ color: "#937A60" }}>
            Почему более 14 лет клиенты выбирают нас:
          </h4>{" "}
          <div className="row g-4">
            {" "}
            <div className="col-6 col-md-4">
              {" "}
              <div className="card shadow-sm p-3 h-100">
                {" "}
                <Calendar3
                  style={{ color: "#937A60" }}
                  size={30}
                  className="mb-2"
                />{" "}
                <p className="fw-medium">Рассрочка</p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-6 col-md-4">
              {" "}
              <div className="card shadow-sm p-3 h-100">
                {" "}
                <CashStack
                  style={{ color: "#937A60" }}
                  size={30}
                  className="mb-2"
                />{" "}
                <p className="fw-medium">Заводские цены</p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-6 col-md-4">
              {" "}
              <div className="card shadow-sm p-3 h-100">
                {" "}
                <Gift
                  style={{ color: "#937A60" }}
                  size={30}
                  className="mb-2"
                />{" "}
                <p className="fw-medium">Акции, скидки, бонусы</p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-6 col-md-4">
              {" "}
              <div className="card shadow-sm p-3 h-100">
                {" "}
                <Star
                  style={{ color: "#937A60" }}
                  size={30}
                  className="mb-2"
                />{" "}
                <p className="fw-medium">Европейское качество</p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-6 col-md-4">
              {" "}
              <div className="card shadow-sm p-3 h-100">
                {" "}
                <Box
                  style={{ color: "#937A60" }}
                  size={30}
                  className="mb-2"
                />{" "}
                <p className="fw-medium">Бесплатная 3D визуализация</p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-6 col-md-4">
              {" "}
              <div className="card shadow-sm p-3 h-100">
                {" "}
                <Box
                  style={{ color: "#937A60" }}
                  size={30}
                  className="mb-2"
                />{" "}
                <p className="fw-medium">Оперативные сроки</p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </motion.div>{" "}
      </section>{" "}
      <CatalogItem />
      <Materials />
      <Offers />
    </div>
  );
}
