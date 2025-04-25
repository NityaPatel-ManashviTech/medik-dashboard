
import "../styles/DoctosSection.css";

interface DoctorProps {
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  image: string;
}

const DoctorCard: React.FC<DoctorProps> = ({ name, specialty, rating, reviews, image }) => {
  return (
    <div className="doctor-card">
      <div className="doctor-avatar">
        <img src={image} alt={name} />
      </div>

      <div className="doctor-info">
        <div className="doctor-name">{name}</div>
        <div className="doctor-specialty">{specialty}</div>

        <div className="doctor-rating">
          <div className="rating-info">
            <span className="star">★</span>
            <span>{rating.toFixed(1)}</span>
            <span className="reviews">• {reviews}+ Reviews</span>
          </div>
          <div className="doctor-arrow">→</div>
        </div>
      </div>
    </div>
  );
};

const DoctorSection: React.FC = () => {
  const doctors = [
    {
      name: 'Dr. Darlene Robertson',
      specialty: 'Dental Specialist',
      rating: 5.0,
      reviews: 50,
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Dr. Darrell Steward',
      specialty: 'Heart Specialist',
      rating: 4.9,
      reviews: 50,
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Dr. Cameron Williamson',
      specialty: 'Dental Specialist',
      rating: 5.0,
      reviews: 80,
      image: 'https://randomuser.me/api/portraits/men/33.jpg',
    },
    {
      name: 'Dr. Darlene Robertson',
      specialty: 'Dental Specialist',
      rating: 5.0,
      reviews: 80,
      image: 'https://randomuser.me/api/portraits/men/37.jpg',
    },
  ];

  return (
    <div className="doctor-section">
      <div className="section-header">
        <h2>Top Doctors</h2>
        <a href="#" className="view-all">
          View all →
        </a>
      </div>
      <div className="doctor-cards">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} {...doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorSection;
