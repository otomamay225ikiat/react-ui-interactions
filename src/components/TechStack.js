import React from 'react';

const TechStack = () => {
  return (
    <div className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-100">使用技術一覧</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-700 border border-gray-600 rounded-lg shadow-lg">
            <thead>
              <tr>
                <th className="py-4 px-6 text-left text-gray-300 border-b border-gray-600 bg-gray-600 w-1/2">カテゴリ</th>
                <th className="py-4 px-6 text-left text-gray-300 border-b border-gray-600 bg-gray-600 w-1/2">技術</th>
              </tr>
            </thead>
            <tbody>
              {/* フロントエンドライブラリ セクション */}
              <tr>
                <td className="py-4 px-6 font-semibold text-gray-300 border-b border-gray-600">フロントエンドライブラリ</td>
                <td className="py-4 px-6 break-all">
                  <span className="bg-gray-800 text-white rounded-full px-4 py-2 font-semibold shadow-md truncate">React</span>
                </td>
              </tr>

              {/* CSS フレームワーク セクション */}
              <tr>
                <td className="py-4 px-6 font-semibold text-gray-300 border-b border-gray-600">CSS フレームワーク</td>
                <td className="py-4 px-6 break-all">
                  <span className="bg-gray-800 text-white rounded-full px-4 py-2 font-semibold shadow-md truncate">Tailwind CSS</span>
                </td>
              </tr>

              {/* ビルドツール セクション */}
              <tr>
                <td className="py-4 px-6 font-semibold text-gray-300 border-b border-gray-600">ビルドツール</td>
                <td className="py-4 px-6 break-all">
                  <span className="bg-gray-800 text-white rounded-full px-4 py-2 font-semibold shadow-md truncate">Webpack</span>
                </td>
              </tr>

              {/* クラウドサービス セクション */}
              <tr>
                <td className="py-4 px-6 font-semibold text-gray-300 border-b border-gray-600">クラウドサービス/デプロイメント</td>
                <td className="py-4 px-6 break-all">
                  <span className="bg-gray-800 text-white rounded-full px-4 py-2 font-semibold shadow-md truncate">Cloudflare</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
