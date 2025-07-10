import React from 'react';
import { Card, CardContent } from '../components/Card';
import { Button } from '../components/Button';
import { Save, Download, FileText } from 'lucide-react';

function CarePlan() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Bi-Annual Care Plan</h1>
        <div className="flex space-x-2">
          <Button icon={Save}>Save Care Plan</Button>
          <Button icon={Download} variant="secondary">Export Word</Button>
        </div>
      </div>
      <Card>
        <CardContent>
          <div className="flex items-center text-gray-600">
            <FileText className="h-5 w-5 mr-2" />
            <p>Care plan with diagnoses, interventions, and goals will be displayed here.</p>
          </div>
          <p className="text-sm text-gray-500 mt-2">6-month care planning with intervention library.</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default CarePlan;
