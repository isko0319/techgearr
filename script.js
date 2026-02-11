// ==================== Product Data with Images ====================
let products = [
    {
        id: 1,
        name: 'Premium Wireless Headphones',
        category: 'headphones',
        price: 199.99,
        original_price: 299.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop'
        ],
        rating: 4.8,
        reviews: 245,
        description: 'Experience premium sound quality with active noise cancellation. Features 30-hour battery life, premium leather ear cushions, and Bluetooth 5.0 connectivity. Perfect for professionals and music enthusiasts.',
        badge: 'Best Seller',
        featured: true
    },
    {
        id: 2,
        name: 'Mechanical Gaming Keyboard',
        category: 'keyboards',
        price: 149.99,
        original_price: 199.99,
        image: 'https://images.unsplash.com/photo-1587829191301-51f611abb72e?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1587829191301-51f611abb72e?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1595225476942-5bdf61db3635?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1595225476942-5bdf61db3635?w=800&h=800&fit=crop'
        ],
        rating: 4.6,
        reviews: 189,
        description: 'RGB backlit mechanical keyboard with custom Cherry MX switches. Includes programmable macro keys, USB-C connection, and aluminum construction for durability and style.',
        badge: 'New',
        featured: true
    },
    {
        id: 3,
        name: 'Precision Gaming Mouse',
        category: 'mice',
        price: 79.99,
        original_price: 119.99,
        image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&h=800&fit=crop'
        ],
        rating: 4.7,
        reviews: 312,
        description: '16000 DPI sensor with adjustable polling rate. Ergonomic design fits right hand perfectly. 8 programmable buttons for competitive gaming with lightweight honeycomb shell.',
        badge: 'Hot Deal',
        featured: true
    },
    {
        id: 4,
        name: 'Fast Charging USB-C Cable',
        category: 'cables',
        price: 14.99,
        original_price: 24.99,
        image: 'https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1616391433367-4b5f61f0dd05?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=800&h=800&fit=crop'
        ],
        rating: 4.5,
        reviews: 567,
        description: '2-meter braided nylon cable supports up to 60W Power Delivery. Reinforced connectors ensure durability. Works with all USB-C devices including smartphones, tablets, and laptops.',
        badge: null,
        featured: false
    },
    {
        id: 5,
        name: 'Multi-Device Charger',
        category: 'chargers',
        price: 89.99,
        original_price: 129.99,
        image: 'https://images.unsplash.com/photo-1609654378099-36e107a38c91?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1609654378099-36e107a38c91?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1609654378099-36e107a38c91?w=800&h=800&fit=crop'
        ],
        rating: 4.7,
        reviews: 156,
        description: 'Charge 4 devices simultaneously with intelligent charging technology. Supports up to 100W total output. Compact design perfect for travel. Works with all major device types.',
        badge: 'Top Rated',
        featured: true
    },
    {
        id: 6,
        name: 'Tempered Glass Screen Protector',
        category: 'phone-accessories',
        price: 12.99,
        original_price: 19.99,
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1606933248051-5ce98adc68d1?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=800&fit=crop'
        ],
        rating: 4.4,
        reviews: 423,
        description: 'Ultra-clear 9H hardness tempered glass. Anti-fingerprint coating. Fits all standard smartphone sizes. Easy on-screen installation guide included. Protects without affecting touch sensitivity.',
        badge: null,
        featured: false
    },
    {
        id: 7,
        name: 'Wireless Charging Pad',
        category: 'chargers',
        price: 34.99,
        original_price: 49.99,
        image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=800&h=800&fit=crop'
        ],
        rating: 4.6,
        reviews: 234,
        description: 'Fast wireless charging up to 15W. LED indicator shows charging status. Non-slip surface keeps devices secure. Works with all Qi-enabled devices including iPhones and Android phones.',
        badge: 'Sale',
        featured: false
    },
    {
        id: 8,
        name: 'Phone Cooling Fan',
        category: 'phone-accessories',
        price: 29.99,
        original_price: 44.99,
        image: 'https://images.unsplash.com/photo-1535303511164-c86b8e391ca0?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1535303511164-c86b8e391ca0?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1616391433367-4b5f61f0dd05?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1535303511164-c86b8e391ca0?w=800&h=800&fit=crop'
        ],
        rating: 4.5,
        reviews: 178,
        description: 'Portable cooler with adjustable fan speed. Reduces phone temperature by up to 10°C. Perfect for gaming and video recording. USB-C powered with whisper-quiet operation.',
        badge: 'New',
        featured: false
    },
    {
        id: 9,
        name: 'Premium HDMI Cable 2.1',
        category: 'cables',
        price: 24.99,
        original_price: 39.99,
        image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1616391433367-4b5f61f0dd05?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&h=800&fit=crop'
        ],
        rating: 4.7,
        reviews: 289,
        description: '8K resolution support at 60Hz. 3-meter length with gold-plated connectors. High bandwidth for gaming and 4K video streaming. Durable braided outer covering.',
        badge: null,
        featured: false
    },
    {
        id: 10,
        name: 'Portable Bluetooth Speaker',
        category: 'headphones',
        price: 59.99,
        original_price: 89.99,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=800&fit=crop'
        ],
        rating: 4.6,
        reviews: 412,
        description: 'Waterproof IPX7 rated speaker with 12-hour battery. 360° sound with powerful bass. Compact and lightweight design. Perfect for outdoor adventures and travel.',
        badge: 'Hot Deal',
        featured: false
    },
    {
        id: 11,
        name: 'Desk Lamp with USB',
        category: 'monitors',
        price: 44.99,
        original_price: 69.99,
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1565636192335-14eed43e9b84?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=800&h=800&fit=crop'
        ],
        rating: 4.5,
        reviews: 198,
        description: 'Adjustable brightness and color temperature for reduced eye strain. USB charging port on base. Touch-controlled dimmer switch. Perfect for work and reading.',
        badge: null,
        featured: false
    },
    {
        id: 12,
        name: 'Cable Organizer Kit',
        category: 'cables',
        price: 19.99,
        original_price: 34.99,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
        rating: 4.4,
        reviews: 267,
        description: '5-piece cable management set with velcro cable ties and clips. Keep your desk organized and cables tangle-free. Reusable and adjustable for different cable sizes.',
        badge: 'Best Seller',
        featured: false
    },
    {
        id: 13,
        name: '4K Webcam',
        category: 'monitors',
        price: 129.99,
        original_price: 179.99,
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop',
        rating: 4.7,
        reviews: 234,
        description: '4K resolution at 30fps for crystal-clear video calls. Auto-focus lens with wide 90° field of view. Built-in noise-canceling microphone. USB plug-and-play.',
        badge: 'New',
        featured: true
    },
    {
        id: 14,
        name: 'Ergonomic Mouse Pad',
        category: 'mice',
        price: 39.99,
        original_price: 59.99,
        image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop',
        rating: 4.6,
        reviews: 156,
        description: 'Extra-large surface with ergonomic wrist rest. Memory foam provides comfort during long gaming sessions. Non-slip base prevents movement. Waterproof design.',
        badge: null,
        featured: false
    },
    {
        id: 15,
        name: 'USB Hub 7-Port',
        category: 'connectivity',
        price: 34.99,
        original_price: 54.99,
        image: 'https://images.unsplash.com/photo-1609654378099-36e107a38c91?w=500&h=500&fit=crop',
        rating: 4.5,
        reviews: 312,
        description: 'Expand your connectivity with 7 USB 3.0 ports. Independent power switches for each port. LED indicators show power status. Supports up to 5Gbps transfer speed.',
        badge: 'Hot Deal',
        featured: false
    },
    {
        id: 16,
        name: 'Laptop Stand Aluminum',
        category: 'monitors',
        price: 49.99,
        original_price: 79.99,
        image: 'https://images.unsplash.com/photo-1588278200966-b30d75ba8e4a?w=500&h=500&fit=crop',
        rating: 4.7,
        reviews: 289,
        description: 'Premium aluminum construction for durability. Adjustable height and angle for ergonomic viewing. Supports laptops up to 17 inches. Portable and foldable design.',
        badge: 'Best Seller',
        featured: true
    },
    {
        id: 17,
        name: 'Portable SSD 1TB',
        category: 'storage',
        price: 119.99,
        original_price: 159.99,
        image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop',
        rating: 4.8,
        reviews: 423,
        description: '1TB portable SSD with lightning-fast read speeds up to 1050MB/s. Durable rugged design. USB-C 3.1 Gen 2 interface. Perfect for content creators and professionals.',
        badge: null,
        featured: false
    },
    {
        id: 18,
        name: 'Webcam Ring Light',
        category: 'lighting',
        price: 39.99,
        original_price: 59.99,
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop',
        rating: 4.6,
        reviews: 267,
        description: '10-inch LED ring light with adjustable color temperature and brightness. Perfect for streaming and video calls. Includes phone holder and tripod stand.',
        badge: 'New',
        featured: false
    },
    {
        id: 19,
        name: 'Mechanical Keyboard Switches',
        category: 'keyboards',
        price: 44.99,
        original_price: 69.99,
        image: 'https://images.unsplash.com/photo-1587829191301-51f611abb72e?w=500&h=500&fit=crop',
        rating: 4.5,
        reviews: 178,
        description: 'Pack of 110 mechanical switches in your choice of color. Smooth and clicky action. Compatible with most mechanical keyboards. Durable PBT material.',
        badge: null,
        featured: false
    },
    {
        id: 20,
        name: 'Phone Gimbal Stabilizer',
        category: 'phone-accessories',
        price: 89.99,
        original_price: 129.99,
        image: 'https://images.unsplash.com/photo-1535303511164-c86b8e391ca0?w=500&h=500&fit=crop',
        rating: 4.7,
        reviews: 345,
        description: '3-axis gimbal for smooth video recording. App-based control for creative effects. 8-hour battery life. Works with iPhones and Android phones.',
        badge: 'Hot Deal',
        featured: false
    },
    {
        id: 21,
        name: 'External Hard Drive 4TB',
        category: 'storage',
        price: 99.99,
        original_price: 149.99,
        image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop',
        rating: 4.6,
        reviews: 234,
        description: '4TB storage capacity for all your files. USB 3.0 interface for fast transfers. Compact design with shock protection. Works with Windows and Mac.',
        badge: null,
        featured: false
    },
    {
        id: 22,
        name: 'Gaming Headset Wireless',
        category: 'headphones',
        price: 159.99,
        original_price: 219.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
        rating: 4.8,
        reviews: 456,
        description: '7.1 surround sound with noise-canceling microphone. 20-hour battery life. Low-latency wireless connection. Comfortable for extended gaming sessions.',
        badge: 'Best Seller',
        featured: true
    },
    {
        id: 23,
        name: 'Monitor Light Bar',
        category: 'lighting',
        price: 69.99,
        original_price: 99.99,
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop',
        rating: 4.7,
        reviews: 289,
        description: 'AutoBrite technology reduces eye strain with auto-adjusting brightness. Mounts on top of monitor. App control for customization. Reduces blue light at night.',
        badge: 'New',
        featured: false
    },
    {
        id: 24,
        name: 'USB-C Docking Station',
        category: 'connectivity',
        price: 129.99,
        original_price: 179.99,
        image: 'https://images.unsplash.com/photo-1609654378099-36e107a38c91?w=500&h=500&fit=crop',
        rating: 4.6,
        reviews: 312,
        description: '11 ports including HDMI, USB 3.0, and SD card reader. 100W power delivery for charging. Aluminum design. Perfect for MacBook and Windows laptops.',
        badge: null,
        featured: false
    },
    {
        id: 25,
        name: 'Phone Pop Socket Stand',
        category: 'phone-accessories',
        price: 12.99,
        original_price: 19.99,
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop',
        rating: 4.4,
        reviews: 534,
        description: 'Reusable pop socket pads with stronger adhesive. Universal compatibility with all phones. Washable and eco-friendly. Comes in multiple colors.',
        badge: 'Hot Deal',
        featured: false
    },
    {
        id: 26,
        name: 'Mechanical Keyboard Keycaps',
        category: 'keyboards',
        price: 34.99,
        original_price: 54.99,
        image: 'https://images.unsplash.com/photo-1587829191301-51f611abb72e?w=500&h=500&fit=crop',
        rating: 4.5,
        reviews: 267,
        description: 'Double-shot PBT keycaps with Cherry profile. Fade-resistant dye sublimation. 104-key set for standard keyboards. Premium quality build.',
        badge: null,
        featured: false
    },
    {
        id: 27,
        name: 'Monitor Arm Stand',
        category: 'monitors',
        price: 59.99,
        original_price: 89.99,
        image: 'https://images.unsplash.com/photo-1588278200966-b30d75ba8e4a?w=500&h=500&fit=crop',
        rating: 4.7,
        reviews: 345,
        description: 'Full motion adjustment with VESA mount compatibility. Supports up to 32-inch monitors. Cable management built-in. Improves desk space efficiency.',
        badge: 'Best Seller',
        featured: true
    },
    {
        id: 28,
        name: 'Graphics Tablet Pen Display',
        category: 'tablets',
        price: 299.99,
        original_price: 399.99,
        image: 'https://images.unsplash.com/photo-1535303511164-c86b8e391ca0?w=500&h=500&fit=crop',
        rating: 4.8,
        reviews: 223,
        description: '10-inch pen display with 8192 pressure levels. 1920x1200 resolution. USB-C connection. Perfect for digital artists and designers.',
        badge: 'New',
        featured: false
    },
    {
        id: 29,
        name: 'Laptop Backpack Tech',
        category: 'bags',
        price: 79.99,
        original_price: 119.99,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
        rating: 4.6,
        reviews: 456,
        description: 'Waterproof backpack with USB charging port. Fits laptops up to 17 inches. Multiple compartments for organization. Ergonomic design for comfort.',
        badge: null,
        featured: false
    },
    {
        id: 30,
        name: 'Noise Canceling Earbuds',
        category: 'headphones',
        price: 129.99,
        original_price: 179.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
        rating: 4.7,
        reviews: 534,
        description: 'Active noise cancellation with ambient mode. 8-hour battery per charge. Wireless charging case. Premium sound quality for music and calls.',
        badge: 'Hot Deal',
        featured: true
    },
    {
        id: 31,
        name: 'USB-C Fast Charger 65W',
        category: 'chargers',
        price: 39.99,
        original_price: 59.99,
        image: 'https://images.unsplash.com/photo-1609654378099-36e107a38c91?w=500&h=500&fit=crop',
        rating: 4.6,
        reviews: 389,
        description: '65W power output charges laptops at full speed. Compact folding design. Supports multiple devices. GaN technology for efficiency.',
        badge: null,
        featured: false
    },
    {
        id: 32,
        name: 'Smartphone Tripod Professional',
        category: 'phone-accessories',
        price: 29.99,
        original_price: 44.99,
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop',
        rating: 4.5,
        reviews: 278,
        description: 'Extendable tripod with ball head mount. Works with all phones and compact cameras. Lightweight aluminum construction. Perfect for photography and streaming.',
        badge: 'Best Seller',
        featured: false
    },
    {
        id: 33,
        name: 'Portable Monitor 15.6',
        category: 'monitors',
        price: 199.99,
        original_price: 299.99,
        image: 'https://images.unsplash.com/photo-1588278200966-b30d75ba8e4a?w=500&h=500&fit=crop',
        rating: 4.7,
        reviews: 212,
        description: '1080p IPS display with USB-C connectivity. Portable aluminum stand. Works with laptops, tablets, and phones. Perfect for remote work.',
        badge: 'New',
        featured: false
    },
    {
        id: 34,
        name: 'Mechanical Switch Tester',
        category: 'keyboards',
        price: 24.99,
        original_price: 39.99,
        image: 'https://images.unsplash.com/photo-1587829191301-51f611abb72e?w=500&h=500&fit=crop',
        rating: 4.4,
        reviews: 156,
        description: '9-pack switch tester with different types. Test before buying a full keyboard. Premium quality sampling. Educational for mechanical keyboard enthusiasts.',
        badge: null,
        featured: false
    },
    {
        id: 35,
        name: 'Camera Phone Lens Protector',
        category: 'phone-accessories',
        price: 14.99,
        original_price: 24.99,
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop',
        rating: 4.3,
        reviews: 345,
        description: 'Tempered glass lens protector set for all major phones. Maintains camera quality. Scratch and impact resistant. Easy installation.',
        badge: 'Hot Deal',
        featured: false
    },
    {
        id: 36,
        name: 'Desktop Microphone Condenser',
        category: 'audio',
        price: 99.99,
        original_price: 149.99,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
        rating: 4.7,
        reviews: 289,
        description: 'Professional-grade condenser mic with cardioid pattern. USB connection for plug-and-play. Includes pop filter and shock mount. Perfect for content creators.',
        badge: null,
        featured: false
    },
    {
        id: 37,
        name: 'Gaming Chair RGB Lights',
        category: 'furniture',
        price: 349.99,
        original_price: 499.99,
        image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop',
        rating: 4.8,
        reviews: 412,
        description: 'Ergonomic gaming chair with RGB lighting. 4D adjustable armrests. Lumbar and neck support. Breathable fabric for comfort. Max weight 330 lbs.',
        badge: 'Best Seller',
        featured: true
    },
    {
        id: 38,
        name: 'Wireless Mouse Ergonomic',
        category: 'mice',
        price: 34.99,
        original_price: 54.99,
        image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop',
        rating: 4.6,
        reviews: 345,
        description: 'Vertical ergonomic design reduces wrist strain. 2.4GHz wireless with 18-month battery life. Adjustable DPI settings. Compatible with Windows and Mac.',
        badge: null,
        featured: false
    },
    {
        id: 39,
        name: 'OLED Phone Screen Replacement',
        category: 'phone-accessories',
        price: 129.99,
        original_price: 179.99,
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop',
        rating: 4.5,
        reviews: 212,
        description: 'Original OLED display quality for popular phone models. Professional installation recommended. Comes with tools and tempered glass. Full warranty included.',
        badge: 'New',
        featured: false
    },
    {
        id: 40,
        name: 'Laptop Cooling Pad',
        category: 'monitors',
        price: 44.99,
        original_price: 69.99,
        image: 'https://images.unsplash.com/photo-1588278200966-b30d75ba8e4a?w=500&h=500&fit=crop',
        rating: 4.6,
        reviews: 267,
        description: 'Aluminum cooling pad with dual fans. USB-powered with adjustable fan speed. Fits laptops up to 17 inches. Reduces temperature by up to 15°C.',
        badge: 'Hot Deal',
        featured: false
    },
    {
        id: 41,
        name: 'Smart Power Strip',
        category: 'connectivity',
        price: 34.99,
        original_price: 54.99,
        image: 'https://images.unsplash.com/photo-1609654378099-36e107a38c91?w=500&h=500&fit=crop',
        rating: 4.5,
        reviews: 378,
        description: '4 outlets with 2 USB ports. App control for scheduling. Energy monitoring features. Works with Alexa and Google Home for voice control.',
        badge: null,
        featured: false
    },
    {
        id: 42,
        name: 'Keyboard Wrist Rest Memory Foam',
        category: 'keyboards',
        price: 24.99,
        original_price: 39.99,
        image: 'https://images.unsplash.com/photo-1587829191301-51f611abb72e?w=500&h=500&fit=crop',
        rating: 4.4,
        reviews: 289,
        description: 'Premium memory foam for ergonomic support. Non-slip base prevents sliding. Fits standard size keyboards. Reduces wrist and arm fatigue.',
        badge: 'Best Seller',
        featured: false
    },
    {
        id: 43,
        name: 'Thunderbolt 3 Cable',
        category: 'cables',
        price: 34.99,
        original_price: 54.99,
        image: 'https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=500&h=500&fit=crop',
        rating: 4.7,
        reviews: 156,
        description: '2-meter Thunderbolt 3 cable for fast data transfer. 40Gbps speed for 4K display support. Durable construction. Compatible with MacBooks and high-end PCs.',
        badge: null,
        featured: false
    },
    {
        id: 44,
        name: 'Phone Case Protective Premium',
        category: 'phone-accessories',
        price: 19.99,
        original_price: 34.99,
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop',
        rating: 4.5,
        reviews: 567,
        description: 'Military-grade drop protection up to 6 feet. Premium TPU material with anti-slip grip. Works with wireless charging. Multiple color options.',
        badge: 'Hot Deal',
        featured: false
    },
    {
        id: 45,
        name: 'USB Audio Interface',
        category: 'audio',
        price: 79.99,
        original_price: 119.99,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
        rating: 4.6,
        reviews: 234,
        description: '2-in/2-out audio interface with XLR inputs. 24-bit/192kHz audio quality. USB-C connection for integration. Professional recording software included.',
        badge: null,
        featured: false
    },
    {
        id: 46,
        name: 'Desk Cable Management Kit',
        category: 'cables',
        price: 24.99,
        original_price: 39.99,
        image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop',
        rating: 4.4,
        reviews: 312,
        description: 'Complete cable management set with various organizers. Aluminum construction for durability. Keeps workspace clean and organized. Easy installation.',
        badge: 'Best Seller',
        featured: false
    },
    {
        id: 47,
        name: 'Phone Stand Desktop Adjustable',
        category: 'phone-accessories',
        price: 17.99,
        original_price: 29.99,
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop',
        rating: 4.4,
        reviews: 423,
        description: 'Adjustable stand fits all phone sizes. Aluminum and rubber construction. Perfect for desk, kitchen, and bathroom. Non-slip base.',
        badge: 'New',
        featured: false
    },
    {
        id: 48,
        name: 'External CD/DVD Drive',
        category: 'storage',
        price: 24.99,
        original_price: 39.99,
        image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop',
        rating: 4.3,
        reviews: 189,
        description: 'USB external CD/DVD drive for all optical media. Fast reading and writing speeds. Compact design. Works with Windows and Mac computers.',
        badge: null,
        featured: false
    },
    {
        id: 49,
        name: 'Monitor Privacy Filter',
        category: 'monitors',
        price: 34.99,
        original_price: 54.99,
        image: 'https://images.unsplash.com/photo-1588278200966-b30d75ba8e4a?w=500&h=500&fit=crop',
        rating: 4.5,
        reviews: 267,
        description: 'Privacy screen protects your display from side viewing. Fits 27-inch monitors. Anti-glare technology. Reduces eye strain and improves screen clarity.',
        badge: 'Hot Deal',
        featured: false
    },
    {
        id: 50,
        name: 'Mechanical Keyboard Stabilizers',
        category: 'keyboards',
        price: 14.99,
        original_price: 24.99,
        image: 'https://images.unsplash.com/photo-1587829191301-51f611abb72e?w=500&h=500&fit=crop',
        rating: 4.4,
        reviews: 156,
        description: 'Premium stabilizers for smoother spacebar and shift key. Screw-in design for stability. Supports both plate-mount and PCB-mount. Durable build quality.',
        badge: null,
        featured: false
    },
    {
        id: 51,
        name: 'USB Flash Drive 1TB',
        category: 'storage',
        price: 44.99,
        original_price: 69.99,
        image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop',
        rating: 4.6,
        reviews: 234,
        description: '1TB capacity in ultra-compact design. 480MB/s read speed with USB 3.1. Metal construction for durability. Works with all computers.',
        badge: 'Best Seller',
        featured: true
    },
    {
        id: 52,
        name: 'Webcam Lens Cover -Pack',
        category: 'phone-accessories',
        price: 9.99,
        original_price: 14.99,
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop',
        rating: 4.3,
        reviews: 389,
        description: '3-pack webcam lens covers for privacy. Sliding design that doesn\'t block view. Works with all laptops and external webcams. Adhesive backing.',
        badge: 'New',
        featured: false
    },
    {
        id: 53,
        name: 'Monitor Cleaning Kit',
        category: 'monitors',
        price: 12.99,
        original_price: 19.99,
        image: 'https://images.unsplash.com/photo-1588278200966-b30d75ba8e4a?w=500&h=500&fit=crop',
        rating: 4.4,
        reviews: 212,
        description: 'Complete cleaning kit for monitors and screens. Microfiber cloth and safe cleaning solution. Never leave streaks. Safe for all screen types.',
        badge: null,
        featured: false
    },
    {
        id: 54,
        name: 'Gaming Mouse Bungee Cord',
        category: 'mice',
        price: 19.99,
        original_price: 34.99,
        image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop',
        rating: 4.5,
        reviews: 278,
        description: 'Magnetic mouse bungee for cable management. Reduces mouse cable drag. Adjustable for different cable weighs. Improves mouse control during gaming.',
        badge: 'Hot Deal',
        featured: false
    },
    {
        id: 55,
        name: 'Power Bank 50000mAh',
        category: 'chargers',
        price: 69.99,
        original_price: 99.99,
        image: 'https://images.unsplash.com/photo-1609654378099-36e107a38c91?w=500&h=500&fit=crop',
        rating: 4.7,
        reviews: 456,
        description: '50000mAh capacity charges phones multiple times. Fast charging with USB-C and USB-A ports. LED display shows battery percentage. Lightweight design.',
        badge: 'Best Seller',
        featured: true
    }
];


