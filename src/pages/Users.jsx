import React from 'react';
import { Card, CardHeader, CardContent } from '../components/Card';
import { Button } from '../components/Button';
import { Plus, Edit2, Trash2, Shield } from 'lucide-react';

function Users() {
  const users = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', role: 'Administrator', status: 'Active' },
    { id: 2, name: 'Mike Chen', email: 'mike@example.com', role: 'Nurse', status: 'Active' },
    { id: 3, name: 'Emily Davis', email: 'emily@example.com', role: 'Medication Technician', status: 'Active' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
        <Button icon={Plus}>Add New User</Button>
      </div>

      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">System Users</h2>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Email</th>
                  <th className="text-left py-3 px-4">Role</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{user.name}</td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center">
                        <Shield className="h-4 w-4 mr-1 text-gray-500" />
                        {user.role}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                        {user.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" icon={Edit2}>Edit</Button>
                        <Button size="sm" variant="ghost" icon={Trash2} className="text-red-600">Delete</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Users;
