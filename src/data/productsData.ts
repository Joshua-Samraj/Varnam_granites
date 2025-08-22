export interface Product {
    id: number;
    name: string;
    category: 'Marble' | 'Granite' | 'Quartz';
    image: string;
    gallery: string[];
    description: string;
    price: string;
    rating: number;
    reviews: number;
    origin: string;
    finish: string[];
    thickness: string[];
    applications: string[];
    features: string[];
}

export const categories = ['All', 'Marble', 'Granite', 'Quartz'];

export const products: Product[] = [
    {
        id: 1,
        name: "Carrara White Marble",
        category: "Marble",
        image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
        gallery: [
            "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
            "https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
        ],
        description: "Classic Italian marble with distinctive gray veining on a white background. Perfect for luxury applications.",
        price: "From $45/sq ft",
        rating: 4.8,
        reviews: 124,
        origin: "Carrara, Italy",
        finish: ["Polished", "Honed", "Brushed"],
        thickness: ["2cm", "3cm"],
        applications: ["Countertops", "Flooring", "Wall Cladding", "Sculptures"],
        features: ["Heat Resistant", "Scratch Resistant", "Natural Beauty", "Timeless Appeal"]
    },
    {
        id: 2,
        name: "Black Galaxy Granite",
        category: "Granite",
        image: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
        gallery: [
            "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
        ],
        description: "Stunning black granite with golden speckles that shimmer like stars in the night sky.",
        price: "From $35/sq ft",
        rating: 4.9,
        reviews: 89,
        origin: "Andhra Pradesh, India",
        finish: ["Polished", "Flamed"],
        thickness: ["2cm", "3cm"],
        applications: ["Kitchen Countertops", "Bathroom Vanities", "Flooring"],
        features: ["Extremely Durable", "Stain Resistant", "Low Maintenance", "Unique Pattern"]
    },
    {
        id: 3,
        name: "Calacatta Gold Marble",
        category: "Marble",
        image: "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
        gallery: [
            "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
        ],
        description: "Luxurious marble with dramatic gold and gray veining on a pristine white background.",
        price: "From $65/sq ft",
        rating: 4.7,
        reviews: 156,
        origin: "Carrara, Italy",
        finish: ["Polished", "Honed"],
        thickness: ["2cm", "3cm"],
        applications: ["Luxury Countertops", "Feature Walls", "Fireplace Surrounds"],
        features: ["Premium Quality", "Unique Veining", "Luxury Appeal", "Investment Value"]
    },
    {
        id: 4,
        name: "Kashmir White Granite",
        category: "Granite",
        image: "https://images.pexels.com/photos/1571475/pexels-photo-1571475.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
        gallery: [
            "https://images.pexels.com/photos/1571475/pexels-photo-1571475.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
        ],
        description: "Elegant white granite with subtle gray and burgundy speckles, perfect for modern kitchens.",
        price: "From $40/sq ft",
        rating: 4.6,
        reviews: 78,
        origin: "Andhra Pradesh, India",
        finish: ["Polished", "Honed"],
        thickness: ["2cm", "3cm"],
        applications: ["Kitchen Countertops", "Bathroom Vanities", "Commercial Surfaces"],
        features: ["Durable", "Easy Maintenance", "Versatile", "Cost Effective"]
    },
    {
        id: 5,
        name: "Calacatta Quartz",
        category: "Quartz",
        image: "https://images.pexels.com/photos/1571480/pexels-photo-1571480.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
        gallery: [
            "https://images.pexels.com/photos/1571480/pexels-photo-1571480.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
        ],
        description: "Engineered quartz with dramatic white and gold veining inspired by natural Calacatta marble.",
        price: "From $55/sq ft",
        rating: 4.8,
        reviews: 92,
        origin: "Engineered",
        finish: ["Polished", "Matte"],
        thickness: ["2cm", "3cm"],
        applications: ["Kitchen Countertops", "Island Tops", "Backsplashes", "Commercial Surfaces"],
        features: ["Non-Porous", "Stain Resistant", "Consistent Pattern", "Durable"]
    },
    {
        id: 6,
        name: "Emperador Dark Marble",
        category: "Marble",
        image: "https://images.pexels.com/photos/1571485/pexels-photo-1571485.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
        gallery: [
            "https://images.pexels.com/photos/1571485/pexels-photo-1571485.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
        ],
        description: "Rich brown marble with distinctive white and light brown veining, adding warmth to any space.",
        price: "From $50/sq ft",
        rating: 4.5,
        reviews: 67,
        origin: "Spain",
        finish: ["Polished", "Honed"],
        thickness: ["2cm", "3cm"],
        applications: ["Feature Walls", "Bathroom Vanities", "Flooring", "Decorative Elements"],
        features: ["Rich Color", "Distinctive Veining", "Luxury Appeal", "Warm Tones"]
    }
];