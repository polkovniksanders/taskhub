import React from 'react';
import type { Metadata } from 'next';
import Messages from '@/app/messages/Messages';

export const metadata: Metadata = {
  title: 'Messages',
};

export default function Page() {
  return <Messages />;
}
