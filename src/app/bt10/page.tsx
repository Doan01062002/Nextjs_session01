import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MyComponent() {
  return (
    <div>
      <h1>My Font Awesome Icon</h1>
      <FontAwesomeIcon icon="coffee" /> {/* Sử dụng icon coffee */}
      <FontAwesomeIcon icon={['fab', 'twitter']} /> {/* Sử dụng icon Twitter */}
    </div>
  );
}
