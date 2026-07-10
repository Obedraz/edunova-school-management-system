import "./Stats.css";

const stats = [
  {
    number: "2500+",
    title: "Students",
  },
  {
    number: "150+",
    title: "Faculty",
  },
  {
    number: "98%",
    title: "Board Results",
  },
  {
    number: "45+",
    title: "Awards",
  },
  {
    number: "30+",
    title: "Years of Excellence",
  },
];

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats-container">

        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h2>{item.number}</h2>
            <p>{item.title}</p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Stats;