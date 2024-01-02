import Navbar from '@/components/navbar/Navbar';
import Playground from '@/components/playground/Playground';
import Sidebar from '@/components/sidebar/Sidebar';

export default function Home() {
  return (
    <main className="h-screen w-full flex ">
      {/* Sidebar */}
      <div className="w-1/12 h-screen">
        <Sidebar />
      </div>
      {/* Main content */}
      <div className="flex-1 h-screen">
        <Navbar />
        <div className="h-[93%]">
          <Playground />
        </div>
      </div>
    </main>
  );
}
