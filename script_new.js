// ==================== Product Data ====================
let products = [
    {
        id: 1,
        name: 'Premium Wireless Headphones',
        category: 'headphones',
        price: 199.99,
        original_price: 299.99,
        image: '🎧',
        rating: 4.8,
        reviews: 245,
        description: 'Experience superior sound quality with our premium wireless headphones. Features active noise cancellation technology that blocks out up to 99% of ambient noise, perfect for immersive listening whether you\'re commuting, working, or simply enjoying your favorite music. Equipped with 30-hour battery life, premium leather ear cushions for maximum comfort during extended use, and Bluetooth 5.0 for seamless connectivity across all your devices.',
        badge: 'Best Seller',
        featured: true
    },
    {
        id: 2,
        name: 'Mechanical Gaming Keyboard',
        category: 'keyboards',
        price: 149.99,
        original_price: 199.99,
        image: '⌨️',
        rating: 4.6,
        reviews: 189,
        description: 'Dominate your games with our premium mechanical gaming keyboard featuring custom Cherry MX switches that provide tactile feedback and rapid response times. With fully programmable RGB lighting with 16.8 million color options, configurable through our advanced software. Built with aluminum frame, N-key rollover technology, and per-key macro support. Includes extra switches and keycaps for customization.',
        badge: 'New',
        featured: true
    },
    {
        id: 3,
        name: 'Precision Gaming Mouse',
        category: 'mice',
        price: 79.99,
        original_price: 119.99,
        image: '🖱️',
        rating: 4.7,
        reviews: 312,
        description: 'Elevate your gaming performance with our precision gaming mouse featuring a 16000 DPI optical sensor for ultra-fast tracking and accuracy. Ergonomic right-hand design reduces fatigue during marathon gaming sessions. Includes 8 programmable buttons for advanced macro support, adjustable weight system, and premium rubber side grips. 60-hour battery life ensures extended play sessions without interruption.',
        badge: 'Hot Deal',
        featured: true
    },
    {
        id: 4,
        name: 'Fast Charging USB-C Cable',
        category: 'cables',
        price: 14.99,
        original_price: 24.99,
        image: '🔌',
        rating: 4.5,
        reviews: 567,
        description: 'Charge your devices at lightning speed with our premium braided USB-C cable. Supports up to 60W Power Delivery, perfect for fast charging laptops, tablets, and smartphones. The 2-meter length provides flexibility, while the military-grade nylon braiding ensures exceptional durability with resistance to kinks and tangling. Tested to withstand 10,000+ bending cycles.',
        badge: null,
        featured: false
    },
    {
        id: 5,
        name: 'Multi-Device Charger',
        category: 'chargers',
        price: 89.99,
        original_price: 129.99,
        image: '🔋',
        rating: 4.7,
        reviews: 156,
        description: 'Charge up to 4 devices simultaneously with our intelligent multi-device charger. Features adaptive charging technology that detects connected devices and optimizes power delivery for each one, from smartphones to laptops. Includes 2 USB-C ports (100W total) and 2 USB-A ports with quick charge technology. Compact design with foldable prongs makes it perfect for travel.',
        badge: 'Top Rated',
        featured: true
    },
    {
        id: 6,
        name: 'Tempered Glass Screen Protector',
        category: 'phone-accessories',
        price: 12.99,
        original_price: 19.99,
        image: '📱',
        rating: 4.4,
        reviews: 423,
        description: 'Protect your smartphone screen with our premium tempered glass protector. Features 9H hardness rating to protect against scratches and drops, while maintaining 99% touch sensitivity. Easy installation with included alignment tool and dust-free stickers. Perfect fit for all modern smartphones with precise cutouts for cameras and sensors. Oleophobic coating repels fingerprints and oils.',
        badge: null,
        featured: false
    },
    {
        id: 7,
        name: 'Wireless Charging Pad',
        category: 'chargers',
        price: 34.99,
        original_price: 49.99,
        image: '⚡',
        rating: 4.6,
        reviews: 234,
        description: 'Experience convenient wireless charging with our 15W fast wireless charging pad. Compatible with all Qi-enabled devices including iPhones, Samsung phones, and AirPods. Features intelligent temperature control to prevent overheating, LED indicator for charging status, and non-slip surface to keep devices in place. Compact circular design fits any desk or nightstand.',
        badge: 'Sale',
        featured: false
    },
    {
        id: 8,
        name: 'Phone Cooling Fan',
        category: 'phone-accessories',
        price: 29.99,
        original_price: 44.99,
        image: '❄️',
        rating: 4.5,
        reviews: 178,
        description: 'Keep your phone cool during intense gaming sessions with our advanced cooling fan. Features intelligent temperature sensing that automatically adjusts fan speed based on device heat. Lightweight clip design fits most phone cases, includes adjustable angle mount for optimal positioning. Whisper-quiet operation won\'t disturb your gaming experience. Dual cooling vents provide maximum performance.',
        badge: 'New',
        featured: false
    },
    {
        id: 9,
        name: 'Premium HDMI Cable 2.1',
        category: 'cables',
        price: 24.99,
        original_price: 39.99,
        image: '📡',
        rating: 4.7,
        reviews: 289,
        description: 'Future-proof your entertainment system with our HDMI 2.1 cable supporting 8K resolution at 60Hz and 4K at 120Hz. 3-meter length provides flexibility in setup, while premium shielding eliminates electromagnetic interference for crystal-clear signal transmission. Gold-plated connectors ensure reliable connection and easy insertion/removal. Compatible with all HDMI 2.1 devices including gaming consoles and projectors.',
        badge: null,
        featured: false
    },
    {
        id: 10,
        name: 'Portable Bluetooth Speaker',
        category: 'headphones',
        price: 59.99,
        original_price: 89.99,
        image: '🔊',
        rating: 4.6,
        reviews: 412,
        description: 'Take your music anywhere with our waterproof Bluetooth speaker featuring 360-degree sound projection. Equipped with 12-hour battery life, IPX7 waterproof rating for pool parties and beach trips. Dual passive radiators deliver rich bass, while the compact cylindrical design is lightweight and portable. Twin wireless connection allows dual speaker pairing for stereo sound.',
        badge: 'Hot Deal',
        featured: false
    },
    {
        id: 11,
        name: 'Desk Lamp with USB',
        category: 'phone-accessories',
        price: 44.99,
        original_price: 69.99,
        image: '💡',
        rating: 4.5,
        reviews: 198,
        description: 'Illuminate your workspace with our premium desk lamp featuring adjustable brightness (10 levels) and color temperature (2700K-6500K). Built-in USB charging port allows you to power multiple devices while working. Touch-sensitive controls enable one-tap brightness adjustment, and the flexible gooseneck design positions light exactly where you need it. Memory function remembers your preferred settings.',
        badge: null,
        featured: false
    },
    {
        id: 12,
        name: 'Cable Organizer Kit',
        category: 'cables',
        price: 19.99,
        original_price: 34.99,
        image: '📦',
        rating: 4.4,
        reviews: 267,
        description: 'Keep your desk organized with our comprehensive 5-piece cable management set. Includes sticky cable clips, velcro ties, and cable sleeves in various sizes. Each piece is removable and reusable without leaving residue. Perfect for managing charging cables, power cords, and data cables while keeping your workspace clean and professional-looking.',
        badge: 'Best Seller',
        featured: false
    },
    {
        id: 13,
        name: '4K Webcam Pro',
        category: 'webcams',
        price: 129.99,
        original_price: 179.99,
        image: '📹',
        rating: 4.7,
        reviews: 234,
        description: 'Professional 4K webcam with 60fps capability for crystal-clear video conferencing and streaming. Features advanced autofocus technology, automatic light correction, and dual built-in microphones with noise cancellation. Wide 90-degree field of view perfect for group calls. Works seamlessly with all major video conferencing platforms.',
        badge: 'New',
        featured: false
    },
    {
        id: 14,
        name: 'USB 3.0 Hub 7-Port',
        category: 'cables',
        price: 34.99,
        original_price: 54.99,
        image: '🔀',
        rating: 4.5,
        reviews: 345,
        description: 'Expand your USB connectivity with our 7-port USB 3.0 hub offering lightning-fast data transfer speeds up to 5Gbps. Features individual LED indicators and on/off switches for each port. Includes external power adapter for stable operation with power-hungry devices. Compact design with cable storage management.',
        badge: null,
        featured: false
    },
    {
        id: 15,
        name: 'Mechanical Switch Tester',
        category: 'keyboards',
        price: 24.99,
        original_price: 39.99,
        image: '⚙️',
        rating: 4.6,
        reviews: 198,
        description: 'Test and compare 9 different mechanical switches to find your perfect typing feel. Includes popular Cherry MX variants in different actuation types. Essential tool for keyboard enthusiasts and builders. Each switch is removable for easy testing and comparison.',
        badge: null,
        featured: false
    },
    {
        id: 16,
        name: 'Wireless Mouse Pad',
        category: 'mice',
        price: 49.99,
        original_price: 79.99,
        image: '⬛',
        rating: 4.4,
        reviews: 267,
        description: 'Advanced wireless charging mouse pad that charges your compatible mouse while you work. Features optimized surface for precision gaming and smooth mouse movement. RGB lighting with customizable effects, integrated USB hub with 2 additional ports. Oversized design provides ample space for both mouse and keyboard.',
        badge: 'Hot Deal',
        featured: false
    },
    {
        id: 17,
        name: 'Studio Microphone Set',
        category: 'microphones',
        price: 89.99,
        original_price: 149.99,
        image: '🎤',
        rating: 4.7,
        reviews: 423,
        description: 'Professional-grade condenser microphone with cardioid pickup pattern ideal for streaming, podcasting, and voice recording. Includes shock mount, pop filter, and boom arm. Wide frequency response (20Hz-20kHz) captures detailed audio. USB plug-and-play connection requires no additional equipment.',
        badge: 'Best Seller',
        featured: false
    },
    {
        id: 18,
        name: 'Laptop Cooling Stand',
        category: 'phone-accessories',
        price: 39.99,
        original_price: 59.99,
        image: '❄️',
        rating: 4.5,
        reviews: 189,
        description: 'Keep your laptop cool with our aluminum cooling stand featuring dual cooling fans and 6 adjustable height levels. Compatible with laptops 10-16 inches, provides ergonomic typing angle. Quiet operation with USB power input. Minimalist design complements any workspace.',
        badge: null,
        featured: false
    },
    {
        id: 19,
        name: 'Power Bank 50000mAh',
        category: 'chargers',
        price: 59.99,
        original_price: 89.99,
        image: '🔌',
        rating: 4.6,
        reviews: 512,
        description: 'Massive capacity power bank with 50000mAh battery providing 5-6 full smartphone charges. Features dual USB-C ports and dual USB-A outputs for simultaneous multi-device charging. LED display shows remaining battery percentage. Fast charging support and compact design despite high capacity.',
        badge: 'Hot Deal',
        featured: false
    },
    {
        id: 20,
        name: 'Monitor Screen Protector',
        category: 'monitors',
        price: 44.99,
        original_price: 69.99,
        image: '🖥️',
        rating: 4.4,
        reviews: 156,
        description: 'Blue light filter screen protector designed to reduce eye strain during long work sessions. Easy installation with adhesive backing perfectly fitted for standard monitors. Matte finish reduces glare and reflections. Anti-fingerprint coating keeps screen clean and clear.',
        badge: null,
        featured: false
    },
    {
        id: 21,
        name: 'RGB Gaming Mouse Bungee',
        category: 'mice',
        price: 19.99,
        original_price: 34.99,
        image: '🎮',
        rating: 4.5,
        reviews: 298,
        description: 'Eliminate mouse cable drag with our RGB mouse bungee featuring magnetic weight system. Adjustable arm accommodates all mouse sizes and styles. Sleek design with customizable lighting effects. Matte finish prevents cable slipping while maintaining smooth glide.',
        badge: null,
        featured: false
    },
    {
        id: 22,
        name: 'Wireless Charging Hub',
        category: 'chargers',
        price: 79.99,
        original_price: 119.99,
        image: '⚡',
        rating: 4.7,
        reviews: 334,
        description: 'Multi-device wireless charging station simultaneously powering 5 devices. Supports multiple phones, earbuds, and smartwatches on one platform. Intelligent temperature control and foreign object detection. Elegant design fits any room aesthetic.',
        badge: 'New',
        featured: false
    },
    {
        id: 23,
        name: 'Premium Phone Case Pro',
        category: 'phone-accessories',
        price: 24.99,
        original_price: 44.99,
        image: '📱',
        rating: 4.6,
        reviews: 445,
        description: 'Military-grade protective phone case featuring shock absorption technology and reinforced corners. Slim profile doesn\'t add bulk while providing maximum protection. Wireless charging compatible and features raised edges to protect screen and camera. Available in multiple colors.',
        badge: 'Best Seller',
        featured: true
    },
    {
        id: 24,
        name: 'USB-A to USB-C Adapter',
        category: 'cables',
        price: 9.99,
        original_price: 19.99,
        image: '🔌',
        rating: 4.5,
        reviews: 567,
        description: 'Simple yet essential USB-A to USB-C adapter enabling you to use legacy USB devices with new USB-C ports. Supports data transfer and charging at full speeds. Compact design doesn\'t block adjacent ports. Perfect for office and home use.',
        badge: null,
        featured: false
    },
    {
        id: 25,
        name: 'Gaming Desk Pad',
        category: 'mice',
        price: 34.99,
        original_price: 54.99,
        image: '⬛',
        rating: 4.6,
        reviews: 389,
        description: 'Extra-large extended mouse pad providing ample space for mouse and keyboard. Non-slip rubber base keeps pad in place during intense gaming. Precision-woven surface offers optimal tracking for gaming mice. Water-resistant coating protects against spills and stains.',
        badge: null,
        featured: false
    },
    {
        id: 26,
        name: 'Portable SSD 1TB',
        category: 'storage',
        price: 99.99,
        original_price: 149.99,
        image: '💾',
        rating: 4.8,
        reviews: 423,
        description: 'Ultra-fast portable SSD with 1TB capacity offering read speeds up to 1050MB/s. Compact rugged design survives drops from 6.5 feet and withstands pressure up to 1 ton. Secure hardware encryption protects your data. USB 3.2 connectivity ensures blazing-fast transfers.',
        badge: 'Top Rated',
        featured: true
    },
    {
        id: 27,
        name: 'Mechanical Keycap Set',
        category: 'keyboards',
        price: 39.99,
        original_price: 64.99,
        image: '⌨️',
        rating: 4.7,
        reviews: 234,
        description: 'Premium PBT double-shot keycaps with 120+ color options. Cherry MX compatible with superior durability and resistance to shine. Includes full keyboard set plus function keys. Sculpted profile for ergonomic typing comfort.',
        badge: null,
        featured: false
    },
    {
        id: 28,
        name: 'Display Port Cable',
        category: 'cables',
        price: 19.99,
        original_price: 34.99,
        image: '📡',
        rating: 4.5,
        reviews: 267,
        description: 'High-speed 8K DisplayPort cable supporting up to 32.4 Gbps bandwidth. 2-meter length with premium shielding eliminates signal interference. Gold-plated connectors ensure lasting connection quality. Perfect for high-resolution displays and gaming monitors.',
        badge: null,
        featured: false
    },
    {
        id: 29,
        name: 'Stealth Wireless Keyboard',
        category: 'keyboards',
        price: 69.99,
        original_price: 109.99,
        image: '⌨️',
        rating: 4.6,
        reviews: 345,
        description: 'Ultra-slim wireless keyboard with chiclet key design and quiet operation. 90-hour battery life eliminates frequent charging. Multi-device pairing allows quick switching between devices. Palm rest provides ergonomic support during extended typing sessions.',
        badge: 'New',
        featured: false
    },
    {
        id: 30,
        name: 'RGB LED Strip Kit',
        category: 'phone-accessories',
        price: 24.99,
        original_price: 44.99,
        image: '🌈',
        rating: 4.4,
        reviews: 412,
        description: '5-meter RGB LED strip with 16.8 million color options and multiple lighting modes. App-controlled via Bluetooth with easy scheduling and timer features. Adhesive backing sticks to any clean surface. Energy-efficient with low power consumption.',
        badge: null,
        featured: false
    },
    {
        id: 31,
        name: 'Professional Gaming Chair',
        category: 'phone-accessories',
        price: 299.99,
        original_price: 449.99,
        image: '🪑',
        rating: 4.8,
        reviews: 178,
        description: 'Ergonomic gaming chair with adjustable lumbar support, armrests, and tilt mechanism. Premium PU leather ensures durability and easy cleaning. Reclines up to 165 degrees for gaming and relaxation. Includes head and neck pillow for ultimate comfort.',
        badge: 'Premium',
        featured: true
    },
    {
        id: 32,
        name: 'Mechanical Keyboard Stabilizers',
        category: 'keyboards',
        price: 14.99,
        original_price: 29.99,
        image: '⌨️',
        rating: 4.5,
        reviews: 156,
        description: 'Premium stabilizers for spacebar and shift key ensuring stable keypress without wobbling. Lubed and assembled for optimal performance. Compatible with most mechanical keyboards. Improves overall typing experience significantly.',
        badge: null,
        featured: false
    },
    {
        id: 33,
        name: 'Monitor Light Bar',
        category: 'monitors',
        price: 59.99,
        original_price: 89.99,
        image: '💡',
        rating: 4.7,
        reviews: 289,
        description: 'Premium auto-dimming monitor light bar reducing eye strain while reading and working. Positioned above monitor for optimal workspace illumination. USB powered with no batteries needed. Ambient light sensor adjusts brightness automatically.',
        badge: 'Hot Deal',
        featured: false
    },
    {
        id: 34,
        name: 'Wireless Gaming Headset',
        category: 'headphones',
        price: 139.99,
        original_price: 199.99,
        image: '🎧',
        rating: 4.7,
        reviews: 312,
        description: 'Professional wireless gaming headset with 2.4GHz low-latency connection. 7.1 surround sound provides positional audio advantage in competitive games. Detachable boom microphone with noise cancellation. 20-hour battery life supports marathon gaming sessions.',
        badge: 'Best Seller',
        featured: true
    },
    {
        id: 35,
        name: 'Mini Tripod Stand',
        category: 'phone-accessories',
        price: 14.99,
        original_price: 24.99,
        image: '📸',
        rating: 4.4,
        reviews: 423,
        description: 'Compact tripod stand suitable for smartphones, webcams, and action cameras. Adjustable legs accommodate uneven surfaces. 360-degree rotation head for perfect angle positioning. Lightweight and portable with carrying case included.',
        badge: null,
        featured: false
    },
    {
        id: 36,
        name: 'Fast USB-C Hub',
        category: 'cables',
        price: 49.99,
        original_price: 79.99,
        image: '🔀',
        rating: 4.6,
        reviews: 334,
        description: '8-in-1 USB-C hub providing HDMI output, Ethernet, multiple USB ports, and SD card reader. Supports 4K video output at 60Hz. Fast data transfer with 40Gbps bandwidth. Aluminum construction ensures durability and reliable connectivity.',
        badge: null,
        featured: false
    },
    {
        id: 37,
        name: 'RGB Gaming Mousepad with Wrist Rest',
        category: 'mice',
        price: 44.99,
        original_price: 69.99,
        image: '⬛',
        rating: 4.5,
        reviews: 267,
        description: 'Large gaming mousepad with integrated wrist rest reducing strain during extended gaming. Premium cloth surface optimized for both laser and optical mice. Customizable RGB border lighting with 10 different effects. Non-slip rubber base prevents shifting.',
        badge: null,
        featured: false
    },
    {
        id: 38,
        name: 'Backup External Hard Drive 4TB',
        category: 'storage',
        price: 79.99,
        original_price: 119.99,
        image: '💾',
        rating: 4.6,
        reviews: 445,
        description: 'Reliable external hard drive with massive 4TB storage capacity. USB 3.0 connectivity with transfer speeds up to 130MB/s. Plug-and-play compatibility with automatic backup features. Compact design fits in any bag or drawer.',
        badge: 'Hot Deal',
        featured: false
    },
    {
        id: 39,
        name: 'Premium Phone Mount Car',
        category: 'phone-accessories',
        price: 19.99,
        original_price: 34.99,
        image: '🚗',
        rating: 4.5,
        reviews: 512,
        description: 'Versatile car phone mount with air vent clip attachment securing to any dashboard vent. 360-degree ball joint rotation allows perfect viewing angle. Non-slip pads protect phone from scratches. Universal compatibility with phones 4-7 inches wide.',
        badge: null,
        featured: false
    },
    {
        id: 40,
        name: 'Lightning to USB-C Adapter',
        category: 'cables',
        price: 12.99,
        original_price: 24.99,
        image: '🔌',
        rating: 4.4,
        reviews: 378,
        description: 'High-quality adapter converting Lightning connectors to USB-C for charging and data transfer. Supports fast charging and high-speed data sync. Compact design doesn\'t damage phone connectors. MFi certified for Apple compatibility.',
        badge: null,
        featured: false
    },
    {
        id: 41,
        name: 'Stream Deck Controller',
        category: 'keyboards',
        price: 99.99,
        original_price: 149.99,
        image: '🎛️',
        rating: 4.7,
        reviews: 234,
        description: 'Programmable 32-button stream deck for content creators and streamers. Customize buttons for OBS scenes, Discord alerts, and app shortcuts. Bright LCD display per button shows custom icons and labels. USB connection with zero latency control.',
        badge: 'New',
        featured: false
    },
    {
        id: 42,
        name: 'Professional USB Microphone',
        category: 'microphones',
        price: 114.99,
        original_price: 179.99,
        image: '🎤',
        rating: 4.8,
        reviews: 389,
        description: 'Podcast-grade USB microphone with cardioid pickup and -10dB pad for handling loud sources. Built-in gain control and mute button. Zero-latency monitoring with 3.5mm headphone output. Includes desktop stand and windscreen.',
        badge: 'Top Rated',
        featured: true
    },
    {
        id: 43,
        name: 'Anime Figure Display Stand',
        category: 'phone-accessories',
        price: 29.99,
        original_price: 49.99,
        image: '🎨',
        rating: 4.3,
        reviews: 167,
        description: 'Elegant acrylic display stand with LED lighting perfect for showcasing collectibles or tech gadgets. Anti-dust cover included. Adjustable height with multiple compartment levels. Minimalist design complements any room decor.',
        badge: null,
        featured: false
    },
    {
        id: 44,
        name: 'Wireless Charging Car Mount',
        category: 'chargers',
        price: 49.99,
        original_price: 79.99,
        image: '🚗',
        rating: 4.6,
        reviews: 298,
        description: 'Dashboard car mount with integrated 15W wireless charging. Dashboard or windshield mounting options. 360-degree rotation provides optimal navigation viewing angle. Automatic clamping arms secure phone safely while charging.',
        badge: null,
        featured: false
    },
    {
        id: 45,
        name: 'Monitor Arm Stand',
        category: 'monitors',
        price: 79.99,
        original_price: 129.99,
        image: '🖥️',
        rating: 4.7,
        reviews: 423,
        description: 'Ergonomic monitor arm supporting monitors up to 32 inches and 20kg. Full articulation allows optimal positioning with VESA 75/100 compatibility. Integrated cable management keeps workspace clean. Smooth counterbalance mechanism reduces arm fatigue.',
        badge: 'Hot Deal',
        featured: false
    },
    {
        id: 46,
        name: 'Portable Charger 25000mAh',
        category: 'chargers',
        price: 44.99,
        original_price: 69.99,
        image: '🔋',
        rating: 4.5,
        reviews: 389,
        description: 'Compact high-capacity power bank with 25000mAh battery. Dual USB output ports enable simultaneous charging of multiple devices. LED display indicates remaining battery percentage. Fast charging support for quick top-ups.',
        badge: null,
        featured: false
    },
    {
        id: 47,
        name: 'Fiber Optic HDMI Cable',
        category: 'cables',
        price: 34.99,
        original_price: 59.99,
        image: '📡',
        rating: 4.6,
        reviews: 245,
        description: 'Advanced fiber optic HDMI cable enabling 8K resolution at 60Hz and 4K at 120Hz. 10-meter length perfect for large rooms and home theaters. Ultra-thin flexible cable easier to route through walls. EMI immune design eliminates electromagnetic interference.',
        badge: null,
        featured: false
    },
    {
        id: 48,
        name: 'Gaming Mousepad XXL',
        category: 'mice',
        price: 39.99,
        original_price: 64.99,
        image: '⬛',
        rating: 4.7,
        reviews: 512,
        description: 'Massive 1200x600mm mousepad accommodating full desk setup including keyboard and mouse. Premium cloth surface optimized for precise tracking. Non-slip rubber base prevents unwanted movement. Stitched edges prevent fraying.',
        badge: 'Best Seller',
        featured: false
    },
    {
        id: 49,
        name: 'Clip-On Phone Lens',
        category: 'phone-accessories',
        price: 24.99,
        original_price: 44.99,
        image: '📷',
        rating: 4.4,
        reviews: 267,
        description: 'Professional-quality clip-on phone lens with wide, macro, and telephoto options. Easy installation on any smartphone camera. Glass lens elements provide crisp sharp images. Protective carrying pouch included for portability.',
        badge: null,
        featured: false
    },
    {
        id: 50,
        name: 'Mechanical Keyboard Lubricant',
        category: 'keyboards',
        price: 9.99,
        original_price: 19.99,
        image: '🧴',
        rating: 4.5,
        reviews: 178,
        description: 'Premium stabilizer and switch lubricant reducing scratchy sounds while maintaining tactile feedback. Improved smoothness without affecting actuation. Safe for all mechanical switches and stabilizers. Small bottle provides enough for multiple keyboards.',
        badge: null,
        featured: false
    },
    {
        id: 51,
        name: 'Ultra-Fast SSD 2TB NVMe',
        category: 'storage',
        price: 149.99,
        original_price: 229.99,
        image: '💾',
        rating: 4.8,
        reviews: 334,
        description: 'Lightning-fast NVMe SSD with 2TB capacity offering read speeds up to 7100MB/s. PCIe 4.0 technology provides significant performance boost for gaming and content creation. Includes heat sink for optimal thermal performance. Dram cache for consistent performance.',
        badge: 'Premium',
        featured: true
    },
    {
        id: 52,
        name: 'Studio Monitor Stands',
        category: 'monitors',
        price: 34.99,
        original_price: 54.99,
        image: '🖥️',
        rating: 4.6,
        reviews: 189,
        description: 'Adjustable monitor stands with isolation technology reducing vibrations and improving sound quality. Fits monitors and speakers up to 10 inches. Adjustable angle and height for perfect positioning. Rubber isolation feet prevent equipment movement.',
        badge: null,
        featured: false
    },
    {
        id: 53,
        name: 'Premium XLR Microphone Cable',
        category: 'cables',
        price: 19.99,
        original_price: 34.99,
        image: '📡',
        rating: 4.7,
        reviews: 212,
        description: 'Professional-grade XLR cable with balanced audio transmission. 5-meter length perfect for studio setups. Individually shielded conductors eliminate hum and noise. Gold-plated connectors ensure reliable connection and signal clarity.',
        badge: null,
        featured: false
    },
    {
        id: 54,
        name: 'Phone Screen Replacement Kit',
        category: 'phone-accessories',
        price: 19.99,
        original_price: 34.99,
        image: '🔧',
        rating: 4.3,
        reviews: 156,
        description: 'Complete screen replacement kit with tempered glass, cleaning solutions, and installation tools. Precision-cut glass fits perfectly. Includes detailed instruction booklet and video tutorial. Professional results without professional prices.',
        badge: null,
        featured: false
    },
    {
        id: 55,
        name: 'WiFi 6 USB Adapter',
        category: 'cables',
        price: 54.99,
        original_price: 89.99,
        image: '📡',
        rating: 4.6,
        reviews: 278,
        description: 'Modern WiFi 6 USB adapter providing blazing-fast wireless connectivity. Supports 802.11ax for speeds up to 1200Mbps. Dual antenna design ensures strong reception. Backward compatible with older WiFi standards.',
        badge: 'New',
        featured: false
    },
    {
        id: 56,
        name: 'Mechanical Keyboard Case',
        category: 'keyboards',
        price: 44.99,
        original_price: 74.99,
        image: '🎒',
        rating: 4.5,
        reviews: 234,
        description: 'Protective carrying case for mechanical keyboards with foam padding. Accommodates keyboards up to 75% size. Water-resistant exterior material protects from spills. Travel-friendly with shoulder strap for portability.',
        badge: null,
        featured: false
    },
    {
        id: 57,
        name: 'Laptop Screen Protector',
        category: 'monitors',
        price: 29.99,
        original_price: 49.99,
        image: '💻',
        rating: 4.4,
        reviews: 189,
        description: 'Matte blue light filter laptop screen protector reducing eye strain significantly. Anti-glare coating minimizes reflections in bright environments. Easy installation with adhesive backing for various laptop sizes. Improves productivity and comfort.',
        badge: null,
        featured: false
    },
    {
        id: 58,
        name: 'USB 3.0 to SATA Adapter',
        category: 'cables',
        price: 24.99,
        original_price: 44.99,
        image: '🔌',
        rating: 4.5,
        reviews: 267,
        description: 'Convert 2.5-inch SATA drives into external USB storage with this reliable adapter. USB 3.0 speeds support fast data transfer. External power input ensures reliable operation. Perfect for backing up old drives or creating portable storage.',
        badge: null,
        featured: false
    },
    {
        id: 59,
        name: 'Premium Camera Phone Lens Protector',
        category: 'phone-accessories',
        price: 14.99,
        original_price: 29.99,
        image: '📷',
        rating: 4.6,
        reviews: 345,
        description: 'Tempered glass camera lens protector with 9H hardness rating. Thin design maintains camera clarity and doesn\'t impact photo quality. Oleophobic coating repels fingerprints and oils. Easy installation with alignment stickers.',
        badge: null,
        featured: false
    },
    {
        id: 60,
        name: 'Wireless Power Bank with Stand',
        category: 'chargers',
        price: 54.99,
        original_price: 84.99,
        image: '🔋',
        rating: 4.7,
        reviews: 401,
        description: 'Multi-function power bank with built-in wireless charging pad and foldable phone stand. 15000mAh capacity provides 3-4 full charges. Supports simultaneous wired and wireless charging. Compact design perfect for on-the-go use.',
        badge: 'Hot Deal',
        featured: true
    }
];

