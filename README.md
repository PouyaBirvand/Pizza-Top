<div align="center">
  <h1>🍕 Pizza Top</h1>
  
  **Premium Pizza Experience - Order Your Favorite Pizza Online**
  
  [![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
  [![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-1.9.5-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.2-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-4.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  
  [🚀 Live Demo](#) | [📖 Documentation](#) | [🐛 Report Bug](#) | [💡 Request Feature](#)
</div>

---

## 🌟 Features

### 🎯 Core Features
- **🍕 Interactive Pizza Menu** - Browse through our delicious pizza collection with detailed descriptions
- **🛒 Smart Shopping Cart** - Add, remove, and modify your orders with real-time price calculation
- **📱 Fully Responsive Design** - Perfect experience across all devices and screen sizes
- **🌙 Dark/Light Theme Toggle** - Switch between themes for comfortable viewing
- **⚡ Lightning Fast Performance** - Built with Vite for optimal loading speeds

### 🔥 Advanced Features
- **🔄 Advanced State Management** - Powered by Redux Toolkit with feature-based slices
- **🎨 Modern UI/UX** - Beautiful gradient design with Tailwind CSS
- **📍 Order Management System** - Complete order lifecycle from cart to delivery
- **👤 User Profile Management** - Personalized user experience
- **⭐ Review & Rating System** - Customer feedback and rating functionality
- **❓ FAQ Section** - Comprehensive help and support
- **📞 Contact System** - Easy communication with customer support
- **🎭 Smooth Animations** - Enhanced UX with LordIcon animations

---

## 📸 Screenshots

<div align="center">
  
### 🏠 Homepage - Welcome to Pizza Top
<img src="https://s6.uupload.ir/files/capture_8ddd.png" alt="Pizza Top Homepage" width="800"/>

### 🍕 Menu Page - Choose Your Perfect Pizza
<img src="https://s6.uupload.ir/files/2_3n0t.png" alt="Pizza Menu" width="800"/>

### 🛒 Shopping Experience
<img src="https://s6.uupload.ir/files/3_y0ka.png" alt="Shopping Cart" width="400"/> <img src="https://s6.uupload.ir/files/4_rztd.png" alt="Order Process" width="400"/>

</div>

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="25%">

### ⚛️ Frontend Core
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)

</td>
<td align="center" width="25%">

### 🎨 Styling
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=flat&logo=postcss&logoColor=white)
![Autoprefixer](https://img.shields.io/badge/Autoprefixer-DD3735?style=flat&logo=autoprefixer&logoColor=white)

</td>
<td align="center" width="25%">

### 🔄 State Management
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white)
![React Icons](https://img.shields.io/badge/React_Icons-61DAFB?style=flat&logo=react&logoColor=white)

</td>
<td align="center" width="25%">

### 🔧 Development
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=white)

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pizza-top.git
   cd pizza-top
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` and enjoy! 🎉

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | 🚀 Start development server with hot reload |
| `npm run build` | 📦 Build optimized production bundle |
| `npm run preview` | 👀 Preview production build locally |
| `npm run format` | 💅 Format all files with Prettier |
| `npm run format:check` | ✅ Check if files are properly formatted |
| `npm run lint` | 🔍 Run ESLint to find issues |
| `npm run lint:fix` | 🔧 Automatically fix ESLint issues |

---

## 🏗️ Project Structure

```
pizza-top/
├── 📁 public/                    # Static assets
├── 📁 src/
│   ├── 📁 features/              # Feature-based modules
│   │   ├── 📁 about/             # About page functionality
│   │   ├── 📁 cart/              # Shopping cart management
│   │   ├── 📁 contact/           # Contact form & info
│   │   ├── 📁 faq/               # FAQ section
│   │   ├── 📁 menu/              # Pizza menu & catalog
│   │   ├── 📁 order/             # Order processing
│   │   ├── 📁 reviews/           # Customer reviews
│   │   ├── 📁 theme/             # Theme switching
│   │   └── 📁 user/              # User management
│   ├── 📁 providers/             # Context providers
│   ├── 📁 routes/                # Routing configuration
│   ├── 📁 services/              # API services
│   ├── 📁 ui/                    # Reusable UI components
│   │   ├── 📁 components/        # UI components
│   │   ├── 📁 constants/         # UI constants
│   │   └── 📁 hooks/             # Custom hooks
│   ├── 📁 utils/                 # Utility functions
│   ├── 📄 App.jsx                # Main App component
│   ├── 📄 main.jsx               # App entry point
│   ├── 📄 store.js               # Redux store configuration
│   └── 📄 index.css              # Global styles
├── 📄 package.json               # Dependencies & scripts
├── 📄 tailwind.config.js         # Tailwind configuration
├── 📄 vite.config.js             # Vite configuration
├── 📄 postcss.config.js          # PostCSS configuration
├── 📄 prettier.config.cjs        # Prettier configuration
├── 📄 .eslintrc.json             # ESLint configuration
└── 📄 README.md                  # Project documentation
```

---

## 🎨 Design System

### 🎨 Color Palette
- **Primary Gradient**: `from-emerald-50 to-slate-100`
- **Dark Mode Gradient**: `from-slate-900 to-emerald-950`
- **Text Colors**: `slate-800` (light) / `slate-200` (dark)
- **Accent**: Emerald green variations

### 🔤 Typography
- **Font Family**: Quicksand (Google Fonts)
- **Available Weights**: 300, 400, 500, 600, 700
- **Optimized Loading**: Preconnected to Google Fonts

### 🎭 Animations
- **Smooth Transitions**: `transition-all duration-300`
- **Interactive Icons**: LordIcon integration
- **Responsive Animations**: Tailwind CSS transitions

---

## 🏛️ Architecture

### 🔄 State Management
- **Redux Toolkit** for global state
- **Feature-based slices** for modular state management
- **Custom hooks** for component-level state

### 🛣️ Routing
- **React Router DOM** for navigation
- **Nested routing** for complex page structures
- **Protected routes** for user authentication

### 🎯 Component Structure
- **Feature-based organization** for scalability
- **Reusable UI components** in dedicated folder
- **Custom hooks** for logic separation

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Follow the coding standards** (ESLint + Prettier)
4. **Commit your changes** (`git commit -m 'Add amazing feature'`)
5. **Push to the branch** (`git push origin feature/amazing-feature`)
6. **Open a Pull Request**

### 📋 Development Guidelines
- Follow the existing code style
- Run `npm run lint` before committing
- Format code with `npm run format`
- Test your changes thoroughly

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **React Team** for the incredible framework
- **Tailwind Labs** for the utility-first CSS framework
- **Redux Team** for simplified state management
- **Vite Team** for the lightning-fast build tool
- **LordIcon** for beautiful animated icons
- **Google Fonts** for the Quicksand font family

---

<div align="center">
  
### 🍕 Made with ❤️ for Pizza Lovers Everywhere

**Pizza Top** - *Where Every Slice Tells a Story*

---

**⭐ If you like this project, please give it a star! ⭐**

[⬆ Back to Top](#-pizza-top)

</div>
