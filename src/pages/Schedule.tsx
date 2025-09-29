import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Check, 
  Edit2, 
  Trash2, 
  Copy, 
  Clock, 
  BookOpen, 
  Code, 
  Database, 
  Zap,
  Cloud,
  Brain,
  Mic,
  Video,
  GripVertical
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

interface Task {
  id: string;
  timeSlot: string;
  title: string;
  category: string;
  duration: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
}

const Schedule = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      timeSlot: '5-6 AM',
      title: 'Solve 5 DSA Problems',
      category: 'DSA',
      duration: '1h',
      priority: 'high',
      completed: false
    },
    {
      id: '2',
      timeSlot: '6-7 AM',
      title: 'Read System Design Chapter',
      category: 'System Design',
      duration: '1h',
      priority: 'high',
      completed: false
    },
    {
      id: '3',
      timeSlot: '7-8 AM',
      title: 'React Course Video',
      category: 'React',
      duration: '1h',
      priority: 'medium',
      completed: false
    },
    {
      id: '4',
      timeSlot: '8-9 AM',
      title: 'SQL Queries Practice',
      category: 'SQL',
      duration: '1h',
      priority: 'medium',
      completed: false
    },
    {
      id: '5',
      timeSlot: '9-10 AM',
      title: 'Python Exercises',
      category: 'Python',
      duration: '1h',
      priority: 'low',
      completed: false
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [draggedTask, setDraggedTask] = useState<string | null>(null);
  const [newTask, setNewTask] = useState({
    timeSlot: '10-11 AM',
    title: '',
    category: 'DSA',
    duration: '1h',
    priority: 'medium' as 'high' | 'medium' | 'low'
  });

  const categories = [
    { id: 'DSA', name: 'DSA', icon: '📘' },
    { id: 'System Design', name: 'System Design', icon: '📐' },
    { id: 'React', name: 'React', icon: '⚛' },
    { id: 'Python', name: 'Python', icon: '🐍' },
    { id: 'Cloud', name: 'Cloud', icon: '☁' },
    { id: 'SQL', name: 'SQL', icon: '📊' },
    { id: 'AIML', name: 'AI/ML', icon: '🤖' },
    { id: 'Mock Interview', name: 'Mock Interview', icon: '🎤' },
    { id: 'Video', name: 'Video', icon: '🎥' }
  ];

  const timeSlots = [
    '5-6 AM', '6-7 AM', '7-8 AM', '8-9 AM', '9-10 AM', '10-11 AM',
    '11-12 PM', '12-1 PM', '1-2 PM', '2-3 PM', '3-4 PM', '4-5 PM',
    '5-6 PM', '6-7 PM', '7-8 PM', '8-9 PM', '9-10 PM', '10-11 PM'
  ];

  const durations = ['30m', '1h', '2h', '3h'];

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat?.icon || '📘';
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return '🔥';
      case 'medium': return '⚡';
      case 'low': return '🌱';
      default: return '⚡';
    }
  };

  const handleAddTask = () => {
    if (newTask.title.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        ...newTask,
        completed: false
      };
      setTasks([...tasks, task]);
      setNewTask({
        timeSlot: '10-11 AM',
        title: '',
        category: 'DSA',
        duration: '1h',
        priority: 'medium'
      });
      setShowModal(false);
    }
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setNewTask({
      timeSlot: task.timeSlot,
      title: task.title,
      category: task.category,
      duration: task.duration,
      priority: task.priority
    });
    setShowModal(true);
  };

  const handleUpdateTask = () => {
    if (editingTask && newTask.title.trim()) {
      setTasks(tasks.map(task => 
        task.id === editingTask.id 
          ? { ...task, ...newTask }
          : task
      ));
      setEditingTask(null);
      setNewTask({
        timeSlot: '10-11 AM',
        title: '',
        category: 'DSA',
        duration: '1h',
        priority: 'medium'
      });
      setShowModal(false);
    }
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleComplete = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id 
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  const handleCopyYesterday = () => {
    // Simulate copying yesterday's schedule
    const yesterdayTasks = [
      {
        id: Date.now().toString(),
        timeSlot: '5-6 AM',
        title: 'Morning Exercise',
        category: 'Health',
        duration: '1h',
        priority: 'high' as 'high' | 'medium' | 'low',
        completed: false
      },
      {
        id: (Date.now() + 1).toString(),
        timeSlot: '6-7 AM',
        title: 'Read Tech News',
        category: 'Reading',
        duration: '1h',
        priority: 'medium' as 'high' | 'medium' | 'low',
        completed: false
      }
    ];
    setTasks([...tasks, ...yesterdayTasks]);
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, taskId: string) => {
    setDraggedTask(taskId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetTaskId: string) => {
    e.preventDefault();
    if (!draggedTask || draggedTask === targetTaskId) return;

    const draggedIndex = tasks.findIndex(task => task.id === draggedTask);
    const targetIndex = tasks.findIndex(task => task.id === targetTaskId);

    const newTasks = [...tasks];
    const [draggedTaskData] = newTasks.splice(draggedIndex, 1);
    newTasks.splice(targetIndex, 0, draggedTaskData);

    setTasks(newTasks);
    setDraggedTask(null);
  };

  const handleDragEnd = () => {
    setDraggedTask(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-xl font-bold text-gray-800">Tomorrow's Plan</h1>
          <Button
            onClick={handleCopyYesterday}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg shadow-lg"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy Yesterday
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 pb-20">
        <div className="space-y-4">
          {tasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              draggable
              onDragStart={(e: any) => handleDragStart(e, task.id)}
              onDragOver={handleDragOver}
              onDrop={(e: any) => handleDrop(e, task.id)}
              onDragEnd={handleDragEnd}
              className={`bg-white rounded-2xl p-4 shadow-lg border border-gray-100 ${
                task.completed ? 'opacity-60' : ''
              }`}
              style={{
                boxShadow: '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff'
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <GripVertical className="w-5 h-5 text-gray-400 cursor-move" />
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium text-gray-600">{task.timeSlot}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{getCategoryIcon(task.category)}</span>
                  <span className={`text-sm ${getPriorityColor(task.priority)}`}>
                    {getPriorityIcon(task.priority)}
                  </span>
                </div>
              </div>

              <div className="mt-3">
                <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                  {task.title}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{task.duration}</span>
                    <span>{task.category}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={() => handleToggleComplete(task.id)}
                      className={`w-8 h-8 rounded-full ${
                        task.completed 
                          ? 'bg-green-500 hover:bg-green-600' 
                          : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    >
                      <Check className="w-4 h-4 text-white" />
                    </Button>
                    
                    <Button
                      onClick={() => handleEditTask(task)}
                      className="w-8 h-8 rounded-full bg-blue-100 hover:bg-blue-200"
                    >
                      <Edit2 className="w-4 h-4 text-blue-600" />
                    </Button>
                    
                    <Button
                      onClick={() => handleDeleteTask(task.id)}
                      className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-20 right-4 z-20"
      >
        <Button
          onClick={() => setShowModal(true)}
          className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg"
          style={{
            boxShadow: '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff'
          }}
        >
          <Plus className="w-6 h-6 text-white" />
        </Button>
      </motion.div>

      {/* Add/Edit Task Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl"
              style={{
                boxShadow: '20px 20px 40px #d1d9e6, -20px -20px 40px #ffffff'
              }}
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                {editingTask ? 'Edit Task' : 'Add New Task'}
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time Slot</label>
                  <select
                    value={newTask.timeSlot}
                    onChange={(e) => setNewTask({ ...newTask, timeSlot: e.target.value })}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Task Title</label>
                  <Input
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    placeholder="Enter task title..."
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={newTask.category}
                    onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.icon} {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                    <select
                      value={newTask.duration}
                      onChange={(e) => setNewTask({ ...newTask, duration: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {durations.map(duration => (
                        <option key={duration} value={duration}>{duration}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                    <select
                      value={newTask.priority}
                      onChange={(e) => setNewTask({ ...newTask, priority: e.target.value as 'high' | 'medium' | 'low' })}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="high">🔥 High</option>
                      <option value="medium">⚡ Medium</option>
                      <option value="low">🌱 Low</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3 mt-6">
                <Button
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700"
                >
                  Cancel
                </Button>
                <Button
                  onClick={editingTask ? handleUpdateTask : handleAddTask}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
                >
                  {editingTask ? 'Update' : 'Add'} Task
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          <button
            onClick={() => navigate('/')}
            className="flex flex-col items-center py-2 px-3 text-gray-500 hover:text-blue-500"
          >
            <div className="w-6 h-6 rounded-full bg-gray-200 mb-1"></div>
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center py-2 px-3 text-blue-500">
            <div className="w-6 h-6 rounded-full bg-blue-500 mb-1"></div>
            <span className="text-xs">Schedule</span>
          </button>
          <button className="flex flex-col items-center py-2 px-3 text-gray-500 hover:text-blue-500">
            <div className="w-6 h-6 rounded-full bg-gray-200 mb-1"></div>
            <span className="text-xs">Tasks</span>
          </button>
          <button className="flex flex-col items-center py-2 px-3 text-gray-500 hover:text-blue-500">
            <div className="w-6 h-6 rounded-full bg-gray-200 mb-1"></div>
            <span className="text-xs">Resources</span>
          </button>
          <button className="flex flex-col items-center py-2 px-3 text-gray-500 hover:text-blue-500">
            <div className="w-6 h-6 rounded-full bg-gray-200 mb-1"></div>
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
