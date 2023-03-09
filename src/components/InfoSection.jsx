import React from 'react';

function InfoSection(props) {
  const { label, icon, value } = props;

  return (

    <div className="info-container" key={label}>
      <img src={icon} alt={label} className="info-icon" />
      <span className="info-label">
        {value}
        <span>{label}</span>
      </span>
    </div>
  );
}

export default InfoSection;
