import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/Card';
import { Button } from '../components/Button';
import { Users, FileText, Calendar, TrendingUp, Plus, ChevronRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

function Dashboard() {
  const { currentUser } = useAuth();

  const stats = [
    { title: 'Total Clients', value: '48', change: '+2', icon: Users, color: 'bg-blue-100 text-blue-600' },
    { title: 'Present Today', value: '42', change: '87.5%', icon: Calendar, color: 'bg-green-100 text-green-600' },
    { title: 'Pending Tasks', value: '12', change: '4 urgent', icon: FileText, color: 'bg-orange-100 text-orange-600' },
    { title: 'Compliance Rate', value: '98%', change: '+2%', icon: TrendingUp, color: 'bg-purple-100 text-purple-600' },
  ];

  const quickActions = [
    { title: 'Document Vital Signs', description: 'Record today\'s vitals', link: '/vitals' },
    { title: 'Client Assessments', description: '3 assessments due', link: '/assessments' },
    { title: 'Monthly Reports', description: 'Generate reports', link: '/reports' },
  ];

  const recentActivity = [
    { action: 'Vital signs recorded for John Smith', time: '2 minutes ago', user: 'Maria Garcia, RN' },
    { action: 'Monthly nursing note completed for Jane Doe', time: '15 minutes ago', user: 'Sarah Johnson, RN' },
    { action: 'Care plan updated for Robert Brown', time: '1 hour ago', user: 'Emily Chen, RN' },
    { action: 'New admission: Michael Davis', time: '2 hours ago', user: 'Sarah Johnson, RN' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Good morning, {currentUser?.name?.split(' ')[0]}
          </h1>
          <p className="text-gray-600 mt-1">
            Here's what's happening at your facility today
          </p>
        </div>
        <Link to="/clients/new">
          <Button icon={Plus}>New Admission</Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <span className="text-sm text-gray-500">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-sm text-gray-600 mt-1">{stat.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickActions.map((action, index) => (
            <Link key={index} to={action.link}>
              <Card hover className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{action.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <Card>
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          <Link to="/activity">
            <Button variant="ghost" size="sm">View all</Button>
          </Link>
        </div>
        <div className="divide-y divide-gray-100">
          {recentActivity.map((item, index) => (
            <div key={index} className="px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.action}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.time} by {item.user}</p>
                </div>
                <Button variant="ghost" size="sm">View</Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default Dashboard;
