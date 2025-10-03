# 🛒 Shopping Cart App

A modern, responsive shopping cart application built with React, Redux Toolkit, and Tailwind CSS. Browse products, add them to your cart, and manage your purchases seamlessly! 🚀

## ✨ Features

- 🏠 **Home Page**: Browse a wide variety of products fetched from the Fake Store API.
- 🛍️ **Product Display**: View product details including title, description, image, and price.
- ➕➖ **Add/Remove Items**: Easily add items to your cart or remove them with a single click.
- 🛒 **Cart Management**: View all cart items with detailed information and total amount.
- 🧮 **Cart Summary**: See the total number of items and total price in your cart.
- 💳 **Checkout**: Proceed to checkout with a dedicated button (checkout functionality can be extended).
- 🔔 **Notifications**: Get toast notifications for adding or removing items.
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- 🎨 **Modern UI**: Styled with Tailwind CSS for a clean and attractive interface.
- 🔄 **Loading Spinner**: Smooth loading experience while fetching data.

## 🛠️ Tech Stack

- **Frontend**: React ⚛️
- **State Management**: Redux Toolkit 🧠
- **Styling**: Tailwind CSS 🎨
- **Routing**: React Router DOM 🛣️
- **Notifications**: React Hot Toast 🍞
- **Icons**: React Icons 🎯
- **Build Tool**: Vite ⚡
- **API**: Fake Store API 🛍️

## 🚀 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/shopping-cart-app.git
   cd shopping-cart-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173` (or the port shown in the terminal).

## 📖 Usage

- **Browse Products**: Visit the home page to see all available products.
- **Add to Cart**: Click the "Add To Cart" button on any product card.
- **View Cart**: Click the cart icon in the navbar to view your cart items.
- **Remove Items**: Use the "Remove Item" button on product cards or the delete icon in the cart.
- **Checkout**: Click "Checkout Now" to proceed (extend this feature as needed).

## 📁 Project Structure

```
src/
├── components/
│   ├── CartItem.jsx       # Individual cart item component
│   ├── Navbar.jsx         # Navigation bar
│   ├── Product.jsx        # Product card component
│   ├── Spinner.jsx        # Loading spinner
│   └── Spinner.css        # Spinner styles
├── pages/
│   ├── Cart.jsx           # Cart page
│   └── Home.jsx           # Home page
├── slices/
│   ├── cartSlice.js       # Redux slice for cart state
│   └── store.js           # Redux store configuration
├── App.jsx                # Main app component
├── index.css              # Global styles
└── main.jsx               # App entry point
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 📝

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for providing the product data 🛍️
- [Tailwind CSS](https://tailwindcss.com/) for the awesome styling framework 🎨
- [Redux Toolkit](https://redux-toolkit.js.org/) for simplified state management 🧠

---

Made with ❤️ by [Your Name]