// Promotional codes - now editable by admin
let promoCodes = {
    'SAVE20': { discount: 0.20, description: '20% off' },
    'TECH15': { discount: 0.15, description: '15% off' },
    'WELCOME10': { discount: 0.10, description: '10% off' },
    'SUMMER25': { discount: 0.25, description: '25% off' }
};

// ==================== Authentication ====================
const ADMIN_CREDENTIALS = {
    username: 'lindsay',
    password: 'lindsayisko'
};

let isAdminLoggedIn = false;

// ==================== State Management ====================
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let orders = JSON.parse(localStorage.getItem('orders')) || [];
let currentSection = 'home';
let appliedDiscount = 0;
let appliedPromo = null;

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
const adminTabBtns = document.querySelectorAll('.admin-tab-btn');
const adminLoginForm = document.getElementById('adminLoginForm');
const addProductForm = document.getElementById('addProductForm');
const addPromoForm = document.getElementById('addPromoForm');

// ==================== Page Load & Initialization ====================
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    loadOrders();
    displayFeaturedProducts();
    displayProducts();
    displayDeals();
    initializeEventListeners();
    updateCartCount();
    loadProductsToStorage();
});

function loadProductsToStorage() {
    try {
        localStorage.setItem('products', JSON.stringify(products));
    } catch (e) {
        console.log('Failed to save products to storage');
    }
}

