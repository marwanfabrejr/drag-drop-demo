import { DragDrop } from '@/components/DragDrop';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='container mx-auto h-screen'>
      <h1 className='text-xl font-bold text-center my-4'>Drag and Drop Demo</h1>
      <DragDrop />
    </div>
  );
}
