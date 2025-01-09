import React, { useState } from 'react';
import { Trophy, Play, Home } from 'lucide-react';

const SuitIcon = ({ type, className = "", size = 24 }) => {
  const suits = {
    spades: (
      <path d="M12 2L6 12C6 16 9 18 12 18C15 18 18 16 18 12L12 2ZM12 18V22" 
        stroke="currentColor" fill="currentColor" strokeWidth="2" strokeLinecap="round" />
    ),
    hearts: (
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
        fill="currentColor" />
    ),
    diamonds: (
      <path d="M12 2L22 12L12 22L2 12L12 2Z" 
        fill="currentColor" />
    ),
    clubs: (
      <path d="M12 3C10 3 8.5 4 8.5 6.5C8.5 9 11 11 12 12C13 11 15.5 9 15.5 6.5C15.5 4 14 3 12 3ZM12 12C10 12 8.5 13 8.5 15.5C8.5 18 11 20 12 21C13 20 15.5 18 15.5 15.5C15.5 13 14 12 12 12Z" 
        stroke="currentColor" fill="currentColor" strokeWidth="2" />
    )
  };

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {suits[type]}
    </svg>
  );
};

const NavBar = ({ setCurrentPage }) => {
  return (
    <nav className="bg-gray-900 border-b border-red-800">
      <div className="container mx-auto flex justify-between items-center p-4">
        <button 
          onClick={() => setCurrentPage('home')} 
          className="text-red-500 text-2xl font-bold flex items-center gap-3 hover:text-red-400 transition-colors"
        >
          <div className="flex gap-1">
            <SuitIcon type="spades" className="text-white" />
            <SuitIcon type="hearts" className="text-red-500" />
            <SuitIcon type="diamonds" className="text-red-500" />
            <SuitIcon type="clubs" className="text-white" />
          </div>
          PokerBots Arena
        </button>
        <div className="flex gap-8">
          <button 
            onClick={() => setCurrentPage('play')} 
            className="text-white hover:text-red-400 flex items-center gap-2 transition-colors"
          >
            <Play size={20} /> Play
          </button>
          <button 
            onClick={() => setCurrentPage('leaderboard')} 
            className="text-white hover:text-red-400 flex items-center gap-2 transition-colors"
          >
            <Trophy size={20} /> Leaderboard
          </button>
        </div>
      </div>
    </nav>
  );
};

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gray-900 bg-opacity-95">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4 opacity-20">
            <SuitIcon type="spades" size={48} className="text-white" />
            <SuitIcon type="hearts" size={48} className="text-red-500" />
            <SuitIcon type="diamonds" size={48} className="text-red-500" />
            <SuitIcon type="clubs" size={48} className="text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-white">Welcome to PokerBots Arena</h1>
          <p className="text-xl text-gray-400">Where Code Meets Cards - Deploy Your Python Poker Bot Today</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg border border-red-900 shadow-lg p-8 transform hover:scale-105 transition-transform">
            <div className="absolute top-4 right-4">
              <SuitIcon type="spades" className="text-white opacity-50" />
            </div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
              <Play className="text-red-500" /> Enter the Game
            </h2>
            <p className="text-gray-400 mb-6">
              Upload your Python bot and watch it compete in real-time against other players' bots 
              in the ultimate test of strategy and skill.
            </p>
            <button 
              onClick={() => setCurrentPage('play')}
              className="w-full bg-red-600 text-white px-6 py-3 rounded font-bold hover:bg-red-700 transition-colors shadow-lg"
            >
              Deploy Your Bot
            </button>
          </div>
          
          <div className="bg-gray-800 rounded-lg border border-red-900 shadow-lg p-8 transform hover:scale-105 transition-transform">
            <div className="absolute top-4 right-4">
              <SuitIcon type="hearts" className="text-red-500 opacity-50" />
            </div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
              <Trophy className="text-yellow-500" /> Champion's Corner
            </h2>
            <p className="text-gray-400 mb-6">
              See how your bot stacks up against the competition. Check out the rankings
              and climb your way to the top of the leaderboard.
            </p>
            <button 
              onClick={() => setCurrentPage('leaderboard')}
              className="w-full bg-yellow-600 text-white px-6 py-3 rounded font-bold hover:bg-yellow-700 transition-colors shadow-lg"
            >
              View Rankings
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

const PlayPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
          Deploy Your Bot
          <SuitIcon type="diamonds" className="text-red-500" />
        </h1>
        
        <div className="bg-gray-800 rounded-lg border border-red-900 shadow-lg p-8 max-w-2xl mx-auto">
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-bold mb-2">
              Bot Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-red-500 text-white"
              placeholder="Enter your bot's name"
            />
          </div>
          
          <div className="mb-8">
            <label className="block text-gray-300 text-sm font-bold mb-2">
              Upload Python File
            </label>
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-red-500 transition-colors">
              <input
                type="file"
                accept=".py"
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-600 transition-colors inline-flex items-center gap-2"
              >
                <Play size={20} />
                Choose Your Bot File
              </label>
            </div>
          </div>
          
          <button className="w-full bg-red-600 text-white px-6 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg flex items-center justify-center gap-2">
            <Play size={20} />
            Deploy Bot to Arena
          </button>
        </div>
      </div>
    </div>
  );
};

const LeaderboardPage = () => {
  const sampleData = [
    { rank: 1, botName: "MasterBot", wins: 150, totalGames: 200, winRate: "75%" },
    { rank: 2, botName: "PokerPro", wins: 140, totalGames: 200, winRate: "70%" },
    { rank: 3, botName: "AIPlayer", wins: 130, totalGames: 200, winRate: "65%" }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
          Bot Rankings
          <Trophy className="text-yellow-500" />
        </h1>
        
        <div className="bg-gray-800 rounded-lg border border-red-900 shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-900">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase">Rank</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase">Bot Name</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase">Wins</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase">Total Games</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase">Win Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {sampleData.map((bot) => (
                <tr key={bot.rank} className="hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-white font-bold flex items-center gap-2">
                      {bot.rank === 1 && <Trophy className="text-yellow-500" size={16} />}
                      {bot.rank}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300">{bot.botName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-green-400">{bot.wins}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300">{bot.totalGames}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-red-400">{bot.winRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'play':
        return <PlayPage />;
      case 'leaderboard':
        return <LeaderboardPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <NavBar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;
