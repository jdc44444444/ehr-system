import React from 'react';
import { Card, CardContent } from '../components/Card';
import { Button } from '../components/Button';
import { Printer } from 'lucide-react';

function FaceSheet() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Face Sheet</h1>
        <Button icon={Printer} onClick={() => window.print()}>
          Print
        </Button>
      </div>
      <Card>
        <CardContent>
          <p className="text-gray-600">Face sheet information will be displayed here.</p>
          <p className="text-sm text-gray-500 mt-2">This will include client demographics, contacts, and medical information.</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default FaceSheet;
