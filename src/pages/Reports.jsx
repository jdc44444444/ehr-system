import React from 'react';
import { Card, CardContent } from '../components/Card';
import { Button } from '../components/Button';
import { Download, FileText, Package } from 'lucide-react';

function Reports() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Reports & Export</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent>
            <FileText className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Monthly Nursing Notes</h3>
            <p className="text-sm text-gray-600 mb-4">Export all nursing notes as Word documents</p>
            <Button icon={Download} className="w-full">Export Notes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <FileText className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Monthly MARs</h3>
            <p className="text-sm text-gray-600 mb-4">Export medication records as Excel files</p>
            <Button icon={Download} className="w-full">Export MARs</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <FileText className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Care Plans</h3>
            <p className="text-sm text-gray-600 mb-4">Export all care plans as Word documents</p>
            <Button icon={Download} className="w-full">Export Plans</Button>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-blue-50 border-blue-200">
        <CardContent>
          <div className="flex items-center mb-4">
            <Package className="h-8 w-8 text-blue-600 mr-3" />
            <div>
              <h3 className="font-semibold text-gray-900">Export Complete Monthly Package</h3>
              <p className="text-sm text-gray-600">Download all documentation for the selected month</p>
            </div>
          </div>
          <Button icon={Package} size="lg" className="w-full">
            Download Complete Package (.zip)
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Reports;
