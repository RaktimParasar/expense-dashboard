const Recent = () => {
  return (
    <section className="recent">
      <div className="balance__header">
        <h1 className="balance__text">Recent activity</h1>
        <button className="balance__btn">Show all</button>
      </div>
      <h3 className="today">Today</h3>
      <article className="recent">
        <div className="balance__header">
          <div className="balance__header">
            <i class="far fa-share-square activity__icon"></i>
            <div className="activity__left">
              <h3>To Martin Mitchel</h3>
              <p>Sending</p>
            </div>
          </div>
          <p className="activity__amount">-120,24 EUR</p>
        </div>
        <div className="balance__header graph">
          <div className="balance__header">
            <i class="fas fa-download activity__icon"></i>
            <div className="activity__left">
              <h3>From Leo Stern</h3>
              <p>Receiving</p>
            </div>
          </div>
          <p className="activity__amount">+220,24 EUR</p>
        </div>
        <div className="balance__header graph">
          <div className="balance__header">
            <i class="fas fa-mug-hot activity__icon"></i>
            <div className="activity__left">
              <h3>Starbucks</h3>
              <p>Cafe & Resturants</p>
            </div>
          </div>
          <p className="activity__amount">-6,24 EUR</p>
        </div>
      </article>
    </section>
  );
};

export default Recent;
