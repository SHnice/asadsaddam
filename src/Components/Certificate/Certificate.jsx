import React, { useContext } from 'react'
import style from '../Style/certificate.module.css'
import Context from '../../Context/Context'
import CertificateCard from './CertificateCard'


const certificates = [
  {
    _id: 1,
    title: "Certificate of Excellence in React Development",
    issued_by: "React University",
    certificate_image: "c1.jpg",
    isActive: true,
  },
  {
    _id: 2,
    title: "Advanced JavaScript Certification",
    issued_by: "Code Institute",
    certificate_image: "c2.jpg",
    isActive: true,
  },
  {
    _id: 3,
    title: "Frontend Web Development Masterclass",
    issued_by: "Web Academy",
    certificate_image: "c3.jpg",
    isActive: true,
  },
  {
    _id: 4,
    title: "React Native Professional Certificate",
    issued_by: "Mobile Development Institute",
    certificate_image: "c4.jpg",
    isActive: true,
  },
  {
    _id: 5,
    title: "UI/UX Design Certification",
    issued_by: "Design Studio",
    certificate_image: "c5.jpg",
    isActive: true,
  },
  {
    _id: 6,
    title: "Full Stack Developer Certification",
    issued_by: "Coding Bootcamp",
    certificate_image: "c6.jpg",
    isActive: true,
  }
];


const Certificate = () => {

  const { modeStyle } = useContext(Context)

  return (
    <div className={style.certificateContainer} style={{ color: `${modeStyle.textColor}` }}>
      <h1>
        Our <span className="velvet"><strong>Certificates</strong></span>
      </h1>
      <div className={style.certificateCardContainer}>
        {certificates.map((item) => {
          return (
            <CertificateCard
              key={item._id}
              title={item.title}
              issuedBy={item.issued_by}
              certificateImage={item.certificate_image}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Certificate
