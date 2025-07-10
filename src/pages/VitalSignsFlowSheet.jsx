import React from 'react';
import { Card, CardContent } from '../components/Card';
import { Button } from '../components/Button';
import { Activity, TrendingUp } from 'lucide-react';

function VitalSignsFlowSheet() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Vital Signs Flow Sheet</h1>
        <Button icon={Activity}>Record Vitals</Button>
      </div>
      <Card>
        <CardContent>
          <div className="flex items-center text-gray-600">
            <TrendingUp className="h-5 w-5 mr-2" />
            <p>Monthly vital signs tracker and trend charts will be displayed here.</p>
          </div>
          <p className="text-sm text-gray-500 mt-2">Tracks required monthly vitals with automatic alerts.</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default VitalSignsFlowSheet;
