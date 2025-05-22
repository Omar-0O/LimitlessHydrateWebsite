
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
      color: "text-blue-500",
      specs: {
        electrolytes: "Essential electrolytes (264mg)",
        vitamins: "Vitamin C, Vitamin B6, Vitamin B12, Niacin, Pantothenic Acid",
        flavor: "Blue Raspberry",
        ingredients: "Potassium, Magnesium, Sodium, Calcium",
      }
    },
    { 
      id: "glow", 
      name: "Glow", 
      color: "text-pink-500",
      specs: {
        electrolytes: "Premium electrolytes (360mg)",
        vitamins: "Vitamin C, Vitamin D, Vitamin E, Biotin, Vitamin B12",
        flavor: "Mixed Berries",
        ingredients: "Collagen, Hyaluronic Acid, Biotin, Vitamin E",
      }
    },
    { 
      id: "kids", 
      name: "Kids", 
      color: "text-green-500",
      specs: {
        electrolytes: "Gentle electrolytes (220mg)",
        vitamins: "Vitamin C, Vitamin D3, Zinc, Calcium, Vitamin B6",
        flavor: "Watermelon",
        ingredients: "Potassium, Calcium, Vitamin C, Zinc",
      }
    },
    { 
      id: "charge", 
      name: "Charge", 
      color: "text-amber-500",
      specs: {
        electrolytes: "Essential electrolytes (264mg)",
        vitamins: "B-Vitamin Complex, Vitamin B12, B6, Niacin",
        flavor: "Coffee",
        ingredients: "Caffeine, L-Theanine, Potassium, Vitamin B12",
      }
    },
  ],
};

const ComparisonTable = () => {
  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-center mb-4">Comparison Table</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Which Limitless Hydrate product is right for you? Here's how they stack up with electrolytes, vitamins, and flavor profiles—all products zero sugar.
      </p>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]"></TableHead>
              {comparisonData.products.map((product) => (
                <TableHead key={product.id} className="text-center">
                  <span className={`font-bold ${product.color}`}>
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
  );
};

export default ComparisonTable;
