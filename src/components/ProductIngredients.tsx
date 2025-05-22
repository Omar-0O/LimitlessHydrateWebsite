
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const ProductIngredients = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left Card - Ingredients & Key Benefits */}
      <Card className="bg-white rounded-lg">
        <CardContent className="p-6">
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-3">Ingredients & Key Benefits</h3>
            <p className="text-sm text-gray-700 mb-2">
              Our premium blend is designed to maximize hydration efficiency while providing essential nutrients.
            </p>
          </div>
          
          <div className="mb-8">
            <h4 className="font-bold text-sm mb-2">Electrolytes (Sodium, Potassium, Calcium)</h4>
            <ul className="text-xs text-gray-600 space-y-1 list-disc pl-4">
              <li>Rapidly replenishes lost minerals</li>
              <li>Supports proper muscle function</li>
              <li>Maintains optimal fluid balance</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h4 className="font-bold text-sm mb-2">Hyper-Osmolal Concentrate</h4>
            <ul className="text-xs text-gray-600 space-y-1 list-disc pl-4">
              <li>Expedites absorption into bloodstream</li>
              <li>Provides immediate hydration benefits</li>
              <li>Contains amino acid transport enhancers</li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h4 className="font-bold text-sm mb-2">Optimized Osmolality Formula</h4>
            <ul className="text-xs text-gray-600 space-y-1 list-disc pl-4">
              <li>Balanced for maximum cellular uptake</li>
              <li>Prevents bloating common with sports drinks</li>
              <li>Scientifically calibrated mineral ratios</li>
            </ul>
          </div>
          
          <div className="mb-2">
            <h4 className="font-bold text-sm mb-2">Blue Raspberry Flavor</h4>
            <ul className="text-xs text-gray-600 space-y-1 list-disc pl-4">
              <li>Natural flavors for refreshing taste</li>
              <li>No artificial colors or sweeteners</li>
              <li>Low calorie to support athletic performance</li>
            </ul>
          </div>
          
          <div className="mt-8 border-t pt-4">
            <h4 className="font-bold text-sm mb-3">Why Choose Limitless Hydrate?</h4>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 rounded-full p-3 mb-2">
                  <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-xs text-center">4x Faster Absorption</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 rounded-full p-3 mb-2">
                  <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xs text-center">Clinically Tested</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Right Card - Supplement Facts */}
      <Card className="bg-white rounded-lg">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold mb-4">Supplement Facts</h3>
          <div className="text-xs mb-2">Serving Size: 1 packet (4.8g)</div>
          <div className="text-xs mb-4">Servings Per Container: 30</div>
          
          <Table>
            <TableHeader>
              <TableRow className="border-b-2 border-t-2">
                <TableHead className="font-bold">Amount Per Serving</TableHead>
                <TableHead className="text-right font-bold">% Daily Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Calories 15</TableCell>
                <TableCell className="text-right">*</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Carbohydrates 4g</TableCell>
                <TableCell className="text-right">1%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Sugars 2g</TableCell>
                <TableCell className="text-right">*</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sodium 270mg</TableCell>
                <TableCell className="text-right">12%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Potassium 75mg</TableCell>
                <TableCell className="text-right">2%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Magnesium 40mg</TableCell>
                <TableCell className="text-right">10%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Chloride 45mg</TableCell>
                <TableCell className="text-right">2%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Calcium 20mg</TableCell>
                <TableCell className="text-right">2%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Phosphorus 10mg</TableCell>
                <TableCell className="text-right">1%</TableCell>
              </TableRow>
              <TableRow className="border-t-2 border-b-2">
                <TableCell colSpan={2} className="text-xs">
                  * Daily Value not established
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          
          <div className="mt-4 text-xs">
            <p className="mb-2"><strong>Other Ingredients:</strong> Citric Acid, Natural Flavors, Stevia Leaf Extract, Maltodextrin, Silicon Dioxide, Beta Carotene (color).</p>
            <p>Contains: None.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductIngredients;
