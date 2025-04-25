import "./App.css";
import Header from "@/components/Header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { IncidentCardList } from "@/components/incident-card-list";
import { mockIncidents } from "@/data/mock-incidents";
import {
  ResourceFilterBar,
  type ResourceType,
} from "@/components/resource-filter-bar";

function App() {
  const handleResourceFilter = (filter: ResourceType) => {
    console.log("Selected resource filter:", filter);
  };

  return (
    // <div className="min-h-screen bg-background">
    //   <Header />
    //   <main className="container mx-auto p-4">

    //   </main>
    // </div>

    <SidebarProvider>
      <AppSidebar />
      <main className="w-full max-h-[100vh] overflow-hidden">
        <SidebarTrigger />
        <div className="w-full h-full flex flex-col gap-1 overflow-hidden">
          <Header />
          {/* main container below the header */}
          <div className="container mx-auto p-4 flex justify-start flex-row overflow-hidden">
            {/* 40% of the main container is the cards list */}
            <div className="p-4 w-[40%] h-full overflow-y-hidden">
              <IncidentCardList
                incidents={mockIncidents}
                onCardClick={(incident) =>
                  console.log("Clicked incident:", incident)
                }
              />
            </div>
            {/* the rest 60% is the maps and the resources. */}
            <div className="flex-1 min-w-0">
              <ResourceFilterBar onFilterChange={handleResourceFilter} />
              <div className="Image w-full h-full bg-amber-100"> </div>
            </div>
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
}

export default App;
