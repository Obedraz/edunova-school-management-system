import "./PrincipalMessage.css";
import principal from "../../assets/images/about/principal.jpg";

const PrincipalMessage = () => {
  return (
    <section className="principal-section">
      <div className="principal-container">
        
        {/* Left Side */}
        <div className="principal-image">
          <img src={principal} alt="Principal" />
        </div>

        {/* Right Side */}
        <div className="principal-content">
          <span className="section-badge">PRINCIPAL'S MESSAGE</span>

          <h2>A Message from Our Principal</h2>

          <p className="principal-quote">
            "Education is not merely about academic excellence; it is about
            nurturing values, confidence, creativity, and leadership in every
            child."
          </p>

          <p>
            At EduNova Public School, our mission is to provide a safe,
            innovative, and inspiring environment where every student can
            discover their strengths and reach their highest potential. We
            believe that true education prepares children not only for
            examinations but also for life.
          </p>

          <p>
            Together with our dedicated teachers and supportive parents, we are
            committed to shaping responsible citizens and future leaders who
            will contribute positively to society.
          </p>

          <h4>Dr.A P J AbdulKalam </h4>

          <span className="principal-designation">
            Principal, EduNova Public School
          </span>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;