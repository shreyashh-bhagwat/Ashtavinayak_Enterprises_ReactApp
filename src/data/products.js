import foodGrade from '../assets/food grade.png';
import carryBag from '../assets/carrybag and envelop.png';
import mgPaper from '../assets/kraft rolls.png';
import duplexPaper from '../assets/duplex paper.png';
import craftPaper from '../assets/craft paper.png';
import recycled from '../assets/recycled.png';

export const products = [
  {
    id: 1,
    name: "Food Grade Paper",
    category: "Paper",
    image: foodGrade,
    short: "Safe & hygienic paper ideal for food packaging applications.",
    specs: [
      "Food contact approved",
      "Various GSM options",
      "Hygienic and safe",
      "Customizable sizes",
      "Bulk supply available"
    ]
  },
  {
    id: 2,
    name: "Carry Bag & Envelope Paper",
    category: "Paper",
    image: carryBag,
    short: "Durable 70–100 GSM options for bags and envelopes.",
    specs: [
      "70-100 GSM thickness",
      "High durability",
      "Print-friendly surface",
      "Eco-friendly options",
      "Custom printing available"
    ]
  },
  {
    id: 3,
    name: "Kraft paper rolls and sheets",
    category: "Bags",
    image: mgPaper,
    short: "16-35 BF, 100–350 GSM paper bags for various applications.",
    specs: [
      "16-35 BF BF strength",
      "100-350 GSM options",
      "Multiple sizes available",
      "Custom branding",
      "Recyclable material"
    ]
  },
  {
    id: 4,
    name: "Duplex Paper",
    category: "Paper",
    image: duplexPaper,
    short: "Coated & uncoated duplex paper, 100–300 GSM for premium packaging.",
    specs: [
      "100-300 GSM range",
      "Coated and uncoated",
      "Excellent print quality",
      "Strong and durable",
      "Various finishes available"
    ]
  },
  {
    id: 5,
    name: "Test Liner & Semi-Chemical Paper",
    category: "Paper",
    image: craftPaper,
    short: "Strong, versatile, eco-friendly kraft liner and semi-chemical paper.",
    specs: [
      "High strength",
      "Eco-friendly",
      "Versatile applications",
      "Various GSM options",
      "Sustainable sourcing"
    ]
  },
  {
    id: 6,
    name: "Recycled Eco-Friendly Paper",
    category: "Paper",
    image: recycled,
    short: "Sustainable, recycled paper options for environmentally conscious packaging.",
    specs: [
      "100% recycled content",
      "Environmentally friendly",
      "Various GSM options",
      "Cost-effective",
      "Sustainable packaging",
      "Biodegradable"
    ]
  }
];

export const categories = [
  "All",
  "Paper",
  "Bags"
];