// Promotional codes
let promoCodes = {
    'SAVE20': { discount: 0.20, description: '20% off', code: 'SAVE20' },
    'TECH15': { discount: 0.15, description: '15% off', code: 'TECH15' },
    'WELCOME10': { discount: 0.10, description: '10% off', code: 'WELCOME10' },
    'SUMMER25': { discount: 0.25, description: '25% off', code: 'SUMMER25' }
};

// Admin credentials
const ADMIN_USERNAME = 'ekup';
const ADMIN_PASSWORD = 'ekup123';

// ==================== State Management ====================
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentSection = 'home';
let appliedDiscount = 0;
let appliedPromo = null;
let isAdminLoggedIn = false;
let selectedProductForCart = null;
let searchTimeout = null;

// ==================== DOM Elements ====================
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const cartBtn = document.getElementById('cartBtn');
const accountBtn = document.getElementById('accountBtn');
const adminBtn = document.getElementById('adminBtn');
const cartModal = document.getElementById('cartModal');
const checkoutModal = document.getElementById('checkoutModal');
const accountModal = document.getElementById('accountModal');
const adminLoginModal = document.getElementById('adminLoginModal');
const adminDashboardModal = document.getElementById('adminDashboardModal');
const closeCartModal = document.getElementById('closeCartModal');
const closeCheckoutModal = document.getElementById('closeCheckoutModal');
const closeAccountModal = document.getElementById('closeAccountModal');
const closeAdminLogin = document.getElementById('closeAdminLogin');
const closeAdminDashboard = document.getElementById('closeAdminDashboard');
const checkoutBtn = document.getElementById('checkoutBtn');
const continueShopping = document.getElementById('continueShopping');
const cartCountEl = document.getElementById('cartCount');
const contactForm = document.getElementById('contactForm');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');
const themeToggle = document.getElementById('themeToggle');
const promoCodeCheckbox = document.getElementById('promoCode');
const promoCodeInput = document.getElementById('promoCodeInput');
const applyPromoBtn = document.getElementById('applyPromo');
const tabBtns = document.querySelectorAll('.tab-btn');

