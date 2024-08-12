import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import CSS để tránh FOUC (Flash of Unstyled Content)

config.autoAddCss = false; // Ngăn Font Awesome tự động thêm CSS

// Thêm các icon bạn muốn sử dụng vào library
library.add(faCheckSquare, faCoffee, faTwitter);
