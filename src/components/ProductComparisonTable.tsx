
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const comparisonData = {
  categories: [
    { id: "electrolytes", name: "Electrolytes" },
    { id: "vitamins", name: "Vitamins" },
    { id: "flavor", name: "Flavor Profile" },
    { id: "ingredients", name: "Key Ingredients" },
  ],
  products: [
    { 
      id: "original", 
      name: "Original", 
      color: "text-[#43B7E8]",
      specs: {
        electrolytes: "Essential electrolyte drink mix",
        vitamins: "Vitamin C, Vitamin B3 (Niacin), Vitamin B5 (Pantothenic Acid), Vitamin B6, Vitamin B12",
        flavor: "Blue Raspberry",
        ingredients: "Electrolytes (Sodium, Potassium, Magnesium, Chloride), Dextrose",
      }
    },
    { 
      id: "glow", 
      name: "Glow", 
      color: "text-[#E86AA3]",
      specs: {
        electrolytes: "Electrolyte drink mix for Hair, Skin & Nails Health",
        vitamins: "Vitamin C, Vitamin E, Vitamin B3, Vitamin B5, Vitamin B6, Vitamin B12",
        flavor: "Mixed Berries",
        ingredients: "Collagen, Hyaluronic Acid, Zinc, Electrolytes (Sodium, Potassium, Magnesium)",
      }
    },
    { 
      id: "kids", 
      name: "Kids", 
      color: "text-[#B8C95E]",
      specs: {
        electrolytes: "Essential electrolyte drink mix for kids",
        vitamins: "Vitamin C, Vitamin B3, Vitamin B5, Vitamin B6, Vitamin B12",
        flavor: "Watermelon",
        ingredients: "Electrolytes (Sodium, Potassium, Magnesium), Natural Sweeteners",
      }
    },
    { 
      id: "charge", 
      name: "Charge", 
      color: "text-[#F39A68]",
      specs: {
        electrolytes: "Essential electrolyte drink mix",
        vitamins: "Vitamin C, Vitamin B3, Vitamin B5, Vitamin B6, Vitamin B12",
        flavor: "Coffee",
        ingredients: "Caffeine, Electrolytes (Sodium, Potassium, Magnesium), Dextrose",
      }
    },
  ],
};

const ProductComparisonTable = () => {
  return (
    <div className="py-16 bg-[#E9F6FE]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Comparison Table</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Stay refreshed with Original, glow with Glow, fuel kids with Kids, and boost energy with Charge—all packed with electrolytes and vitamins.
        </p>

        <div className="overflow-x-auto rounded-lg">
          <Table className="bg-white border">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]"></TableHead>
                {comparisonData.products.map((product) => (
                  <TableHead key={product.id} className="text-center">
                    <span className={`font-bold text-lg ${product.color}`}>
                      {product.name}
                    </span>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell className="font-medium">{category.name}</TableCell>
                  {comparisonData.products.map((product) => (
                    <TableCell 
                      key={`${category.id}-${product.id}`} 
                      className={`text-center ${product.color} text-sm`}
                    >
                      {product.specs[category.id as keyof typeof product.specs]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ProductComparisonTable;