// ==================== Initialization ====================
document.addEventListener('DOMContentLoaded', () => {
    // Auto-generate image arrays for products with varied angles/views
    products.forEach(product => {
        if (!product.images || product.images.length < 3) {
            // Create 4-5 different views using different Unsplash images related to the product
            const baseUrl = product.image.split('?')[0];
            product.images = [
                product.image,
                baseUrl + '?w=800&h=800&fit=crop&crop=entropy',
                baseUrl + '?w=800&h=800&fit=crop&crop=faces',
                baseUrl + '?w=800&h=800&fit=crop&q=80',
                baseUrl + '?w=800&h=800&fit=crop&q=60'
            ];
        }
    });
    
    initializeEventListeners();
    renderFeaturedProducts();
    renderProducts();
    updateCartCount();
    loadTheme();
    createDeals();
    
    // Set initial active nav link
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector('[data-section="home"]').classList.add('active');
});

// ==================== Admin Functions ====================
function openAdminLogin() {
    adminLoginModal.classList.add('active');
}

function closeAdminLoginModal() {
    adminLoginModal.classList.remove('active');
    document.getElementById('adminLoginForm').reset();
}

function handleAdminLogin(e) {
    e.preventDefault();
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        isAdminLoggedIn = true;
        closeAdminLoginModal();
        openAdminDashboard();
        showToast('Admin login successful!', 'success');
    } else {
        showToast('Invalid username or password', 'error');
    }
}

