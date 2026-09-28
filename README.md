# Modern E-commerce Storefront

This project is a premium, responsive e-commerce storefront landing page built with React, Vite, TypeScript, and Tailwind CSS.

## Features

-   **Hero Section**: Prominently displays a new product with a captivating image and call to action.
-   **Featured Products Grid**: Showcases 6 products with images, titles, prices, and interactive "Add to Cart" buttons.
-   **Shopping Cart Slide-over**: A dynamic, accessible side panel that displays selected items, allows quantity adjustments, and calculates the total.
-   **Premium UI**: Utilizes smooth gradients, subtle hover effects, curated color palettes, and excellent typography for a magnificent user experience.
-   **Responsive Design**: Fully adaptable to various screen sizes, from mobile to desktop.
-   **Client-Side Interactions**: All cart functionalities are handled purely on the frontend using React Context for state management.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Ensure you have Node.js (which includes npm) installed on your system.

### Installation

1.  **Clone the repository (if applicable)**:
    ```bash
    git clone <repository_url>
    cd ecommerce-storefront
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

### Running the Project

1.  **Start the development server**:
    ```bash
    npm run dev
    ```

2.  Open your browser and navigate to the address shown in your terminal (e.g., `http://localhost:5173`).

## Project Structure

-   `/src/App.tsx`: The main application component, orchestrating the layout and context providers.
-   `/src/main.tsx`: Entry point for the React application.
-   `/src/index.css`: Global styles, including Tailwind CSS imports and custom CSS variables for theming.
-   `/src/components`: Contains reusable UI components like `Header`, `Footer`, `ProductCard`, `HeroSection`, `FeaturedProducts`, `ShoppingCart`, and `SafeImage`.
-   `/src/context/CartContext.tsx`: Manages the global state for the shopping cart.
-   `/src/data/products.ts`: Mock data for featured products.
-   `/tailwind.config.js`: Tailwind CSS configuration for custom theme, colors, and content.

## Customization

-   **Theming**: Adjust the CSS variables in `src/index.css` to change the application's color scheme.
-   **Products**: Modify `src/data/products.ts` to update product information, add new products, or change images.
-   **Content**: Edit the text and images in `HeroSection.tsx` and other components to fit your brand.

## Technologies Used

-   React 18
-   Vite
-   TypeScript
-   Tailwind CSS 3.4
-   Lucide React (for icons)