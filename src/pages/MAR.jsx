import React from 'react';
import { Card, CardContent } from '../components/Card';
import { Button } from '../components/Button';
import { Save, Download, Calendar } from 'lucide-react';

function MAR() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Medication Administration Record (MAR)</h1>
        <div className="flex space-x-2">
          <Button icon={Save}>Save MAR</Button>
          <Button icon={Download} variant="secondary">Export Excel</Button>
        </div>
      </div>
      <Card>
        <CardContent>
          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-2" />
            <p>31-day medication grid will be displayed here.</p>
          </div>
          <p className="text-sm text-gray-500 mt-2">Click cells to document medication administration.</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default MAR;