function openAdminDashboard() {
    adminDashboardModal.classList.add('active');
    renderAdminProductsList();
    renderPromosList();
}

function closeAdminDashboardModal() {
    adminDashboardModal.classList.remove('active');
    isAdminLoggedIn = false;
}

function switchAdminTab(tabName) {
    if (tabName === 'logout') {
        closeAdminDashboardModal();
        showToast('Logged out successfully', 'info');
        return;
    }

    document.querySelectorAll('.admin-tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    document.querySelectorAll('.admin-tab-content').forEach(content => {
        content.style.display = 'none';
    });
    document.getElementById(tabName).style.display = 'block';

    if (tabName === 'manage-products') {
        renderAdminProductsList();
    } else if (tabName === 'manage-promos') {
        renderPromosList();
    }
}

function renderAdminProductsList() {
    const listContainer = document.getElementById('adminProductsList');
    const searchTerm = document.getElementById('adminSearch')?.value?.toLowerCase() || '';

    let filteredProducts = products;
    if (searchTerm) {
        filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchTerm));
    }

    listContainer.innerHTML = filteredProducts.map(product => `
        <div class="admin-product-item">
            <div style="flex: 1;">
                <div style="font-weight: bold;">${product.name}</div>
                <div style="color: var(--text-secondary); font-size: 0.9rem;">
                    Price: $${product.price} | Category: ${product.category}
                </div>
            </div>
            <button class="btn btn-secondary-small" onclick="editProduct(${product.id})">Edit</button>
            <button class="btn btn-danger-small" onclick="deleteProduct(${product.id})">Delete</button>
        </div>
    `).join('');

    document.getElementById('adminSearch')?.addEventListener('input', () => {
        renderAdminProductsList();
    });
}

function editProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const newName = prompt('Product Name:', product.name);
    if (newName === null) return;

    const newPrice = prompt('Product Price:', product.price);
    if (newPrice === null) return;

    const newCategory = prompt('Category:', product.category);
    if (newCategory === null) return;

    const newDescription = prompt('Description:', product.description);
    if (newDescription === null) return;

    product.name = newName;
    product.price = parseFloat(newPrice);
    product.category = newCategory;
    product.description = newDescription;

    saveProductsToStorage();
    renderAdminProductsList();
    renderProducts();
    renderFeaturedProducts();
    showToast('Product updated successfully!', 'success');
}

function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        products = products.filter(p => p.id !== productId);
        saveProductsToStorage();
        renderAdminProductsList();
        renderProducts();
        renderFeaturedProducts();
        showToast('Product deleted successfully!', 'success');
    }
}

function handleAddProduct(e) {
    e.preventDefault();
    const form = e.target;
    const inputs = form.querySelectorAll('input, textarea, select');

    const newProduct = {
        id: Math.max(...products.map(p => p.id), 0) + 1,
        name: inputs[0].value,
        price: parseFloat(inputs[1].value),
        original_price: parseFloat(inputs[2].value),
        category: inputs[3].value,
        image: inputs[4].value || 'https://via.placeholder.com/300',
        description: inputs[5].value,
        rating: parseFloat(inputs[6].value) || 4.5,
        reviews: parseInt(inputs[7].value) || 0,
        badge: inputs[8].value || null,
        featured: false
    };

    products.push(newProduct);
    saveProductsToStorage();
    form.reset();
    renderAdminProductsList();
    renderProducts();
    showToast('Product added successfully!', 'success');
}

function handleAddPromo(e) {
    e.preventDefault();
    const form = e.target;
    const inputs = form.querySelectorAll('input, select');
    
    const code = inputs[0].value.toUpperCase();
    const discount = parseFloat(inputs[1].value) / 100;
    const description = inputs[2].value;

    if (promoCodes[code]) {
        showToast('Promo code already exists!', 'error');
        return;
    }

    promoCodes[code] = {
        discount: discount,
        description: description,
        code: code
    };

    savePromoCodesToStorage();
    form.reset();
    renderPromosList();
    showToast('Promo code added successfully!', 'success');
}

function deletePromo(code) {
    if (confirm('Are you sure you want to delete this promo code?')) {
        delete promoCodes[code];
        savePromoCodesToStorage();
        renderPromosList();
        showToast('Promo code deleted!', 'success');
    }
}

function renderPromosList() {
    const listContainer = document.getElementById('promosList');
    const promoList = Object.values(promoCodes);

    listContainer.innerHTML = promoList.length === 0 
        ? '<div style="padding: 1rem; color: var(--text-secondary);">No promo codes yet</div>'
        : promoList.map(promo => `
            <div class="promo-item">
                <div style="flex: 1;">
                    <div style="font-weight: bold; font-size: 1.1rem;">${promo.code}</div>
                    <div style="color: var(--text-secondary);">${promo.description}</div>
                </div>
                <button class="btn btn-danger-small" onclick="deletePromo('${promo.code}')">Delete</button>
            </div>
        `).join('');
}

function saveProductsToStorage() {
    localStorage.setItem('products', JSON.stringify(products));
}

function savePromoCodesToStorage() {
    localStorage.setItem('promoCodes', JSON.stringify(promoCodes));
}