// ==================== Navigation & Section Management ====================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionName = link.getAttribute('data-section');
        navigateToSection(sectionName);
    });
});

function navigateToSection(sectionName) {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionName;
        window.scrollTo(0, 0);
    }
}

// ==================== Admin Login & Dashboard ====================
adminBtn.addEventListener('click', () => {
    if (isAdminLoggedIn) {
        showAdminDashboard();
    } else {
        adminLoginModal.style.display = 'flex';
    }
});

closeAdminLogin.addEventListener('click', () => {
    adminLoginModal.style.display = 'none';
});

closeAdminDashboard.addEventListener('click', () => {
    adminDashboardModal.style.display = 'none';
});

adminLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;
    
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        isAdminLoggedIn = true;
        adminLoginModal.style.display = 'none';
        adminLoginForm.reset();
        showAdminDashboard();
        showToast('Admin login successful!', 'success');
    } else {
        showToast('Invalid credentials', 'error');
    }
});

function showAdminDashboard() {
    adminDashboardModal.style.display = 'flex';
    displayAdminProducts();
    displayPromosList();
}

function displayAdminProducts() {
    const adminProductsList = document.getElementById('adminProductsList');
    adminProductsList.innerHTML = products.map(product => `
        <div class="admin-product-item">
            <div class="admin-product-info">
                <span class="admin-product-icon">${product.image}</span>
                <div class="admin-product-details">
                    <h4>${product.name}</h4>
                    <p>$${product.price.toFixed(2)}</p>
                </div>
            </div>
            <div class="admin-product-actions">
                <button class="btn btn-small btn-secondary" onclick="editProduct(${product.id})">Edit</button>
                <button class="btn btn-small btn-danger" onclick="deleteProduct(${product.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

function editProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const newName = prompt('Product Name:', product.name);
    if (newName === null) return;
    
    const newPrice = prompt('Price:', product.price);
    if (newPrice === null) return;
    
    const newDescription = prompt('Description:', product.description);
    if (newDescription === null) return;
    
    product.name = newName;
    product.price = parseFloat(newPrice);
    product.description = newDescription;
    
    loadProductsToStorage();
    displayAdminProducts();
    displayProducts();
    displayFeaturedProducts();
    showToast(`${product.name} updated successfully!`, 'success');
}

function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        products = products.filter(p => p.id !== productId);
        loadProductsToStorage();
        displayAdminProducts();
        displayProducts();
        displayFeaturedProducts();
        showToast('Product deleted successfully!', 'success');
    }
}

// Add Product
addProductForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formInputs = addProductForm.querySelectorAll('input, select, textarea');
    
    const newProduct = {
        id: Math.max(...products.map(p => p.id), 0) + 1,
        name: formInputs[0].value,
        category: formInputs[1].value,
        price: parseFloat(formInputs[2].value),
        original_price: parseFloat(formInputs[3].value),
        description: formInputs[4].value,
        image: formInputs[5].value,
        rating: parseFloat(formInputs[6].value),
        reviews: 0,
        badge: 'New',
        featured: false
    };
    
    products.push(newProduct);
    loadProductsToStorage();
    addProductForm.reset();
    displayAdminProducts();
    displayProducts();
    showToast('Product added successfully!', 'success');
});

// Admin Promo Management
function displayPromosList() {
    const promosList = document.getElementById('promosList');
    promosList.innerHTML = '<h3 style="margin-bottom: 1rem;">Current Promo Codes</h3>' + 
        Object.entries(promoCodes).map(([code, promo]) => `
        <div class="promo-item">
            <div class="promo-details">
                <strong>${code}</strong>
                <span>${promo.description}</span>
            </div>
            <button class="btn btn-small btn-danger" onclick="deletePromo('${code}')">Delete</button>
        </div>
    `).join('');
}

addPromoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const promoCode = document.getElementById('promoCodeName').value.toUpperCase();
    const discount = parseFloat(document.getElementById('promoDiscount').value) / 100;
    const description = document.getElementById('promoDescription').value;
    
    promoCodes[promoCode] = { discount, description };
    addPromoForm.reset();
    displayPromosList();
    showToast(`Promo code ${promoCode} added!`, 'success');
});

function deletePromo(code) {
    delete promoCodes[code];
    displayPromosList();
    showToast(`Promo code ${code} deleted!`, 'success');
}

// Admin Tab Navigation
adminTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.getAttribute('data-admin-tab');
        
        if (tabName === 'logout') {
            isAdminLoggedIn = false;
            adminDashboardModal.style.display = 'none';
            showToast('Admin logged out', 'success');
            return;
        }
        
        adminTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        document.querySelectorAll('.admin-tab-content').forEach(content => {
            content.style.display = 'none';
        });
        
        const targetTab = document.getElementById(tabName);
        if (targetTab) {
            targetTab.style.display = 'block';
            if (tabName === 'manage-products') displayAdminProducts();
            if (tabName === 'manage-promos') displayPromosList();
        }
    });
});

// ==================== Product Display ====================
function displayFeaturedProducts() {
    const featuredProducts = products.filter(p => p.featured).slice(0, 4);
    const featuredContainer = document.getElementById('featuredProducts');
    featuredContainer.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
    attachProductCardListeners();
}

function displayProducts(productsToDisplay = products) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = productsToDisplay.map(product => createProductCard(product)).join('');
    attachProductCardListeners();
}

function displayDeals() {
    const dealsProducts = products.filter(p => p.original_price > p.price).slice(0, 8);
    const dealsGrid = document.getElementById('dealsGrid');
    dealsGrid.innerHTML = dealsProducts.map(product => createProductCard(product)).join('');
    attachProductCardListeners();
}

function createProductCard(product) {
    const discountPercent = Math.round(((product.original_price - product.price) / product.original_price) * 100);
    return `
        <div class="product-card" data-product-id="${product.id}">
            ${product.badge ? `<div class="badge">${product.badge}</div>` : ''}
            ${discountPercent > 0 ? `<div class="discount-badge">-${discountPercent}%</div>` : ''}
            <div class="product-image">${product.image}</div>
            <div class="product-content">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description.substring(0, 60)}...</p>
                <div class="product-rating">
                    <span class="stars">${'⭐'.repeat(Math.floor(product.rating))}</span>
                    <span class="rating-value">${product.rating}</span>
                    <span class="reviews">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    ${product.original_price > product.price ? `<span class="original-price">$${product.original_price.toFixed(2)}</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary add-to-cart" data-product-id="${product.id}">Add to Cart</button>
                    <button class="btn btn-secondary wishlist-btn" data-product-id="${product.id}">❤️</button>
                </div>
            </div>
        </div>
    `;
}

// ==================== Cart Management ====================
function attachProductCardListeners() {
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const productId = parseInt(btn.getAttribute('data-product-id'));
            addToCart(productId);
        });
    });
    
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const productId = parseInt(btn.getAttribute('data-product-id'));
            toggleWishlist(productId);
        });
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartCount();
    showToast(`${product.name} added to cart!`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCart();
    updateCartCount();
}

function updateCartItemQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            saveCart();
            updateCart();
        }
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountEl.textContent = totalItems;
}

// ==================== Cart Modal ====================
cartBtn.addEventListener('click', () => {
    cartModal.style.display = 'flex';
    updateCart();
});

closeCartModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

continueShopping.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('Cart is empty!', 'error');
        return;
    }
    cartModal.style.display = 'none';
    checkoutModal.style.display = 'flex';
});

closeCheckoutModal.addEventListener('click', () => {
    checkoutModal.style.display = 'none';
});

function updateCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        document.querySelector('.cart-summary').style.display = 'none';
        document.querySelector('.cart-actions').style.display = 'none';
        return;
    }
    
    document.querySelector('.cart-summary').style.display = 'block';
    document.querySelector('.cart-actions').style.display = 'flex';
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">${item.image}</div>
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)} each</p>
            </div>
            <div class="cart-item-quantity">
                <button onclick="updateCartItemQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <input type="number" value="${item.quantity}" onchange="updateCartItemQuantity(${item.id}, this.value)">
                <button onclick="updateCartItemQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
            <div class="cart-item-total">
                $${(item.price * item.quantity).toFixed(2)}
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">✕</button>
        </div>
    `).join('');
    
    updateCartTotal();
}

function updateCartTotal() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 50 ? 0 : 9.99;
    const discount = appliedPromo ? subtotal * appliedPromo.discount : 0;
    const total = subtotal + shipping - discount;
    
    document.getElementById('subtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('shipping').textContent = shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2);
    document.getElementById('total').textContent = '$' + total.toFixed(2);
    
    if (discount > 0) {
        document.getElementById('discountRow').style.display = 'flex';
        document.getElementById('discount').textContent = '-$' + discount.toFixed(2);
    } else {
        document.getElementById('discountRow').style.display = 'none';
    }
    
    appliedDiscount = discount;
}

// ==================== Promo Code ====================
promoCodeCheckbox.addEventListener('change', () => {
    promoCodeInput.style.display = promoCodeCheckbox.checked ? 'block' : 'none';
});

applyPromoBtn.addEventListener('click', () => {
    const promoField = document.getElementById('promoCodeField');
    const code = promoField.value.toUpperCase();
    
    if (!code) {
        showToast('Enter a promo code', 'error');
        return;
    }
    
    if (promoCodes[code]) {
        appliedPromo = promoCodes[code];
        updateCartTotal();
        showToast(`Promo code ${code} applied! ${promoCodes[code].description}`, 'success');
        promoField.value = '';
    } else {
        showToast('Invalid promo code', 'error');
        appliedPromo = null;
        updateCartTotal();
    }
});

// ==================== Checkout ====================
const checkoutForm = document.getElementById('checkoutForm');

checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const order = {
        id: 'ORD-' + Date.now(),
        date: new Date().toLocaleDateString(),
        items: cart.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            subtotal: item.price * item.quantity
        })),
        subtotal: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        discount: appliedDiscount,
        shipping: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) > 50 ? 0 : 9.99,
        total: (cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + 9.99 - appliedDiscount),
        status: 'Processing',
        promoApplied: appliedPromo ? appliedPromo.description : 'None'
    };
    
    orders.push(order);
    saveOrders();
    cart = [];
    appliedPromo = null;
    appliedDiscount = 0;
    saveCart();
    updateCartCount();
    
    checkoutForm.reset();
    checkoutModal.style.display = 'none';
    
    showToast('Order placed successfully! Order ID: ' + order.id, 'success');
    
    setTimeout(() => {
        navigateToSection('products');
    }, 1500);
});

function saveOrders() {
    localStorage.setItem('orders', JSON.stringify(orders));
}

function loadOrders() {
    orders = JSON.parse(localStorage.getItem('orders')) || [];
}

// ==================== Account & Orders ====================
accountBtn.addEventListener('click', () => {
    accountModal.style.display = 'flex';
    displayAccountOrders();
});

closeAccountModal.addEventListener('click', () => {
    accountModal.style.display = 'none';
});

function displayAccountOrders() {
    const ordersList = document.getElementById('ordersList');
    
    if (orders.length === 0) {
        ordersList.innerHTML = '<p>You haven\'t placed any orders yet.</p>';
        return;
    }
    
    ordersList.innerHTML = orders.map(order => `
        <div class="order-item">
            <div class="order-header">
                <strong>${order.id}</strong>
                <span>${order.date}</span>
                <span class="order-status">${order.status}</span>
            </div>
            <div class="order-items">
                ${order.items.map(item => `
                    <div class="order-product">
                        <span>${item.name}</span>
                        <span>x${item.quantity}</span>
                        <span>$${item.subtotal.toFixed(2)}</span>
                    </div>
                `).join('')}
            </div>
            <div class="order-summary">
                <p>Subtotal: $${order.subtotal.toFixed(2)}</p>
                ${order.discount > 0 ? `<p>Discount: -$${order.discount.toFixed(2)}</p>` : ''}
                <p>Shipping: ${order.shipping === 0 ? 'FREE' : '$' + order.shipping.toFixed(2)}</p>
                <strong>Total: $${order.total.toFixed(2)}</strong>
                <p style="font-size: 0.85rem; color: var(--text-secondary);">Promo: ${order.promoApplied}</p>
            </div>
        </div>
    `).join('');
}

// ==================== Tab Navigation ====================
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.getAttribute('data-tab');
        
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        document.querySelectorAll('.tab-content').forEach(content => {
            content.style.display = 'none';
        });
        
        const targetTab = document.getElementById(tabName);
        if (targetTab) {
            targetTab.style.display = 'block';
        }
    });
});

// ==================== Wishlist ====================
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const index = wishlist.findIndex(item => item.id === productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast('Removed from wishlist', 'info');
    } else {
        wishlist.push(product);
        showToast('Added to wishlist!', 'success');
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// ==================== Search & Filter ====================
searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
});

function performSearch() {
    const query = searchInput.value.toLowerCase();
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query)
    );
    displayProducts(filtered);
}

categoryFilter.addEventListener('change', applyFilters);
sortFilter.addEventListener('change', applyFilters);

function applyFilters() {
    let filtered = products;
    
    const category = categoryFilter.value;
    const sort = sortFilter.value;
    
    if (category) {
        filtered = filtered.filter(p => p.category === category);
    }
    
    switch(sort) {
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
            filtered.sort((a, b) => b.id - a.id);
            break;
        default:
            filtered.sort((a, b) => b.featured - a.featured);
    }
    
    displayProducts(filtered);
}

// ==================== Contact Form ====================
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
    contactForm.reset();
});

// ==================== Theme Toggle ====================
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Load theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// ==================== Toast Notification ====================
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ==================== Modal Close on Outside Click ====================
window.addEventListener('click', (e) => {
    if (e.target === cartModal) cartModal.style.display = 'none';
    if (e.target === checkoutModal) checkoutModal.style.display = 'none';
    if (e.target === accountModal) accountModal.style.display = 'none';
    if (e.target === adminLoginModal) adminLoginModal.style.display = 'none';
    if (e.target === adminDashboardModal) adminDashboardModal.style.display = 'none';
});
