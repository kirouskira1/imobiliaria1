import React from 'react';
import Layout from '../components/layout/Layout';

const ChatPage: React.FC = () => {
  return (
    <Layout>
      <div className="container max-w-4xl px-4 py-8 mx-auto animate-fade-in">
        <h1 className="text-3xl font-bold mb-8">Chat</h1>
        <p>Página de chat com corretores ou suporte. Conteúdo em breve.</p>
      </div>
    </Layout>
  );
};

export default ChatPage;
