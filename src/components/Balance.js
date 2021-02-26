import { Line } from "react-chartjs-2";

const data = {
  labels: ["10-Jan", "15-Feb", "20-Mar", "11-Apr", "9-May", "17-Jun"],
  datasets: [
    {
      data: [6500, 6000, 8000, 8300, 5500, 5100],
      fill: true,
      backgroundColor: "#F3F4F6",
      borderColor: "#8d8d8d",
    },
  ],
};
const options = {
  tooltips: {
    callbacks: {
      labelColor: function (tooltipItem, chart) {
        return {
          borderColor: "#1e3a8a",
          backgroundColor: "#1e3a8a",
        };
      },
      labelTextColor: function (tooltipItem, chart) {
        return "#fbfbfb";
      },
    },
  },
  responsive: true,
  legend: {
    display: false,
  },
  scales: {
    yAxes: [
      {
        stacked: true,
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
  },
};
const Balance = () => {
  return (
    <section>
      <div className="balance__header">
        <div className="card__inline">
          <h1 className="balance__text">Balance Change</h1>
          <p className="balance__desc">this month</p>
        </div>
        <button className="balance__btn">See my stat</button>
      </div>
      <div className="graph">
        <Line data={data} options={options} />
      </div>
    </section>
  );
};

export default Balance;
