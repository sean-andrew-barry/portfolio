import { Outlet } from 'react-router-dom';

export default function NoNavLayout() {
  return (
    <main className="p-4">
      <Outlet />
    </main>
  );
}