// ==================== Event Listeners ====================
function initializeEventListeners() {
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchSection(link.dataset.section);
        });
    });

    // Cart and Account Modals
    cartBtn.addEventListener('click', openCartModal);
    accountBtn.addEventListener('click', openAccountModal);
    adminBtn.addEventListener('click', openAdminLogin);
    closeCartModal.addEventListener('click', closeCart);
    closeCheckoutModal.addEventListener('click', closeCheckout);
    closeAccountModal.addEventListener('click', closeAccount);
    closeAdminLogin.addEventListener('click', closeAdminLoginModal);
    closeAdminDashboard.addEventListener('click', closeAdminDashboardModal);
    checkoutBtn.addEventListener('click', openCheckoutModal);
    continueShopping.addEventListener('click', closeCart);

    // Admin Login
    document.getElementById('adminLoginForm').addEventListener('submit', handleAdminLogin);

    // Admin Tabs
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            switchAdminTab(e.target.dataset.adminTab);
        });
    });

    // Admin Promo Form
    document.getElementById('addPromoForm').addEventListener('submit', handleAddPromo);

    // Admin Product Form
    document.getElementById('addProductForm').addEventListener('submit', handleAddProduct);

    // Forms
    contactForm.addEventListener('submit', handleContactSubmit);
    document.getElementById('checkoutForm').addEventListener('submit', handleCheckout);
    document.getElementById('profileForm').addEventListener('submit', handleProfileUpdate);

    // Search and Filters - Real-time search as user types
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        handleSearch();
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            clearTimeout(searchTimeout);
            handleSearch();
        }
    });
    
    // Real-time search optimization - search as user types (debounced)
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            handleSearch();
        }, 300); // 300ms debounce for optimal performance
    });
    
    categoryFilter.addEventListener('change', renderProducts);
    sortFilter.addEventListener('change', renderProducts);

    // Theme Toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Promo Code
    promoCodeCheckbox.addEventListener('change', (e) => {
        promoCodeInput.style.display = e.target.checked ? 'flex' : 'none';
    });
    applyPromoBtn.addEventListener('click', applyPromoCode);

    // Tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tabName = e.target.dataset.tab;
            switchTab(tabName);
        });
    });

    // Quantity controls in modal (initialize once, not every time products render)
    const qtyMinus = document.getElementById('qtyMinus');
    const qtyPlus = document.getElementById('qtyPlus');
    const qtyInput = document.getElementById('detailQuantity');

    if (qtyMinus) {
        qtyMinus.addEventListener('click', (e) => {
            e.preventDefault();
            let qty = parseInt(qtyInput.value) || 1;
            if (qty > 1) {
                qtyInput.value = qty - 1;
            }
        });
    }

    if (qtyPlus) {
        qtyPlus.addEventListener('click', (e) => {
            e.preventDefault();
            let qty = parseInt(qtyInput.value) || 1;
            if (qty < 99) {
                qtyInput.value = qty + 1;
            }
        });
    }

    // Allow direct input change
    if (qtyInput) {
        qtyInput.addEventListener('change', () => {
            let val = parseInt(qtyInput.value) || 1;
            if (val < 1) qtyInput.value = 1;
            if (val > 99) qtyInput.value = 99;
        });
    }

    // Close modals when clicking outside
    const addToCartModal = document.getElementById('addToCartModal');
    const imageGalleryModal = document.getElementById('imageGalleryModal');
    const closeAddToCartBtn = document.getElementById('closeAddToCartModal');
    const closeGalleryBtn = document.getElementById('closeGalleryModal');
    
    if (closeAddToCartBtn) closeAddToCartBtn.addEventListener('click', closeAddToCartModal);
    if (closeGalleryBtn) closeGalleryBtn.addEventListener('click', closeImageGalleryModal);

    [cartModal, checkoutModal, accountModal, adminLoginModal, adminDashboardModal, addToCartModal, imageGalleryModal].forEach(modal => {
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    if (modal === cartModal) closeCart();
                    if (modal === checkoutModal) closeCheckout();
                    if (modal === accountModal) closeAccount();
                    if (modal === adminLoginModal) closeAdminLoginModal();
                    if (modal === adminDashboardModal) closeAdminDashboardModal();
                    if (modal === addToCartModal) closeAddToCartModal();
                    if (modal === imageGalleryModal) closeImageGalleryModal();
                }
            });
        }
    });
}

// ==================== Section Navigation ====================
function switchSection(sectionId) {
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    currentSection = sectionId;
    window.scrollTo(0, 0);

    // Update nav link active state
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === sectionId) {
            link.classList.add('active');
        }
    });

    // Re-render products when switching to products section (only if not searching)
    if (sectionId === 'products' && !searchInput.value.trim()) {
        renderProducts();
    }
}

// ==================== Product Rendering ====================
function renderFeaturedProducts() {
    const featured = products.filter(p => p.featured);
    const container = document.getElementById('featuredProducts');
    container.innerHTML = featured.map(product => createProductCard(product)).join('');
    attachProductEventListeners();
}

function renderProducts() {
    let filtered = [...products];

    // Apply category filter
    const selectedCategory = categoryFilter.value;
    if (selectedCategory) {
        filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Apply sorting
    const sortType = sortFilter.value;
    switch (sortType) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            filtered.reverse();
            break;
    }

    const container = document.getElementById('productsGrid');
    container.innerHTML = filtered.map(product => createProductCard(product)).join('');
    attachProductEventListeners();
}

function createProductCard(product) {
    const discount = Math.round(((product.original_price - product.price) / product.original_price) * 100);
    const isWishlisted = wishlist.some(w => w.id === product.id);

    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-category">${product.category.replace('-', ' ')}</div>
                <div class="product-rating">
                    ${createStars(product.rating)}
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-description">${product.description}</div>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    <span class="original-price">$${product.original_price.toFixed(2)}</span>
                    <span class="discount-percent">-${discount}%</span>
                </div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" data-product-id="${product.id}">
                        <i class="fas fa-shopping-cart"></i> Add
                    </button>
                    <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" data-product-id="${product.id}">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function createStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < Math.floor(rating)) {
            stars += '<span class="star"><i class="fas fa-star"></i></span>';
        } else if (i < rating) {
            stars += '<span class="star"><i class="fas fa-star-half-alt"></i></span>';
        } else {
            stars += '<span class="star"><i class="far fa-star"></i></span>';
        }
    }
    return stars;
}

function attachProductEventListeners() {
    // Add to cart buttons - now opens modal
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.productId);
            openAddToCartModal(productId);
        });
    });

    // Wishlist buttons
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.productId);
            toggleWishlist(productId);
        });
    });

    // Add to Cart button in modal
    const addToCartModalBtn = document.getElementById('addToCartBtn');
    if (addToCartModalBtn) {
        addToCartModalBtn.addEventListener('click', () => {
            if (selectedProductForCart !== null) {
                addToCart(selectedProductForCart);
            }
        });
    }

    // Proceed to Checkout button in modal
    const checkoutNowBtn = document.getElementById('checkoutNowBtn');
    if (checkoutNowBtn) {
        checkoutNowBtn.addEventListener('click', () => {
            if (selectedProductForCart !== null) {
                const product = products.find(p => p.id === selectedProductForCart);
                const quantity = parseInt(document.getElementById('detailQuantity').value) || 1;
                const existingItem = cart.find(item => item.id === selectedProductForCart);

                if (existingItem) {
                    existingItem.quantity += quantity;
                } else {
                    cart.push({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        quantity: quantity,
                        selected: true
                    });
                }

                saveCart();
                updateCartCount();
                showToast(`${product.name} added to cart!`, 'success');
                closeAddToCartModal();
                openCheckoutModal();
            }
        });
    }
}

