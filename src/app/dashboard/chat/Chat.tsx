import Image from 'next/image';

export default function Chat() {
  return (
    <div>
      <Image width={300} height={600} src='/images/chat-background.jpg' alt={'chat'} />
    </div>
  );
}
