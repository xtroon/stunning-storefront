export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: 'prod1',
    name: 'Quantum Leap Headphones Pro',
    description: 'Immersive sound with active noise cancellation and ergonomic design. Experience audio like never before.',
    price: 299.99,
    imageUrl: 'https://source.unsplash.com/featured/?futuristic-headphones,premium-audio'
  },
  {
    id: 'prod2',
    name: 'Aura Smartwatch Gen 5',
    description: 'Track your fitness, monitor health, and stay connected with cutting-edge technology on your wrist.',
    price: 199.99,
    imageUrl: 'https://source.unsplash.com/featured/?smartwatch,wearable-tech'
  },
  {
    id: 'prod3',
    name: 'Nebula Portable Projector',
    description: 'Turn any surface into a cinematic display. Compact, powerful, and crystal-clear image quality.',
    price: 349.00,
    imageUrl: 'https://source.unsplash.com/featured/?portable-projector,mini-projector'
  },
  {
    id: 'prod4',
    name: 'Chroma RGB Gaming Keyboard',
    description: 'Responsive mechanical keys with customizable RGB lighting for the ultimate gaming experience.',
    price: 129.99,
    imageUrl: 'https://source.unsplash.com/featured/?gaming-keyboard,rgb-keyboard'
  },
  {
    id: 'prod5',
    name: 'Zenith Wireless Mouse',
    description: 'Precision tracking, ergonomic comfort, and long-lasting battery life for productivity and gaming.',
    price: 79.50,
    imageUrl: 'https://source.unsplash.com/featured/?wireless-mouse,ergonomic-mouse'
  },
  {
    id: 'prod6',
    name: 'Spectra LED Desk Lamp',
    description: 'Smart lighting with adjustable color temperature and brightness. Perfect for any workspace.',
    price: 89.00,
    imageUrl: 'https://source.unsplash.com/featured/?smart-desk-lamp,led-lamp'
  },
  {
    id: 'prod7',
    name: 'Echo Smart Speaker X',
    description: 'Voice-controlled assistant with premium sound. Control your smart home and enjoy music effortlessly.',
    price: 149.99,
    imageUrl: 'https://source.unsplash.com/featured/?smart-speaker,home-audio'
  },
  {
    id: 'prod8',
    name: 'Terra Portable SSD 2TB',
    description: 'Ultra-fast external storage for all your files. Durable and compact design for on-the-go data.',
    price: 219.00,
    imageUrl: 'https://source.unsplash.com/featured/?portable-ssd,external-harddrive'
  },
  {
    id: 'prod9',
    name: 'Vortex Robotic Vacuum',
    description: 'Intelligent cleaning with mapping technology. Keep your home spotless with minimal effort.',
    price: 399.00,
    imageUrl: 'https://source.unsplash.com/featured/?robotic-vacuum,smart-home-device'
  }
];