// ==================== Cart Management ====================
function openAddToCartModal(productId) {
    selectedProductForCart = productId;
    const product = products.find(p => p.id === productId);
    
    if (!product) return;

    const modal = document.getElementById('addToCartModal');
    const mainImage = document.getElementById('galleryMainImage');
    const thumbsContainer = document.getElementById('galleryThumbs');
    const qtyInput = document.getElementById('detailQuantity');
    
    // Set product details
    document.getElementById('detailProductName').textContent = product.name;
    document.getElementById('detailProductRating').innerHTML = createStars(product.rating) + ` <span class="rating-count">(${product.reviews} reviews)</span>`;
    document.getElementById('detailCurrentPrice').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('detailOriginalPrice').textContent = `$${product.original_price.toFixed(2)}`;
    const discount = Math.round(((product.original_price - product.price) / product.original_price) * 100);
    document.getElementById('detailDiscount').textContent = `-${discount}%`;
    document.getElementById('detailDescription').textContent = product.description;
    
    // Reset quantity to 1 - ensure it's properly set BEFORE opening modal
    if (qtyInput) {
        qtyInput.value = '1';
        qtyInput.setAttribute('value', '1');
    }

    // Set up image gallery with multiple views
    if (product.images && product.images.length > 0) {
        mainImage.src = product.images[0];
        
        thumbsContainer.innerHTML = product.images.map((img, index) => `
            <div class="gallery-thumb ${index === 0 ? 'active' : ''}" onclick="switchGalleryImage(this, ${index})" style="cursor: pointer;" title="View ${index + 1}">
                <img src="${img}" alt="Product view ${index + 1}">
            </div>
        `).join('');
    }

    modal.classList.add('active');
    
    // Force reset quantity value AFTER modal is shown
    setTimeout(() => {
        if (qtyInput) {
            qtyInput.value = 1;
        }
    }, 10);
}

function closeAddToCartModal() {
    document.getElementById('addToCartModal').classList.remove('active');
    selectedProductForCart = null;
}

function switchGalleryImage(thumb, index) {
    const product = products.find(p => p.id === selectedProductForCart);
    if (!product) return;

    document.getElementById('galleryMainImage').src = product.images[index];
    document.querySelectorAll('.gallery-thumb').forEach((t, i) => {
        t.classList.toggle('active', i === index);
    });
}

function closeImageGalleryModal() {
    const modal = document.getElementById('imageGalleryModal');
    if (modal) modal.classList.remove('active');
}

function openImageGallery(images, selectedIndex = 0) {
    const modal = document.getElementById('imageGalleryModal');
    const imgElement = document.getElementById('gallerySingleImage');
    const counterElement = document.getElementById('galleryCounter');
    const prevBtn = document.getElementById('galleryPrev');
    const nextBtn = document.getElementById('galleryNext');
    
    if (!modal || !images || images.length === 0) return;

    let currentIndex = selectedIndex;
    
    const updateImage = (index) => {
        imgElement.src = images[index];
        counterElement.textContent = `${index + 1} / ${images.length}`;
        currentIndex = index;
    };
    
    updateImage(currentIndex);
    modal.classList.add('active');

    prevBtn.onclick = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage(currentIndex);
    };

    nextBtn.onclick = () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage(currentIndex);
    };
}


function addToCart(productId) {
    const qtyInput = document.getElementById('detailQuantity');
    let quantity = 1;
    
    if (qtyInput && qtyInput.value) {
        const parsed = parseInt(qtyInput.value);
        quantity = (!isNaN(parsed) && parsed > 0) ? parsed : 1;
    }

    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity,
            selected: true
        });
    }

    saveCart();
    updateCartCount();
    showToast(`${product.name} (x${quantity}) added to cart!`, 'success');
    closeAddToCartModal();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    updateCartModal();
    showToast('Item removed from cart', 'info');
}

function updateCartQuantity(productId, quantity) {
    const item = cart.find(i => i.id === productId);
    if (item && quantity > 0) {
        item.quantity = quantity;
        saveCart();
        updateCartModal();
    } else if (quantity === 0) {
        removeFromCart(productId);
    }
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountEl.textContent = count;
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function animateCartButton() {
    cartBtn.style.animation = 'none';
    setTimeout(() => {
        cartBtn.style.animation = 'pulse 0.3s ease';
    }, 10);
}

// ==================== Wishlist Management ====================
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    const index = wishlist.findIndex(w => w.id === productId);

    if (index > -1) {
        wishlist.splice(index, 1);
        showToast(`${product.name} removed from wishlist`, 'info');
    } else {
        wishlist.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            rating: product.rating
        });
        showToast(`${product.name} added to wishlist`, 'success');
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    renderProducts();
    renderFeaturedProducts();
}

// ==================== Modal Management ====================
function openCartModal() {
    cartModal.classList.add('active');
    updateCartModal();
}

function closeCart() {
    cartModal.classList.remove('active');
}

function updateCartModal() {
    const cartItemsContainer = document.getElementById('cartItems');
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const discountEl = document.getElementById('discount');
    const totalEl = document.getElementById('total');
    const discountRow = document.getElementById('discountRow');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-message"><div><i class="fas fa-shopping-cart"></i></div>Your cart is empty</div>';
        subtotalEl.textContent = '$0.00';
        shippingEl.textContent = '$0.00';
        totalEl.textContent = '$0.00';
        discountRow.style.display = 'none';
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-checkbox">
                <input type="checkbox" class="item-select" data-product-id="${item.id}" ${item.selected !== false ? 'checked' : ''}>
            </div>
            <div class="cart-item-image" style="width: 80px; height: 80px; border-radius: 8px; overflow: hidden;">
                <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="qty-btn minus" data-product-id="${item.id}">−</button>
                <input class="qty-input" type="number" value="${item.quantity}" data-product-id="${item.id}" readonly>
                <button class="qty-btn plus" data-product-id="${item.id}">+</button>
            </div>
            <button class="remove-item-btn" data-product-id="${item.id}">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    // Item selection checkboxes
    document.querySelectorAll('.item-select').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const productId = parseInt(checkbox.dataset.productId);
            const item = cart.find(i => i.id === productId);
            if (item) item.selected = checkbox.checked;
            saveCart();
            updateCartSummary();
        });
    });

    document.querySelectorAll('.qty-btn.minus').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.dataset.productId);
            const item = cart.find(i => i.id === productId);
            updateCartQuantity(productId, item.quantity - 1);
        });
    });

    document.querySelectorAll('.qty-btn.plus').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.dataset.productId);
            const item = cart.find(i => i.id === productId);
            updateCartQuantity(productId, item.quantity + 1);
        });
    });

    document.querySelectorAll('.remove-item-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.dataset.productId);
            removeFromCart(productId);
        });
    });

    updateCartSummary();
}

function updateCartSummary() {
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const discountEl = document.getElementById('discount');
    const totalEl = document.getElementById('total');
    const discountRow = document.getElementById('discountRow');

    // Only calculate for selected items
    const selectedItems = cart.filter(item => item.selected !== false);
    const subtotal = selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 50 ? 0 : 9.99;
    const discount = (subtotal * appliedDiscount);
    const total = subtotal + shipping - discount;

    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    shippingEl.textContent = `$${shipping.toFixed(2)}`;
    
    if (appliedDiscount > 0) {
        discountRow.style.display = 'flex';
        discountEl.textContent = `-$${discount.toFixed(2)}`;
    } else {
        discountRow.style.display = 'none';
    }
    
    totalEl.textContent = `$${total.toFixed(2)}`;
}

function openCheckoutModal() {
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }
    closeCart();
    checkoutModal.classList.add('active');
}

