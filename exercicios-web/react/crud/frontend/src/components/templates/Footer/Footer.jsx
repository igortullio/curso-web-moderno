import React from 'react';
import './Footer.css';

export default props => (
  <footer className="footer">
    <span>
      Desenvolvido por{' '}
      <strong>
        Igor Tú
        <span className="text-danger" style={{ fontFamily: 'Lobster' }}>
          LL
        </span>
        io
      </strong>
    </span>
  </footer>
);
