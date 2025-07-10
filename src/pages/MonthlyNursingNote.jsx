import React from 'react';
import { Card, CardContent } from '../components/Card';
import { Button } from '../components/Button';
import { Save, Printer, Download } from 'lucide-react';

function MonthlyNursingNote() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Monthly Nursing Note</h1>
        <div className="flex space-x-2">
          <Button icon={Save}>Save Draft</Button>
          <Button icon={Download} variant="secondary">Export Word</Button>
          <Button icon={Printer} variant="secondary">Print</Button>
        </div>
      </div>
      <Card>
        <CardContent>
          <p className="text-gray-600">Monthly nursing note form will be displayed here.</p>
          <p className="text-sm text-gray-500 mt-2">Includes attendance tracking and wet signature support.</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default MonthlyNursingNote;