function closeCheckout() {
    checkoutModal.classList.remove('active');
    appliedDiscount = 0;
    appliedPromo = null;
    promoCodeCheckbox.checked = false;
    promoCodeInput.style.display = 'none';
}

function openAccountModal() {
    accountModal.classList.add('active');
    renderWishlist();
    renderOrders();
}

function closeAccount() {
    accountModal.classList.remove('active');
}

// ==================== Form Handlers ====================
function handleCheckout(e) {
    e.preventDefault();
    
    const loader = document.getElementById('loader');
    loader.classList.add('active');

    setTimeout(() => {
        loader.classList.remove('active');
        
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal > 50 ? 0 : 9.99;
        const discount = subtotal * appliedDiscount;
        const total = subtotal + shipping - discount;

        // Add to orders
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.unshift({
            id: 'ORD-' + Date.now(),
            date: new Date().toLocaleDateString(),
            items: [...cart],
            total: total,
            status: 'processing'
        });
        localStorage.setItem('orders', JSON.stringify(orders));

        // Clear cart
        cart = [];
        saveCart();
        updateCartCount();

        closeCheckout();
        showToast('Order placed successfully! 🎉', 'success');
        switchSection('home');
    }, 2000);
}

function handleContactSubmit(e) {
    e.preventDefault();
    showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
    contactForm.reset();
}

function handleProfileUpdate(e) {
    e.preventDefault();
    showToast('Profile updated successfully!', 'success');
}

// ==================== Search & Filter ====================
function handleSearch(e) {
    if (e) e.preventDefault();
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    const container = document.getElementById('productsGrid');
    
    if (!searchTerm) {
        // Reset filters when search is cleared
        categoryFilter.value = '';
        sortFilter.value = 'featured';
        renderProducts();
        return;
    }

    // Clear category filter when searching
    categoryFilter.value = '';

    const filtered = products.filter(p => {
        const name = p.name.toLowerCase();
        const desc = p.description.toLowerCase();
        const cat = p.category.toLowerCase();
        return name.includes(searchTerm) || desc.includes(searchTerm) || cat.includes(searchTerm);
    });

    if (filtered.length === 0) {
        container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem 2rem; color: var(--text-secondary);">
            <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; display: block; opacity: 0.5;"></i>
            <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">No products found</h3>
            <p style="margin: 0;">We couldn't find any products matching "<strong>${searchTerm}</strong>"</p>
            <p style="margin-top: 1rem; font-size: 0.9rem;">Try searching for different keywords</p>
        </div>`;
    } else {
        container.innerHTML = filtered.map(product => createProductCard(product)).join('');
        attachProductEventListeners();
        
        // Show search results count
        showToast(`Found ${filtered.length} product${filtered.length !== 1 ? 's' : ''} matching "${searchTerm}"`, 'success');
    }

    switchSection('products');
}

// ==================== Promo Code ====================
function applyPromoCode() {
    const code = document.getElementById('promoCodeField').value.toUpperCase().trim();

    if (!code) {
        showToast('Please enter a promo code', 'error');
        return;
    }

    if (promoCodes[code]) {
        appliedDiscount = promoCodes[code].discount;
        appliedPromo = code;
        showToast(`Promo code applied! ${promoCodes[code].description}`, 'success');
        updateCartModal();
    } else {
        showToast('Invalid promo code', 'error');
    }
}

// ==================== Deals Section ====================
function createDeals() {
    const dealsContainer = document.getElementById('dealsGrid');
    const deals = [
        {
            title: 'Wireless Tech',
            discount: '40% OFF',
            description: 'All wireless devices this week',
            gradient: 'linear-gradient(135deg, #667eea, #764ba2)'
        },
        {
            title: 'Phone Accessories',
            discount: '35% OFF',
            description: 'Protection & charging solutions',
            gradient: 'linear-gradient(135deg, #f093fb, #f5576c)'
        },
        {
            title: 'Computer Peripherals',
            discount: '30% OFF',
            description: 'Gaming gear & productivity tools',
            gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)'
        },
        {
            title: 'Cables & Adapters',
            discount: '25% OFF',
            description: 'Fast charging & connectivity',
            gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)'
        }
    ];

    dealsContainer.innerHTML = deals.map((deal, index) => `
        <div class="deal-card" style="background: ${deal.gradient};">
            <div class="deal-content">
                <h3 class="deal-title">${deal.title}</h3>
                <div class="deal-discount">${deal.discount}</div>
                <p class="deal-description">${deal.description}</p>
                <button class="deal-btn" onclick="switchSection('products')">Shop Now</button>
            </div>
        </div>
    `).join('');
}

// ==================== Wishlist & Orders ====================
function renderWishlist() {
    const container = document.getElementById('wishlistItems');
    
    if (wishlist.length === 0) {
        container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-secondary);">Your wishlist is empty</div>';
        return;
    }

    const wishlistProducts = wishlist.map(w => ({
        ...w,
        image: products.find(p => p.id === w.id)?.image || 'https://via.placeholder.com/300'
    }));

    container.innerHTML = wishlistProducts.map(item => `
        <div class="product-card">
            <div class="product-image">
                <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="product-info">
                <div class="product-name">${item.name}</div>
                <div class="product-rating">
                    ${createStars(item.rating)}
                </div>
                <div class="product-price">
                    <span class="current-price">$${item.price.toFixed(2)}</span>
                </div>
                <button class="btn btn-primary" style="width: 100%; margin-top: 0.5rem;" onclick="addToCart(${item.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

function renderOrders() {
    const ordersContainer = document.getElementById('ordersList');
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    if (orders.length === 0) {
        ordersContainer.innerHTML = '<div style="text-align: center; padding: 2rem; color: var(--text-secondary);">No orders yet</div>';
        return;
    }

    ordersContainer.innerHTML = orders.map(order => `
        <div class="order-item">
            <div class="order-header">
                <div>
                    <div class="order-id">Order ${order.id}</div>
                    <div class="order-date">${order.date}</div>
                </div>
                <div>
                    <div class="order-amount">$${order.total.toFixed(2)}</div>
                    <span class="order-status ${order.status}">${order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
                </div>
            </div>
            <div style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 0.5rem;">
                ${order.items.length} item(s) ordered
            </div>
            <div style="margin-top: 0.5rem; font-size: 0.85rem; padding-top: 0.5rem; border-top: 1px solid var(--border-color);">
                ${order.items.map(item => `<div>• ${item.name} x${item.quantity}</div>`).join('')}
            </div>
        </div>
    `).join('');
}

// ==================== Tab Management ====================
function switchTab(tabName) {
    // Update tab buttons
    tabBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
    });
    const tabContent = document.getElementById(tabName);
    if (tabContent) {
        tabContent.style.display = 'block';
    }
}

// ==================== Theme Toggle ====================
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    const icon = themeToggle.querySelector('i');
    if (isDarkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

function loadTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        const icon = themeToggle.querySelector('i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

// ==================== Toast Notification ====================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ==================== Button Click Navigation ====================
document.querySelectorAll('.btn').forEach(btn => {
    if (btn.dataset.section) {
        btn.addEventListener('click', () => switchSection(btn.dataset.section));
    }
});
