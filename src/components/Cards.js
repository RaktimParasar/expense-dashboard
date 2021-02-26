const Cards = () => {
  return (
    <div className="cards">
      <section className="cards__container">
        <div className="cards__header">
          <h3 className="cards__header__title">Your cards</h3>
          <p className="cards__info">
            Add new{" "}
            <span>
              <button className="cards__add__button">+</button>
            </span>
          </p>
        </div>
        <div className="visa">
          <div className="visa__card">
            <div>
              <i class="fas fa-euro-sign visa__web__log"></i>
              <i class="fab fa-cc-visa visa__card__logo"></i>
            </div>
            <i class="fas fa-ellipsis-v visa__dot"></i>
          </div>
          <p className="visa__date">04/25</p>
          <div className="visa__card">
            <div className="visa__card__money">
              <p className="visa--background">249.00</p>
              <p className="visa--background currency__left">EUR</p>
            </div>
            <div className="visa__card__money">
              <p className="visa__card__number">...6770</p>
              <i class="far fa-copy"></i>
            </div>
          </div>
        </div>
        <div className="card__detail">
          <div className="card__inline">
            <p className="card__money__bg">4924,42</p>
            <p className="card__money__bg currency__left">USD</p>
          </div>
          <div className="card__inline">
            <p className="card__number">...3481</p>
            <i className="fab fa-cc-mastercard logo__card"></i>
          </div>
        </div>
        <div className="card__detail">
          <div className="card__inline">
            <p className="card__money__bg">820,02</p>
            <p className="card__money__bg currency__left">GBP</p>
          </div>
          <div className="card__inline">
            <p className="card__number">...0420</p>
            <i className="fab fa-cc-visa logo__card"></i>
            <p className="navbar__notification top__div">1</p>
          </div>
        </div>
      </section>
      <section className="limit__container">
        <div className="limit__box">
          <div className="card__inline">
            <i class="fas fa-chart-pie limit__logo"></i>
            <div>
              <h3>Credit limit</h3>
              <p className="limit__num">751/1000 EUR</p>
            </div>
          </div>
          <span>
            <i class="fas fa-chevron-right pd__top"></i>
          </span>
        </div>
        <div className="limit__box mg__top">
          <div className="card__inline">
            <i class="fas fa-chart-pie limit__logo"></i>
            <div>
              <h3>Online limit</h3>
              <p className="limit__num">319/3000 EUR</p>
            </div>
          </div>
          <span>
            <i class="fas fa-chevron-right pd__top"></i>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Cards;
