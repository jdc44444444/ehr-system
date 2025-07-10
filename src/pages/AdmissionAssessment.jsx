import React from 'react';
import { Card, CardContent } from '../components/Card';
import { Button } from '../components/Button';
import { ClipboardCheck, AlertCircle } from 'lucide-react';

function AdmissionAssessment() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Admission Assessment</h1>
        <Button icon={ClipboardCheck}>Complete Assessment</Button>
      </div>
      <Card>
        <CardContent>
          <div className="flex items-center text-gray-600">
            <AlertCircle className="h-5 w-5 mr-2" />
            <p>Multi-step admission assessment will be displayed here.</p>
          </div>
          <p className="text-sm text-gray-500 mt-2">Includes fall risk, elopement risk, and service level determination.</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default AdmissionAssessment;
