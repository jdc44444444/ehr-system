import React from 'react';
import { Card, CardContent } from '../components/Card';

function ClientProfile() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Client Profile</h1>
      <Card>
        <CardContent>
          <p className="text-gray-600">Client profile details will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default ClientProfile;
