import React from 'react';
import { Card, CardHeader, CardContent } from '../components/Card';
import { Button } from '../components/Button';
import { Building, Clock, Bell, Database, Save } from 'lucide-react';

function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">System Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center">
              <Building className="h-5 w-5 mr-2 text-gray-600" />
              <h2 className="text-lg font-semibold">Facility Information</h2>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Facility Name</label>
                <input type="text" className="w-full px-3 py-2 border rounded-md" defaultValue="Sunshine Care Home" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">License Number</label>
                <input type="text" className="w-full px-3 py-2 border rounded-md" defaultValue="FCH-12345" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input type="text" className="w-full px-3 py-2 border rounded-md" defaultValue="123 Care Street, City, State 12345" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-gray-600" />
              <h2 className="text-lg font-semibold">Shift Times</h2>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Day Shift</label>
                <div className="flex space-x-2">
                  <input type="time" className="px-3 py-2 border rounded-md" defaultValue="07:00" />
                  <span className="py-2">to</span>
                  <input type="time" className="px-3 py-2 border rounded-md" defaultValue="15:00" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Evening Shift</label>
                <div className="flex space-x-2">
                  <input type="time" className="px-3 py-2 border rounded-md" defaultValue="15:00" />
                  <span className="py-2">to</span>
                  <input type="time" className="px-3 py-2 border rounded-md" defaultValue="23:00" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Night Shift</label>
                <div className="flex space-x-2">
                  <input type="time" className="px-3 py-2 border rounded-md" defaultValue="23:00" />
                  <span className="py-2">to</span>
                  <input type="time" className="px-3 py-2 border rounded-md" defaultValue="07:00" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center">
              <Bell className="h-5 w-5 mr-2 text-gray-600" />
              <h2 className="text-lg font-semibold">Notifications</h2>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">Email notifications for critical alerts</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">Medication reminders</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">Care plan updates</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Daily summary reports</span>
              </label>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center">
              <Database className="h-5 w-5 mr-2 text-gray-600" />
              <h2 className="text-lg font-semibold">Data Management</h2>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Auto-backup Schedule</label>
                <select className="w-full px-3 py-2 border rounded-md">
                  <option>Daily at midnight</option>
                  <option>Weekly on Sunday</option>
                  <option>Monthly on the 1st</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Data Retention Period</label>
                <select className="w-full px-3 py-2 border rounded-md">
                  <option>7 years</option>
                  <option>10 years</option>
                  <option>Indefinitely</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button icon={Save} size="lg">Save All Settings</Button>
      </div>
    </div>
  );
}

export default Settings;
