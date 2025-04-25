import './App.css'
import Header from '@/components/Header'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { IncidentCardList } from '@/components/incident-card-list'
import { mockIncidents } from '@/data/mock-incidents'

function App() {
  return (
    // <div className="min-h-screen bg-background">
    //   <Header />
    //   <main className="container mx-auto p-4">
        
        
    //   </main>
    // </div>

    <SidebarProvider>
      <AppSidebar />
      <main className='w-full'>
        <SidebarTrigger />
        <div className='w-full flex flex-col gap-1'>
          <Header />
          {/* main container below the header */}
          <div className="container mx-auto p-4 flex justify-start flex-row">
            {/* 40% of the main container is the cards list */}
            <div className=" p-4 max-w-[40%]">
              <IncidentCardList
                incidents={mockIncidents}
                onCardClick={(incident) => console.log('Clicked incident:', incident)}
              />
            </div>
            {/* the rest 60% is the maps and the resources. */}
          <div>    

          </div>
          </div>
        </div>
      </main>
    </SidebarProvider>
    
  )
}

export default App
