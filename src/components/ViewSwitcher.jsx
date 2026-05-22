import { useState } from 'react';
import '../styles/ViewSwitcher.css';

export default function ViewSwitcher({ currentView, onViewChange }) {
  return (
    <div className="view-switcher">
      <button
        className={`view-btn ${currentView === 'directory' ? 'active' : ''}`}
        onClick={() => onViewChange('directory')}
      >
        <span className="icon">📍</span>
        <span>Directory</span>
      </button>
      <button
        className={`view-btn ${currentView === 'swipe' ? 'active' : ''}`}
        onClick={() => onViewChange('swipe')}
      >
        <span className="icon">🃏</span>
        <span>Swipe</span>
      </button>
    </div>
  );
}
