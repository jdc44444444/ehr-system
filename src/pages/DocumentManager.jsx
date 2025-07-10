import React from 'react';
import { Card, CardContent } from '../components/Card';
import { Button } from '../components/Button';
import { Upload, FileText, AlertCircle } from 'lucide-react';

function DocumentManager() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Document Manager</h1>
        <Button icon={Upload}>Upload Document</Button>
      </div>
      
      <Card className="border-dashed border-2 border-gray-300 bg-gray-50">
        <CardContent className="text-center py-12">
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Drag and drop files here, or click to browse</p>
          <p className="text-sm text-gray-500 mt-2">Supports PDF, JPG, PNG (Max 10MB)</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <div className="flex items-center text-yellow-600 mb-4">
            <AlertCircle className="h-5 w-5 mr-2" />
            <p className="font-medium">3 medical orders expiring within 30 days</p>
          </div>
          <div className="flex items-center text-gray-600">
            <FileText className="h-5 w-5 mr-2" />
            <p>Uploaded documents will be displayed here.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default DocumentManager;
