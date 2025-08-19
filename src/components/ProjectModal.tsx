import React, { useEffect } from 'react';
import './ProjectModal.css';

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  features: string[];
  link: string;
  link2?: string;
  icon: string;
};

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  features,
  link,
  link2,
  icon,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-header">
          <span className="modal-icon">{icon}</span>
          <h2 className="modal-title">{title}</h2>
        </div>
        <p className="modal-description">{description}</p>

        <h3 className="modal-subtitle">주요 기능</h3>
        <ul className="modal-list">
          {features.map((feature, idx) => (
            <li key={idx}>• {feature}</li>
          ))}
        </ul>

        <div className="modal-link">
          🔗 <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
        </div>
        {link2 && (
          <div className="modal-link">
            🔗 <a href={link2} target="_blank" rel="noopener noreferrer">{link2}</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
