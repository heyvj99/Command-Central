import "./App.css";
import Header from "@/components/Header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full max-h-[100vh] overflow-hidden">
        <SidebarTrigger />
        <div className="w-full h-full flex flex-col gap-1 overflow-hidden">
          <Header />
          {/* main container below the header */}
          <div>
            <Outlet />
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
}

export default App;
